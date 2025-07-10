# Quellenverzeichnis

## Primärquellen

### Experteninterviews

**Pino Peña** (29 Jahre, fortgeschrittener DJ)  
Interview durchgeführt am 15.03.2024, Dauer: 75 Minuten  
14 Jahre DJ-Erfahrung, vielseitiger Stil von Techno bis Jazz/Hip-Hop/Reggae  
Auftrittskontexte: Clubs, private Events, Radio  
Software: iTunes + Rekordbox Export  
*Transkription verfügbar im Projektarchiv*

**DJ Danik** (Event-DJ, semi-professionell)  
Interview durchgeführt am 18.03.2024, Dauer: 60 Minuten  
Hauptberuflich Speditionskaufmann, nebenbei DJ für Hochzeiten und Events  
Schwerpunkt: Discofox, Malle-Musik, 90er-Hits, gelegentlich elektronische Musik  
Software: Virtual DJ mit jahrzehnten-basierter Organisation  
*Transkription verfügbar im Projektarchiv*

**Concussion** (23 Jahre, semi-professioneller DJ)  
Interview durchgeführt am 22.03.2024, Dauer: 68 Minuten  
4-5 Jahre DJ-Erfahrung, 9-10 Jahre Produzent  
Spezialisierung: klassischer Techno und Schranz  
Software: Rekordbox mit Artist-basierter Organisation  
*Transkription verfügbar im Projektarchiv*

**Townes** (24 Jahre, Vinyl-DJ)  
Interview durchgeführt am 25.03.2024, Dauer: 85 Minuten  
7 Jahre Erfahrung (5 Jahre Vinyl-Only, 2 Jahre Hybrid)  
Schwerpunkt: hypnotic Techno mit House/Ambient/Breaks-Einflüssen  
Plattform: Ausschließlich Vinyl über Discogs  
*Transkription verfügbar im Projektarchiv*

**Polygonia** (29 Jahre, professionelle DJ)  
Interview durchgeführt am 28.03.2024, Dauer: 90 Minuten  
7 Jahre Erfahrung, lebt von DJ- und Produktionstätigkeit  
Auftrittskontexte: Clubs und Festivals  
Musikstil: Techno, House, Breakbeat, Bassmusik, psychedelische Elemente  
Software: Rekordbox mit umfangreichem Tagging-System  
*Transkription verfügbar im Projektarchiv*

**Toobris** (24 Jahre, Club-DJ)  
Interview durchgeführt am 01.04.2024, Dauer: 55 Minuten  
7 Jahre Erfahrung, hauptsächlich Club-Auftritte  
Schwerpunkt: Techno mit starkem Groove  
Software: Rekordbox mit detailliertem Tag-System für Mood und Genre  
*Transkription verfügbar im Projektarchiv*

### Usability-Tests

**Steve** (28 Jahre, Hobby-DJ)  
Usability-Test durchgeführt am 10.05.2024, Dauer: 120 Minuten  
MVP-Prototyp-Test mit Think-Aloud-Protokoll  
*Erkenntnisse dokumentiert in separater Datei*

**Carsten**  
Usability-Test durchgeführt am 12.05.2024, Dauer: 60 Minuten  
MVP-Prototyp-Test mit Think-Aloud-Protokoll  
*Transkription und Erkenntnisse verfügbar*

**Lisa Friedrich**  
Usability-Test durchgeführt am 14.05.2024, Dauer: 50 Minuten  
MVP-Prototyp-Test mit Think-Aloud-Protokoll, Beginner-Perspektive (3 Monate DJ-Erfahrung)  
*Transkription und Erkenntnisse verfügbar*

## Competitive Analysis

### DJ-Performance-Software

**Pioneer DJ Rekordbox** Version 6.7.1  
Analyse durchgeführt im April 2024  
Schwerpunkt: Library-Management, Hardware-Integration, Export-Funktionen  
Offizielle Website: https://rekordbox.com

**Serato DJ Pro** Version 3.0.10  
Feature-Analyse April 2024  
Schwerpunkt: Performance-Features, Tagging-System, Workflow-Integration  
Offizielle Website: https://serato.com

**Native Instruments Traktor Pro** Version 3.8.0  
Interface-Evaluation April 2024  
Schwerpunkt: Advanced Features, Remix-Funktionen, Workflow-Patterns  
Offizielle Website: https://traktor.com

**VirtualDJ** Version 2024  
Funktionsumfang-Assessment April 2024  
Schwerpunkt: Event-DJ-Features, Automatisierung, User Interface  
Offizielle Website: https://virtualdj.com

**Beatport DJ**  
Web-basierte Lösung, analysiert April 2024  
Schwerpunkt: Streaming-Integration, Cloud-Features  
Offizielle Website: https://beatport.com

### Musikverwaltungs-Tools

**MP3Tag** Version 3.18  
Metadaten-Editor für Batch-Processing  
Schwerpunkt: ID3-Tag-Management, Automatisierung  
Offizielle Website: https://mp3tag.de

**MediaMonkey** Version 5.0  
Umfassende Musikbibliotheks-Verwaltung  
Schwerpunkt: Große Sammlungen, Duplikatserkennung  
Offizielle Website: https://mediamonkey.com

**Lexicon**  
DJ-spezifische Library-Management-Software  
Schwerpunkt: Cross-Platform-Synchronisation zwischen DJ-Software  
Offizielle Website: https://lexicondj.com

**Mixed In Key** Version 10.5  
AI-Feature-Analyse April 2024  
Schwerpunkt: Harmonic Mixing, AI-basierte Genre-Detection  
Offizielle Website: https://mixedinkey.com

### Direkter Competitor

**DJOID**  
AI-gestützte DJ-Software mit Graph-Visualisierung  
Beta-Version analysiert im März 2024  
Schwerpunkt: AI-basierte Musikanalyse, automatische Set-Planung  
Offizielle Website: https://djoid.com  
*Detaillierte Competitor-Analyse in separatem Dokument*

## Technische Frameworks und APIs

### Audio-Analyse Frameworks

**Essentia** Version 2.1-beta6  
Open-Source-Framework für Audio-Feature-Extraktion  
Entwickelt von Music Technology Group (MTG), Universitat Pompeu Fabra  
GitHub: https://github.com/MTG/essentia  
Dokumentation: https://essentia.upf.edu

**Discogs-EffNet Modell**  
EfficientNet-Architektur, trainiert auf Discogs-Datensatz  
400+ Genre-Kategorien, spezialisiert auf elektronische Musik  
Basis für Genre-Klassifikation im entwickelten System

**MTG-Jamendo-Modell**  
Instrument-Recognition-Modell der Music Technology Group  
Trainiert auf Jamendo-Datensatz für Instrumentenerkennung  
Verwendung für Drums, Bass, Synths, Vocals Detection

### Entwicklungsframeworks

**React** Version 18.2.0  
JavaScript-Framework für Frontend-Entwicklung  
Offizielle Website: https://react.dev  
Komponenten-basierte Architektur für komplexe DJ-Interfaces

**Electron** Version 25.3.0  
Cross-Platform Desktop-Anwendungsentwicklung  
Offizielle Website: https://electronjs.org  
Ermöglicht native OS-Integration für Dateisystem-Zugriff

**Python** Version 3.11  
Backend-Sprache für Audio-Analyse und Datenbankmanagement  
Offizielle Website: https://python.org  
Integration mit Essentia für Audio-Feature-Extraktion

### Datenbanken und APIs

**MusicBrainz API**  
Open Music Encyclopedia für Metadaten-Anreicherung  
API-Dokumentation: https://musicbrainz.org/doc/MusicBrainz_API  
Verwendung für Label-Hierarchien und Artist-Informationen

**SQLite** Version 3.42  
Lokale Datenbank für Metadaten-Speicherung  
Offizielle Website: https://sqlite.org  
JSON-BLOB-Unterstützung für komplexe Feature-Arrays

**Discogs API**  
Musik-Datenbank für Vinyl-Releases und Label-Informationen  
API-Dokumentation: https://discogs.com/developers  
Referenz für Vinyl-DJ-Workflows und Label-Clustering


## Sonstige Materialien

### Musik-Plattformen (Research-Kontext)

**Bandcamp**  
Indie-Musik-Plattform für DJ-Discovery-Workflows  
Referenz für Metadaten-Qualität und Künstler-Information

**Beatport**  
Electronic Music Store für DJ-Musik  
Referenz für Genre-Kategorisierung und DJ-Charts

**SoundCloud**  
Audio-Streaming-Plattform  
Referenz für Promo-Tracks und Musik-Discovery

### Hardware-Referenzen

**Pioneer DJ CDJ-Serie**  
Club-Standard-Hardware für USB-Export-Kompatibilität  
Referenz für Export-Format-Anforderungen

**Native Instruments Traktor Kontrol**  
DJ-Controller-Hardware  
Referenz für Hardware-Integration-Standards

---

*Alle Internetquellen wurden zuletzt am 15.12.2024 abgerufen und überprüft.*  
*Transkriptionen der Interviews und detaillierte Usability-Test-Erkenntnisse sind im Projektarchiv verfügbar.* 