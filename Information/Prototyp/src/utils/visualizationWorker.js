// Web Worker for handling expensive visualization computations
// This moves PCA, HDBSCAN, and feature processing off the main thread

const NOISE_CLUSTER_ID = -1;
const PCA_N_COMPONENTS = 2;
const HDBSCAN_DEFAULT_MIN_CLUSTER_SIZE = 3;
const HDBSCAN_DEFAULT_MIN_SAMPLES = 2;

const CATEGORY_WEIGHTS = {
  'genre': 0.2,
  'style': 1,
  'spectral': 0,
  'mood': 0.1,
  'instrument': 0,
  'default': 0,
};

const SPECTRAL_KEYWORDS = [
  'atonal', 'tonal', 'dark', 'bright', 'percussive', 'smooth', 'lufs'
];

// Helper functions
function calculateDistance(vec1, vec2) {
  if (!vec1 || !vec2) return Infinity;
  if (vec1.length !== vec2.length) return Infinity;
  let sumOfSquares = 0;
  for (let i = 0; i < vec1.length; i++) {
    const val1 = vec1[i] || 0;
    const val2 = vec2[i] || 0;
    const diff = val1 - val2;
    sumOfSquares += diff * diff;
  }
  return Math.sqrt(sumOfSquares);
}

function getAllFeatureKeysAndCategories(tracks) {
  const featuresWithCategories = new Map();
  const determineFinalCategory = (keyName, sourceCategory) => {
    const lowerKeyName = keyName.toLowerCase();
    if (SPECTRAL_KEYWORDS.includes(lowerKeyName)) return 'spectral';
    if (sourceCategory === 'mood') return 'mood';
    return sourceCategory;
  };

  const processFeatureSource = (featureObj, sourceCategory, trackId) => {
    if (!featureObj) return;
    try {
      const parsed = typeof featureObj === 'string' ? JSON.parse(featureObj) : featureObj;
      if (typeof parsed === 'object' && parsed !== null) {
        Object.keys(parsed).forEach(key => {
          const existingCategory = featuresWithCategories.get(key);
          const finalCategory = determineFinalCategory(key, sourceCategory);
          if (!existingCategory || 
              (existingCategory !== 'spectral' && finalCategory === 'spectral') || 
              (existingCategory !== 'spectral' && existingCategory !== 'mood' && finalCategory === 'mood')) {
             featuresWithCategories.set(key, finalCategory);
          } else if (!existingCategory) {
             featuresWithCategories.set(key, finalCategory);
          }
        });
      }
    } catch (e) {
      // Silent catch for worker
    }
  };

  tracks.forEach(track => {
    if (!track || !track.id) return;
    processFeatureSource(track.style_features, 'style', track.id);
    processFeatureSource(track.instrument_features, 'instrument', track.id);
    processFeatureSource(track.mood_features, 'mood', track.id);
  });

  SPECTRAL_KEYWORDS.forEach(key => featuresWithCategories.set(key, 'spectral'));

  return Array.from(featuresWithCategories.entries())
    .map(([name, category]) => ({ name, category }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function mergeFeatureVectors(track, allFeatureNames) {
  const mergedFeatures = {};
  allFeatureNames.forEach(key => {
    mergedFeatures[key] = 0;
  });

  const parseAndMerge = (featureObj, category) => {
    if (!featureObj) return;
    try {
      const parsed = typeof featureObj === 'string' ? JSON.parse(featureObj) : featureObj;
      if (typeof parsed === 'object' && parsed !== null) {
        Object.entries(parsed).forEach(([key, value]) => {
          if (allFeatureNames.includes(key)) {
            const num = parseFloat(value);
            if (!isNaN(num)) mergedFeatures[key] = num;
          }
        });
      }
    } catch (e) {
      // Silent catch for worker
    }
  };

  parseAndMerge(track.style_features, 'style');
  parseAndMerge(track.instrument_features, 'instrument');
  parseAndMerge(track.mood_features, 'mood');

  SPECTRAL_KEYWORDS.forEach(key => {
    const value = track[key];
    if (typeof value === 'number' && !isNaN(value)) {
      mergedFeatures[key] = value;
    }
  });

  return allFeatureNames.map(key => mergedFeatures[key]);
}

function normalizeFeatures(featureVectors, featureCategories) {
  if (!featureVectors || featureVectors.length === 0) return [];
  const numSamples = featureVectors.length;
  const numFeatures = featureVectors[0]?.length || 0;
  if (numFeatures === 0) return featureVectors.map(() => []);

  let categories = featureCategories;
  if (categories.length !== numFeatures) {
    categories = Array(numFeatures).fill('default');
  }

  const medians = new Array(numFeatures).fill(0);
  const madValues = new Array(numFeatures).fill(0);

  for (let j = 0; j < numFeatures; j++) {
    const values = featureVectors.map(v => v[j] || 0).sort((a, b) => a - b);
    medians[j] = values[Math.floor(values.length / 2)];
  }

  for (let j = 0; j < numFeatures; j++) {
    const deviations = featureVectors.map(v => Math.abs((v[j] || 0) - medians[j]));
    madValues[j] = deviations.sort((a, b) => a - b)[Math.floor(deviations.length / 2)] * 1.4826;
  }

  return featureVectors.map(vector =>
    vector.map((value, j) => {
      const mad = madValues[j];
      const median = medians[j];
      const normalizedValue = (mad < 1e-10) ? 0 : ((value || 0) - median) / mad;
      
      const category = (j < categories.length && categories[j]) ? categories[j] : 'default';
      const weight = CATEGORY_WEIGHTS[category] || CATEGORY_WEIGHTS['default'];
      
      const sigmoid = (x) => 2 / (1 + Math.exp(-x)) - 1;
      return sigmoid(normalizedValue * weight);
    })
  );
}

function pca(processedData, nComponents = PCA_N_COMPONENTS) {
  if (!processedData || processedData.length === 0) return [];
  const numSamples = processedData.length;
  let numFeatures = processedData[0]?.length || 0;

  if (numFeatures === 0) return processedData.map(() => Array(nComponents).fill(0.5));
  nComponents = Math.min(nComponents, numFeatures > 0 ? numFeatures : nComponents);
  if (nComponents <= 0) return processedData.map(() => []);
  if (numSamples <= 1) return processedData.map(() => Array(nComponents).fill(0.5));

  const means = processedData[0].map((_, colIndex) => 
    processedData.reduce((sum, row) => sum + (row[colIndex] || 0), 0) / numSamples
  );
  const centeredData = processedData.map(row => 
    row.map((val, colIndex) => (val || 0) - means[colIndex])
  );

  const covarianceMatrix = Array(numFeatures).fill(0).map(() => Array(numFeatures).fill(0));
  for (let i = 0; i < numFeatures; i++) {
    for (let j = i; j < numFeatures; j++) {
      let sum = 0;
      for (let k = 0; k < numSamples; k++) {
        sum += centeredData[k][i] * centeredData[k][j];
      }
      covarianceMatrix[i][j] = sum / (numSamples - 1);
      if (i !== j) covarianceMatrix[j][i] = covarianceMatrix[i][j];
    }
  }

  const powerIteration = (matrix, numIterations = 50) => {
    const n = matrix.length;
    if (n === 0 || !matrix[0] || matrix[0].length === 0) return [];
    
    let vector = Array(n).fill(0).map(() => Math.random() - 0.5);
    let norm = Math.sqrt(vector.reduce((s, v) => s + v * v, 0));
    if (norm < 1e-10) vector = Array(n).fill(0);
    else vector = vector.map(v => v / norm);
    
    if (vector.every(v => v === 0) && n > 0) vector[0] = 1;

    for (let iter = 0; iter < numIterations; iter++) {
      let newVector = Array(n).fill(0);
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          newVector[r] += (matrix[r]?.[c] || 0) * vector[c];
        }
      }
      
      norm = Math.sqrt(newVector.reduce((s, val) => s + val * val, 0));
      if (norm < 1e-10) return Array(n).fill(0);
      
      vector = newVector.map(val => val / norm);
    }
    
    return vector;
  };

  const principalComponents = [];
  let tempCovarianceMatrix = covarianceMatrix.map(row => [...row]);

  for (let k = 0; k < nComponents; k++) {
    const pc = powerIteration(tempCovarianceMatrix);
    if (pc.length === 0 || pc.every(v => v === 0)) {
      const fallbackPc = Array(numFeatures).fill(0);
      if (k < numFeatures) fallbackPc[k] = 1;
      principalComponents.push(fallbackPc);
      continue;
    }
    
    principalComponents.push(pc);

    if (k < nComponents - 1 && pc.length > 0) {
      const lambda = pc.reduce((sum, val, i) => 
        sum + val * tempCovarianceMatrix[i].reduce((s, v, j) => s + v * pc[j], 0), 0
      );
      
      for (let i = 0; i < numFeatures; i++) {
        for (let j = 0; j < numFeatures; j++) {
          tempCovarianceMatrix[i][j] -= lambda * pc[i] * pc[j];
        }
      }
    }
  }

  const projected = centeredData.map(row =>
    principalComponents.map(pcVector => {
      if (pcVector.length !== row.length) return 0;
      return row.reduce((sum, val, i) => sum + val * (pcVector[i] || 0), 0);
    })
  );

  const minMax = Array(nComponents).fill(null).map((_, i) => ({
    min: Math.min(...projected.map(p => p[i])),
    max: Math.max(...projected.map(p => p[i])),
  }));

  return projected.map(p => p.map((val, i) => {
    if (i >= minMax.length || minMax[i] === null) return 0.5;
    const range = minMax[i].max - minMax[i].min;
    if (range < 1e-10) return 0.5;
    return (val - minMax[i].min) / range;
  }));
}

function hdbscan(data, minClusterSize = HDBSCAN_DEFAULT_MIN_CLUSTER_SIZE) {
  if (!data || data.length === 0) return [];
  const n = data.length;
  
  const adaptiveMinClusterSize = Math.max(2, Math.min(minClusterSize, Math.floor(n * 0.05)));
  if (n < adaptiveMinClusterSize) return Array(n).fill(NOISE_CLUSTER_ID);

  // Simplified clustering for performance
  const distances = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      distances.push({
        i, j,
        dist: calculateDistance(data[i], data[j])
      });
    }
  }
  
  distances.sort((a, b) => a.dist - b.dist);
  
  const parent = Array(n).fill(0).map((_, i) => i);
  const size = Array(n).fill(1);
  
  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  
  function union(x, y) {
    const px = find(x), py = find(y);
    if (px === py) return false;
    if (size[px] < size[py]) [px, py] = [py, px];
    parent[py] = px;
    size[px] += size[py];
    return true;
  }
  
  // Connect nearby points
  const threshold = distances[Math.floor(distances.length * 0.1)]?.dist || 1;
  for (const {i, j, dist} of distances) {
    if (dist <= threshold) union(i, j);
  }
  
  const clusters = new Map();
  let clusterId = 0;
  
  return Array(n).fill(0).map((_, i) => {
    const root = find(i);
    if (size[root] >= adaptiveMinClusterSize) {
      if (!clusters.has(root)) clusters.set(root, clusterId++);
      return clusters.get(root);
    }
    return NOISE_CLUSTER_ID;
  });
}

// Main processing function
function processVisualizationData(tracks, svgDimensions) {
  const PADDING = 50;
  
  const keysWithCats = getAllFeatureKeysAndCategories(tracks);
  const featureNames = keysWithCats.map(kc => kc.name);
  const featureCats = keysWithCats.map(kc => kc.category);

  const parsedTracks = tracks.map(track => {
    if (!track || typeof track !== 'object' || !track.id) return null;
    try {
      const featureVector = mergeFeatureVectors(track, featureNames);
      return { ...track, featureVector };
    } catch (e) { 
      return null; 
    }
  }).filter(Boolean);

  if (parsedTracks.length === 0) {
    return {
      plotData: [],
      featureMetadata: { names: [], categories: [] },
      error: 'No valid tracks for processing'
    };
  }

  const featureVectors = parsedTracks.map(t => t.featureVector);
  const processedFeatureData = normalizeFeatures(featureVectors, featureCats);
  const clusterLabels = hdbscan(processedFeatureData);
  const projectedData = pca(processedFeatureData);

  const plotData = parsedTracks.map((track, index) => {
    const p_coords = (projectedData && index < projectedData.length && projectedData[index]?.length === PCA_N_COMPONENTS)
              ? projectedData[index] : [0.5, 0.5];
    return {
      ...track,
      originalX: p_coords[0],
      originalY: p_coords[1],
      x: PADDING + p_coords[0] * (svgDimensions.width - 2 * PADDING),
      y: PADDING + p_coords[1] * (svgDimensions.height - 2 * PADDING),
      cluster: clusterLabels[index] ?? NOISE_CLUSTER_ID,
    };
  });

  return {
    plotData,
    featureMetadata: { names: featureNames, categories: featureCats },
    error: null
  };
}

// Worker message handler
self.onmessage = function(e) {
  const { tracks, svgDimensions, requestId } = e.data;
  
  try {
    const result = processVisualizationData(tracks, svgDimensions);
    self.postMessage({
      requestId,
      ...result
    });
  } catch (error) {
    self.postMessage({
      requestId,
      plotData: [],
      featureMetadata: { names: [], categories: [] },
      error: error.message || 'Unknown error in worker'
    });
  }
}; 