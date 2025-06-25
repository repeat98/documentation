# Erkenntnisse aus Usability Test mit Carsten

## Teilnehmer-Profil
- **Name:** Carsten
- **DJ-Erfahrung:** 3-4 Jahre aktiv, semi-professionell
- **Aktuelle Tools:** Rekordbox, Apple Dateimanager
- **Organisationsstil:** Genre-basiert mit eigenen Kategorien, zusätzlich Mood-Ordner
- **Besonderheit:** Nutzt Hot-Cue-Sets (einziger Teilnehmer bisher)

## Positive Erkenntnisse

### Navigation und Interface-Verständnis
- **Intuitive obere Navigation:** Carsten fand die Navigation zwischen Collection, Map etc. sofort verständlich
- **Vergleich zu professioneller Software:** Positive Assoziation mit Ableton Live's Interface-Design
- **Schnelle Orientierung:** Generell gute Orientierung in der Anwendung nach kurzer Eingewöhnungszeit

### Map-Visualisierung
- **Hohes Begeisterungslevel:** "Das ist ein krasses Programm" - sehr positive Resonanz
- **Sofortiges Verständnis des Konzepts:** Erkannte schnell, dass ähnliche Tracks clustered sind
- **Exploration funktioniert:** Nutzte die Map erfolgreich zur Musikentdeckung
- **Feste Positionen geschätzt:** Verstand und schätzte, dass Genre-Bereiche konsistent bleiben

### Empfehlungssystem
- **Sehr gute Bewertung:** "Empfehlungen passen eigentlich alle recht gut"
- **Artist-Ähnlichkeit wahrgenommen:** Bemerkte ähnliche Artists in Empfehlungen (obwohl feature-basiert)
- **Soundcloud-Vergleich:** Positive Assoziation mit Soundcloud's Radio-Feature
- **Präferenz für Empfehlungen statt Automation:** Klare Ablehnung von automatisch erstellten Playlists

### Audio-Funktionalität
- **Hover-to-Play als natürlich empfunden:** "Wenn ich ihn hören will, bleibe ich drauf. Wenn ich ihn nicht mehr hören will, gehe ich runter"
- **Waveform-Visualisierung geschätzt:** Positive Reaktion auf WaveSurfer.js Integration

### XY-Achsen Modus
- **Konzept verstanden:** Erkannte die Möglichkeit, zwei Dimensionen zu kombinieren
- **"Roter Faden" Metapher entwickelt:** Sehr wichtige Erkenntnis - Carsten sah die Möglichkeit, einen "Graph" für Set-Planung zu zeichnen
- **Set-Planung Potenzial:** "Eigentlich voll gut, wenn man so vor der Aufgabe steht, mach ein Open-Air-Set"

## Problembereiche und Verbesserungspotenzial

### Filter-Auffindbarkeit
- **Style-Filter zu versteckt:** Musste zu dem Filter-Dropdown geführt werden
- **Erwartung direkter Filter:** Suchte nach direkten Filter-Optionen neben den Eigenschaften
- **Erste Testperson mit diesem Problem:** Bestätigt systematisches Usability-Problem

### Interaktions-Design
- **Drag & Drop nicht intuitiv:** Wusste nicht, dass Tracks zu Tags gezogen werden können
- **Command+Klick erwartet:** Erwartete Multi-Select über Command (wie im Dateimanager)
- **Lasso-Select zu komplex:** Shift+Drag war nicht intuitiv - "Eigentlich sollten wir es direkt machen können"
- **Rechtsklick-Kontext nicht offensichtlich:** Erwartete Rechtsklick-Optionen, fand sie aber nicht sofort

### Technische Performance
- **Langsame Reaktionszeiten:** "Das ist echt ein bisschen langsam geworden"
- **Confidence Slider zu empfindlich:** Wollte weniger empfindlichen Regler, besonders im unteren Bereich

### XY-Mode Interaktion
- **Problematische Auswahl-Mechanik:** Doppelte Auswahl führte zu unerwarteten Ergebnissen
- **Interface-Bugs:** Mehrere technische Probleme bei der Achsen-Auswahl

## Strategische Erkenntnisse

### Hybrid-Ansatz bestätigt
- **Klare Ablehnung von Vollautomatisierung:** "Wenn das deine Playlist sortiert für dich und das dir ausspuckt, dann kannst du doch auch spielen lassen"
- **Werkzeug-Charakter gewünscht:** "Das ist der größte Teil der Arbeit und das wird dadurch viel leichter"
- **DJ-Kreativität respektieren:** Empfehlungen ja, aber finale Entscheidung beim DJ

### Organisationsverhalten
- **Mood-basierte Organisation:** Nutzt bereits ähnliche Kategorisierung wie im Tool vorgesehen
- **Situative Tags:** Erstellt Playlists für spezifische Gigs/Situationen
- **Iterativer Workflow:** Beschreibt mehrstufigen Prozess: Auswahl → Test → Refinement

### Workflow-Integration
- **Vorbereitung vs. Performance:** Tool wird hauptsächlich in Vorbereitungsphase gesehen
- **Exploration erwünscht:** "Man kann so ein bisschen entdecken" - wichtiges Feature
- **Flexibilität wichtig:** Möglichkeit zur Anpassung und Verfeinerung der Auswahl

## Empfehlungen für Iteration

### Sofortige Verbesserungen
1. **Filter-Sichtbarkeit erhöhen:** Style-Filter prominenter platzieren
2. **Drag & Drop Onboarding:** Visuelle Hinweise oder Tutorial für Interaktionen
3. **Multi-Select vereinfachen:** Command+Klick implementieren
4. **Confidence Slider anpassen:** Weniger Empfindlichkeit im unteren Bereich
5. **Performance optimieren:** Ladezeiten reduzieren

### Interface-Verbesserungen
1. **Lasso-Select vereinfachen:** Button-Aktivierung ohne zusätzliche Modifier
2. **Rechtsklick-Kontext verstärken:** Klarere visuelle Hinweise
3. **XY-Mode stabilisieren:** Bugs in Achsen-Auswahl beheben

### Konzeptuelle Verstärkung
1. **"Roter Faden" Feature:** Möglichkeit, Pfade in XY-Visualisierung zu zeichnen
2. **Situative Tag-Templates:** Vorgefertigte Tag-Kategorien für typische DJ-Situationen
3. **Workflow-Guides:** Bessere Führung durch die verschiedenen Arbeitsmodi

## Validierte Design-Entscheidungen
- Hybride Desktop-Anwendung mit Python-Backend
- Empfehlungssystem basierend auf Audio-Features
- Duale Darstellung (Liste/Map)
- Tag-basierte Organisation
- Hover-to-Play Interaktion
- XY-Achsen Konzept für Set-Planung

Der Test mit Carsten bestätigt die grundsätzliche Richtung des Tools und zeigt spezifische Verbesserungsmöglichkeiten auf, besonders in der Interaktions-Gestaltung und Filter-Auffindbarkeit. 