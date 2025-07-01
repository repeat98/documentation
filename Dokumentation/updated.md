1
Inhaltsverzeichnis
2
3
01 Einführung
4
5
01 Einführung
Projektkontext und
Zielsetzung
Human Centered Design
Ansatz
6
Die vorliegende Arbeit beschäftigt sich mit der Gestaltung digitaler
Tools für DJs. Eine Berufsgruppe, deren Arbeitsalltag oft missver-
standen wird. Während die meisten Menschen DJs nur auf der
Bühne erleben, verbringen diese den Großteil ihrer Zeit mit einer
unsichtbaren Tätigkeit: dem Organisieren und Verwalten ihrer
Musiksammlungen. Diese Arbeit hinter den Kulissen entscheidet
maßgeblich über den Erfolg eines Auftritts.
Das Projekt zeigt, wie ein AI-gestütztes Interaktionskonzept für die
Musikverwaltung aussehen könnte. Der Hauptfokus liegt dabei da-
rauf, das Konzept durch einen funktionsfähigen Prototyp erfahrbar
zu machen und in Hinblick auf eine mögliche Weiterentwicklung
bewerten zu können.
Wir wollten echte Nutzerbedürfnisse verstehen, statt von techni-
schen Möglichkeiten auszugehen. Deshalb entschieden wir uns,
sehr offen in das Thema zu starten und uns Schritt für Schritt einer
detaillierten Problemstellung zu nähern.
Als ersten Schritt führten wir Interviews mit sechs DJs unter-
schiedlicher Erfahrungsstufen und Musikrichtungen. Von der Tech-
no-Produzentin bis zum Hochzeits-DJ wollten wir eine möglichst
breite Perspektive auf die täglichen Herausforderungen gewinnen.
Darauf aufbauend analysierten wir bestehende Software-Lösungen
und identifizierten konkrete Marktlücken.
Für uns persönlich bot der gestalterische Rahmen einen wertvollen
Raum, um zu erfahren, zu welchen Erkenntnissen uns der Human
Centered Design Process führen kann. Besonders spannend war
zu erleben, wie sich unsere Annahmen über die Zielgruppe durch
direkten Austausch mit echten Nutzern veränderten.
01 Einführung
Die Rolle der Musik in der
DJ-Kultur
Die digitale Transformation
Technologie als Werkzeug,
nicht als Ersatz
DJing bedeutet mehr als technisches Können. Es ist kuratorische
Arbeit, musikalische Bildung und emotionale Intelligenz. DJs sind
die unsichtbaren Gestalter unserer Musikkultur, die entscheiden,
welche Tracks gespielt, welche Künstler gefördert und welche
musikalischen Verbindungen geschaffen werden.
Die Digitalisierung hat das DJing revolutioniert, aber auch neue
Herausforderungen geschaffen. Früher war eine Schallplatten-
sammlung physisch begrenzt und damit überschaubar. Heute
können DJs auf praktisch unbegrenzte Musikmengen zugreifen,
was Chancen und Probleme gleichermaßen mit sich bringt. Die
schiere Menge an verfügbarer Musik kann überwältigend sein und
paradoxerweise die Kreativität hemmen.
Unser Ansatz versteht AI nicht als Ersatz für menschliche
Kreativität, sondern als Werkzeug zur Befreiung kreativer Energie.
Indem repetitive Organisationsaufgaben automatisiert werden,
können sich DJs auf das konzentrieren, was sie am besten kön-
nen: Musik verstehen, kontextualisieren und emotional wirksam
präsentieren.
7
01 Einführung
Methodisches Vorgehen im
Überblick
Unser Forschungsansatz folgte einem systematischen Mixed-Met-
hods-Vorgehen:
Problemverständnis entwickeln: Durch strukturierte Interviews
mit sechs DJs identifizierten wir vier Kernprobleme der Musikver-
waltung: hohen Zeitaufwand, limitierte Tagging-Prozesse, in-
konsistente Verwaltung und unzureichende Analyse emotionaler
Eigenschaften.
Nutzer verstehen: Aus den Interview-Erkenntnissen entwickelten
wir drei repräsentative Personas und mappten deren spezifische
User Journeys vom Musikentdecken bis zur Live-Performance.
Markt analysieren: Eine systematische Competitive Analysis von
über 20 Tools offenbarte eine fundamentale Marktlücke: Die Frag-
mentierung zwischen Performance-orientierten und Verwaltungs-
orientierten Lösungen.
Lösung entwickeln: Basierend auf den Erkenntnissen entwi-
ckelten wir ein hybrides System mit AI-gestützter Musikanalyse,
adaptivem Tagging und interpretierbarer 2D-Visualisierung.
Prototyp validieren: Usability-Tests mit zwei semi-professionel-
len DJs bestätigten die Kernkonzepte und identifizierten konkrete
Optimierungsbereiche.
Erkenntnisse evaluieren: Die finalen Erkenntnisse zeigen sowohl
validierte Design-Entscheidungen als auch zukünftige Entwick-
lungsrichtungen auf.
8
9
02 Problemstellung &
Nutzerbedürfnisse
10
11
02 Problemstellung & Nutzerbedürfnisse
Kernprobleme der DJ-Musikverwaltung
Herausforderungen bei der
Musikbibliotheksverwaltung
Die Digitalisierung hat das DJing revolutioniert, aber auch neue
Herausforderungen geschaffen. Während eine Schallplattensamm-
lung physisch begrenzt und damit überschaubar war, können DJs
heute auf praktisch unbegrenzte Musikmengen zugreifen. Diese
schiere Menge an verfügbarer Musik kann überwältigend sein und
paradoxerweise die Kreativität hemmen.
DJs stehen vor einem fundamentalen Dilemma: Je größer ihre
Musiksammlung wird, desto schwieriger wird es, den Überblick
zu behalten. Unsere Interviews mit sechs DJs verschiedener Er-
fahrungsstufen zeigten, dass dieses Problem alle betrifft. Vom
Hochzeits-DJ mit 10.000 Songs bis zur Techno-Produzentin, die
wöchentlich neue Tracks entdeckt.
DJ-Workflow-Analyse:
Das 5-Phasen-Modell
Unsere Forschung identifizierte einen fünfstufigen Kernworkflow,
der alle DJ-Aktivitäten umfasst und einen kontinuierlichen Kreislauf
bildet:
Phase 1: Discovery/Digging
Die Musikentdeckung steht am Anfang jeder DJ-Tätigkeit. DJs
nutzen verschiedene Quellen wie SoundCloud für kostenlose Pro-
motion-Tracks, Beatport und Bandcamp für Käufe, sowie soziale
Medien wie Instagram für Inspiration. Dieser Prozess ist stark von
persönlichen Netzwerken und kuratorischen Fähigkeiten geprägt.
Phase 2: Import & technische Analyse
Neue Tracks müssen technisch analysiert werden. BPM-Erken-
nung, Tonart-Analyse und Wellenform-Generierung erfolgen meist
automatisch durch die DJ-Software. Problematisch wird es bei der
emotionalen und kontextuellen Bewertung der Musik.
Phase 3: Library-Verwaltung & Organisation
Die Organisation der Musiksammlung erweist sich als zeitaufwän-
digste Phase. Tracks müssen kategorisiert, getaggt und in sinn-
volle Ordnungsstrukturen eingeordnet werden. Hier zeigen sich die
größten Schwächen aktueller Software-Lösungen.
12
02 Problemstellung & Nutzerbedürfnisse
Kernprobleme der DJ-Musikverwaltung
Phase 4: Set-Planung & Vorbereitung
Vor jedem Auftritt erfolgt eine mehr oder weniger detaillierte Vorbe-
reitung. Diese reicht von kompletten Setlists bis zu groben thema-
tischen Orientierungen, abhängig vom DJ-Stil und Anlass.
Phase 5: Live-Performance
Die Live-Performance ist der Moment, in dem sich die Qualität der
vorangegangenen Organisation zeigt. Spontane Entscheidungen
erfordern schnellen Zugriff auf passende Tracks aus der vorberei-
teten Sammlung.
*[Abbildung 2.2: 5-Phasen DJ-Workflow - Kreislauf-Diagramm mit
Zeitaufwand und Schmerzpunkten pro Phase]*
13
02 Problemstellung & Nutzerbedürfnisse
Kernprobleme der DJ-Musikverwaltung
Die vier systematischen
Hauptprobleme
Unsere Analyse identifizierte vier zentrale Problemkomplexe, die
sich durch alle Interviews zogen und unabhängig von Erfahrungs-
level oder Musikrichtung auftraten:
Problem 1: Hoher Zeitaufwand für manuelle Organisation
Die manuelle Organisation von Musikbibliotheken verschlingt
enorme Zeitressourcen. DJs berichten von mehreren Stunden
wöchentlichem Aufwand für das Sortieren neuer Tracks und die
Bereinigung ihrer Sammlungen. Diese Zeit fehlt für kreative Tätig-
keiten wie Set-Vorbereitung oder musikalische Weiterentwicklung.
Der Zeitaufwand steigt linear mit der Größe der Sammlung. Was
bei wenigen hundert Tracks noch händisch funktioniert, wird bei
mehreren tausend Songs zur Sisyphusarbeit.
Problem 2: Limitierte Tagging-Prozesse durch Software-Be-
schränkungen
Bestehende DJ-Software zwängt Nutzer in vordefinierte Kate-
goriesysteme, die selten zu individuellen Arbeitsweisen passen.
Rekordbox bietet beispielsweise nur begrenzte Tag-Kategorien,
während Serato zwar flexiblere Tagging-Optionen hat, aber die Be-
nutzeroberfläche dafür unzureichend gestaltet ist. DJs entwickeln
oft eigene Organisationssysteme, die jedoch nicht von der Soft-
ware unterstützt werden.
Problem 3: Inkonsistenz bei der Verwaltung ohne systemati-
sche Unterstützung
Ohne systematischen Ansatz werden Musikbibliotheken schnell
chaotisch. DJs beginnen oft mit einem Organisationssystem, das
sie aber im Laufe der Zeit nicht konsequent durchhalten können.
Neue Tracks landen in „Sammelbecken-Playlists“, alte Ordnungs-
strukturen werden nicht gepflegt. Das Problem verstärkt sich
durch verschiedene Importquellen: Bandcamp-Käufe, Promo-
Downloads, Streaming-Rips und eigene Produktionen folgen un-
terschiedlichen Namenskonventionen und Metadaten-Standards.
14
02 Problemstellung & Nutzerbedürfnisse
Kernprobleme der DJ-Musikverwaltung
Problem 4: Unzureichende Analyse emotionaler und kontextu-
eller Eigenschaften
Wichtige musikalische Eigenschaften wie Stimmung, Energielevel
oder Groove-Charakteristika werden von aktueller Software nur
oberflächlich erfasst. Diese qualitativen Aspekte sind aber ent-
scheidend für DJ-Entscheidungen, besonders bei Live-Auftritten.
Während die Software technische Parameter wie BPM und Ton-
art automatisch analysiert, bleiben emotionale und kontextuelle
Eigenschaften weitgehend unberücksichtigt.
*[Abbildung 2.3: Problemkomplexe-Matrix - Visualisierung der vier
Hauptprobleme mit Auswirkungen und Häufigkeit]*
Fragmentierung zwischen
verschiedenen Plattformen
und Tools
Die größte strukturelle Herausforderung liegt in der mangelnden
Verbindung zwischen den einzelnen Workflow-Phasen. DJs wech-
seln konstant zwischen verschiedenen Plattformen und Tools,
ohne dass diese miteinander kommunizieren.
Discovery-Tools vs. Organisation
Instagram-Posts oder Spotify-Playlists inspirieren zu neuen Tracks,
aber der Weg vom Entdecken zum organisierten Import erfordert
mehrere manuelle Schritte. Screenshots, Notizen oder Browser-
Bookmarks dienen als primitive Brücken zwischen den Systemen.
Organisation vs. Live-Performance
Selbst sorgfältig organisierte Musikbibliotheken versagen oft unter
dem Zeitdruck eines Live-Auftritts. Die Ordnungsstrukturen, die bei
ruhiger Vorbereitung sinnvoll erscheinen, erweisen sich in stressi-
gen Situationen als ungeeignet.
Fehlender Feedback-Loop
Live-Erfahrungen fließen selten zurück in die Organisationsstruktur.
Tracks, die in bestimmten Situationen gut funktionieren, werden
nicht systematisch für ähnliche Kontexte markiert.
*[Abbildung 2.4: Tool-Fragmentierung - Journey-Map mit allen ver-
wendeten Plattformen und Medienbrüchen]*
15
02 Problemstellung & Nutzerbedürfnisse
Schmerzpunkte und Pain Points
Medienwechsel als
kritischer Workflow-Unter-
brecher
Der Wechsel zwischen verschiedenen Plattformen unterbricht den
kreativen Flow und kostet wertvolle Zeit. Ein typischer DJ-Arbeits-
platz umfasst gleichzeitig geöffnet:
• DJ-Software (Rekordbox, Serato)
• Browser mit mehreren Tabs (Bandcamp, SoundCloud,
Label-Websites)
• Social Media Apps (Instagram, Twitter)
• Kommunikations-Tools (WhatsApp, E-Mail für Promo-Kon-
takte)
• File-Management (Finder/Explorer für Download-Ordner)
Jeder Wechsel zwischen diesen Tools erfordert einen mentalen
Kontextwechsel und vergrößert die Wahrscheinlichkeit, wichtige
Tracks oder Informationen zu verlieren. Ein typischer Track-Dis-
covery-Prozess durchläuft mehrere Plattformen: Instagram-Post →
Shazam/SoundHound → Streaming-Dienst zum Anhören → Online-
Store zum Kauf → Download-Ordner → DJ-Software. Jeder Schritt
bietet Verlustpotential und Frustrationsmöglichkeiten.
*[Abbildung 2.5: Medienwechsel-Diagramm - Darstellung der Tool-
Sprünge mit Zeit- und Informationsverlust]*
16
02 Problemstellung & Nutzerbedürfnisse
Schmerzpunkte und Pain Points
Manueller Tagging-Aufwand
als Zeitfresser
Das Taggen von Musik erfordert sowohl technisches Verständnis
als auch musikalische Expertise. DJs müssen für jeden Track ent-
scheiden:
• Welche Genres und Subgenres treffen zu?
• Welche Stimmung vermittelt der Track?
• In welchen Set-Kontexten funktioniert er?
• Welche BPM-Range und Tonart hat er?
• Wie ist das Energielevel einzuschätzen?
Diese Entscheidungen können nur getroffen werden, wenn der
Track vollständig gehört wurde. Ein zeitaufwändiger Prozess, der
sich bei hunderten neuen Tracks pro Monat zu einem erheblichen
Arbeitsaufwand summiert. DJs investieren 40-60% ihrer musik-
bezogenen Zeit in organisatorische Aufgaben. Bei professionellen
DJs entspricht das mehreren Stunden pro Woche, Zeit, die für
kreative Aktivitäten verloren geht.
*[Abbildung 2.6: Tagging-Zeitaufwand - Infografik zum Zeit-Invest-
ment pro Track und Hochrechnung auf verschiedene Library-Grö-
ßen]*
17
02 Problemstellung & Nutzerbedürfnisse
Schmerzpunkte und Pain Points
UI/UX-Probleme aktueller
Software-Lösungen
Bestehende DJ-Software wurde primär für die Live-Performance
entwickelt, nicht für die organisatorischen Aufgaben davor. Die Be-
nutzeroberflächen sind oft:
Zu dunkel und unübersichtlich
Mehrere DJs bemängeln, dass Rekordbox zu wenig Kontrast bie-
tet und wichtige Informationen schwer erkennbar sind.
Zu klein skaliert
Coverbilder und Waveforms sind oft so klein, dass schnelle visuel-
le Orientierung schwierig wird.
Zu langsam
Relinking-Prozesse und Datenbankabfragen dauern zu lange für
effizientes Arbeiten.
Unzureichend für verschiedene Nutzungsszenarien
Was bei detaillierter Set-Vorbereitung funktioniert, ist für schnelle
Live-Entscheidungen ungeeignet.
*[Abbildung 2.7: UI-Probleme Screenshot-Vergleich - Rekordbox
vs. optimierte Organisationsoberfläche]*
18
02 Problemstellung & Nutzerbedürfnisse
Schmerzpunkte und Pain Points
Stress bei der Live-Perfor-
mance durch ineffiziente
Tracksuche
Der kritischste Moment im DJ-Workflow: Während eines Live-
Auftritts den passenden nächsten Track zu finden. DJs berichten
regelmäßig von Situationen, in denen sie unter Zeitdruck den ge-
wünschten Song nicht schnell genug lokalisieren können.
Diese Situationen entstehen durch:
• Unzureichende Vorbereitung aufgrund zeitaufwändiger
Organisation
• Starre Playlist-Strukturen, die spontane Anpassungen
erschweren
• Langsame Such- und Filterfunktionen in der Live-Software
• Fehlende intelligente Vorschläge basierend auf dem
aktuellen Track
Der Stress solcher Momente kann die gesamte Performance be-
einträchtigen und das Vertrauen des DJs in sein System untergra-
ben. Der Übergang zwischen zwei Tracks ist der stressintensivste
Moment im DJ-Workflow, wo sich alle organisatorischen Schwä-
chen komprimiert in wenigen Sekunden zeigen.
*[Abbildung 2.8: Live-Performance Stress-Diagramm - Stresslevel-
Verlauf während eines DJ-Sets mit kritischen Momenten]*
19
02 Problemstellung & Nutzerbedürfnisse
Zielgruppendefinition
Professionelle vs. Semi-pro-
fessionelle vs. Hobby-DJs
Die Grundprobleme der Musikorganisation betreffen alle DJ-Kate-
gorien, unterscheiden sich aber in Intensität und Schwerpunkten.
Professionelle DJs haben größere Musikmengen zu verwalten
und stehen unter höherem Zeitdruck. Ihr Lebensunterhalt hängt
direkt von der Effizienz ihrer Organisationssysteme ab. Sie be-
nötigen hochentwickelte Tools, die große Datenmengen schnell
verarbeiten können.
Semi-professionelle DJs navigieren zwischen kreativen Ambi-
tionen und zeitlichen Beschränkungen. Sie wollen professionelle
Ergebnisse erzielen, haben aber begrenzte Zeit für organisatori-
sche Aufgaben. Für sie sind automatisierte Lösungen besonders
wertvoll.
Hobby-DJs haben spezifische Anforderungen je nach Einsatz-
gebiet. Event-DJs brauchen verlässliche Kategorisierung nach
Anlass und Publikum, während Hobby-DJs oft mit kleineren, aber
dennoch unübersichtlichen Sammlungen kämpfen.
*[Abbildung 2.9: DJ-Typen Matrix - Erfahrungslevel vs. Zeitinvest-
ment mit spezifischen Anforderungen]*
20
02 Problemstellung & Nutzerbedürfnisse
Zielgruppendefinition
Genre-spezifische
Anforderungen
Die DJ-Kultur umfasst verschiedene musikalische Ausrichtungen
und Auftrittskontexte:
Electronic Music DJ arbeiten mit komplexen Genre-Hybriden und
benötigen nuancierte Kategorisierung für Subgenres, Energie-Le-
vel und Mix-Kompatibilität.
Event-DJs müssen diverse Musikstile für verschiedene Zielgrup-
pen organisieren und benötigen klare Kategorien nach Anlass,
Altersgruppe und kulturellem Kontext.
Genre-übergreifende DJs kombinieren verschiedene Stile und
benötigen flexible Organisationssysteme, die musikalische Verbin-
dungen zwischen unterschiedlichen Genres erkennen können.
Performance-Kontext-
Unterschiede
Club-DJs fokussieren auf längere Sets mit dramaturgischem Auf-
bau und benötigen Tools für Energy-Management und Crowd-Re-
aktion.
Festival-DJs spielen vor größeren, heterogeneren Publikum und
brauchen breitere Musikauswahl mit flexiblen Anpassungsmög-
lichkeiten.
Event- und Hochzeits-DJs müssen vielfältige Musikwünsche
bedienen und benötigen effiziente Kategorisierung nach Anlässen,
Generationen und kulturellen Kontexten.
*[Abbildung 2.10: Performance-Kontext-Übersicht - Verschiedene
DJ-Kategorien mit Anforderungsprofilen]*
Diese Diversität zeigt, dass eine erfolgreiche Lösung verschiede-
ne Unterschiede berücksichtigen muss. Ein System für Electronic
Music DJs muss andere Prioritäten setzen als eines für Hochzeits-
DJs, trotz gemeinsamer Grundprobleme in der Musikorganisation.
21
03 User Research
22
23
03 User Research & Personas
Forschungsmethodik
Mixed-Methods-Ansatz
Für die Untersuchung der komplexen Problemstellung rund um
DJ-Workflows entschieden wir uns für einen Mixed-Methods-An-
satz, der qualitative und analytische Methoden kombiniert. Diese
Herangehensweise ermöglichte es uns, sowohl die individuellen
Nutzerbedürfnisse als auch die technischen Gegebenheiten des
Marktes umfassend zu verstehen.
Die Wahl dieser Methodik begründet sich durch die Vielschichtig-
keit der Problemstellung: DJ-Workflows sind hochgradig individuell
und von persönlichen Präferenzen geprägt, gleichzeitig existieren
objektive technische Beschränkungen bestehender Software-Lö-
sungen. Um beide Aspekte angemessen zu erfassen, kombinierten
wir explorative mit analytischen Forschungsansätzen.
*[Abbildung 3.1: Mixed-Methods-Ansatz - Übersicht der For-
schungsmethoden und deren Integration]*
Qualitative Interviews mit
DJs
Den Kern unserer Forschung bildeten strukturierte Interviews mit
praktizierenden DJs. Diese Methode wählten wir, um unverfälsch-
te Einblicke in reale Arbeitsprozesse zu gewinnen. Quantitative
Umfragen hätten zwar eine größere Stichprobe ermöglicht, jedoch
nicht die Tiefe und den Kontext geliefert, die für das Verständnis
komplexer Workflows notwendig sind.
Interviews erlaubten es uns, spontane Nachfragen zu stellen und
unerwartete Problemfelder zu identifizieren, die in vorgefertigten
Fragebögen möglicherweise übersehen worden wären. Zudem
konnten wir die emotionalen Aspekte des DJ-Workflows erfassen,
ein Faktor, der für die Gestaltung nutzerzentrierter Lösungen ent-
scheidend ist.
24
03 User Research & Personas
Forschungsmethodik
Competitive Analysis be-
stehender Lösungen
Parallel zu den qualitativen Interviews führten wir eine systemati-
sche Analyse bestehender DJ-Software durch. Diese Marktanalyse
sollte die technischen Möglichkeiten und Grenzen aktueller Lö-
sungen dokumentieren und Differenzierungspotentiale für unseren
Ansatz identifizieren.
Die Competitive Analysis fokussierte sich auf funktionale Aspek-
te und vermied subjektive Bewertungen. Durch die strukturierte
Erfassung von Features konnten wir objektiv feststellen, welche
Funktionen bereits verfügbar sind und wo konkrete Marktlücken
existieren.
Interview-Design &
Durchführung
Entwicklung des strukturierten Interview-Leitfadens
Die Erstellung des Interview-Leitfadens folgte einem iterativen
Prozess. Zunächst identifizierten wir die zentralen Themenbereiche
basierend auf unserer initialen Problemhypothese. Der Leitfaden
sollte sowohl spezifische Informationen über Arbeitsabläufe als
auch emotional-motivationale Aspekte der DJ-Tätigkeit erfassen.
Der Interview-Leitfaden gliederte sich in vier zentrale Bereiche:
• Einstieg & Hintergrund: Erfahrungslevel, Musikrichtung und
Auftrittshäufigkeit
• Digging-Prozess: Musikentdeckung, Bewertung, Quellen und
Entscheidungsprozesse
• Vorbereitungsprozess: Organisation der Musikbibliothek und
Set-Vorbereitung
• Live-Performance: Echtzeitentscheidungen und Systeman-
forderungen unter Zeitdruck
*[Abbildung 3.3: Interview-Leitfaden Struktur - Visualisierung der
vier Themenbereiche mit Beispielfragen]*
25
03 User Research & Personas
Forschungsmethodik
Rekrutierung von 6 DJ-Interviewpartnern
Die Auswahl der Interviewpartner erfolgte nach dem Prinzip der
maximalen Variation:
• Erfahrungslevel: Von Einsteigern bis zu langjährigen Profis
• Musikrichtungen: Electronic Music, Pop, Hip-Hop und Event-
Musik
• Auftrittsformen: Club-DJs, Event-DJs und Produzenten
• Technische Affinität: Sowohl technikaffine als auch weniger
technikfokussierte DJs
Die Rekrutierung erfolgte über persönliche Netzwerke und DJ-
Communities. Alle Interviews wurden als Einzelgespräche geführt
(45-90 Minuten), aufgezeichnet und transkribiert.
Datenerhebung &
systematische Auswertung
Clustering der Interview-Antworten
Die Auswertung erfolgte durch systematische Clusterung der Ant-
worten entsprechend des strukturierten Interview-Leitfadens. Alle
Antworten zu gleichen Fragen wurden thematisch gruppiert, um
Vergleichbarkeit und Musteridentifikation zu ermöglichen.
Kategorisierung nach Surprises, Pains und Delights
• Biggest Surprises: Unerwartete Erkenntnisse, die ursprüng-
liche Annahmen herausforderten
• Biggest Pains: Häufigste und schwerwiegendste Probleme im
DJ-Workflow
• Biggest Delights: Positive Aspekte, die bewahrt oder ver-
stärkt werden sollten
Diese methodische Herangehensweise stellte sicher, dass alle
späteren Design-Entscheidungen direkt auf empirischen Nutzer-
daten basierten.
*[Abbildung 3.5: Datenauswertung-Prozess - Vom Interview-Tran-
skript zur kategorisierten Erkenntnis]*
26
03 User Research & Personas
Interview-Erkenntnisse
Workflow-Fragmente und
Plattform-Vielfalt
Problemanalyse der Tool-Fragmentierung
DJs nutzen durchschnittlich 8-12 verschiedene Tools und Plattfor-
men in ihrem regulären Workflow. Diese Fragmentierung entstand
historisch durch die Spezialisierung verschiedener Anbieter, führt
aber zu erheblichen Ineffizienzen. Ein typischer Track-Discovery-
Prozess durchläuft mehrere Plattformen: Instagram-Post → Sha-
zam/SoundHound → Streaming-Dienst → Online-Store → Download
→ DJ-Software.
Medienwechsel-Zyklen als kritischer Pain Point
Jeder Schritt bietet Verlustpotential und Frustrationsmöglichkeiten.
Bestehende Lösungen konzentrieren sich auf Einzelfunktionen
statt auf Workflow-Integration. Selbst Anbieter mit mehreren Pro-
dukten schaffen keine nahtlose Verbindung zwischen Discovery
und Performance.
*[Abbildung 3.6: Tool-Ecosystem-Map - Darstellung aller verwen-
deten Plattformen und Tools im DJ-Workflow]*
Manuelle Organisation und
individuelle Tagging-Sys-
teme
Zeitaufwand-Realität
DJs investieren 40-60% ihrer musikbezogenen Zeit in organisato-
rische Aufgaben. Bei professionellen DJs entspricht das mehreren
Stunden pro Woche, Zeit, die für kreative Aktivitäten verloren geht.
Individuelle Kategorisierungssysteme
Jeder DJ entwickelt eigene Ordnungsstrukturen basierend auf
seinem Einsatzgebiet:
•
Techno-DJs kategorisieren nach Energielevel und Mix-Kom-
patibilität
•
Event-DJs organisieren nach Anlässen und Zielgruppen
Software-Limitierungen und Tag-Inflation
Aktuelle DJ-Software unterstützt diese individuellen Bedürfnisse
unzureichend. Je länger DJs ihre Systeme nutzen, desto unüber-
sichtlicher werden sie. Ohne systematische Pflege entstehen
hunderte redundanter oder veralteter Tags.
*[Abbildung 3.7: Tagging-Systeme Vergleich - Visualisierung ver-
schiedener DJ-Organisationsansätze]*
27
03 User Research & Personas
Interview-Erkenntnisse
Live-Performance Stressre-
duktion als kritischer Faktor
Kritische Momente identifiziert
Der Übergang zwischen zwei Tracks ist der stressintensivste
Moment im DJ-Workflow. Hier zeigen sich alle organisatorischen
Schwächen komprimiert in wenigen Sekunden. Stress-Verstärker
sind:
• Unklare Kategorisierung führt zu längeren Suchzeiten
• Schlechte UI-Gestaltung erschwert schnelle
Entscheidungen
• Fehlende intelligente Vorschläge zwingen zu mentaler
Vollberechnung aller Optionen
• Technische Probleme verstärken Zeitdruck
Kompensationsstrategien
Erfahrene DJs entwickeln Workarounds: Überplanung der Sets,
Backup-Playlists, Hardware-Shortcuts. Diese Strategien funktio-
nieren, verschleiern aber die grundlegenden Systemprobleme.
28
03 User Research & Personas
Personas & User Journeys
Basierend auf den kategorisierten Erkenntnissen entwickelten
wir drei repräsentative Personas, die verschiedene Nutzerty-
pen und deren spezifische Bedürfnisse verkörperten.
Jasmin (29)
Die strukturierte
Produzentin
Hintergrund & Kontext
Vollzeit-DJ und Produzentin in München. Seit sieben Jahren aktiv,
entwickelte sich von reinem Auflegen zur eigenen Musikproduk-
tion. Sets umfassen breites Spektrum: Techno, House, Breakbeat,
Bassmusik und psychedelische Elemente mit Jazz-Einflüssen.
Arbeitsweise & Motivation
Strukturierte Planerin mit erheblicher Zeitinvestition in Bibliotheks-
organisation. Bevorzugt eigene Tagging-Systeme und detaillier-
te Kategorisierung für schnellen Live-Zugriff. Spontaneität und
Crowd-Reaktion wichtig, erfordern aber solide organisatorische
Basis.
Zentrale Bedürfnisse
•
Personalisierte Organisationssysteme ohne Software-Ein-
schränkungen
•
Effiziente Bewältigung der Promo-E-Mail-Flut
•
Schnelle Track-Identifikation während Live-Sets
•
Flexible Tag-Systeme für komplexe Genre-Hybride
Hauptfrustration
Manuelle Tagging verschlingt wertvolle Kreativzeit. Rekordbox-
Limitierungen zwingen in starre Kategoriesysteme. Technische
Probleme wie langsame Relinking-Prozesse verstärken Stress.
*[Abbildung 3.9: Persona Jasmin - Profil mit Arbeitsweise, Bedürf-
nissen und Frustrationen]*
29
03 User Research & Personas
Personas & User Journeys
Jasmin (29)
Die strukturierte
Produzentin
Basierend auf den kategorisierten Erkenntnissen entwickelten
wir drei repräsentative Personas, die verschiedene Nutzerty-
pen und deren spezifische Bedürfnisse verkörperten.
Hintergrund & Kontext
Vollzeit-DJ und Produzentin in München. Seit sieben Jahren aktiv,
entwickelte sich von reinem Auflegen zur eigenen Musikproduk-
tion. Sets umfassen breites Spektrum: Techno, House, Breakbeat,
Bassmusik und psychedelische Elemente mit Jazz-Einflüssen.
Arbeitsweise & Motivation
Strukturierte Planerin mit erheblicher Zeitinvestition in Bibliotheks-
organisation. Bevorzugt eigene Tagging-Systeme und detaillier-
te Kategorisierung für schnellen Live-Zugriff. Spontaneität und
Crowd-Reaktion wichtig, erfordern aber solide organisatorische
Basis.
Zentrale Bedürfnisse
•
Personalisierte Organisationssysteme ohne Software-Ein-
schränkungen
•
Effiziente Bewältigung der Promo-E-Mail-Flut
•
Schnelle Track-Identifikation während Live-Sets
•
Flexible Tag-Systeme für komplexe Genre-Hybride
Hauptfrustration
Manuelle Tagging verschlingt wertvolle Kreativzeit. Rekordbox-
Limitierungen zwingen in starre Kategoriesysteme. Technische
Probleme wie langsame Relinking-Prozesse verstärken Stress.
*[Abbildung 3.9: Persona Jasmin - Profil mit Arbeitsweise, Bedürf-
nissen und Frustrationen]*
30
03 User Research & Personas
Personas & User Journeys
Lio (26)
Der kreative Entdecker
Hintergrund & Kontext
DJ und Produzent in Berlin. Kombiniert Techno und breakige Beats
mit pragmatischem Organisationsansatz. Inspiration aus Insta-
gram, Bandcamp und Spotify, kuratierte Inhalte besonders wichtig.
Arbeitsweise & Motivation
Beschreibt sich als „Finder“ mit Fokus auf musikalische Vielsei-
tigkeit. Stil reicht von komplexen Techno-Grooves bis Jazz-Ele-
menten. Organisation hauptsächlich in Rekordbox mit Tags wie
„Mood“ oder „Energy Level“.
Zentrale Bedürfnisse
•
Effiziente Musikbibliotheks-Organisation ohne Kontrollverlust
•
Bessere Integration zwischen Inspirationsquellen und DJ-Soft-
ware
•
Schnelleres Tagging und intuitivere Playlist-Erstellung
•
Live-Performance-Unterstützung durch intelligente Track-Vor-
schläge
Hauptfrustration
Überblick über große Musikbibliothek geht verloren. Manuelles
Tagging zeitaufwändig und fehleranfällig. Medienwechsel zwischen
Plattformen unterbricht konstant den Workflow.
31
03 User Research & Personas
Personas & User Journeys
Samuel (38)
Der Event-Spezialist
Hintergrund & Kontext
Hauptberuflich Speditionskaufmann, nebenbei Event-DJ in Leip-
zig. Organisiert Musikbibliothek nach Jahrzehnten, ändert selten
an grundlegender Struktur. Fokus auf bewährte Tracks für Hoch-
zeiten und Events.
Arbeitsweise & Motivation
Entwickelte sich von akribischer Set-Planung zu flexiblerem,
bauchgefühlbasiertem Ansatz. Sammlung umfasst Discofox, Mal-
le-Musik, 90er-Hits und gelegentlich elektronische Musik. Extreme
Genres werden bewusst vermieden.
Zentrale Bedürfnisse
•
Effizientere Organisation ohne Systemwechsel
•
Automatische Duplikatserkennung und -bereinigung
•
Playlist-Unterstützung für Kundenwünsche und spontane An-
passungen
•
Zuverlässige Backup-Lösungen gegen Technikausfälle
Hauptfrustration
Manuelle Bibliothekspflege zeitaufwändig und lästig. Doppelte
Dateien erschweren Workflow. Balance zwischen Kundenwün-
schen und Publikumsstimmung schwer zu finden.
32
03 User Research & Personas
Personas & User Journeys
User Journey Mapping:
Von Discovery bis
Live-Performance
Alle DJ-Typen durchlaufen einen ähnlichen fünfphasigen Workflow
(siehe Kapitel 2.1), aber mit unterschiedlichen Schwerpunkten:
Gemeinsamkeiten
•
Fragmentierte Workflows zwischen verschiedenen Plattformen
•
Zeitaufwändige manuelle Organisation ohne Automatisierung
•
Fehlende Übersichtlichkeit in großen Musikbibliotheken
•
Ineffiziente Suchfunktionen während Live-Performances
Unterschiede
• Organisationsansätze: Jasmin (kreativitätsfokussiert), Lio
(pragmatisch), Samuel (etablierte Strukturen)
• Discovery-Verhalten: Jasmin (Promo-intensiv), Lio (kuratierte
Quellen), Samuel (bedarfsgesteuert)
• Live-Performance-Prioritäten: Jasmin (Spontaneität), Lio
(Genre-Experimente), Samuel (Zuverlässigkeit)
33
03 User Research & Personas
Synthese zu Design-Anforderungen
Zentrale Erkenntnisse aus
den Interviews
Die systematische Auswertung aller Interviews offenbarte wieder-
kehrende Problemfelder, die sich durch alle Erfahrungslevel und
Musikrichtungen ziehen. Tool-Fragmentierung kostet DJs täg-
lich wertvolle Zeit, da sie zwischen acht bis zwölf verschiedenen
Plattformen wechseln müssen. Manuelle Organisation verschlingt
40-60% der musikbezogenen Arbeitszeit, ohne dass bestehende
Software individuelle Arbeitsweisen unterstützt.
Funktionale Anforderungen
Workflow-Integration
Die Lösung muss nahtlose Verbindungen zwischen Discovery-
Plattformen und DJ-Software schaffen. Statt Medienbrüche zu
akzeptieren, sollte der gesamte Prozess von der Musikentdeckung
bis zur Live-Performance in einem System abbildbar sein.
Flexible Organisationsstrukturen
DJs benötigen Kategorisierungssysteme, die sich an ihre individu-
ellen Arbeitsweisen anpassen. Vordefinierte Tag-Systeme schei-
tern an der Vielfalt musikalischer Genres und Einsatzbereiche. Die
Software sollte beliebige Organisationsformen ermöglichen, ohne
strukturelle Einschränkungen zu erzwingen.
Automatisierung mit Kontrollerhalt
Repetitive Aufgaben wie Duplikatserkennung oder Basis-Kate-
gorisierung können automatisiert werden, solange DJs die finale
Entscheidungshoheit behalten. KI-Unterstützung sollte Vorschlä-
ge machen, nie aber eigenständig organisatorische Änderungen
durchführen.
Live-Performance-Optimierung
Während Auftritten zählt jede Sekunde. Die Benutzeroberfläche
muss unter Stress und bei schlechten Lichtverhältnissen funktio-
nieren. Suchfunktionen sollten auch bei unvollständigen Eingaben
relevante Ergebnisse liefern.
Diese Erkenntnisse bilden das Fundament für alle nachfolgen-
den Designentscheidungen und Funktionspriorisierungen.
34
35
04 Competitive Analysis
36
37
04 Competitive Analysis
Marktlandschaft-Analyse
Methodisches Vorgehen
Die Marktanalyse umfasste eine systematische Untersuchung
von über 20 Tools aus zwei Hauptkategorien: Performance-
orientierte DJ-Software und reine Musikverwaltungssoftware.
Mittels einer Feature-Matrix wurden die Kernfunktionalitäten,
Automatisierungs- und KI-Features analysiert, um Marktlü-
cken zu identifizieren.
Performance-orientierte DJ-
Software
Diese Kategorie dominiert Rekordbox von Pioneer DJ, das eine
faktische Monopolstellung in der Club-Infrastruktur innehat.
Pioneer DJ-Hardware (CDJ-Serie, DJM-Mixer) ist der de-facto
Standard in Clubs weltweit, wodurch Rekordbox als primäre Vor-
bereitungssoftware etabliert wurde.
Hauptvertreter: Rekordbox, Serato DJ Pro, Traktor Pro (Native
Instruments), VirtualDJ, Beatport DJ, Cross DJ, Mixxx
Kerncharakteristika
•
Fokus auf Live-Performance und Set-Vorbereitung
•
Integrierte Analyse-Tools für BPM, Key, Waveforms
•
Hardware-Integration und Controller-Support
•
Export-Funktionen für DJ-Hardware
KI/Automatisierungs-Features
•
Automatische Track-Analyse (BPM, Key, Beatgrid)
•
Vocal Detection und Stems Separation (VirtualDJ)
•
Smart Crates und intelligente Playlist-Vorschläge
•
Cloud-Sync für Multi-Device-Workflows
Die Performance-Software konzentriert sich primär auf die unmit-
telbare Set-Vorbereitung und Live-Mixing, bietet aber begrenzte
Discovery- und Deep-Organisation-Features.
38
04 Competitive Analysis
Marktlandschaft-Analyse
Reine Musikverwaltungs-
software
Diese Kategorie addressiert die Organisationsbedürfnisse großer
Musiksammlungen ohne Performance-Fokus.
Diese Kategorie addressiert die Organisationsbedürfnisse großer
Musiksammlungen ohne Performance-Fokus.
Hauptvertreter: MP3Tag, MediaMonkey, MusicBee, Lexicon, He-
lium Music Manager, iTunes/Musik, Foobar2000, Taganana
Kerncharakteristika:
•
Umfangreiche Metadaten-Verwaltung und Batch-Processing
•
Online-Datenbank-Integration (Discogs, MusicBrainz)
•
Erweiterte Tagging-Funktionen und Automatisierung
•
Cross-Platform-Kompatibilität und Export-Optionen
KI/Automatisierungs-Features
•
Fingerprint-basierte Track-Identifikation
•
Automatisches Tagging über Online-Datenbanken
•
Intelligente Playlist-Erstellung
•
Batch-Verarbeitung und Fehleranalyse
Diese Tools excellieren in der detaillierten Organisation, aber bie-
ten keine DJ-spezifischen Features wie Cue Points oder Perfor-
mance-Integration.
39
04 Competitive Analysis
Marktlandschaft-Analyse
Feature-Matrix Erkenntnisse
Die systematische Feature-Analyse offenbarte eine klare Bifurka-
tion des Marktes: Tools konzentrieren sich entweder auf Perfor-
mance (DJ-Software) oder Organisation (Musikverwaltung), aber
keine Lösung integriert beide Bereiche nahtlos.
*[Abbildung 4.4: Markt-Bifurkation Diagramm - Visualisierung der
Lücke zwischen Performance- und Organisationstools]*
40
04 Competitive Analysis
Gap-Analyse & Marktlücken
Zentrale Marktlücke:
Tool-Fragmentierung
Die Marktanalyse offenbart eine fundamentale Lücke zwischen
Performance-orientierten und Verwaltungs-orientierten Tools. DJs
sind gezwungen, mehrere Software-Kategorien parallel zu nutzen,
was zu Medienwechseln, Metadaten-Verlust und ineffizienten
Arbeitsprozessen führt.
Strukturelle Marktbarrieren für Defragmentierung
Eine vollständige Integration aller Tools ist strukturell problema-
tisch: Musik wird über verschiedene Anbieter mit unterschied-
lichen Bezahlsystemen bereitgestellt. Rechtliche, technische und
kommerzielle Barrieren verhindern eine einheitliche Plattform.
Strategische Fokussierung auf Vorbereitung
Basierend auf dieser Analyse konzentriert sich unser Projekt be-
wusst auf den Vorbereitungsprozess nach der Discovery-Phase.
Statt die unlösbare Discovery-Fragmentierung anzugehen, opti-
mieren wir die Organisation und Set-Planung bereits erworbener
Musik.
Fehlende Features
Räumliche Musikexploration
Keine existierende Software bietet intuitive, räumliche Visualisie-
rung von Musikähnlichkeiten. Alle Tools verwenden Listen- oder
Ordnerstrukturen, die für große Bibliotheken (>5.000 Tracks) un-
geeignet sind.
Adaptives Lernen
Während KI-Features wie Fingerprinting existieren, fehlen adapti-
ve Systeme, die aus individuellem Nutzerverhalten lernen. Tag-
ging-Präferenzen und Set-Muster werden nicht für personalisierte
Empfehlungen genutzt.
Cross-Platform Discovery
Integration verschiedener Streaming-Dienste und lokaler Bibliothe-
ken fehlt vollständig.
41
04 Competitive Analysis
Gap-Analyse & Marktlücken
Rekordbox Monopolposition
als Marktbarriere
Pioneer DJ‘s Hardware-Dominanz in Clubs schafft einen fak-
tischen Lock-in-Effekt. DJs müssen ihre Bibliotheken Rekord-
box-kompatibel organisieren, selbst wenn sie andere Software
bevorzugen würden. Dies hemmt Innovation in der DJ-Software-
Landschaft.
DJOID als direkter
Competitor
DJOID stellt den direktesten Competitor zu unserer entwickelten
Lösung dar, da es ähnliche Kernkonzepte verfolgt: AI-gestützte
Musikanalyse, Graph-basierte Visualisierung und automatische
Set-Planung. Die Analyse zeigt jedoch signifikante Marktlücken
auf:
Ähnliche Ansätze
•
Graph Playlists für visuelle Set-Planung
•
AI-Tagging für automatische Musikanalyse
•
Auto-Grouping für Bibliotheksorganisation
•
Fokus auf DJ-Workflow-Integration
Identifizierte Schwächen
•
Ungenauigkeit bei AI-Klassifizierung (Nutzerfeedback)
•
Node-basierte UI führt zu Usability-Problemen und steiler
Lernkurve
•
Beta-Status mit Stabilitätsproblemen
•
Fehlende Erklärbarkeit der AI-Empfehlungen
•
Workflow-Fragmentierung: Fokus nur auf Set-Planung
•
Untergräbt kurative DJ-Kontrolle durch Vollautomatisierung
*[Abbildung 4.7: DJOID Competitive Analysis - Stärken/Schwä-
chen-Analyse des direkten Competitors]*
42
04 Competitive Analysis
Strategische Positionierung
Fokussierung auf Vorberei-
tung statt Live-Performance
Die Marktlücke liegt nicht in direkter Konkurrenz zu Rekordbox,
sondern in der Vorbereitung und Organisation vor dem Export.
Ein Tool, das Deep-Organisation und intelligente Set-Planung
integriert, würde den Workflow vereinheitlichen, ohne die etablierte
Club-Infrastruktur zu stören.
Abgrenzung zu DJOID und
anderen direkten Competi-
tors
Technologische Opportunitäten
•
Moderne AI-Technologien: Deep Learning für Audio-Semantik,
Embedding-basierte Ähnlichkeitssuche
•
Desktop-Performance vs. Cloud-Limitationen: Desktop-An-
wendungen bieten bessere Performance für intensive Audio-
Analyse
Koexistenz mit etabliertem
Ökosystem
Die Stakeholder-Analyse bestätigt die Fokussierung auf Organisa-
tion und Vorbereitung als strategisch kluge Entscheidung. Direk-
te Konflikte mit mächtigen Stakeholdern (Pioneer DJ, etablierte
Software) werden vermieden, während echte Nutzerbedürfnisse
adressiert werden. Der Ansatz ermöglicht Koexistenz mit dem
etablierten Ökosystem statt Disruption.
43
Stakholder-Map
44
p
45
05 Lösungskonzept
46
47
05 Lösungskonzept
Designkonzept & Kernfunktionalitäten
AI-gestützte Musikanalyse
mit Multi-Model-Ansatz
Essentia Framework als technische Grundlage
Unser System basiert auf Essentia, einer Audio-Analyse-Biblio-
thek des Music Technology Group der Universitat Pompeu Fabra
Barcelona. Essentia extrahiert sowohl Low-Level-Features (spekt-
rale Eigenschaften, Rhythmus) als auch High-Level-Semantik über
vortrainierte neuronale Netze.
Discogs-EffNet für DJ-relevante Klassifikation
Das zentrale Modell nutzt EfficientNet-Architektur, trainiert auf
dem Discogs-Datensatz. Dieser umfasst über 400 Genres mit
besonderer Gewichtung elektronischer Musik – ideal für DJ-An-
wendungen. Ein entscheidender Vorteil: Der Discogs-Datensatz
ist mit über einer Million Releases einer der größten verfügbaren
Musikdatensätze und beinhaltet explizit auch Veröffentlichungen,
die ausschließlich auf Vinyl erschienen sind. Dadurch deckt das
Modell einen breiten historischen Querschnitt ab, von klassischen
House- und Techno-Releases der 80er und 90er bis zu aktuellen
Produktionen. Statt nur Klassifikationsergebnisse zu verwenden,
extrahieren wir die internen 400-dimensionalen Embeddings des
Netzwerks.
Spezialisierte Modelle für verschiedene Musikdimensionen
Das System analysiert Musik auf vier Ebenen parallel:
• Genre-Klassifikation: 400+ Kategorien für stilistische Einord-
nung
• Mood-Analyse: Emotionale Dimensionen (happy, aggressive,
relaxed, sad,...)
• Instrumenterkennung: Dominante Instrumente über MTG-Ja-
mendo-Modell
• Spektrale-Analyse: Klangfarbe (bright/dark) und spektrale
Eigenschaften
*[Abbildung 5.1: Multi-Model AI-Architektur - Parallele Analyse ver-
schiedener Musikdimensionen]*
48
05 Lösungskonzept
Designkonzept & Kernfunktionalitäten
Feature-Extraktion und
Datenverarbeitung
Embedding-basierte Ähnlichkeitsberechnung
Die 1280-dimensionalen Embeddings erfassen subtile musikali-
sche Ähnlichkeiten jenseits expliziter Genre-Labels. Ähnliche Em-
beddings bedeuten meist ähnlich klingende Tracks – ein entschei-
dender Vorteil gegenüber rein kategoriebasierten Ansätzen.
Robuste Normalisierung gegen Musiksammlungs-Ungleich-
gewichte
Musiksammlungen weisen natürliche Ungleichgewichte auf. Das
System kompensiert diese durch:
• Adaptive Genre-Gewichtung (Style-Features: 1.0, Genre: 0.2,
Mood: 0.1)
• Robuste Normalisierung mit Median und MAD statt Mittel-
wert/Standardabweichung
• Separate Behandlung verschiedener Feature-Kategorien
Augmentation statt vollständige Automation
Das System analysiert und schlägt vor, überschreibt aber keine
bewussten Nutzerentscheidungen. Die finale kuratorische Kontrol-
le bleibt beim DJ.
*[Abbildung 5.2: Feature-Extraktion Pipeline - Von Audiodatei zu
strukturierten Metadaten]*
49
05 Lösungskonzept
Designkonzept & Kernfunktionalitäten
Hybride Visualisierung
Similarity Mode mit PCA-Dimensionsreduktion
Der Similarity-Mode nutzt Principal Component Analysis, um die
komplexen, hochdimensionalen Audio-Features auf zwei darstell-
bare Achsen zu reduzieren. Die PCA identifiziert die Richtungen
größter Variation in der Musiksammlung und projiziert ähnliche
Tracks in räumliche Nähe.
Das Interpretationsproblem der PCA-Achsen
PCA-Dimensionen sind mathematische Linearkombinationen aller
ursprünglichen Features und daher nicht direkt interpretierbar. DJs
verstehen nicht, warum bestimmte Tracks räumlich gruppiert sind
– die Achsen haben keine offensichtliche musikalische Bedeutung.
XY-Mode für transparente Exploration
Als Lösung entwickelten wir den XY-Mode: DJs wählen explizit,
welche extrahierten Features auf X- und Y-Achse dargestellt wer-
den. Vollständig transparent und musikalisch interpretierbar.
Komplementäre Stärken beider Modi
• Similarity-Mode: Automatische Gruppenfindung, ungezieltes
Entdecken ähnlicher Musik
• XY-Mode: Gezieltes Erkunden spezifischer Feature-Beziehun-
gen, hypothesis-driven Navigation
*[Abbildung 5.3: Hybride Visualisierung - Similarity Mode vs. XY
Mode mit Feature-Kontext]*
50
05 Lösungskonzept
Designkonzept & Kernfunktionalitäten
Adaptive Tagging
Selbstdefinierte Kategorien ohne Software-Limits
Das MY TAGS System ermöglicht DJs, ihre eigene Terminologie zu
verwenden. Beliebige Tags können als Kategorien oder spezifische
Labels erstellt werden – keine vordefinierten Strukturen.
Lernende Tag-Profile aus Nutzerverhalten
Wenn DJs Tracks zu selbsterstellten Tags hinzufügen, analysiert
das System die Audio-Features dieser Tracks. Für jedes Tag ent-
steht ein charakteristisches Profil der assoziierten musikalischen
Eigenschaften.
Automatische Track-Empfehlungen für Custom Tags
Basierend auf gelernten Tag-Profilen schlägt das System automa-
tisch passende Tracks aus der Sammlung vor. Die Empfehlungen
basieren auf Ähnlichkeit zu bereits kategorisierten Tracks – selbst
befüllende intelligente Ordner.
*[Abbildung 5.4: MY TAGS Lernschleife - Von Nutzerverhalten zu
personalisierten Empfehlungen]*
51
05 Lösungskonzept
Informationsarchitektur
Strukturierung der Musik-
bibliothek (Crates, Tags,
Smart Crates)
Hybride Organisationsansätze
Das System organisiert Musik sowohl über eine traditionelle Track-
Liste als auch über die räumliche 2D-Visualisierung. DJs können
zwischen verschiedenen Ansichten wechseln: Library (alle Tracks),
Crate-Ansicht oder Tag-Ansicht.
Crates und Tags System
Crates funktionieren als Container für Tracks und können hier-
archisch organisiert werden. Tags ermöglichen eine zusätzliche,
überlappende Kategorisierung. Diese Dualität unterstützt verschie-
dene Organisationsphilosophien und erlaubt Drag & Drop Organi-
sation.
Smart Crates: Regelbasierte automatische Organisation
Das Smart Crate System erweitert traditionelle Crates um intel-
ligente, regelbasierte Funktionalität. DJs können Bedingungen
definieren, die automatisch bestimmen, welche Tracks in ein Crate
aufgenommen oder ausgeschlossen werden sollen.
*[Abbildung 5.5: Informationsarchitektur - Crates, Tags und Smart
Crates Hierarchie]*
52
05 Lösungskonzept
Informationsarchitektur
Filter- und Suchfunktionen
mit Multi-Kategorie-Support
Multi-Kategorie Filtering
Das implementierte Filter-System unterstützt gleichzeitiges Filtern
nach Style-Features, Mood-Features, Instrument-Features, spekt-
ralen Eigenschaften und Genres. Filter können kombiniert werden
mit UND/ODER-Logik.
Dynamische Filter-Optionen
Die verfügbaren Filter-Optionen werden dynamisch aus den vor-
handenen Track-Features generiert. Dies stellt sicher, dass nur tat-
sächlich vorhandene Eigenschaften als Filter angeboten werden.
*[Abbildung 5.6: Multi-Kategorie Filter-System - UI-Mockup mit
kombinierbaren Filteroptionen]*
53
05 Lösungskonzept
Informationsarchitektur
Vektordatenbank und Fea-
ture-Extraktion-Pipeline
SQLite Datenbank für lokale Performance
Alle extrahierten Features werden in einer lokalen SQLite-Daten-
bank gespeichert. Style-Features, Instrument-Features und Mood-
Features werden als JSON-BLOBs persistiert, während spektrale
Features in separaten Spalten abgelegt werden.
Vektorisierung für Ähnlichkeitssuche
Track-Features werden in numerische Vektoren umgewandelt und
normalisiert. Diese Vektoren ermöglichen mathematische Ähnlich-
keitsberechnungen zwischen Tracks über Cosinus-Ähnlichkeit.
*[Abbildung 5.7: Datenbank-Architektur - SQLite Schema und Vek-
tor-Pipeline für Ähnlichkeitssuche]*
54
05 Lösungskonzept
Designprinzipien
DJ behält kurative Kontrolle
Adaptive UI für verschiede-
ne Nutzungsszenarien
Unser implementierter Lösungsansatz folgt dem Prinzip der Aug-
mentation: Die automatische Analyse und Visualisierung verstärkt
die Fähigkeiten des DJs, ersetzt aber nicht dessen kuratorische
Entscheidungen.
Das System analysiert und organisiert, aber der DJ behält die volle
Kontrolle über finale Entscheidungen. Filter und Empfehlungen
sind Vorschläge, keine Vorgaben. Die räumliche Visualisierung er-
öffnet neue Perspektiven auf die Musiksammlung, ohne bestehen-
de Organisationsstrukturen zu zerstören.
*[Abbildung 5.8: Augmentation-Prinzip - Vergleich traditioneller vs.
AI-unterstützter DJ-Workflows]*
Tab-basierte Navigation
Die Hauptnavigation erfolgt über Tabs zwischen Track-Liste und
Visualisierung. Eine Sidebar bietet Zugang zu Library-Bereichen,
Crates und Tags.
Kontextuelle Aktionen
Rechtsklick-Kontextmenüs ermöglichen schnelle Aktionen wie das
Hinzufügen zu Crates oder das Erstellen neuer Tags. Drag & Drop
unterstützt intuitive Track-Organisation.
Adaptive Darstellungsmodi
Das Interface passt sich an die gewählte Sidebar-Auswahl an. Für
jede Track-Sammlung kann zwischen Listen-Ansicht und 2D-Map
gewechselt werden, je nachdem ob detaillierte Metadaten oder
räumliche Beziehungen im Fokus stehen.
*[Abbildung 5.9: Adaptive UI-Komponenten - Interface-Anpassung
für verschiedene Nutzungsszenarien]*ww
55
05 Lösungskonzept
Designprinzipien
Interpretierbare vs. automa-
tische Visualisierung
Interaktive Exploration
Die Visualisierung unterstützt Zoom- und Pan-Funktionen sowie
Lasso-Selektion für die Auswahl mehrerer Tracks. Ein Lasso-Tool
ermöglicht die Auswahl mehrerer Tracks durch Aufziehen einer
Auswahlform. Selektierte Tracks können dann als Gruppe zu Cra-
tes hinzugefügt oder getaggt werden.
Audio-Playback Integration
Ein Player-Component ermöglicht die Vorhörung von Tracks direkt
in der Anwendung. Waveform-Visualisierungen zeigen den Audio-
content grafisch an. Tracks können sowohl aus der Liste als auch
aus der 2D-Visualisierung heraus abgespielt werden.
*[Abbildung 5.10: Interaktive Visualisierung - Lasso-Selection und
Audio-Playback Integration]*
56
05 Lösungskonzept
Technische Implementierung
Python-Backend für Audio-
Analyse + Electron-React-
Frontend
Hybride Desktop-Anwendungsarchitektur
Unsere technische Implementierung folgt einer hybriden Architek-
tur: Ein Python-basiertes Backend für Audio-Analyse kombiniert
mit einer Electron + React.js Frontend-Anwendung. Diese Tren-
nung ermöglicht die Nutzung spezialisierter Tools für ihre jeweili-
gen Stärken.
Electron Framework für Desktop-Integration
Electron ermöglicht die Entwicklung nativer Desktop-Anwendun-
gen mit Webtechnologien. Diese Wahl bietet direkten Dateisystem-
Zugriff für Musiksammlungen, native OS-Integration für Drag &
Drop und die Möglichkeit, ressourcenintensive Audio-Analyse im
Hintergrund auszuführen.
React.js für komponentenbasierte UI-Entwicklung
React.js bildet das Fundament unserer Benutzeroberfläche. Die
komponentenbasierte Architektur eignet sich ideal für komplexe
Interface-Anforderungen: wiederverwendbare Track-Komponen-
ten, dynamische Filter-Panels und interaktive Visualisierungen.
*[Abbildung 5.11: Technische Architektur - Python-Backend +
Electron-React-Frontend Integration]*
57
05 Lösungskonzept
Technische Implementierung
Class Balancing und robuste
Normalisierung für hetero-
gene Daten
Herausforderungen unausgewogener Musikdaten
Musiksammlungen weisen natürlicherweise unausgewogene Ver-
teilungen auf. Diese Ungleichgewichte können zu verzerrten Ähn-
lichkeitsberechnungen und Clustering-Ergebnissen führen.
Adaptive Genre-Gewichtung
Das System implementiert kategoriebasierte Gewichtung zur Kom-
pensation unterschiedlicher Feature-Wichtigkeiten:
•
Style-Features erhalten höchste Gewichtung (1.0) als primärer
Differenzierungsfaktor
•
Genre-Features werden moderat gewichtet (0.2) um Dominanz
einzelner Genres zu reduzieren
•
Mood-Features erhalten geringe Gewichtung (0.1) als ergän-
zende Information
Robuste Normalisierung gegen Ausreißer
Statt Standard-Normalisierung verwendet das System robuste
statistische Methoden:
•
Median und Median Absolute Deviation (MAD) statt Mittelwert
und Standardabweichung
•
Reduziert Einfluss von Ausreißern in Feature-Verteilungen
•
Separate Normalisierung pro Feature-Kategorie für ausgewo-
gene Repräsentation
Stabile Visualisierung der Musiksammlung
Die Visualisierung nutzt PCA (Principal Component Analysis) um
komplexe Audio-Features auf zwei darstellbare Dimensionen
zu reduzieren. Wichtiger Aspekt: Die Positionen verschiedener
Musikstile bleiben an festen Orten auf der Karte – Techno-Tracks
befinden sich immer im gleichen Bereich, auch wenn neue Tracks
hinzugefügt werden.
*[Abbildung 5.13: Class Balancing und Normalisierung - Robuste
Statistiken für stabile Visualisierung]*
58
59
05 Prototyping & Validation
60
61
06 Prototyping & Validation
Entwicklungsprozess
Zwei-Phasen-Prototyping-
Ansatz
Phase 1: MVP-Validierung der AI-Klassifizierung
Der erste Prototyp hatte ein klares Validierungsziel: Herausfinden,
ob automatische semantische Musikklassifizierung präzise genug
ist, um DJs echten Mehrwert zu bieten. Dieses MVP mit einfacher
Listendarstellung und Style-Analyse bewies die Grundannahme:
AI-basierte Feature-Extraktion funktioniert zuverlässig für DJ-An-
wendungen.
Phase 2: Vollständiger Prototyp mit 2D-Visualisierung
Basierend auf den MVP-Erkenntnissen entwickelten wir einen
High-Fidelity-Prototyp mit räumlicher Track-Visualisierung, erwei-
terten AI-Features (Instruments + Moods + Spectral) und interak-
tiver 2D-Map-Navigation. Diese fortgeschrittene Version wurde in
strukturierten Usability-Tests mit Steve und Carsten validiert.
*[Abbildung 6.1: Prototyping-Phasen - Vom MVP zur vollständigen
2D-Visualisierung]*
62
06 Prototyping & Validation
Entwicklungsprozess
Iterative Design-Entwick-
lung: Von Liste zu räumli-
cher Exploration
MVP-Erkenntnisse: Technische Machbarkeit bestätigt
Die ersten Tests mit Discogs-EffNet und MTG-Jamendo-Modellen
zeigten vielversprechende Klassifizierungsgenauigkeit. DJs er-
kannten die AI-generierten Empfehlungen als sinnvoll und präzise.
Diese Validierung der Kernhypothese ermöglichte die Weiterent-
wicklung zum vollständigen Prototyp.
Eindimensionale Darstellung unzureichend
Das MVP offenbarte ein kritisches Interface-Problem: Die Listen-
darstellung war nicht explorativ genug für DJ-Workflows. DJs
benötigen räumliche Orientierung in ihren Musiksammlungen, um
Ähnlichkeiten und Cluster zu erkennen. Diese Erkenntnis führte zur
Entwicklung der PCA-basierten 2D-Visualisierung.
Skalierungs-Anforderungen für professionelle Libraries
Professionelle DJs verwalten oft Sammlungen von 50.000+ Tracks.
Unsere Implementierung berücksichtigt diese Realität durch
optimierte Algorithmen: PCA-Berechnung, Clustering und Ähnlich-
keitssuche bleiben auch bei extremen Datenmengen responsive.
Praxistauglichkeit statt
akademischer Isolation
Integration in reale DJ-Workflows
Ein zentrales Designprinzip war die Entwicklung eines Produkts,
das außerhalb des „luftleeren Raums“ funktioniert. Der Ansatz
priorisierte von Anfang an Kompatibilität mit bestehenden DJ-Öko-
systemen und echten Musiksammlungen.
Proof of Concept für Marktintegration
Die umfangreiche Competitive Analysis war praktische Notwen-
digkeit für realistische Produktentwicklung. Nur durch detailliertes
Verständnis bestehender Tools konnten wir Integrationsmöglich-
keiten identifizieren und Alleinstellungsmerkmale entwickeln.
63
06 Prototyping & Validation
Zweiter Usability-Test: Fortgeschrittener Prototyp
Testkonzept und erweiterte
Feature-Validierung
Testdesign für vollständigen Funktionsumfang
Der zweite Usability-Test validierte den fortgeschrittenen Prototyp
mit vollständiger 2D-Map-Visualisierung, erweiterten AI-Features
(Instruments + Moods + Spectral) und interaktiven Explorations-
Tools. Das strukturierte Think-Aloud-Protokoll umfasste sechs
definierte Aufgaben:
• Spezifische Track-Suche mit Multi-Feature-Filter-Kombina-
tionen
• Tag-Erstellung und -Management für personalisierte Organi-
sation
• AI-Empfehlungssystem Bewertung mit erweiterten Features
• 2D-Map-Visualisierung für räumliche Musikexploration
• XY-Modus für parametrische Set-Planung mit interpretierba-
ren Achsen
*[Abbildung 6.4: Usability-Test-Setup - Testumgebung und Aufga-
ben-Szenarien]*
64
06 Prototyping & Validation
Zweiter Usability-Test: Fortgeschrittener Prototyp
Teilnehmer-Profile und
Testgruppe
Diverse Erfahrungslevel und Arbeitsweisen
Die Testgruppe umfasste DJs mit unterschiedlichen Erfahrungsle-
veln und Organisationsansätzen. Das Spektrum reichte von semi-
professionellen DJs mit 3-4 Jahren Erfahrung bis zu erfahrenen
Anwendern mit 8+ Jahren praktischer Erfahrung.
Verschiedene Organisationsphilosophien
• Genre-orientierte Organisation: Mit zusätzlichen Mood-Ka-
tegorien und Hot-Cue-Sets
• Event-basierte Strukturierung: Funktionale Organisation
nach Auftrittskontext
• Tool-Präferenzen: Hauptsächlich Rekordbox-Nutzer, teilweise
mit Traktor-Erfahrung
• Library-Größen: Von mittleren Sammlungen bis zu 5.000+
Track-Libraries
Diese Diversität ermöglichte die Validierung verschiedener Nut-
zungsszenarien und Workflow-Präferenzen innerhalb einer kontrol-
lierten Testumgebung.
Testumgebung und Durchführung
Kontrollierte Laborumgebung
• Setting: Desktop-Computer mit Screen-Recording
• Software: High-Fidelity Prototyp mit vollständiger 2D-Map-
Funktionalität
• Dauer: 45-60 Minuten pro Session inklusive Nachbespre-
chung
• Dokumentation: Think-Aloud-Protokoll + Beobachtungsnoti-
zen
*[Abbildung 6.6: Test-Setup - Hardware, Software und Dokumen-
tationsmethodik]*
65
06 Prototyping & Validation
Testergebnisse und Erkenntnisse
Übergreifende Validierung
der Kernkonzepte
Durchweg positive Resonanz auf 2D-Visualisierung**
Die Teilnehmer zeigten erkennbare Begeisterung für die räumliche
Musikexploration. Die Map-Visualisierung löste „Aha-Momente“
aus und wurde als innovativ und hilfreich bewertet. Kommentare
wie „krasses Programm“ und „mega geil“ verdeutlichten die positi-
ve Aufnahme des Visualisierungskonzepts.
Die Fähigkeit, große Musikmengen visuell zu erfassen und
Ähnlichkeits-Cluster zu erkennen, traf genau den identifizier-
ten Pain Point des Überblicks in großen Libraries.
Bestätigung des Hybrid-Ansatzes: Augmentation statt Auto-
mation
Die Testpersonen lehnten Vollautomatisierung entschieden ab und
bestätigten unser Designprinzip der kurativen Kontrolle. Die Sorge
vor vollständiger Automatisierung wurde deutlich formuliert - DJs
wollen die finale Entscheidungshoheit behalten, um ihre kurative
Rolle zu bewahren.
Das AI-Empfehlungssystem wurde als hilfreich empfunden, solan-
ge der DJ die finale Entscheidungskontrolle behält.
66
67
68
69
07 Visual Design
70
71
07 Visual Design
Designsprache & visuelle Hierarchie
Dark Theme für professio-
nelle DJ-Umgebung
Das Interface basiert auf einem konsequenten Dark Theme mit
schwarz-grauen Hintergründen. Diese Designentscheidung orien-
tiert sich direkt an der professionellen DJ-Arbeitsumgebung: Clubs
und Studios arbeiten meist bei gedämpftem Licht, DJ-Hardware
verwendet dunkle Oberflächen, und die Augen müssen vor starken
Kontrasten geschützt werden.
Der dunkle Hintergrund (#1A1A1A bis #2D2D2D) reduziert Augen-
belastung während langer Organisationssessions und schafft einen
professionellen Arbeitskontext. Weiße Textelemente (#FFFFFF) sor-
gen für optimale Lesbarkeit bei verschiedenen Lichtverhältnissen.
Primary Color: Orange (#FE6C40)
Orange fungiert als Hauptakzentfarbe für interaktive Elemente,
aktive Zustände und wichtige Aktionen. Die Farbwahl basiert auf
hoher Sichtbarkeit gegen dunkle Hintergründe und energetischer
Wirkung, die zur DJ-Kultur passt.
Neutral Colors: Graustufen
•
Helles Grau (#E4E4E4): Sekundäre Informationen und inaktive
Zustände
•
Mittleres Grau (#4A4A4A): UI-Elemente und Trennlinien
•
Dunkles Grau (#2D2D2D): Sidebar und Panel-Hintergründe
Feature-spezifische Farbcodierung
Verschiedene Musikeigenschaften erhalten eigene Farbzuordnun-
gen für schnelle visuelle Unterscheidung:
• Styles: Orange-Töne für Genre-Tags
• Moods: Variable Farbpalette je nach emotionaler Qualität
• Instruments: Einheitliche Farbkodierung pro Instrumenten-
gruppe
• Spectral Features: Gradient-basierte Darstellung für spektrale
Eigenschaften
72
07 Visual Design
Designsprache & visuelle Hierarchie
Typografie für schnelle Les-
barkeit
Die Typografie priorisiert Funktionalität über ästhetische Experi-
mente. Alle Textgrößen sind auf schnelle Informationsaufnahme
optimiert:
Primäre Schrift: System-Font für Konsistenz mit dem Betriebs-
system
Hierarchie: Klare Größenabstufungen zwischen Überschriften,
Labels und Metadaten
Kontraste: Hohe Kontrastverhältnisse erfüllen Accessibility-Stan-
dards
Track-Titel und Künstlernamen verwenden größere Schriftgrößen
für Erkennbarkeit während der Navigation. BPM, Key und techni-
sche Metadaten nutzen kleinere, aber noch gut lesbare Größen.
73
07 Visual Design
Layout-Prinzipien für DJ-Workflows
Minimale Mausbewegungen
durch strategische Drag &
Drop-Bereiche
Das Interface reduziert Mausbewegungen durch durchdachte An-
ordnung interaktiver Elemente. Drag & Drop-Zonen befinden sich
in natürlichen Bewegungsradien:
Sidebar als primäre Drop-Zone: Crates und Tags in der linken Si-
debar fungieren als Hauptziele für Track-Organisation. Die vertikale
Anordnung entspricht natürlichen Mausbewegungen.
Kurze Drag-Distanzen: Tracks können direkt aus der Hauptan-
sicht zu nahegelegenen Organisationselementen gezogen werden
ohne weite Mauswege.
Kontext-sensitive Drop-Bereiche: Gültige Drop-Zonen werden
visuell hervorgehoben sobald ein Drag-Vorgang beginnt.
*[Abbildung 7.3: Drag & Drop-Zonen - Optimierte Mauswege für
häufige Aktionen]*
74
07 Visual Design
Layout-Prinzipien für DJ-Workflows
Optimierte Informations-
dichte gegen kognitive
Überlastung
Die Interface-Gestaltung balanciert Informationsreichtum mit
kognitiver Verarbeitbarkeit. Verschiedene Darstellungsmodi bieten
angepasste Informationsdichten:
Listen-Ansicht: Kompakte Darstellung mit allen relevanten Meta-
daten in tabellarischer Form. Zeigt BPM, Key, Duration, Genres
und Custom Tags gleichzeitig.
Grid-Ansicht: Reduziert Informationen auf Cover, Titel und Künst-
ler für visuell orientierte Navigation. Zusätzliche Metadaten er-
scheinen bei Hover-Interaktionen.
Map-Ansicht: Minimiert textuelle Informationen zugunsten räum-
licher Beziehungen. Details werden nur für ausgewählte Tracks
angezeigt.
Die gestaffelte Informationsarchitektur verhindert Überforderung
und ermöglicht fokussierte Arbeitsweisen je nach Aufgabe.
*[Abbildung 7.4: Informationsdichte-Vergleich - Listen-, Grid- und
Map-Ansicht nebeneinander]*
75
07 Visual Design
Map-Visualisierung als mentales Modell
Räumliche Anordnung ent-
spricht DJ-Denkmustern
Die 2D-Map-Visualisierung übersetzt abstrakte Musikähnlichkeiten
in räumliche Beziehungen. Diese Darstellung entspricht etablierten
DJ-Denkmustern:
Ähnlichkeit durch Nähe
Tracks mit ähnlichen Audio-Features werden räumlich benachbart
dargestellt. DJs können intuitiv „Nachbarschaften“ ähnlicher Musik
erkunden.
Genre-Territorien
Verschiedene Musikstile bilden natürliche Cluster auf der Map.
Techno-Tracks befinden sich in einem Bereich, House in einem
anderen - wie mentale Genre-Zuordnungen.
Übergangszonen
Zwischen verschiedenen Genre-Clustern entstehen Übergangsge-
biete mit Hybrid-Tracks. Diese Zonen sind besonders wertvoll für
Set-Planung und musikalische Brücken.
*[Abbildung 7.7: Map-Territorien - Genre-Cluster und Übergangs-
zonen in der 2D-Visualisierung]*
76
07 Visual Design
Map-Visualisierung als mentales Modell
Konsistente Genre-Cluster
unterstützen
Spatial Memory
Stabile Positionierung
Tracks behalten ihre räumlichen Positionen bei, auch wenn neue
Musik zur Sammlung hinzugefügt wird. Diese Konsistenz ermög-
licht räumliches Lernen und Orientierung.
Spatial Memory-Bildung
DJs entwickeln räumliche Erinnerungen („Techno ist oben links,
Deep House unten rechts“). Diese mentalen Karten beschleunigen
die Navigation erheblich.
Zoom-Level-Konsistenz
Verschiedene Vergrößerungsebenen bewahren die relative Anord-
nung der Cluster. Details werden sichtbar ohne die grundlegende
räumliche Struktur zu verändern.
77
07 Visual Design
Audio-Integration & Playback-Design
WaveSurfer.js für sofortiges
visuelles Track-Verständnis
Waveform-Visualisierung
Jeder Track wird durch seine charakteristische Wellenform darge-
stellt. DJs erkennen Intro-Längen, Break-Positionen und Energie-
Verläufe ohne Playback.
Interaktive Timeline
Klicks auf die Waveform springen direkt zu gewünschten Track-
Positionen. Diese Funktionalität beschleunigt die Track-Bewertung
erheblich.
Visual Cues
Verschiedene Track-Bereiche (Intro, Breakdown, Drop) werden
durch Waveform-Charakteristika erkennbar. Erfahrene DJs lesen
diese visuellen Informationen wie eine Partitur.
*[Abbildung 7.9: WaveSurfer.js-Integration - Interaktive Waveform
mit Playback-Kontrollen]*
Die Designentscheidungen ergeben ein kohärentes System, das
DJ-spezifische Arbeitsweisen unterstützt ohne etablierte Work-
flows zu unterbrechen. Jede Interface-Komponente dient der
zentralen Aufgabe:
Musikorganisation zu beschleunigen und zu verbessern.
78
79
08 Evaluation & Ausblick
80
81
08 Visual Design
Projektergebnisse-Synthese
Validierte Designprinzipien
Unsere empirische Forschung bestätigte vier zentrale Design-
prinzipien, die für DJ-Software-Entwicklung entscheidend
sind:
Augmentation statt Automation
DJs wollen kurative Kontrolle behalten und lehnen Vollautomatisie-
rung ab. AI soll unterstützen, nicht ersetzen. Diese Erkenntnis zieht
sich durch alle Interviews und wurde in den Usability-Tests deut-
lich bestätigt.
Hybride Visualisierung löst das Usability-Funktionalität-Dilem-
ma
Die Kombination aus automatischer Exploration (Similarity Mode)
und interpretierbarer Darstellung (XY Mode) erfüllt sowohl explora-
tive als auch gezielte Nutzungsszenarien.
Personalisierung ist entscheidend
Das adaptive MY TAGS System, das individuelle DJ-Terminologie
lernt, traf die Nutzeranforderungen präzise. Jeder DJ entwickelt
eigene Organisationssprache, die von Software unterstützt werden
muss.
Workflow-Integration beats Feature-Maximierung
Statt maximaler Funktionalität benötigen DJs nahtlose Integration
zwischen den Workflow-Phasen Discovery, Organisation und Per-
formance.
82
08 Visual Design
Projektergebnisse-Synthese
Zentrale Forschungser-
kenntnisse
DJ-Workflows sind fragmentierter als angenommen
Unsere Interviews offenbarten, dass DJs durchschnittlich 8-12 ver-
schiedene Tools parallel nutzen. Diese Fragmentierung ist histo-
risch gewachsen und strukturell schwer auflösbar.
Organisationszeit übersteigt Performance-Zeit deutlich
80-90% der musikbezogenen Zeit fließt in organisatorische Auf-
gaben. Dieses Verhältnis wurde unterschätzt und zeigt enormes
Optimierungspotential.
Live-Performance-Stress entsteht durch unzureichende Vor-
bereitung
Die kritischen Momente beim Live-DJing sind direkte Folge organi-
satorischer Schwächen. Bessere Tools zur Vorbereitung reduzieren
Performance-Stress erheblich.
Genre-übergreifende Problempatterns
Trotz verschiedener Musikrichtungen zeigen alle DJs ähnliche
Organisationsprobleme. Die Lösungsansätze sind daher breit an-
wendbar.
83
08 Visual Design
Projektergebnisse-Synthese
Marktlücke konkretisiert
Die Competitive Analysis bestätigte eine strukturelle Marktlücke
zwischen Performance-orientierten und Verwaltungs-orientierten
Tools. Keine bestehende Lösung integriert Deep-Organisation mit
DJ-spezifischen Features.
Die strategische Fokussierung auf Vorbereitung statt Live-Perfor-
mance ermöglicht Koexistenz mit etablierten Playern (Rekordbox,
Serato) ohne direkte Konfrontation. DJs können unser Tool für
Organisation nutzen und trotzdem ihre gewohnte Performance-
Software beibehalten.
84
08 Visual Design
Human Centered Design Reflexion
Methodische Erkenntnisse
Mixed-Methods-Ansatz bewährt sich
Die Kombination aus qualitativen Interviews und systematischer
Competitive Analysis lieferte sowohl tiefe Nutzerinsights als auch
objektive Marktdaten. Reine quantitative Umfragen hätten die
emotionalen und kontextuellen Aspekte nicht erfasst.
Personas als Design-Anker funktionieren
Die drei entwickelten Personas (Jasmin, Lio, Samuel) dienten
durchgängig als Referenz für Design-Entscheidungen. Konkrete
Nutzerbilder verhindern Feature-Inflation und technologie-getrie-
bene Entwicklung.
Prototyping ermöglicht frühe Validierung
Der funktionsfähige bewies die Machbarkeit unserer Konzepte und
identifizierte Usability-Probleme vor aufwändiger Vollentwicklung.
Überraschende Erkennt-
nisse
Tool-Fragmentierung wird gedulded
DJs betrachten die Nutzung vieler Tools nicht prinzipiell als Prob-
lem, sondern als normale Arbeitsrealität. Sie wollen bessere Integ-
ration, aber nicht notwendigerweise eine Allround-Lösung.
Kreativität durch Beschränkung
Viele DJs schätzen die Beschränkungen ihrer aktuellen Tools, da
diese kreative Lösungen fordern. Vollständige Automation würde
diese geschätzte Herausforderung eliminieren.
Community-Aspekte unterschätzt
Musik-Discovery erfolgt stark über soziale Netzwerke und DJ-
Communities. Rein technische Lösungen greifen zu kurz.
Performance-Kontext beeinflusst Organisation
Club-DJs organisieren anders als Event-DJs oder Producer. Diese
kontextuellen Unterschiede sind für Software-Design relevanter als
Genre-Präferenzen.
85
08 Visual Design
Human Centered Design Reflexion
Design-Iteration basierend
auf Nutzer-Feedback
Die Usability-Tests führten zu konkreten Interface-
Optimierungen
Übergang von Listen- zu räumlicher Visualisierung
Eine reine eindimensionale Listendarstellung erwies sich als un-
zureichend für explorative Library-Erkundung und verhinderte die
optimale Nutzung der neu angereicherten Metadaten
Reduzierte AI-Bevormundung bei Genre-Klassifikation
DJs fühlten sich durch vorgegebene AI-ermittelte Stile bevormun-
det, was zur Entwicklung des personalisierbaren MY TAGS Sys-
tems führte
Diese Iterationen zeigen den Wert früher Nutzer-Einbindung und
bestätigen den Human Centered Design Ansatz.
86
08 Visual Design
Technische Validierung
AI-Algorithmus-Perfor-
mance
Audio-Feature-Extraction bewährt sich
Die Extraktion von über 400 Audio-Features pro Track liefert nutz-
bare Similarity-Berechnungen. Cosine-Similarity zwischen Feature-
Vektoren korreliert gut mit subjektiven DJ-Einschätzungen.
Similarity-Visualization funktioniert
t-SNE-basierte 2D-Projektionen preservieren lokale Ähnlichkeits-
strukturen ausreichend für intuitive Navigation. Nutzer erkannten
musikalische Cluster ohne Erklärung.
Adaptive Tagging zeigt Potential
MY TAGS System lernte individuelle Nutzersprache innerhalb
weniger Beispiele. Konfidenz-Scores helfen bei der Bewertung
automatischer Vorschläge.
*[Abbildung 8.8: AI-Performance Metriken - Accuracy und User-
Satisfaction-Korrelationen]*
87
88
89
90
91
92
93
94
95
96
97