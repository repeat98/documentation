# Einleitung

## Abstract

Die digitale Revolution veränderte das DJing fundamental. Wo früher physische Plattensammlungen natürliche Grenzen setzten, haben DJs heute Zugriff auf praktisch unbegrenzte Musikmengen. Diese Fülle bringt neue Möglichkeiten, schafft aber auch ein Paradoxon: Je mehr Musik verfügbar ist, desto schwieriger wird es, den Überblick zu behalten und im entscheidenden Moment den perfekten Track zu finden.

Diese Arbeit dokumentiert die Entwicklung eines AI-gestützten Tools zur Musikorganisation für DJs. Durch Interviews mit sechs DJs unterschiedlicher Genres und Erfahrungsstufen identifizierten wir ein zentrales Problem: DJs verbringen 5-10 Stunden pro Woche mit manueller Musikorganisation. Zeit, die der Kreativität fehlt. Bestehende DJ-Software fokussiert auf Live-Performance, vernachlässigt aber die kritische Vorbereitungsphase.

Unser Ansatz nutzt künstliche Intelligenz nicht als Ersatz für menschliche Kreativität, sondern als Werkzeug zur Befreiung kreativer Energie. Das entwickelte System analysiert Musikdateien automatisch, extrahiert über 400 Audio-Features und visualisiert Musiksammlungen als navigierbare 2D-Landkarten. DJs behalten dabei die volle kurative Kontrolle - das System schlägt vor, der Mensch entscheidet.

## Die unsichtbare Arbeit des DJing

Es ist 2 Uhr morgens im Tresor. Die Tanzfläche pulsiert, Schweiß tropft von der Decke, der Bass vibriert durch die Körper. Die DJ legt einen perfekten Übergang nach dem anderen hin, liest die Crowd, baut Spannung auf, lässt sie explodieren. Was das Publikum nicht sieht: Die stundenlange Vorbereitung, die diesen Moment erst möglich macht.

Die eigentliche Arbeit passiert zu Hause - das Durchhören neuer Releases, das Kategorisieren von Tracks, das Erstellen von Playlists. Die Digitalisierung verschärfte dieses Problem. Früher passten auf eine Plattentasche vielleicht 50 Scheiben. Heute tragen DJs Festplatten mit 30.000+ Tracks zum Gig. Die schiere Menge überfordert selbst erfahrene Profis.

## Wenn Technologie zum Hindernis wird

Moderne DJ-Software ist ein Wunderwerk der Technik. Rekordbox, Serato und Traktor bieten Features, von denen DJs der 90er nur träumen konnten: automatische Beatgrids, Key-Detection, nahtlose Loops. Doch all diese Innovation konzentriert sich auf den Moment der Performance. Die Organisation? Ein Stiefkind der Entwicklung.


## Der Moment der Wahrheit

Live-DJing ist Entscheidung unter Zeitdruck. Der aktuelle Track läuft aus, 30 Sekunden bleiben für den Mix. Die DJ scannt ihre Library: Passt die Energie? Stimmt das Tempo? Harmoniert die Tonart? Diese Entscheidungen fallen in Sekunden, nicht Minuten.

Schlechte Organisation manifestiert sich als Performance-Stress. Die Crowd spürt das Zögern, merkt die Unsicherheit. Was als technisches Problem beginnt, wird zum kreativen Hindernis. DJs berichten von "Library-Anxiety" - der Angst vor der eigenen, unüberschaubaren Sammlung.

## KI als kreativer Assistent

Künstliche Intelligenz in der Musik weckt gemischte Gefühle. Die Angst vor Automatisierung ist real. Unser System versteht KI anders: nicht als Ersatz, sondern als Verstärker menschlicher Fähigkeiten. Die entwickelte Lösung analysiert Tracks, extrahiert musikalische Eigenschaften, erkennt Ähnlichkeiten. Aber sie trifft keine Entscheidungen. Sie zeigt Möglichkeiten auf, sortiert vor, macht Verbindungen sichtbar. Die kreative Kontrolle bleibt beim Menschen.

## Die Reise durch diese Arbeit

Diese Dokumentation folgt dem vollständigen Entwicklungsprozess von der Problemidentifikation bis zum funktionsfähigen Prototyp:

**Kapitel 2** taucht tief in die DJ-Welt ein. Interviews offenbaren Arbeitsweisen, Frustrationen und unerfüllte Bedürfnisse. Die entwickelten Personas repräsentieren unterschiedliche DJ-Typen und begleiten als Referenz durch die gesamte Entwicklung.

**Kapitel 3** übersetzt Nutzerprobleme in Designherausforderungen. Wie kann räumliche Visualisierung große Musiksammlungen beherrschbar machen? Welche KI-Features unterstützen ohne zu bevormunden?

**Kapitel 4** präsentiert die finale Lösung: Ein Desktop-Tool, das Musiksammlungen als navigierbare 2D-Landschaften darstellt. Das adaptive MY TAGS System lernt individuelle DJ-Sprache.

**Kapitel 5** dokumentiert die iterative Entwicklung. Vom ersten MVP zur vollständigen Anwendung. Die Balance zwischen Innovation und Praxistauglichkeit.

**Kapitel 6** zeigt die visuelle Umsetzung. Dark Theme für Club-Umgebungen, reduzierte Formensprache für schnelle Erfassung, durchdachte Interaktionsmuster.

**Kapitel 7** reflektiert Erfolge und Grenzen. Was funktionierte? Wo entstanden neue Probleme? Usability-Tests lieferten wertvolle Erkenntnisse für zukünftige Iterationen.

## Ein Werkzeug von DJs für DJs

Diese Arbeit dokumentiert den Versuch, ein reales Problem mit echtem Impact zu lösen. Das Ergebnis ist ein Tool, das die Lücke zwischen Discovery und Performance schließt. Es nutzt moderne Technologie, respektiert aber gewachsene Arbeitsweisen. Es automatisiert Routine, bewahrt aber kreative Kontrolle.

Die Reise beginnt dort, wo jeder DJ startet: Bei der Musik selbst, und der ewigen Suche nach dem perfekten nächsten Track. 
## Methoden

Das Projekt folgte einem strukturierten, user-zentrierten Forschungsansatz mit verschiedenen sich ergänzenden Methoden:

**Qualitative Interviews**  
Sechs DJs unterschiedlicher Genres und Erfahrungsstufen. 45-90 Minuten strukturierte Gespräche über Arbeitsweisen, Probleme und Wünsche. Die Interviews wurden transkribiert und systematisch ausgewertet.

**Competitive Analysis**  
Untersuchung von 20+ Tools aus zwei Kategorien: DJ-Performance-Software (Rekordbox, Serato, Traktor) und Musikverwaltungs-Tools (MP3Tag, MediaMonkey, Lexicon). Feature-Matrix dokumentierte Funktionen und Lücken.

**Prototyp-Entwicklung**  
Zwei Phasen: Erst ein MVP zur Validierung der AI-Musikanalyse, dann ein High-Fidelity-Prototyp mit vollständiger 2D-Visualisierung. Python-Backend für Audio-Analyse, Electron/React für die Benutzeroberfläche.

**Usability-Testing**  
Zwei Testphasen: Zunächst Tests des MVP mit einem DJ zur Validierung der Grundkonzepte. Anschließend strukturierte Tests des erweiterten Prototyps mit zwei semi-professionellen DJs. Think-Aloud-Protokoll mit definierten Aufgaben und Screen-Recording.

## Team

Das Projekt entstand im Rahmen eines Interaction Design Masterstudiums. Die Kombination aus gestalterischer und technischer Perspektive ermöglichte sowohl innovative Konzepte als auch deren praktische Umsetzung.

Externe Unterstützung kam von den Interview-Partnern aus der DJ-Community. Ihr Feedback prägte maßgeblich die Entwicklungsrichtung.

## Projektplanung

**Woche 1-4: Research Phase**  
Problemidentifikation, Interview-Planung und -Durchführung, erste Marktanalyse

**Woche 5-6: Analyse & Synthese**  
Auswertung der Interviews, Persona-Entwicklung, detaillierte Competitive Analysis

**Woche 7-9: Konzeption**  
Lösungsansätze, technische Architektur, UI-Konzepte

**Woche 10-12: MVP-Entwicklung**  
Erster Prototyp mit Basis-Features, technische Validierung

**Woche 13-15: Vollständiger Prototyp**  
2D-Visualisierung, erweiterte Features, Interface-Design

**Woche 16-17: Testing & Iteration**  
Usability-Tests des MVP und erweiterten Prototyps, Bugfixes, finale Optimierungen

**Woche 18: Dokumentation**  
Projektdokumentation und Präsentationsvorbereitung

Die iterative Entwicklung erlaubte kontinuierliche Anpassungen basierend auf Nutzerfeedback.

## Ablaufplan

Das Projekt folgte einem strukturierten 18-Wochen-Zeitplan mit klar definierten Meilensteinen:

[Visualisierung]

**Forschungsphase (Wochen 1-6)**  
Interview-Durchführung mit sechs DJs verschiedener Erfahrungsstufen und Musikrichtungen. Parallel dazu systematische Analyse bestehender DJ-Software und Musikverwaltungstools. Diese Phase bildete das empirische Fundament für alle weiteren Entwicklungsschritte.

**Konzeptionsphase (Wochen 7-9)**  
Entwicklung der technischen Architektur und Interface-Konzepte basierend auf den Forschungserkenntnissen. Definition der AI-Pipeline für Audio-Feature-Extraktion und Ähnlichkeitsberechnung.

**Prototyping-Phase (Wochen 10-15)**  
Zweistufige Entwicklung: Zunächst ein MVP zur Validierung der AI-Musikanalyse, anschließend ein vollständiger Prototyp mit 2D-Visualisierung und kompletter Benutzeroberfläche.

**Validation & Dokumentation (Wochen 16-18)**  
Usability-Tests mit zwei semi-professionellen DJs, Iteration basierend auf Feedback und finale Dokumentationserstellung.

*[Abbildung 1.2: Projektablauf Timeline - Phasen, Meilensteine und Deliverables]*

## Tools zur Organisation

**Entwicklungsumgebung**  
React/Electron für die Frontend-Entwicklung, Python mit Essentia-Framework für Audio-Analyse, SQLite für lokale Datenhaltung. GitHub für Versionskontrolle und Kollaboration.

**Forschungstools**  
Zoom für Remote-Interviews mit automatischer Transkription, Miro für Persona-Entwicklung und User Journey Mapping, Figma für Interface-Design und Prototyping.

**Projektmanagement**  
Notion für Aufgabenverwaltung und Wissensdokumentation, Google Drive für gemeinsame Dateiverwaltung, Slack für Teamkommunikation. 