# 06 Visual Design

## Dark Theme für professionelle DJ-Umgebung

### Designphilosophie

Das Interface basiert auf einem konsequenten Dark Theme, orientiert an professionellen DJ-Arbeitsumgebungen. Clubs und Studios arbeiten bei gedämpftem Licht, DJ-Hardware nutzt dunkle Oberflächen für Augenkomfort.

**Primäre Farbpalette**  
Schwarz-graue Hintergründe reduzieren Augenbelastung während langer Organisationssessions und schaffen einen professionellen Arbeitskontext. Die Farbwahl folgt etablierten Standards der DJ-Industrie.

**Background Colors**
- **Haupthintergrund**: #1A1A1A (Reduziert Augenbelastung)
- **Panel-Hintergrund**: #2D2D2D (Sidebar und Dialoge)  
- **Card-Hintergrund**: #333333 (Track-Container)
- **Border-Farbe**: #4A4A4A (Trennlinien und Rahmen)

**Primary Color: Orange (#FE6C40)**  
Orange als Hauptakzentfarbe für interaktive Elemente, aktive Zustände und wichtige Aktionen. Hohe Sichtbarkeit gegen dunkle Hintergründe, energetische Wirkung passend zur DJ-Kultur.

**Text Colors**
- **Primärtext**: #FFFFFF (Maximaler Kontrast)
- **Sekundärtext**: #E4E4E4 (Metadaten, Labels)
- **Inactive Text**: #999999 (Deaktivierte Elemente)
- **Error Text**: #FF4444 (Fehlermeldungen)



## Typografie

### Geist als charakteristische Schriftfamilie

**Primäre Schriftfamilie**  
Geist von Vercel als moderne, technische Schriftfamilie für das gesamte Interface. Die geometrische Sans-Serif bietet hohe Lesbarkeit bei verschiedenen Schriftgrößen und verleiht dem Tool einen zeitgemäßen, professionellen Charakter.

**Typographische Hierarchie**  
Klare Größenabstufungen optimiert für DJ-Workflows:
- **Hauptüberschriften**: 24px, Medium Weight für Bereichstitel
- **Track-Titel**: 16px, Regular Weight für primäre Identifikation  
- **Künstlernamen**: 14px, Regular Weight für sekundäre Information
- **Metadaten**: 12px, Regular Weight für BPM, Key, Genre
- **UI-Labels**: 11px, Medium Weight für Interface-Elemente

**Lesbarkeits-Optimierung**  
Hohe Kontrastverhältnisse erfüllen WCAG 2.1 Standards. Weiße Texte (#FFFFFF) auf dunklen Hintergründen für Augenkomfort bei längeren Sessions. Zeilenhöhen angepasst für schnelle Informationsaufnahme.

### Funktionale Typografie für Live-Umgebungen

**Performance-optimierte Darstellung**  
Größere Schriftgrößen für kritische Informationen wie Track-Titel und BPM-Werte. Reduzierte Informationsdichte verhindert kognitive Überlastung während stressiger Live-Situationen.

**Accessibility-Features**  
Skalierbare Schriftgrößen für verschiedene Bildschirmauflösungen. Hover-States vergrößern Metadaten temporär. Keyboard-Navigation mit visuellen Fokus-Indikatoren.

## Icons

### Minimalistische Icon-Sprache

**Design-Prinzipien**  
Reduzierte, geometrische Formen für schnelle Erkennung. Konsistente Strichstärke von 2px. Quadratisches Grid-System für einheitliche Proportionen.

**Primäre Navigation-Icons**
- **Library**: Ordner-Symbol mit Schallwellen
- **Crates**: Gestapelte Container-Metapher
- **Tags**: Etikett-Symbol mit #-Zeichen
- **Map**: Landkarten-Pins für räumliche Navigation
- **Search**: Klassische Lupe, vergrößert bei Hover

**Playback-Controls**
- **Play**: Dreieck-Symbol, wird zu Pause-Balken
- **Stop**: Quadrat-Symbol für kompletten Stopp
- **Skip**: Doppelter Pfeil für Track-Navigation
- **Shuffle**: Gekreuzte Pfeile für Zufallsmodus
- **Repeat**: Kreisförmiger Pfeil für Loop-Modus

**Feature-spezifische Icons**
- **AI-Analysis**: Neuronales Netzwerk-Symbol
- **Similarity**: Verbundene Kreise
- **Filter**: Trichter-Symbol mit Einstellungen
- **Export**: Pfeil nach außen mit USB-Symbol
- **Settings**: Zahnrad für Konfiguration

## Komponenten

### Atoms

**Grundlegende UI-Elemente**  
Atoms bilden die kleinsten funktionalen Einheiten des Design-Systems. Jedes Atom ist eigenständig verwendbar und wiederverwendbar.

**Buttons**
- **Primary Button**: Orange (#FE6C40), 32px Höhe, Medium Weight Text
- **Secondary Button**: Transparent mit Orange Border, 32px Höhe
- **Icon Button**: 24x24px, nur Icon ohne Text
- **Play Button**: Dreieck-Icon, wird zu Pause bei Aktivierung

**Input Fields**
- **Search Input**: 40px Höhe, Placeholder Text, Lupe-Icon rechts
- **Range Slider**: Dual-Handle für BPM/Energy-Bereiche
- **Checkbox**: 16x16px, Orange Akzent bei Aktivierung
- **Dropdown**: Pfeil-Icon, max-height für Optionen-Liste

**Labels & Tags**
- **Genre Tags**: Farbkodierte Chips, 24px Höhe, abgerundete Ecken
- **Text Labels**: 11px UI-Schrift, verschiedene Graustufen
- **Status Indicators**: Farbkodierte Punkte (8px) für Sync-Status

**Visual Elements**
- **Track Points**: 8px Kreise für Map-Darstellung, Hover auf 12px
- **Waveform**: SVG-basierte Darstellung, skalierbar
- **Album Cover**: 48x48px (Liste), 120x120px (Grid)

### Molecules

**Kombinierte Funktionseinheiten**  
Molecules verbinden Atoms zu funktionalen Gruppen mit spezifischem Zweck.

**Track**
- Kombination: Album Cover + Track Info + Metadaten + Tags + Actions
- **Compact Mode**: 48x48px Cover, einspaltig für Listen
- **Extended Mode**: 120x120px Cover, mehrspaltig für Grid
- **Interactive States**: Default, Hover, Selected, Playing, Drag

**Search Bar**
- Kombination: Search Input + Filter Button + Clear Button
- Real-time Filtering, Auto-Complete Dropdown
- Keyboard Navigation mit Pfeil-Tasten

**Filter Group**
- Kombination: Section Label + Collapse Button + Filter Controls
- Genre-Filter: Multiple Checkboxes mit Color Coding
- Range-Filter: Dual-Handle Slider mit numerischen Inputs
- Quick-Filter: Vordefinierte Tag-Buttons

**Navigation Item**
- Kombination: Icon + Label + Count Badge + Expand Arrow
- **Library**: Ordner-Icon + "Library" + Track-Anzahl
- **Crates**: Container-Icon + Name + Verschachtelung
- **Smart Crates**: Automatik-Icon + Name + Sync-Status

### Organisms

**Komplexe Interface-Bereiche**  
Organisms kombinieren Molecules zu vollständigen Interface-Sektionen.

**Track List View**
- Kombination: Header + virtualisierte Track Cards + Scrollbar
- Sortierbare Spalten-Header mit Pfeil-Indikatoren
- Infinite Scrolling für 10.000+ Tracks
- Multi-Selection mit Shift+Click und Ctrl+Click

**2D Map Visualization**
- Kombination: Canvas + Navigation Controls + Mode Toggle + Tooltip
- **Point Cloud**: Alle Tracks als farbkodierte Punkte
- **Zoom Controls**: +/- Buttons, Zoom-Level Indicator
- **Lasso Tool**: Freiform-Selektion mit visueller Feedback
- **Cluster Labels**: Dynamische Genre-Bezeichnungen

**Sidebar**
- Kombination: Search Bar + Filter Groups + Clear All Button
- Kollabierbare Sektionen für Genre, Mood, BPM, Energy
- Live Preview der Ergebnisanzahl bei Filter-Änderungen
- Saved Filter Sets mit Namen und Quick-Access

**Main Navigation**
- Kombination: Logo + Navigation Items + User Actions + Collapse Toggle
- Hierarchische Crate-Struktur mit Drag & Drop
- Recently Added Section mit chronologischer Sortierung
- Settings und Export Actions am unteren Rand

## Finale Screens

### Hauptinterface - Hybrid Layout

**Three-Panel-System**  
Sidebar (280px) für Navigation, Hauptbereich für Track-Liste/Map, rechte Sidebar (320px) für Track-Details und Player.

**Responsive Breakpoints**
- **Desktop**: 1440px+ zeigt alle Panels
- **Laptop**: 1024-1439px versteckt rechte Sidebar
- **Tablet**: 768-1023px kollabiert linke Sidebar
- **Mobile**: <768px Single-Panel mit Tab-Navigation

### Track-Liste Ansicht

**Tabular Layout**  
Sortierbare Spalten für alle Metadaten. Virtuelle Scrolling für 10.000+ Tracks. Fixed Header mit Sticky-Positioning.

**Column Configuration**
- **Cover + Title**: 300px minimum, Track-Identifikation
- **Artist**: 200px, sekundäre Information
- **BPM**: 80px, rechtsbündig für Vergleichbarkeit  
- **Key**: 60px, zentriert für Harmonie-Checks
- **Duration**: 80px, MM:SS Format
- **Tags**: Flexible Breite, Chip-Darstellung
- **Actions**: 120px, Kontext-Menü und Quick-Actions

### 2D-Map Vollbild

**Immersive Exploration**  
Vollbild-Map ohne Sidebar-Ablenkung. Floating Controls für Mode-Wechsel und Filter. Minimap-Overview in der Ecke für Orientierung.

**Overlay-System**
- **Track-Tooltip**: Hover zeigt Basis-Informationen
- **Detail-Modal**: Klick öffnet vollständige Track-Ansicht
- **Batch-Actions**: Multi-Selektion aktiviert Gruppen-Operationen
- **Search-Overlay**: Cmd+F für direkte Track-Suche

### Settings & Preferences

**Kategorisierte Einstellungen**
- **Appearance**: Dark/Light Mode, Zoom-Faktoren, Farbschemas
- **Audio**: Output-Device, Crossfade-Settings, Cue-Funktionen  
- **AI**: Model-Settings, Confidence-Thresholds, Auto-Tagging
- **Import**: Default-Folders, Metadaten-Mapping, Duplikate-Handling
- **Export**: Format-Preferences, Rekordbox-Integration, USB-Struktur

Die finale Design-Sprache unterstützt effiziente DJ-Workflows durch konsistente Metaphern, reduzierte kognitive Last und optimierte Informationsarchitektur. 