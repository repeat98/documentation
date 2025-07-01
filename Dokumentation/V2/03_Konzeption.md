# 03 Konzeption

## Kano Modell

Das Kano-Modell half bei der strategischen Feature-Priorisierung basierend auf den Interview-Erkenntnissen und Nutzererwartungen.

**Must-Have Features (Basis-Anforderungen)**  
- Automatische BPM/Key-Analyse für Mix-Kompatibilität
- Import bestehender Rekordbox/Serato-Libraries ohne Datenverlust
- Export zu gängiger DJ-Software (XML, USB-Strukturen)
- Offline-Funktionalität für lokale Musiksammlungen
- Such- und Filter-Grundfunktionen

**Performance Features (Leistungsmerkmale)**  
- Intelligente Genre-Klassifikation mit hoher Genauigkeit
- Personalisierbare Tagging-Systeme (MY TAGS)
- Batch-Verarbeitung für große Musiksammlungen
- Ähnlichkeits-basierte Track-Empfehlungen
- Drag & Drop-Organisation zwischen Crates

**Excitement Features (Begeisterungsmerkmale)**  
- 2D-Visualisierung der Musiksammlung als räumliche Landkarte
- Adaptive AI-Lernsysteme für individuelle DJ-Präferenzen
- Real-time Mood-Detection und Energy-Level-Analyse
- Automatische Set-Dramaturgie-Vorschläge
- Cross-Platform Discovery-Integration

*[Abbildung 3.1: Kano Model Mapping - Feature-Priorisierung nach Nutzertyp]*

## Feature Priorisierung

Die Priorisierung folgte den Persona-Bedürfnissen und technischer Machbarkeit:

**Phase 1: Kern-Funktionalität (MVP)**  
Basis-Audio-Analyse, einfache Ähnlichkeitsberechnung, rudimentäre Organisation. Fokus auf technische Validierung der AI-Pipeline.

**Phase 2: Enhanced Organisation**  
MY TAGS System, verbesserte Visualisierung, erweiterte Filter. Schwerpunkt auf Nutzer-Experience und Workflow-Integration.

**Phase 3: Advanced Features**  
2D-Map-Visualisierung, adaptive Lernsysteme, Export-Integration. Vollständige Feature-Set-Implementierung.

Diese Staffelung ermöglichte iterative Entwicklung mit kontinuierlicher Nutzer-Validierung.

## Metadaten

### Objektive Metadaten

Objektive Metadaten lassen sich automatisch aus Audiodateien extrahieren und sind technisch messbar:

**Bereits in der Datei vorhandene Metadaten**  
ID3-Tags enthalten Künstlername, Titel, Album, Jahr und teilweise Genre-Angaben. Diese Grunddaten sind oft unvollständig oder inkonsistent formatiert, besonders bei Promo-Downloads oder selbst erstellten Rips.

**Technische Parameter**  
BPM (Beats per Minute) bestimmen Mix-Kompatibilität. Tonart ermöglicht harmonische Übergänge. Lautstärke-Normalisierung verhindert Sprünge in der Wiedergabe. Dateiformat und Bitrate beeinflussen Klangqualität. Track-Dauer und Sample-Rate sind weitere messbare Eigenschaften.

**Spektrale Eigenschaften**  
Frequenzverteilung charakterisiert den Klang. Bassanteil differenziert zwischen verschiedenen Genres. Höhenanteil beeinflusst Wahrnehmung von Helligkeit oder Dunkelheit. Dynamikumfang zeigt Komprimierung an. Spektrale Rolloff-Frequenz und Zero-Crossing-Rate bieten weitere Klangcharakteristika.

**Instrumentenerkennung**  
Dominante Instrumente (Drums, Bass, Synthesizer, Vocals) lassen sich durch AI-Modelle automatisch identifizieren. Unterscheidung zwischen elektronischen und akustischen Instrumenten. Percussion-Pattern und melodische Elemente werden erkannt und klassifiziert.


### Subjektive Metadaten

Subjektive Metadaten basieren auf menschlicher Wahrnehmung und sind schwer automatisierbar:

**Genre und Stil-Klassifikation**  
Musikstile (House, Techno, Ambient) sind kulturelle Konstrukte ohne eindeutige technische Definition. Subgenre-Zuordnungen (Deep House, Progressive Techno) variieren zwischen DJs und Regionen. Diese Kategorisierung ist stark subjektiv und zeitabhängig.

**Emotionale Eigenschaften und Stimmung**  
Stimmung (happy, melancholic, aggressive) beeinflusst Publikumsreaktion. Energie-Level bestimmt Position im Set. Groove-Charakter unterscheidet zwischen treibend und entspannt. Atmosphäre reicht von intim bis euphorisch. Diese Bewertungen sind stark vom Kontext und der momentanen Verfassung des DJs abhängig.


*[Abbildung 3.2: Metadaten-Kategorisierung - Objektiv vs. Subjektiv]*

## Grundlagen der KI-Musikklassifizierung

### Audio Feature Extraction

Moderne KI-Musikklassifizierung basiert auf der automatischen Extraktion von Audio-Features aus digitalen Musikdateien. Diese Features lassen sich in verschiedene Kategorien unterteilen:

**Low-Level Features**  
Spektrale Eigenschaften wie Spektralzentrum, Spektrale Rolloff-Frequenz und Mel-Frequency Cepstral Coefficients (MFCCs) beschreiben die grundlegenden akustischen Eigenschaften eines Audiosignals. Rhythmische Features wie Onset-Detektion und Beat-Tracking erfassen zeitliche Strukturen.

**Mid-Level Features**  
Harmonische Eigenschaften wie Chromas und Tonhöhenklassen-Profile erfassen melodische und harmonische Inhalte. Timbrale Eigenschaften beschreiben Klangfarben und Instrumentierung.

**High-Level Features**  
Semantische Features wie Genre, Stimmung und Instrumentenerkennung werden durch Deep Learning-Modelle aus Low- und Mid-Level-Features abgeleitet.

### Machine Learning Ansätze

**Traditionelle Machine Learning**  
Frühe Ansätze nutzten Support Vector Machines (SVM) und Random Forests auf handgefertigten Features. Diese Methoden erreichten begrenzte Genauigkeit und erforderten Domain-Expertenwissen für Feature-Engineering.

**Deep Learning Revolution**  
Convolutional Neural Networks (CNNs) lernen hierarchische Repräsentationen direkt aus Spektrogrammen. Recurrent Neural Networks (RNNs) erfassen zeitliche Abhängigkeiten in Musiksequenzen. Transformer-Architekturen ermöglichen Attention-Mechanismen für musikalische Strukturen.

**Audio-zu-Bild-Transformation**  
Ein Schlüsselkonzept moderner KI-Musikklassifizierung ist die Umwandlung von Audiosignalen in visuelle Repräsentationen. Dabei werden Tracks in 2D-"Bilder" transformiert:

*Spektrogramme:* Zeit-Frequenz-Darstellungen zeigen, welche Frequenzen zu welchen Zeitpunkten auftreten. Diese 2D-Matrizen ähneln Schwarz-Weiß-Bildern, wobei Helligkeit die Intensität verschiedener Frequenzen anzeigt.

*Mel-Spektrogramme:* Verwenden die Mel-Skala, die der menschlichen Hörwahrnehmung entspricht. Niedrige Frequenzen werden feiner aufgelöst als hohe, was musikalisch relevanter ist.

*Chromagramme:* Reduzieren das Spektrum auf 12 Tonhöhenklassen (C, C#, D, etc.) und zeigen harmonische Inhalte über die Zeit.

Diese visuellen Repräsentationen ermöglichen es, bewährte Computer Vision-Techniken auf Musik anzuwenden. CNNs, die ursprünglich für Bilderkennung entwickelt wurden, können Muster in Spektrogrammen genauso identifizieren wie Objekte in Fotos. Filter lernen musikalische "Texturen" wie Drumpatterns, Basslinien oder harmonische Progressionen zu erkennen.

**Transfer Learning**  
Vortrainierte Modelle auf großen Musikdatensets wie Million Song Dataset oder Discogs ermöglichen bessere Performance auch bei kleineren spezialisierten Datensätzen.

### Vor- und Nachteile verschiedener Ansätze

**Überwachtes Lernen (Supervised Learning)**  
*Vorteile:* Hohe Genauigkeit bei verfügbaren Labels, interpretierbare Ergebnisse, bewährte Trainingsverfahren  
*Nachteile:* Abhängigkeit von qualitativ hochwertigen Labels, begrenzte Generalisierung auf neue Genres, hoher Annotationsaufwand

**Unüberwachtes Lernen (Unsupervised Learning)**  
*Vorteile:* Entdeckung latenter Strukturen ohne Labels, Skalierbarkeit auf große Datensätze, weniger Bias durch menschliche Annotation  
*Nachteile:* Schwer interpretierbare Cluster, keine Garantie für musikalisch sinnvolle Gruppierungen, Validierung schwierig

**Multi-Task Learning**  
*Vorteile:* Gleichzeitige Vorhersage mehrerer Eigenschaften (Genre, Mood, Energie), geteilte Repräsentationen verbessern Generalisierung  
*Nachteile:* Komplexere Architektur, schwierigere Optimierung, potentielle Konflikte zwischen Tasks

**Embedding-basierte Ansätze**  
*Vorteile:* Kompakte Repräsentation komplexer musikalischer Eigenschaften, effiziente Ähnlichkeitsberechnungen, flexibel für verschiedene Downstream-Tasks  
*Nachteile:* Weniger interpretierbar als direkte Klassifikation, erfordert zusätzliche Schritte für explizite Labels

*[Abbildung 3.3: KI-Musikklassifizierung - Methodenüberblick und Entwicklung]*


### Embedding-basierte Ähnlichkeitsberechnung

Die 400+-dimensionalen Embeddings erfassen musikalische Ähnlichkeiten, die Menschen intuitiv wahrnehmen. Ähnliche Embeddings bedeuten ähnlich klingende Tracks. Das System berechnet Cosinus-Ähnlichkeit zwischen Feature-Vektoren.

**Robuste Normalisierung**  
Musiksammlungen haben natürliche Ungleichgewichte. Techno-DJs besitzen mehr Electronic Tracks, Event-DJs mehr Pop-Musik. Das System kompensiert durch adaptive Genre-Gewichtung und robuste Statistiken.

Style-Features erhalten Gewichtung 1.0 als primärer Differenzierungsfaktor. Genre-Features bekommen Gewichtung 0.2 um Dominanz einzelner Genres zu reduzieren. Mood-Features erhalten Gewichtung 0.1 als ergänzende Information.

*[Abbildung 3.4: Feature-Extraktion Pipeline - Multi-Model AI Approach]*

## Mentale Modelle der Klassifizierung

### Verschiedene Verständnisse von Genres & Subgenres

DJs denken hierarchisch über Musik. Hauptgenres (House, Techno, Hip-Hop) gliedern sich in Subgenres mit spezifischen Charakteristika.

**House-Familie**  
Deep House: Warme Bässe, entspannte Atmosphäre, 120-125 BPM  
Tech House: Treibende Percussion, minimalistische Elemente, 125-130 BPM  
Progressive House: Längere Tracks, emotionale Aufbauten, 128-132 BPM

**Techno-Spektrum**
Minimal Techno: Reduzierte Elemente, subtile Veränderungen, 128-135 BPM  
Hard Techno: Aggressive Kicks, Industrial-Einflüsse, 135-150 BPM  
Dub Techno: Halliger Sound, Detroit-Einflüsse, 120-130 BPM

**Genre-Grenzen verschwimmen**  
Moderne Musik mischt Genres häufig. "Melodic Techno" kombiniert Techno-Rhythmen mit House-Harmonien. "Future Bass" verbindet elektronische Produktion mit Hip-Hop-Strukturen.

Das System muss flexible Genre-Zuordnungen ermöglichen statt starrer Kategorien. Multi-Label-Klassifikation bildet diese Realität besser ab als Single-Label-Zuordnung.

*[Abbildung 3.5: Mentale Modelle - Räumliche vs. Hierarchische Organisation]*

### Räumliche Genre-Landschaften

Die Recherche-Erkenntnis "DJs denken räumlich über ihre Sammlungen" führte zu einem zentralen How Might We: "Wie können wir räumliche Musikerinnerung digital abbilden?"

DJs entwickeln räumliche Vorstellungen ihrer Musiksammlung. "Techno ist oben links, Deep House unten rechts" spiegelt mentale Organisationsmodelle wider. Diese Erkenntnis nutzten wir strategisch für das Interface-Design.

Spatial Memory funktioniert ähnlich wie bei physischen Plattensammlungen. DJs merken sich Positionen von Tracks relativ zueinander. Eine konsistente räumliche Anordnung ermöglicht schnelle Navigation ohne textuelle Suche.

Cluster-Bildung geschieht organisch durch AI-Features. Genre-Territorien entstehen automatisch, aber vorhersagbar. DJs können schnell zu "ihrem" Bereich navigieren und von dort aus explorieren.

*[Abbildung 3.6: How Might We - Problem zu Lösungsweg Mapping]*

## Wireframes

### Design-Iteration

Der Design-Prozess durchlief mehrere Iterationen von einfachen Skizzen zu High-Fidelity-Prototypen.

**Erste Wireframes**  
Simple Listen-Ansicht mit Filter-Optionen an der Seite. Track-Details in der Hauptansicht. Player-Controls am unteren Rand. Diese Layouts orientierten sich an bekannten Musik-Tools.

**Problem der Listen-Darstellung**  
Tests zeigten: Listen funktionieren schlecht bei großen Musikmengen. 10.000+ Tracks sind nicht scrollbar durchsuchbar. Nutzer verlieren schnell die Orientierung.

**2D-Visualisierung entwickelt**  
Die How Might We's aus der Recherche führten direkt zur 2D-Visualisierung als Lösung: "Wie können wir DJs helfen, große Musiksammlungen visuell zu erkunden?" und "Wie können wir räumliche Musikerinnerung digital abbilden?" 

Räumliche Anordnung ersetzt eindimensionale Listen. Tracks werden als Punkte auf einer Karte dargestellt. Ähnliche Musik clustert räumlich. Zoom und Pan ermöglichen Navigation. Diese Lösung nutzt die extrahierten AI-Features intelligent für intuitive Exploration.

**Hybride Lösung**  
Finale Wireframes kombinieren Listen- und Map-Ansicht. Tab-Navigation ermöglicht Wechsel zwischen Darstellungsformen. Sidebar zeigt Crates und Tags. Detailansicht öffnet bei Track-Selektion.

*[Abbildung 3.7: Wireframe Evolution - Von Listen zu 2D-Visualisierung]*

