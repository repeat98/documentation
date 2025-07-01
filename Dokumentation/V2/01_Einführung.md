# 01 Einführung

## Abstract

Dieses Projekt entwickelt ein AI-gestütztes Tool zur Musikverwaltung für DJs. Der Fokus liegt auf der zeitaufwändigen Organisation von Musikbibliotheken, die DJs täglich mehrere Stunden kostet. Durch Nutzerinterviews mit sechs DJs und eine Marktanalyse von über 20 Tools identifizierten wir eine klare Marktlücke zwischen Performance- und Organisationssoftware. Der entwickelte Prototyp kombiniert räumliche Musikvisualisierung mit intelligenter Audio-Analyse. Zwei Usability-Test-Phasen bestätigten das Kernkonzept: DJs wollen Unterstützung bei repetitiven Aufgaben, aber die kreative Kontrolle behalten.

## Projektkontext

Die Arbeit eines DJs findet größtenteils abseits der Bühne statt. Während das Publikum nur die Performance erlebt, verbringen DJs den Hauptteil ihrer Zeit mit dem Organisieren und Verwalten ihrer Musiksammlungen. Diese unsichtbare Vorarbeit entscheidet über Erfolg oder Misserfolg eines Auftritts.

Die Digitalisierung hat das DJing grundlegend verändert. Früher war eine Plattensammlung physisch begrenzt. Heute haben DJs Zugriff auf praktisch unbegrenzte Musikmengen. Was zunächst nach Freiheit klingt, wurde zum Problem: Je größer die Sammlung, desto schwieriger die Verwaltung.

Bestehende DJ-Software konzentriert sich auf Live-Performance. Rekordbox, Serato und Traktor bieten ausgefeilte Mixing-Features, vernachlässigen aber die Organisation. DJs improvisieren mit Excel-Tabellen, Ordnerstrukturen oder handgeschriebenen Notizen. Ein spezialisiertes Tool für die Vorbereitungsphase fehlt.

## DJ Workflow

Der typische DJ-Arbeitsprozess gliedert sich in fünf Phasen:

**1. Discovery/Digging**  
Musikentdeckung über SoundCloud, Beatport, Bandcamp, Spotify oder Promo-Mails. DJs durchsuchen täglich verschiedene Quellen nach neuen Tracks.

**2. Import & Analyse**  
Neue Tracks werden in die DJ-Software importiert. Automatische Analyse erfasst BPM, Tonart und generiert Wellenformen. Manuelle Nacharbeit oft nötig.

**3. Organisation**  
Der zeitaufwändigste Schritt. Tracks müssen kategorisiert, getaggt und in Playlists sortiert werden. Jeder DJ entwickelt eigene Systeme.

**4. Set-Planung**  
Vorbereitung für konkrete Auftritte. Auswahl passender Tracks basierend auf Venue, Publikum und Zeitslot.

**5. Live-Performance**  
Der eigentliche Auftritt, wo sich die Qualität der Vorbereitung zeigt.

### Prozesse während des Auflegens

Live-DJing erfordert kontinuierliche Entscheidungen unter Zeitdruck. Der aktuell spielende Track läuft aus, der nächste muss passen. DJs bewerten blitzschnell:

- Passt die Energie zum Publikum?
- Stimmt die musikalische Richtung?
- Harmonieren Tempo und Tonart?
- Wie viel Zeit bleibt für den Mix?
- Wie reagiert das Publikum auf das Gespielte?

Diese Entscheidungen fallen in Sekunden. Schlecht organisierte Musikbibliotheken verwandeln kreative Momente in stressige Suchaktionen. Ein Track, der nicht schnell gefunden wird, kann nicht gespielt werden. Die Crowd merkt das Zögern.

## Relevanz des Themas

Unsere Interviews zeigten: DJs verbringen den Großteil ihrer musikbezogenen Zeit mit Organisation. Bei Vollzeit-DJs sind das 15-20 Stunden pro Woche. Zeit, die für Kreativität fehlt.

Das Problem wächst mit der Sammlungsgröße. Hobby-DJs kämpfen mit 5.000 Tracks. Profis verwalten 50.000+. Ohne systematische Unterstützung kollabieren selbst ausgeklügelte Ordnungssysteme.

Die Fragmentierung verschärft das Problem. DJs nutzen 8-12 verschiedene Tools parallel: Musikplattformen zum Entdecken, Download-Manager, Tagging-Software, DJ-Programme. Jeder Plattformwechsel kostet Zeit und birgt Fehlerquellen.

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