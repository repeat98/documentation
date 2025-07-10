# 03 Konzeption

## Kano Modell

Nach der umfangreichen Recherche mit sechs DJ-Interviews und der Analyse bestehender Tools entstanden zahlreiche Feature-Ideen für das AI-gestützte Musikverwaltungssystem. Das Kano-Modell bot einen systematischen Rahmen, um aus dieser Fülle von Möglichkeiten die richtige Priorisierung zu entwickeln.

**Warum das Kano-Modell für DJ-Software relevant ist**  
DJs haben unterschiedliche Erwartungen an neue Tools. Manche Features sind selbstverständlich erwartet (Must-Haves), andere schaffen echten Mehrwert (Performance Features), und wenige erzeugen Begeisterung (Excitement Features). Das Kano-Modell hilft dabei, diese Kategorien zu unterscheiden und Entwicklungsressourcen strategisch zu verteilen.

**Anwendung auf DJ-Tool-Entwicklung**  
Basierend auf den Interview-Erkenntnissen und Nutzererwartungen kategorisierten wir alle potentiellen Features nach ihrer Wirkung auf die Nutzerzufriedenheit. Diese Kategorisierung wurde zur Grundlage für die MVP-Definition und die Entwicklungsphasen-Planung.

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
Basis-Audio-Analyse, einfache Ähnlichkeitsberechnung, rudimentäre Organisation. Fokus auf technische Validierung der AI-Pipeline und Machbarkeitsbeweis.

**Phase 2: Vollständige Feature-Implementierung**  
MY TAGS System, 2D-Map-Visualisierung, adaptive Lernsysteme, erweiterte Filter und Export-Integration. Schwerpunkt auf Nutzer-Experience, Workflow-Integration und vollständige Feature-Set-Umsetzung.

Diese zweiphasige Entwicklung ermöglichte iterative Entwicklung mit kontinuierlicher Nutzer-Validierung.

**Von Feature-Priorisierung zu Metadaten-Architektur**  
Die Kano-Analyse zeigte, dass alle priorisierten Features - von Basic Audio-Analyse bis hin zur 2D-Visualisierung - auf einer fundierten Metadaten-Grundlage basieren. Intelligente Genre-Klassifikation, personalisierbare Tags und ähnlichkeits-basierte Empfehlungen erfordern verschiedene Arten von Musik-Metadaten. Bevor die Features implementiert werden konnten, mussten wir verstehen: Welche Metadaten lassen sich automatisch extrahieren? Welche erfordern menschliche Interpretation? Und wie können beide Arten intelligent kombiniert werden?

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

Moderne KI-Musikklassifizierung basiert auf der automatischen Extraktion von Audio-Features aus digitalen Musikdateien. Diese Features werden in einem mehrstufigen Prozess von messbaren Eigenschaften zu semantischen Bedeutungen transformiert:

**Low-Level Features (Grundlegende Klangeigenschaften)**  
Das *Spektralzentrum* beschreibt, ob ein Track eher "hell" oder "dunkel" klingt - hohe Werte bedeuten viele Höhen (heller Klang), niedrige Werte viele Tiefen (dunkler, bassiger Klang). Die *Spektrale Rolloff-Frequenz* zeigt, ab welcher Frequenz der Sound "abfällt" - wichtig für die Unterscheidung zwischen warmen und scharfen Klangfarben.

*Mel-Frequency Cepstral Coefficients (MFCCs)* erfassen die Klangfarbe ähnlich wie das menschliche Ohr - sie unterscheiden beispielsweise zwischen dem warmen Klang einer Trompete und dem metallischen einer E-Gitarre. Rhythmische Features wie Onset-Detektion und Beat-Tracking erfassen zeitliche Strukturen und identifizieren charakteristische Drum-Patterns.

**Mid-Level Features (Musikalische Eigenschaften)**  
*Chromas* und Tonhöhenklassen-Profile erfassen harmonische Inhalte - ob ein Track in Moll (melancholisch) oder Dur (fröhlich) steht, welche Akkordprogressionen verwendet werden. Timbrale Eigenschaften unterscheiden zwischen organischen (Gitarre, Klavier) und synthetischen (Synthesizer, Drum-Machine) Klängen.

**High-Level Features (Semantische Bedeutungen)**  
Durch Deep Learning werden aus den Grundeigenschaften semantische Features wie Genre-Zugehörigkeit, emotionale Stimmung und spezifische Instrumente abgeleitet. Diese entsprechen dem, was DJs intuitiv beim Hören wahrnehmen und sind für den DJ-Workflow besonders relevant: Genre-Klassifikation ermöglicht schnelle Stilzuordnung, Mood-Detection hilft bei der Set-Dramaturgie, und Energy-Level-Analyse unterstützt beim Aufbau von Spannungsbögen. Diese semantischen Features überbrücken die Lücke zwischen technischen Messwerten und musikalischer Praxis.

**Audio-zu-Bild-Transformation**  
Ein Schlüsselkonzept moderner KI-Musikklassifizierung ist die Umwandlung von Audiosignalen in visuelle Repräsentationen. Dabei werden Tracks in 2D-"Bilder" transformiert:

*Spektrogramme:* Zeit-Frequenz-Darstellungen zeigen, welche Frequenzen zu welchen Zeitpunkten auftreten. Diese 2D-Matrizen ähneln Schwarz-Weiß-Bildern, wobei Helligkeit die Intensität verschiedener Frequenzen anzeigt.

*Mel-Spektrogramme:* Verwenden die Mel-Skala, die der menschlichen Hörwahrnehmung entspricht. Niedrige Frequenzen werden feiner aufgelöst als hohe, was musikalisch relevanter ist.

*Chromagramme:* Reduzieren das Spektrum auf 12 Tonhöhenklassen (C, C#, D, etc.) und zeigen harmonische Inhalte über die Zeit.

Diese visuellen Repräsentationen ermöglichen es, bewährte Computer Vision-Techniken auf Musik anzuwenden. CNNs, die ursprünglich für Bilderkennung entwickelt wurden, können Muster in Spektrogrammen genauso identifizieren wie Objekte in Fotos. Filter lernen musikalische "Texturen" wie Drumpatterns, Basslinien oder harmonische Progressionen zu erkennen.

**Von Features zu Embeddings**  
Alle extrahierten Features werden in hochdimensionale Vektoren (Embeddings) mit 400+ Dimensionen umgewandelt. Jede Dimension repräsentiert eine spezifische musikalische Eigenschaft. Ähnliche Tracks erhalten ähnliche Embedding-Werte - dadurch kann das System automatisch erkennen, welche Songs gut zusammenpassen.


### Embedding-basierte Ähnlichkeitsberechnung

Die 400+-dimensionalen Embeddings erfassen musikalische Ähnlichkeiten, die Menschen intuitiv wahrnehmen. Ähnliche Embeddings bedeuten ähnlich klingende Tracks. Das System berechnet Cosinus-Ähnlichkeit zwischen Feature-Vektoren.

**Robuste Normalisierung**  
Musiksammlungen haben natürliche Ungleichgewichte. Techno-DJs besitzen mehr Electronic Tracks, Event-DJs mehr Pop-Musik. Das System kompensiert durch adaptive Genre-Gewichtung und robuste Statistiken.

Style-Features erhalten Gewichtung 1.0 als primärer Differenzierungsfaktor. Genre-Features bekommen Gewichtung 0.2 um Dominanz einzelner Genres zu reduzieren. Mood-Features erhalten Gewichtung 0.1 als ergänzende Information.

### Class-Imbalance in DJ-Musiksammlungen

Die Analyse einer repräsentativen DJ-Library mit 1.346 Tracks offenbarte signifikante Ungleichgewichte in der Genre-Verteilung, die typisch für spezialisierte DJ-Sammlungen sind.

**Techno-Dominanz mit solider Ähnlichkeitsverteilung**  
Techno als dominierendes Genre (Rang #1, 1.317 Titel) zeigt eine bemerkenswert gleichmäßige Wahrscheinlichkeitsverteilung mit einem Peak um 0.85. Diese normalverteilte Kurve deutet auf eine kohärente, stilistisch konsistente Sammlung hin, bei der die AI-Modelle zuverlässige Ähnlichkeitsbewertungen liefern können.

**Electro-Problematik: Extreme Schiefe**  
Im Gegensatz dazu zeigt Electro (Rang #2, 1.160 Titel) eine stark verzerrte Verteilung mit einem massiven Peak bei sehr niedrigen Wahrscheinlichkeiten (nahe 0.0). Diese extreme Linksschiefe deutet auf problematische Genre-Überschneidungen hin - viele als "Electro" klassifizierte Tracks werden vom AI-Modell als stilistisch inkonsistent bewertet.

**Class-Balancing als Lösungsansatz**  
Diese Analyse verdeutlichte ein fundamentales Problem bei der automatischen Musikklassifikation: Während etablierte, kohärente Genres wie Techno zuverlässig organisiert werden können, leiden weniger konsistente oder überlappende Kategorien unter der dominanten Genre-Gewichtung. In den analysierten Top 10 Genres zeigt keiner eine so solide, normalverteilte Ähnlichkeitsstruktur wie Techno.

**Implementierte Lösung: Adaptive Genre-Gewichtung**  
Um diese Ungleichgewichte zu kompensieren, implementierten wir ein Class-Balancing-System, das genre-spezifische Charakteristika berücksichtigt statt nur die reine Häufigkeit eines Stils. Das System analysiert die Wahrscheinlichkeitsverteilungen jedes Genres und passt die Gewichtungen entsprechend an - Genres mit extremer Schiefe wie Electro erhalten niedrigere Gewichtungen, während kohärente Genres wie Techno ihre Gewichtung beibehalten. Dadurch werden auch weniger vertretene oder stilistisch inkonsistente Genres fair in der Ähnlichkeitsberechnung repräsentiert.

*[Abbildung 3.4: Feature-Extraktion Pipeline - Multi-Model AI Approach]*  
*[Abbildung 3.5: Class-Imbalance Analyse - Wahrscheinlichkeitsverteilungen Techno vs. Electro]*

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

### Räumliche Visualisierung als Designlösung

Das zentrale How Might We "Wie können wir DJs helfen, große Musiksammlungen visuell zu erkunden?" führte uns zu einer räumlichen Visualisierungsstrategie. Listen-Ansichten versagen bei 10.000+ Tracks, daher entwickelten wir eine 2D-Map als alternative Explorationsmethode.

Unser Interface-Design nutzt räumliche Konsistenz strategisch: "Techno ist immer oben links, Deep House immer unten rechts" schafft vorhersagbare Navigation. Diese Designentscheidung ermöglicht es DJs, räumliche Orientierung zu entwickeln - ein Konzept, das von physischen Plattensammlungen bekannt ist.

Spatial Memory kann durch konsistente Interface-Positionierung entstehen. DJs können sich Positionen von Track-Clustern relativ zueinander merken. Eine stabile räumliche Anordnung ermöglicht schnelle Navigation ohne textuelle Suche.

Cluster-Bildung geschieht organisch durch AI-Features. Genre-Territorien entstehen automatisch durch die Feature-Analyse, aber vorhersagbar durch konsistente Algorithmen. DJs können schnell zu relevanten Bereichen navigieren und von dort aus die AI-angereicherten Metadaten explorieren.

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

