# Einführung

## Abstract

DJs verwalten heute digitale Musiksammlungen mit zehntausenden Tracks. Die schiere Menge macht es schwierig, während eines Sets spontan den passenden Track zu finden. Unsere Interviews mit sechs DJs zeigten: Sie verbringen wöchentlich 5-10 Stunden mit manueller Musikorganisation. Aktuelle DJ-Software wie Rekordbox oder Serato fokussiert primär auf die Live-Performance, nicht auf effiziente Bibliotheksverwaltung.

Diese Arbeit dokumentiert die Entwicklung eines AI-gestützten Organisationstools für DJ-Musiksammlungen. Das System extrahiert automatisch über 400 Audio-Features pro Track und stellt diese als navigierbare 2D-Karte dar. DJs können ihre Sammlung visuell explorieren, behalten aber die volle Kontrolle über Organisation und Auswahl.

## Problemstellung

Digitale Musikdateien haben Vinyl und CDs als primäres DJ-Medium abgelöst. Eine Vinyl-Tasche fasste maximal 50-100 Platten. Moderne DJ-Festplatten enthalten oft 30.000+ Tracks. Diese Mengen lassen sich mit traditionellen Ordnerstrukturen und Playlists nicht mehr effizient verwalten.

Das Problem verschärft sich während der Live-Performance. DJs haben etwa 30 Sekunden, um den nächsten Track auszuwählen und zu mixen. In dieser Zeit müssen sie Tempo, Tonart und Stimmung bewerten. Bei schlecht organisierten Libraries wird diese Suche zum Stressfaktor.

## Forschungsansatz

Wir führten qualitative Interviews mit DJs verschiedener Genres und Erfahrungsstufen. Dabei identifizierten wir einen typischen fünfphasigen Workflow:

1. **Discovery**: Musikentdeckung über Streaming-Dienste, Promo-Mails, soziale Medien
2. **Import & Analyse**: Technische Verarbeitung (BPM, Key, Waveform)
3. **Organisation**: Kategorisierung, Tagging, Playlist-Erstellung
4. **Set-Planung**: Vorbereitung für spezifische Auftritte
5. **Live-Performance**: Spontane Track-Auswahl während des Sets

Die Organisationsphase benötigt die meiste Zeit, wird aber von aktueller Software kaum unterstützt.

## Lösungskonzept

Unser Tool ergänzt bestehende DJ-Software um erweiterte Organisationsfunktionen. Kernfeatures:

- **AI-Musikanalyse**: Automatische Extraktion von Genre, Mood, Instrumentierung und spektralen Eigenschaften
- **2D-Visualisierung**: Räumliche Darstellung der Musiksammlung basierend auf Ähnlichkeiten
- **MY TAGS System**: Adaptive Lernfunktion für individuelle DJ-Terminologie
- **Export-Integration**: Nahtlose Übergabe an Rekordbox, Serato etc. via M3U-Playlists

Das System automatisiert repetitive Aufgaben, überlässt kreative Entscheidungen aber dem DJ.

## Dokumentationsstruktur

**Kapitel 2: Recherche**  
Detaillierte Auswertung der DJ-Interviews, Persona-Entwicklung, Marktanalyse bestehender Tools

**Kapitel 3: Konzeption**  
Technische Architektur, Feature-Priorisierung nach Kano-Modell, Metadaten-Kategorisierung

**Kapitel 4: Finales Konzept**  
Systemarchitektur, AI-Pipeline, Interface-Design, Organisationsebenen

**Kapitel 5: Prototyping & Validierung**  
Zweiphasige Entwicklung vom MVP zum High-Fidelity-Prototyp, Usability-Tests

**Kapitel 6: Visual Design**  
Dark Theme, Typografie, Komponenten-System, finale Screens

**Kapitel 7: Evaluation & Ausblick**  
Erkenntnisse, Limitationen, mögliche Weiterentwicklung

## Projektziel

Diese Arbeit zeigt, wie AI-Technologie konkrete Workflow-Probleme von DJs lösen kann. Der entwickelte Prototyp demonstriert die Machbarkeit räumlicher Musikvisualisierung für große Sammlungen. Die Erkenntnisse sind auf andere Bereiche der Musikorganisation übertragbar.


