import json
import faiss
import numpy as np
from sklearn.decomposition import PCA
import plotly.graph_objects as go
import plotly.express as px
import sqlite3
from collections import Counter

def strip_prefix_any(tag):
    """
    Removes everything up to and including the first occurrence of '---', if present.
    """
    if tag and '---' in tag:
        return tag.split('---', 1)[1].strip()
    return tag

def load_track_paths(mapping_path):
    """
    Loads track paths from a JSON file.
    """
    try:
        with open(mapping_path, "r") as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading {mapping_path}: {e}")
        return []

def load_tags_from_db(db_path, track_paths):
    """
    Loads tags for all tracks from the database in a single query.
    Returns a list of tags corresponding to each track in track_paths.
    """
    try:
        with sqlite3.connect(db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT path, tag1 FROM classified_tracks")
            rows = cursor.fetchall()
            # Create a mapping from path to tag
            path_to_tag = {row[0]: row[1] for row in rows if row[1]}
    except Exception as e:
        print(f"Error reading from {db_path}: {e}")
        path_to_tag = {}
    
    # Assign tag for each track; default to "Unknown" if not found.
    return [path_to_tag.get(track, "Unknown") for track in track_paths]

def create_traces(embeddings_3d, track_paths, stripped_tags, tag_to_color, counts):
    """
    Creates Plotly 3D scatter traces for each unique tag.
    Uses numpy indexing for performance.
    """
    traces = []
    tags_arr = np.array(stripped_tags)
    # Iterate over tags in order of descending frequency
    for tag, count in counts.most_common():
        idxs = np.where(tags_arr == tag)[0]
        if idxs.size == 0:
            continue
        xs = embeddings_3d[idxs, 0]
        ys = embeddings_3d[idxs, 1]
        zs = embeddings_3d[idxs, 2]
        sub_paths = [track_paths[i] for i in idxs]
        trace = go.Scatter3d(
            x=xs,
            y=ys,
            z=zs,
            mode='markers',
            name=f"{tag} ({count})",
            text=sub_paths,
            hovertemplate='<b>Track:</b> %{text}<br><b>' + tag + '</b><extra></extra>',
            marker=dict(
                size=3,
                color=tag_to_color[tag],
                opacity=0.8
            )
        )
        traces.append(trace)
    return traces

def visualize_index_3d(
    index_path="vector_index.faiss", 
    mapping_path="track_paths.json", 
    db_path="../db/tracks.db",
    output_html="plot.html"
):
    """
    Loads the FAISS index and track paths, applies PCA to reduce embeddings to 3D,
    and plots them in an interactive 3D scatterplot. Colors each point by its 'top1' tag 
    (prefix removed if it contains '---'), sorted by tag frequency in the legend.
    The result is written to an HTML file for offline sharing.
    """
    # ----------------------------
    # 1. Load Index and Embeddings
    # ----------------------------
    index = faiss.read_index(index_path)
    num_embeddings = index.ntotal
    if num_embeddings == 0:
        print("Index is empty! Nothing to visualize.")
        return
    
    embeddings = index.reconstruct_n(0, num_embeddings)
    
    # -----------
    # 2. Load Paths and Tags
    # -----------
    track_paths = load_track_paths(mapping_path)
    if len(track_paths) != num_embeddings:
        print("Warning: Mismatch between index size and number of track paths.")
    
    # -----------------------------------
    # 3. PCA to 3D
    # -----------------------------------
    pca = PCA(n_components=3)
    embeddings_3d = pca.fit_transform(embeddings)
    
    # --------------------------------------------
    # 4. Retrieve and Process Tags from Database
    # --------------------------------------------
    top_tags = load_tags_from_db(db_path, track_paths)
    stripped_tags = [strip_prefix_any(tag) for tag in top_tags]
    
    # --------------------------------------------
    # 5. Sort Unique Tags by Frequency (Descending)
    # --------------------------------------------
    counts = Counter(stripped_tags)
    ordered_tags = [tag for tag, _ in counts.most_common()]
    
    # Map each tag to a color from Plotly's qualitative palette
    color_palette = px.colors.qualitative.Plotly
    tag_to_color = { tag: color_palette[i % len(color_palette)] for i, tag in enumerate(ordered_tags) }
    
    # --------------------------------
    # 6. Create Traces for Each Tag
    # --------------------------------
    traces = create_traces(embeddings_3d, track_paths, stripped_tags, tag_to_color, counts)
    
    # --------------------------
    # 7. Build & Save the Figure
    # --------------------------
    fig = go.Figure(data=traces)
    fig.update_layout(
        title="3D Visualization of the Vector Index",
        scene=dict(
            xaxis_title="PC1",
            yaxis_title="PC2",
            zaxis_title="PC3"
        ),
        margin=dict(l=0, r=0, b=0, t=50),
        legend_title_text="Styles"
    )
    
    fig.write_html(output_html, auto_open=False)
    print(f"Plot saved to '{output_html}'. You can open it in a browser or share it with others.")

# Example usage:
if __name__ == "__main__":
    visualize_index_3d()