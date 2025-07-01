Bachelorthesis
Optimierung der Abwicklung von
Krankentransporten
Bachelorthesis
Interaktionsgestaltung
Wintersemester 2024/2025
Verfasser:innen
Jun Wang
Mark Eisele
Betreuer
Prof. Andreas Pollok
Prof. Hartmut Bohnacker
Einsatz von KI
Es wurde an einigen Stellen KI-Tools zur Unterstützung bei der
Rechtschreib- und Grammatikkorrektur eingesetzt. Die endgültige
Verantwortung für den Inhalt und die Aussage der Arbeit liegt bei den
Verfasser:innen.
Hinweis zu gendergerechter Sprache
In der vorliegenden Arbeit wird der Gender-Doppelpunkt verwendet,
um sprachliche Hierarchien zu vermeiden und alle Geschlechter sowie
Identitäten gleichermaßen einzuschließen.
Inhaltverzeichnis
Einleitung
Abstract 13
Motivation 14
Projektübersicht 16
Projektablauf 18
Arbeitsweise 19
Recherche und Analyse
Rechercheansatz 24
Gesundheitssystem in Deutschland 25
Definition von Krankentransport 26
Arten von Krankentransporten 28
Rolle des Krankentransports im deutschen Gesundheitssystem 30
Ablauf einer Krankenfahrt 32
Was ist der Transportschein? 34
Welche Informationen enthält der Transportschein? 36
Auftretende Probleme 39
Krankentransport im Ausland 41
Interviews 42
Patient:innen 46
Deutschen Roten Kreuz — Schwäbisch Gmünd 48
Taxiunternehmen 50
Medizinische Fachangestellte 52
Pflegefachkräfte 53
Kundencentermitarbeiterin 54
Teamleiter der Transportscheinabrechnung 56
Die Beteiligten im Krankentransport 58
Patient:innen 60
Medizinisches Personal 64
Fahrdienste 66
Krankenkasse 70
Prozessanalyse 73
User Journeys und Error Flows 76
Digitale Systeme 78
Patient:innen 79
Arztpraxen 81
Fahrdienste 82
Krankenkassen 85
Pflegeheime 86
Synthese
Fehlerquellen im Transportschein 90
Kommunikations- und Koordinationsprobleme 94
Auswirkungen und Folgen des aktuellen Systems 100
Identifizierte Probleme 102
Handlungsspielräume 104
Unsere Zielgruppe 108
Patient:innen 110
Fahrdienste 111
Arztpraxis 112
Krankenkasse 113
Value Proposition Canvas 114
Zielsetzung 116
Design Principles 118
Brand Filters 120
Konzeption
Konzept 1 125
Überarbeitung des Prozesses 126
Solo Design Sprint 1: Erstellungslösung für Transportscheine Solo Design Sprint 2: Abrechnungslösung für Fahrdienste 128
130
Prozessoptimierung 132
Inhaltverzeichnis
Feedback zu Konzept 1 134
Feedback eines Taxiunternehmen 135
Feedback des Deutschen Roten Kreuz Feedback von Arztpraxen 138
Konzept 2 140
Für Arztpraxen — Optimierung der Transportscheinerstellung Für Patient:innen — Organisation von Krankentransporten 136
142
144
Informationsarchitektur der Begleitapp 146
Feedback zu Konzept 2 148
Umsetzung
Logo 152
Name 154
Typografie 156
Ikonografie 158
Farben 160
UI Elemente 162
Barrierefreiheit 164
Ergebnis
Der eTransportschein 168
Der neue Prozess 172
Service Blueprint und drei User Journeys 179
Feedback der gematik zum finalen Konzept 192
Beteiligte und ihre Zugänge 194
Patient:innen 195
Angehörige 216
Pflegefachkräfte 218
Medizinisches Personal 220
Fahrdienste 230
Krankenkassen 236
Einführung in Deutschland 238
Kommunikation des neuen Prozesses 242
Ausblick 244
Anhang
Abkürzungsverzeichnis 248
Definitionsverzeichnis 250
Literaturverzeichnis 252
Abbildungsverzeichnis 256
Danksagung 262
Eidesstattliche Erklärung 263
Einleitung
“
Diese Bachelorarbeit entstand im Wintersemester 2024/25
an der Hochschule für Gestaltung-Schwäbisch Gmünd im
Studiengang Interaktionsgestaltung.
Sie stellt die Abschlussleistung dar und dient dazu,
nachzuweisen, ob die Studienziele erreicht wurden.
Bei erfolgreichem Bestehen wird der akademische Grad
Bachelor of Arts (BA) verleihen, welcher den Abschluss des
Studiums bestätigt.
Im Rahmen dieser Arbeit werden die im Studium erworbenen
und vertieften Kenntnisse angewendet, um ein umsetzbares
Konzept zur Abwicklung von Krankentransporten in
Deutschland zu entwickeln.
Einleitung
12 - 13
Abstract
In dieser Bachelorarbeit wurde ein implementierbares Konzept zur
Optimierung der Abwicklung von Krankentransporten in Deutschland
entwickelt. Das System basiert auf einem angepassten Prozess, welcher
einen zentralen digitalen Speicher nutzt. Dieser Speicher ist für alle
Beteiligten zugänglich und ermöglicht einen effizienten Informations-
austausch. Dadurch werden sowohl Fehlerquellen minimiert als auch die
Effizienz der Krankentransportabwicklung gesteigert.
Einleitung
Motivation
Die jüngst gestiegenen Zusatzbeiträge der gesetzlichen Krankenkassen
sind lediglich das neueste Indiz einer Reihe von Indikatoren, die auf die
erheblichen Herausforderungen im deutschen Gesundheitswesen
hinweisen (Krankenkassen-Verband kündigt weitere Beitragserhöhungen an,
2024; Healthcare-Barometer 2024, o. D.). Sie unterstreichen die dringende
Notwendigkeit von Reformen, um die langfristige Stabilität der Versorgung
sicherzustellen. Die Digitalisierung nimmt dabei eine Schlüsselrolle ein und
wird gesetzlich vorangetrieben, um eine effizientere und zukunftsfähige
Versorgung zu gewährleisten (Gesetz zur Beschleunigung der Digitalisierung
des Gesundheitswesens (Digital-Gesetz – DigiG), o.D.).
Der Impuls, unsere Bachelorarbeit der Optimierung der Abwicklung
von Krankentransporten zu widmen, entstand aus Gesprächen mit
Beteiligten, die uns die prekären Zustände und Herausforderungen des
aktuellen Systems aufzeigten.
Wir als Designer:innen sind überzeugt, dass digitale Lösungen dazu
beitragen können, reibungslose Abläufe für Patient:innen und Fach-
personal sicherzustellen. Unser Ziel ist es, einen Ansatz zu entwickeln, der
die Qualität der Betreuung und die Effizienz nachhaltig verbessert, wobei
wir gleichermaßen die Bedürfnisse der Patient:innen und die Entlastung
des Fachpersonals berücksichtigen.
Optimierte Prozesse können einen wesentlichen Beitrag zur Weiter-
entwicklung und Modernisierung des Gesundheitswesens leisten.
14 - 15
Abb. 1 Team
Einleitung
Projektübersicht
Relevanz
In Deutschland übernehmen die Krankenkassen jährlich ca. 45 Millionen
Krankentransportfahrten, die aus medizinischen Gründen notwendig
sind (Gesetzliche Krankenversicherung Leistungsfälle und -tage 2022, 2023).
Diese Fahrten spielen eine essenzielle Rolle im Gesundheitssystem,
da sie sicherstellen, dass Patient:innen rechtzeitig zu Arztterminen,
Behandlungen oder stationären Aufnahmen gelangen und im Bedarfsfall
auch nach Hause zurückgebracht werden. Der aktuelle Prozess zur
Abwicklung von Krankentransporten ist durch die Vielzahl an Beteiligten
und Prozessschritten komplex und anspruchsvoll. Fehler treten dabei
häufig auf und lassen sich oft nur mit erheblichem Zeitaufwand beheben,
was zu zusätzlichem Aufwand und Belastung für alle Beteiligten führt.
Zielsetzung
In dieser Bachelorarbeit möchten wir einen verbesserten Abwicklungs-
prozess für Krankentransporte entwickeln, der durch die Reduktion
von Fehlern die Effizienz steigert und die Beteiligten Akteure entlastet.
Dies umfasst eine vereinfachte Ausstellung von Transportscheinen, eine
fehlerfreie Abrechnung und eine bessere Kommunikation zwischen den
Beteiligten.
Potenzial
Durch optimierte Prozesse können Krankentransporte schneller
und effizienter abgewickelt werden. Dies verringert nicht nur den
administrativen Aufwand, sondern steigert auch die Effizienz bei den
Fahrdiensten und Krankenkassen. Eine digitale Lösung könnte die
Beauftragung, Genehmigung, Prüfung und Abrechnung von Kranken-
transporten beschleunigen und gleichzeitig Fehlerquellen reduzieren.
16 - 17
Wie können wir die Kommunikation,
Koordination und Informations-
übermittlung im Krankentransport
effizienter gestalten und ein geringes
Fehleraufkommen sicherstellen, um die
Prozessabwicklung zu optimieren?
Einleitung
Projektablauf
Der Projektablauf gliederte sich in mehrere Phasen, welche sich am
Design Thinking und Double Diamond Prozess orientierten.
In der „Recherche- und Analysephase“ bestand unser primäres
Ziel darin, die Bedürfnisse und Anforderungen der Nutzer:innen durch
Interviews mit den Beteiligten zu verstehen. Der gesamte Prozess wurde
abstrahiert aufgearbeitet und visuell dargestellt.
In der „Synthesephase“ wurden die gesammelten Daten detailliert
analysiert, um die Kernprobleme zu identifizieren und konkrete Ansatz-
punkte für das Konzept herauszuarbeiten.
In der „Konzeptionsphase“ wurden Ideen generiert und in einem
Design Sprint ein erstes Konzept entwickelt. Dieses Konzept wurde
getestet, überarbeitet und anschließend in einer zweiten Iteration
weiterentwickelt. Das finale Konzept baut auf den Erkenntnissen und
Erfahrungen aus beiden Iterationen auf.
In der „Umsetzungsphase“ wurde ein zugrundeliegendes Design-
system für die visuelle Gestaltung entwickelt und das finale Konzept
detailliert ausgearbeitet und aufbereitet. Die Realisierung und
Darstellung des Konzepts erfolgte anhand einer User Story.
18 - 19
Arbeitsweise
Für die erfolgreiche Durchführung unseres Bachelorprojekts erstellten
wir zu Beginn einen Projektplan. Dieser enthielt neben den einzelnen
Projektphasen auch alle Zwischenziele, die uns dabei halfen, den
Projektverlauf effektiv zu steuern und den zeitlichen Rahmen im Blick
zu behalten. Die Zwischenziele dienten insbesondere dazu, den Fortschritt
zu überwachen und anstehende Aufgaben klaren Zielen zuzuordnen.
Die Koordination der Aufgaben erfolgte über ein digitales Kanban-
Board. Die Projektarbeit war größtenteils kollaborativ ausgerichtet, um
durch Austausch und Diskurs optimale Lösungen zu entwickeln. In der
Umsetzungsphase wurden die Aufgaben zunehmend aufgeteilt, um die
Effizienz zu steigern und die individuellen Stärken der Teammitglieder
gezielt einzusetzen. Das Designsystem sowie die Screens und Screenflows
wurden gemeinsam entwickelt, da diese Aufgaben zentrale Bestandteile
des Studiengangs und späterer Berufsfelder sind. Die weiteren Bestand-
teile der Abgabe wurden überwiegend in Einzelarbeit erstellt, wobei
regelmäßige Absprachen und Feedback mit dem anderen Teammitglied
stattfanden.
Projektplan
20 - 21
Zeitraum
Oktober November Dezember Januar Februar
Arbeitsablauf
Recherche und Analyse
Konzept und Ideenfindung
Prozessgestaltung –
Entwicklung und Testing
Visuelle Gestaltung –
Prototyping und Testing
Finales Konzept und Umsetzung
Finalisierung
Meilensteine
Recherche
und Synthese
Konzept entwickeln
und testen
Lösungen umsetzen
und bewerten
Abb. 2 Projektplan
Recherche und
Analyse
“
Das Ziel der Recherche-Phase war es, das Thema Kranken-
transport und dessen Durchführung in Deutschland umfassend
zu verstehen. Es war wichtig, ein tiefgreifendes Verständnis
über die verschiedenen Prozessschritte sowie die Beteiligten
zu erlangen, um deren Rollen und Aufgaben im Prozess zu
verstehen. Darüber hinaus sollten mögliche Fehlerquellen,
Herausforderungen und Optimierungs-möglichkeiten
aufgedeckt werden.
Recherche und Analyse
24 - 25
Rechercheansatz
Gesundheitssystem in
Deutschland
Zu Beginn sammelten wir durch Sekundärrecherche allgemeine
Informationen zum Thema Krankentransport. Der Schwerpunkt lag dabei
insbesondere darauf, den gesetzlichen und systemischen Rahmen zu
analysieren. Ergänzend befassten wir uns mit den technischen Hilfs-
mitteln und Systemen, die im Krankentransport eingesetzt werden.
Geeignete Sekundärquellen, die sich mit den Perspektiven der Beteiligten
im Krankentransport auseinandersetzen, waren kaum verfügbar.
Daher legten wir einen großen Fokus auf die Primärrecherche,
indem wir vorbereitete Interviews mit Beteiligten des Krankentransport-
prozesses durchführten. Ziel dieser Gespräche war es, tiefte Einblicke in
die Aufgaben, Anforderungen, Bedürfnisse, Probleme und Sichtweisen der
Beteiligten zu gewinnen.
In Deutschland existieren zwei zentrale Systeme der Krankenversicherung:
die gesetzliche und die private Krankenversicherung. Die gesetzliche
Krankenversicherung ist für die Mehrheit der Bevölkerung verpflichtend
und basiert auf dem Solidaritätsprinzip: Beiträge richten sich nach dem
Einkommen, und die medizinischen Leistungen sind für alle Versicherte
gleich. Die private Krankenversicherung hingegen ist einkommens-
unabhängig und bietet oft individuellere Tarife. Der medizinische
Leistungsumfang kann angepasst werden (PKV oder GKV: Was ist 2024
besser?, 2024).
Die medizinische Versorgung in Deutschland wird durch nieder-
gelassene Ärzt:innen, Krankenhäuser und spezialisierte Einrichtungen
ermöglicht. Aktuelle Diskussionen konzentrieren sich auf Heraus-
forderungen wie den demografischen Wandel, wachsende Kosten und
den dringenden Bedarf an Digitalisierung, um das System zukunftsfähig
zu machen (Healthcare-Barometer 2024, o. D.).
Eine zentrale Rolle in der Digitalisierung des Gesundheitssystems spielt
die gematik. Sie ist die Nationale Agentur für Digitale Medizin, welche die
technische Infrastruktur für Anwendungen wie die elektronische
Patientenakte (ePA) oder das E-Rezept entwickelt und Standards definiert.
Ihr Ziel ist es, Prozesse im Gesundheitswesen effizienter zu gestalten und
den Datenaustausch zwischen Beteiligten wie Ärzt:innen, Apotheken und
Patient:innen zu gewährleisten (Über uns, o. D.).
Das Digitale-Versorgung-und-Pflege-Modernisierungs-Gesetz
(DVPMG) ist ein deutsches Gesetz, das am 1. Juni 2021 in Kraft getreten ist.
Es wurde eingeführt, um die Digitalisierung im Gesundheits- und Pflege-
bereich voranzutreiben und die Versorgung von Patient:innen sowie
Pflegebedürftigen durch digitale Technologien zu verbessern. Es schafft
die Grundlage für eine effizientere, vernetzte und patientenorientierte
Versorgung, indem es digitale Anwendungen und Infrastrukturen stärkt.
Es ist ein wichtiger Schritt zu einer modernen und digitalen Gesundheits-
versorgung in Deutschland (Digitale–Versorgung–und–Pflege–
Modernisierungs–Gesetz (DVPMG), o.D.).
Recherche und Analyse
Definition von Krankentransport
Definition In Deutschland können Patient:innen befördert werden, wenn das im
Zusammenhang mit einer Leistung der Krankenkasse aus zwingenden
medizinischen Gründen notwendig ist (SGB V, 1988, § 60, Abs. 1). Solche
Fahrten werden als Krankentransporte bezeichnet.
Die Krankentransporte werden inoffiziell in qualifizierte und unqualifizierte
Transporte unterteilt. Als qualifizierte Krankentransporte bezeichnet man
die Beförderung von Patient:innen in einem Fahrzeug, das von
geschultem, nicht-ärztlichem Rettungsfachpersonal begleitet wird.
Für solche Transporte werden spezielle Krankentransportwagen (KTW)
eingesetzt. Diese Fahrzeuge sind größer und verfügen über eine
umfassende Ausstattung, darunter ein Defibrillator, ein Notfallkoffer,
eine Patiententrage, ein Tragestuhl sowie weitere wichtige medizinische
Ausrüstungsgegenstände (Krankentransportwagen (KTW), o. D.).
Als unqualifizierte Krankentransporte wird die Beförderung von
Patient:innen ohne die Begleitung von Rettungsfachpersonal bezeichnet.
Diese Fahrten werden von Taxiunternehmen oder von medizinischen
Fahrdiensten durchgeführt. In der Regel werden die Patient:innen in
gewöhnlichen Fahrzeugen befördert. Die Fahrdienste verfügen jedoch
meist auch über spezielle Fahrzeuge, die eine Beförderung im Liegen,
per Tragestuhl oder im Rollstuhl ermöglichen. Diese Fahrten werden auch
als Krankenfahrten bezeichnet (RDG, 2024, § 1, Abs. 3).
Der Unterschied zwischen Krankentransport und Notfallrettung
Der Unterschied zwischen Krankentransport und Notfallrettung liegt in der
Dringlichkeit und Art der Betreuung. Die Notfallrettung umfasst die
Versorgung von Patient:innen, die sich in Lebensgefahr befinden oder
bei denen ohne sofortige Hilfe schwere gesundheitliche Schäden drohen.
Hierbei werden Maßnahmen zur Lebensrettung eingeleitet, Patient:innen
transportfähig gemacht und fachgerecht in eine geeignete Versorgungs-
einrichtung gebracht. Im Gegensatz dazu betrifft der Krankentransport die
26 - 27
Beförderung von Kranken, Verletzten oder Hilfebedürftigen, denen bei
Bedarf Erste Hilfe geleistet wird und die unter fachgerechter Betreuung
transportiert werden. Das sind Patient:innen, die keine akute Notlage
haben und keine umfassende medizinische Überwachung während der
Fahrt benötigen (RDG, 2024, § 1, Abs. 1-2).
Der Unterschied zwischen Krankentransport und
Notfallrettung liegt in der Dringlichkeit und Art der Betreuung.
Welche Fahrten gelten als Krankentransporte?
Krankentransporte umfassen vor allem Fahrten zu ambulanten
Behandlungen, wie Besuche in Arztpraxen und Kliniken, beispielsweise
für Dialyse, Chemotherapie oder Strahlentherapie. Auch Transporte ins
Krankenhaus oder nach der Entlassung, Verlegungen zwischen Kranken-
häusern sowie Fahrten vor oder nach ambulanten Operationen zählen
dazu. Zudem werden Krankentransporte häufig für Personen mit
körperlichen Einschränkungen organisiert, die öffentliche Verkehrsmittel
nicht nutzen können.
Recherche und Analyse
Arten von Krankentransporten
Die Wahl des Fahrzeuges richtet sich nach der medizinischen Notwendig-
keit im Einzelfall. Mehr als 85% der jährlichen Kranken-transporte werden
mit Taxis oder Mietwagen durchgeführt. Dazu gehören auch speziell
ausgestattete Fahrzeuge, die den Transport von Personen im Rollstuhl
ermöglichen (SGB V, 1988, § 60, Abs. 1; Gesetzliche Krankenversicherung
Leistungsfälle und -tage 2022, 2023).
Als Alternative zu Taxi und Mietwagen steht der Krankentransport-
wagen (KTW) zur Verfügung. Dieser ist mit allgemeiner medizinischer
Ausrüstung ausgestattet und wird von medizinisch geschultem Personal,
in der Regel Rettungssanitäter:innen, gefahren. Dadurch ist eine
medizinische Überwachung und Betreuung während der Fahrt gewähr-
\leistet. Patient:innen können im KTW liegend oder in einem Tragestuhl
transportiert werden. Die Beförderung mit einem Krankentransportwagen
kann auch bei hoher Nachfrage nach KTW und geringer Anzahl an
Notfällen durch Rettungswagen (RTW) mit Notfallrettungsbesatzung
erfolgen. Da Fahrten mit Krankentransportwagen kostenintensiver als
Fahrten mit einem Taxi und Mietwagen sind, gelten seitens der Kranken-
kassen strengere Voraussetzungen für deren Verordnung.
Neben Krankentransporte können Patient:innen auch andere
Transportmöglichkeiten nutzen, deren Kosten von der Krankenkasse
übernommen werden. Dazu zählen öffentliche Verkehrsmittel sowie
private Kraftfahrzeuge, wobei die Übernahme jeweils von der
medizinischen Notwendigkeit abhängt (SGB V, 1988, § 60, Abs. 3).
28 - 29
Abb. 3 Normales Taxi
Abb. 4 Taxi für die Rollstuhlbeförderung
Abb. 5 KTW mit medizinischer Ausrüstung
Recherche und Analyse
Recherche und Analyse
Rolle des Krankentransports im
deutschen Gesundheitssystem
In Deutschland übernimmt die Krankenkasse die Kosten für Fahrten
und Transporte, wenn diese aus zwingenden medizinischen Gründen im
Zusammenhang mit einer Leistung der Krankenkasse erforderlich sind
(SGB V, 1988, § 60, Abs. 1). Die genauen Krankheitsbilder und Voraus-
setzungen für die Kostenübernahme sind im fünften Sozialgesetzbuch
festgelegt.
Im deutschen Gesundheitssystem erhalten die versicherten Personen
die Leistungen als Dienstleistungen. Sie können frei wählen, welches
Dienstleistungsunternehmen sie nutzen möchten. Nach der Erbringung
der Leistung erfolgt die Abrechnung direkt zwischen dem Dienstleister und
der Krankenkasse (SGB V, 1988, § 2, Abs. 2-3). Krankenkassen können
zudem Verträge mit bestimmten Dienstleistern abschließen (SGB V, 1988,
§ 64, Abs. 1). Die Versicherten profitieren dadurch von einem
unkomplizierten Zugang zu den Leistungen, ohne sich selbst um die
Kostenerstattung kümmern zu müssen.
Privatversicherte müssen die Kosten für Krankentransporte zunächst
selbst tragen und diese anschließend bei ihrer Versicherung einreichen,
um eine Kostenerstattung zu erhalten. Fahrten, die keine medizinische
Notwendigkeit haben, müssen unabhängig von der Art der Versicherung
von der beförderten Person selbst bezahlt werden.
Jährlich besteht ein hohes Aufkommen von Krankentransporten.
Allein im Jahr 2022 wurden etwa 45 Millionen Fahrten von den Kranken-
kassen übernommen. Die Anzahl der durchgeführten Krankentransporte
ist in den letzten zehn Jahren weitgehend stabil geblieben (Gesetzliche
Kranken-versicherung Leistungsfälle und -tage 2022, 2023).
Anzahl an Krankentransporten in 2022
Krankentransportwagen (KTW)
6 Millionen
13%
45 Millionen
Transporte
87%
Abb. 6 Anzahl an Krankentransporten in 2022
30 - 31
Taxi und Mietwagen
39 Millionen
Recherche und Analyse
Ablauf einer Krankenfahrt
Wenn eine Krankenfahrt erforderlich ist, stellt die behandelnde Ärztin
oder der behandelnde Arzt zunächst die medizinische Notwendigkeit fest.
Dazu wird ein sogenannter Transportschein ausgefüllt, auf dem alle
relevanten Informationen zur Krankenfahrt festgehalten werden.
In einigen Fällen ist zusätzlich eine vorherige Genehmigung durch die
Krankenkasse erforderlich. Dazu reicht die zu behandelnde Person den
Transportschein bei der Krankenkasse ein. Das kann in der Filiale oder
per Post erfolgen. Nach Prüfung wird entweder der Transportschein
genehmigt oder gegen ein Dokument ausgetauscht, das die Fahrtfreigabe
enthält. Dieses enthält alle relevanten Daten zur Fahrt, jedoch keine
medizinischen Details.
Im nächsten Schritt wird die Fahrt durch die zu befördernde Person bei
einem für Krankentransporte qualifizierten Fahrdienst gebucht. Das erfolgt
meist telefonisch. Dabei werden die persönlichen Daten und der
gewünschte Termin aufgenommen.
Fahrtbeginn
Am Tag der Fahrt wird die zu befördernde Person vom Fahrdienst-
personal abgeholt. Falls nötig, leistet das Personal Unterstützung beim
Einsteigen ins Fahrzeug. Vor Fahrtbeginn wird der Transportschein oder
das Genehmigungsdokument übergeben und auf Richtigkeit geprüft.
Während der Fahrt erfolgt, falls erforderlich, eine medizinische
Betreuung, die meist aus einem Gespräch mit der Patientin oder dem
Patienten besteht und bei Bedarf durch weitere Maßnahmen ergänzt
werden kann.
Am Zielort angekommen, wird die Fahrt auf dem Transportschein oder
dem Genehmigungsdokument vermerkt und von der beförderten Person
durch eine Unterschrift bestätigt. Eventuell anfallende Zuzahlungen
werden direkt entrichtet. Falls nötig, wird die beförderte Person dem
Personal der Behandlungsstätte übergeben.
32 - 33
Nach der Fahrt
Nach Abschluss der Fahrt übergibt die beförderte Person den
Transportschein oder das Genehmigungsdokument an den Fahrdienst.
Der Fahrdienst ergänzt die Abrechnungsdaten und reicht die Unterlagen
zusammen mit einer Rechnung bei der Krankenkasse ein. Gesetzliche
Krankenkassen haben eine eigene Abrechnungsstelle oder nutzen ein
externes Abrechnungszentrum. Das ist ein Dienstleister der die
Abrechnungen im Auftrag der Krankenkasse durchführt.
Die Erstattung erfolgt in der Regel innerhalb von 8 bis 12 Wochen
nach Eingang der Dokumente.
Fahrer:in
Arztpraxis
erstellt Transportschein übermittelt Transportschein
Patient:in Fahrdienst
befördert Patient:in
Zielort
übermittelt
Transportschein
genehmigt
Transportschein
Abrechnung
übermittelt
Transportschein
Krankenkasse
bezahlt Fahrt
Abb. 7 Ablauf eines Krankentransports
Recherche und Analyse
34 - 35
Was ist der Transportschein?
Das Formular “Muster 4 - Verordnung einer Krankenbeförderung”,
allgemein als Transportschein bekannt, wird im deutschen Gesundheits-
system für die Ausstellung eines Krankentransports verwendet.
Dieses Dokument wird ausschließlich von Ärzt:innen ausgestellt und
enthält alle wesentlichen Informationen für den medizinischen Transport
von Patient:innen (Alle Infos rund um den Transportschein, o. D.). Auch in
der Notfallrettung findet der Transportschein in einigen Landkreisen
Anwendung. Bei der Einlieferung einer Person in eine Klinik erhält die
Rettungswagenbesatzung einen Transportschein, der für die Abrechnung
der erbrachten Fahrt benötigt wird.
Der Transportschein hat zwei Funktionen. Zum einen dient er der
Planung und Durchführung des Transports. Die Notwendigkeit des
Transports sowie die relevanten Patientendaten werden eingetragen,
sodass die zu behandelnde Person mit diesem Dokument einen passenden
Fahrdienst organisieren kann. Zum anderen bildet der Transportschein
die Grundlage für die Abrechnung der durchgeführten Fahrten mit der
Krankenkasse. Ohne einen korrekt ausgefüllten Transportschein können
Fahrdienste keine Kostenübernahme bei der Krankenkasse beantragen.
Seit Juli 2020 wird in Deutschland eine aktualisierte Version des
Transportscheins verwendet. Diese Änderung basiert auf Anpassungen
des zugrundeliegenden Sozialgesetzes und mit der Bestrebung, die
Genehmigungsverfahren für bestimmte Patientengruppen zu erleichtern
und den bürokratischen Aufwand zu verringern (Alle Infos rund um den
Transportschein, o. D.).
Abb. 8 Transportschein (Muster 4)
Recherche und Analyse
Welche Informationen enthält der
Transportschein?
Vorderseite
Der Transportschein ist ein beidseitiges Formular im DIN A5 Format.
Die Vorderseite wird ausschließlich von der behandelnden Ärztin oder
dem behandelnden Arzt ausgefüllt, während die Rückseite von der zu
befördernden Person und dem Fahrdienst ergänzt wird (Alle Infos rund um
den Transportschein, o. D.).
Zuzahlung
Je nach Krankenkasse und Einzelfall gelten Regelungen, ob die zu
befördernde Person eine Zuzahlung leisten muss und in welcher Höhe
diese anfällt.
Angaben zur Krankenkasse und zum Versicherten
Es sind die Daten der zu befördernden Person sowie der Krankenkasse als
Kostenträger anzugeben. Zusätzlich müssen die Betriebsstätten- und
Arztnummer zur Identifikation der ausstellenden Ärztin oder des Arztes
ergänzt werden.
Kostenträger
Die Ärzt:innen geben an, ob die Beförderung aufgrund eines Unfalls, einer
Unfallfolge oder einer Berufskrankheit erforderlich ist.
Hin- und Rückfahrt
Der Arzt entscheidet, ob eine einfache Fahrt oder eine Hin- und Rückfahrt
erforderlich ist.
Genehmigungsfreie Fahrten
Einige Fahrten benötigen keine Genehmigung durch die Krankenkasse,
etwa bei einer erheblichen Mobilitätseinschränkung der zu befördernden
Person, bei Fahrten zu oder aus einem Krankenhaus, bei Verlegungs-
fahrten oder bei vor- und nachstationären Behandlungen.
36 - 37
Genehmigungspflichtige Fahrten
Eine Genehmigung ist erforderlich, wenn es sich um Fahrten zu hoch-
frequenten Behandlungen wie Dialyse oder Chemotherapie handelt.
Auch für Fahrten, die aufgrund medizinischer Umstände den Einsatz
eines Krankentransportwagens (KTW) erfordern, ist eine Genehmigung
notwendig.
Behandlungsinformationen
Das Datum der benötigten Fahrt sowie das Ziel werden angegeben. Bei
Serienfahrten sind zusätzlich das voraussichtliche Enddatum und die
Anzahl der geplanten Fahrten zu vermerken.
Transportmittel
Die Art des Fahrzeugs und die Art der Beförderung wird durch die Ärzt:
innen festgelegt.
Stempel und Unterschrift
Der Arzt oder die Ärztin bestätigt die Angaben durch Unterschrift und
Praxisstempel.
Rückseite
Bestätigung des Versicherten
Die genaue Fahrtstrecke, unter Angabe der Adressen, muss für jede Fahrt
dokumentiert und von der beförderten Person durch Unterschrift bestätigt
werden.
Zuzahlungsbefreiung
Ist die versicherte Person von der Zuzahlung befreit, muss dies vom
Fahrdienst entsprechend vermerkt werden.
Stempel und Unterschrift
Der Fahrdienst bestätigt die Durchführung der Fahrten mit Unterschrift
und Firmenstempel.
Abrechnungsdaten des Fahrdienstes
Abrechnungsrelevante Daten können ergänzt werden.
Recherche und Analyse
38 - 39
Auftretende Probleme
Die Abwicklung eines Krankentransports ist ein komplexer Prozess mit
mehreren Beteiligten. Bereits beim Ausfüllen des Transportscheins in der
Arztpraxis können fehlerhafte oder unvollständige Angaben entstehen.
Die Patient:innen bemerken diese Fehler häufig nicht und sind sich oft
über die erforderlichen Schritte, wie das Einholen einer Genehmigung,
nicht im Klaren. Krankenkassenmitarbeiter:innen können falsch
ausgefüllte Transportscheine prüfen, sobald diese von den Versicherten
eingereicht werden. Dabei müssen die Patient:innen jedoch wissen, dass
die Genehmigung der Fahrt durch die Krankenkasse in vielen Fällen
erforderlich ist.
Fehler im Transportschein werden oft erst entdeckt, wenn die
versicherte Person befördert werden soll und der Fahrdienst mit fehler-
haften Unterlagen konfrontiert wird. In solchen Fällen ist der Fahrdienst
gezwungen, die Korrektur des Transportscheins einzuleiten, da andernfalls
weder die Fahrt noch die Abrechnung mit der Krankenkasse möglich ist.
Dennoch wird die Fahrt in der Regel aufgrund der Dringlichkeit und des
medizinischen Zustands der versicherten Person durchgeführt.
Krankenkassen haben oft lange Bearbeitungszeiten und strenge Vor-
schriften. Das führt häufig dazu, dass Fahrdienste ihre Vergütung erst
nach 3 bis 12 Monaten erhalten, oder die Vergütung komplett abgelehnt
wird.
Die Abwicklung eines Krankentransports ist ein komplexer
Prozess mit mehreren Beteiligten.
Zusätzlich treten bei der Datenübermittlung zwischen den
verschiedenen Beteiligten häufig Medienbrüche auf. Digital erstellte
Informationen werden oft analog auf ein Formular übertragen, das
anschließend manuell wieder digitalisiert werden muss. Dieser Prozess
erhöht die Wahrscheinlichkeit von Eingabe- und Flüchtigkeitsfehlern
erheblich.
Recherche und Analyse
40 - 41
Krankentransport im Ausland
Die Kommunikation zwischen den Beteiligten gestaltet sich ebenfalls
schwierig. Oft fehlen Kontaktdaten, was eine Abstimmung im Falle von
Korrekturen erschwert. Der Hauptkommunikationsweg per Telefon
ermöglicht zwar eine schnelle Kontaktaufnahme, eignet sich, aufgrund von
Datenschutzbestimmungen und fehlender Identifikationsmöglichkeiten,
jedoch nicht für die Übermittlung korrigierter Dokumente oder
medizinischer Daten. In einigen Fällen werden Beteiligte persönlich
aufgesucht, um Fehler endgültig, jedoch mit erheblichem Zeitaufwand,
zu klären. So kommt es beispielsweise vor, dass Fahrdienstmitarbeiter:
innen Arztpraxen aufsuchen müssen, um einen korrigierten
Transportschein zu erhalten.
Trotz dieser Bemühungen kommt es vor, dass fehlerhafte
Verordnungen und verweigerte Auskünfte eine Korrektur und korrekte
Einreichung der Abrechnung unmöglich machen. Dies führt dazu, dass
Fahrdienste für erbrachte Fahrten keine Vergütung erhalten.
Die Abwicklung von Krankentransporten unterscheidet sich in Europa
erheblich.
In den skandinavischen und baltischen Ländern Europas ist das
Gesundheitswesen stark digitalisiert. Beispielsweise wird in Norwegen
die Plattform Helsenorge verwendet, in welche Patient:innen Einblick
in ihre Daten haben und gleichzeitig auch sämtliche Leistungen bei
Arztpraxen und anderen Gesundheitsdienstleistern buchen können.
Dadurch können Behandlungstermine und Krankentransporte digital
durch das medizinische Personal oder die Patient:innen gebucht werden
(Digitale helsetjenester i et felles økosystem, o. D.).
In Österreich, einem Nachbarland Deutschlands erfolgt die
Abwicklung des Krankentransports ähnlich zu dem deutschen System.
Die Notwendigkeit einer Beförderung wird durch das ärztliche Personal
festgestellt und auf einem Formular festgehalten. Die Patient:innen
können sich von einem zertifizierten Fahrdienst befördern lassen, welcher
anschließend mit der Österreichischen Gesundheitskasse abrechnet
(Krankentransporte und Fahrtkosten, o. D.). Das liegt daran, dass alle Patient:
innen in der gesetzlichen Krankenversicherung der Österreichischen
Gesundheitskasse (ÖGK) versichert sind. In 2020 wurden die damals
14 eigenständigen Krankenkassen zur ÖGK zusammengelegt
(Krankenversicherung, o.D.). Dadurch erhofft sich das österreichische
Sozialministerium eine erhebliche Effizienzsteigerung, welche für die
Bürger:innen des Landes in einer modernen, leistungsfähigen
Gesundheitsversorgung resultiert (Strukturreform Sozialversicherung, o.D.).
Recherche und Analyse
Interviews
Das Ziel der Experteninterviews bestand darin, durch den direkten
Austausch sowohl mit zentral Beteiligten als auch mit Randfiguren des
Prozesses ein umfassendes Verständnis zu gewinnen. Dies war besonders
wichtig, da trotz vorheriger umfassender Recherche nur begrenzt ge-
eignete Quellen und verwertbare Informationen zur Verfügung standen.
Daher nahmen wir frühzeitig Kontakt zu verschiedenen Beteiligten im
Krankentransportprozess auf: Patient:innen, Rettungssanitäter:innen,
Medizinische Fachangestellte in Arztpraxen, Altenpflegepersonal, Taxi-
fahrer:innen, Abrechnungssachbearbeiter:innen von Fahrdiensten, Mit-
arbeiter:innen von Krankenkassen, Mitarbeiter:innen von Abrechnungs-
zentren, Hersteller medizinischer Software.
Jedes Gespräch trug zum Verständnis des Prozessablaufs bei.
Die ersten Interviews konzentrierten sich hauptsächlich auf die
Durchführung von Krankentransporten, damit verbundene Aufgaben,
auftretende Probleme, rechtliche Anforderungen und Schnittstellen mit
anderen Beteiligten. Mit zunehmendem Erkenntnisgewinn konnten wir
uns in späteren Interviews auf Detailfragen und spezifische Themen
fokussieren.
42 - 43
Rolle Beruf Arbeitsort Interview
Fahrdienst Rettungshelfer:in DRK - Schwäbisch Gmünd 06.05.2024
Fahrdienst Rettungssanitäter:in DRK - Schwäbisch Gmünd 21.05.2024
Patient - - 01.07.2024
Taxiunternehmen Geschäftsführung Vertraulich 17.09.2024
Fahrdienst,
Abrechnungsabteilung Sachbearbeiter:in DRK - Schwäbisch Gmünd 17.09.2024
Hausarztpraxis Med. Fachangestellte Praxis Dr. Schuler -
Schwäbisch Gmünd 19.09.2024
Hausarztpraxis Med. Fachangestellte Praxis Dr. Tuncer -
Schwäbisch Gmünd 23.09.2024
Krankenkasse,
Genehmigungsabteilung Kundencenter AOK - Baden Württemberg 25.09.2024
Fahrdienst,
Abrechnungsabteilung Sachbearbeiter:in Johanniter - Aalen,
Schorndorf, Göppingen 25.09.2024
Fahrdienst Sachbearbeiter:in Malteser - Schwäbisch
Gmünd 25.09.2024
Taxiunternehmen Geschäftsführung Vertraulich 04.10.2024
Fahrdienst Rettungshelfer:in DRK - Reutlingen 04.10.2024
Patient - - 05.10.2024
Fahrdienst,
Abrechnungsabteilung Sachbearbeiter:in Malteser - Schwäbisch
Gmünd 14.10.2024
Softwareunternehmen
für Arztpraxen Produktmanager:in CGM Medistar 15.10.2014
Abrechnungscenter Sachbearbeiter:in Abrechnungscenter
Emmendingen 22.10.2024
Krankenkasse,
Abrechnungsabteilung Teamleiter:in AOK - Baden Württemberg 23.10.2024
Patient - - 29.11.2024
Altenheim Einrichtungsleitung Melanchthonhaus -
Schwäbisch Gmünd 29.11.2024
Abb. 9: Tabellarische Übersicht aller Interviews
Recherche und Analyse
Thematische Schwerpunkte der Interviews
Die durchgeführten Interviews behandelten verschiedene übergreifende
Themenbereiche, die für alle Beteiligten von Bedeutung waren. Der erste
zentrale Aspekt betraf den Prozessablauf und die Dokumentation.
Hierbei wurden grundlegende Abläufe von Krankenfahrten untersucht,
der Umgang mit Transportscheinen und deren Dokumentation beleuchtet
sowie der zeitliche Aufwand verschiedener Prozessschritte analysiert.
Ein weiterer wichtiger Bereich umfasste Fehlerquellen und deren
Behandlung. Dies beinhaltete die häufigsten Fehler bei Transportscheinen,
die Konsequenzen fehlerhafter Dokumente und den Prozess der Fehler-
korrektur. Auch die Kommunikation und Zusammenarbeit wurde
eingehend betrachtet, wobei besonders die Kommunikationswege
zwischen den Beteiligten, die Häufigkeit von Rückfragen und mögliche
Verbesserungsvorschläge für die Zusammenarbeit im Fokus standen.
Spezifische Interviewthemen nach Berufsgruppen
Die Interviews wurden neben den übergreifenden Themen auf die
spezifischen Rollen und Aufgaben der verschiedenen Beteiligten
zugeschnitten, um ihre individuellen Perspektiven zu erfassen.
Bei Patient:innen lag der Fokus auf ihren persönlichen Bedürfnissen,
Sorgen und Erfahrungen während der Krankenfahrt und im Umgang mit
den bürokratischen Aufgaben.
Rettungssanitäter:innen und Fahrer:innen von Krankentransportwagen
(KTW) wurden hauptsächlich zur Durchführung der Fahrt, zur Betreuung
der zu befördernden Person und zum Umgang mit dem Transportschein
befragt. Wir haben mit mehreren Abrechnungsabteilungen von
anerkannten Hilfsorganisationen gesprochen. Dabei ging es insbesondere
um den Prozess der Abrechnung und die Kommunikation mit Kranken-
kassen und Arztpraxen.
Wir sprachen mit Taxiunternehmen über Krankentransporte sowie über
auftretende Fehler bei Transportscheinen und der Abrechnung.
44 - 45
Bei Medizinischen Fachangestellten in Arztpraxen stand die Erstellung
von Transportscheinen im Mittelpunkt. Dabei wurden der Zeitaufwand für
das Ausfüllen, typische Formularherausforderungen und die Abstimmung
mit Krankenkassen bei Genehmigungen thematisiert.
Pflegekräfte wurden zu ihren spezifischen Aufgaben befragt.
Zur Häufigkeit von Krankenfahrten der Bewohner:innen, zur Organisation
von Krankentransporten und zu ihrem Bedarf an spezieller Software für
die Transportscheinverwaltung.
Mit Krankenkassen wurden vor allem die verschiedenen Arten von
Krankentransporten, Genehmigungsprozesse und die Prüfung der
Abrechnungsunterlagen besprochen.
Abrechnungscenter gaben Auskunft über ihre Sicherheits-
vorkehrungen gegen Betrug, den Prozess des Datenaustauschs und
die interne Aufgabenverteilung zwischen ihnen und der auftraggebenden
Krankenkasse.
Softwarehersteller wurden zu technischen Aspekten befragt,
insbesondere zur Integration der elektronischen Patientenakte, zur
automatischen Datenübernahme aus Patientendaten und zur
Implementierung von Diensten und Standards der gematik.
Recherche und Analyse
Interview
Patient:innen
Diese Zusammenfassung basiert auf Interviews mit drei Patient:innen,
die Krankentransporte in Anspruch genommen haben.
Positive Erfahrungen
Die Erfahrungen mit Krankentransporten werden durchgehend positiv
bewertet, besonders das freundliche Verhalten der Rettungssanitäter:
innen sticht hervor. Diese positive Einschätzung erstreckt sich auch auf
Fahrten mit Taxiunternehmen. Die Ängste der Patient:innen richten sich
dabei weniger auf die Transporte selbst als auf die bevorstehende
Behandlung und den Aufenthalt in der Behandlungsstätte.
Bürokratische Hürden
Der Transportprozess wird von den Patient:innen als zu bürokratisch und
überfordernd empfunden. Eine Patientin berichtet von Unklarheit darüber,
ob Pflege- oder Arztpersonal die Transportscheine ausstellen soll.
Genehmigungsprozess
Die Genehmigung der Transportscheine verlief durchweg problemlos
und erforderte keine zusätzlichen Rücksprachen mit der Krankenkasse.
Der Prozess wird im Kundencenter der Krankenkasse vor Ort in der Regel
innerhalb weniger Minuten unkompliziert abgewickelt. Allerdings wusste
ein befragter Patient nicht, dass manche Transportscheine eine
Genehmigung benötigen.
Unterstützung und Begleitung
Manchen Patient:innen wird die Organisation der Fahrt von Angehörigen
oder Pflegepersonal abgenommen, während andere Patient:innen das
selbständig organisieren. Die Unterstützung durch Dritte wird als sehr
hilfreich empfunden, da sie die bürokratische Last reduziert. Besonders
ältere Patient:innen schätzen diese Hilfe, da sie sich oft unsicher im
Umgang mit den Formularen fühlen.
46 - 47
„Der Krankentransportprozess
ist übertrieben, überfordert und
bürokratisch.“
Recherche und Analyse
Interview
Deutschen Roten Kreuz — Schwäbisch Gmünd
Diese Zusammenfassung basiert auf einem Interview mit zwei Mitarbeiterinnen der Abrechnungs-
abteilung des Deutschen Roten Kreuzes – Kreisverband Schwäbisch Gmünd.
Komplexer Abrechnungsprozess
Der Abrechnungsprozess ist sehr zeitaufwendig und komplex. Das DRK
muss jeden Transportschein manuell prüfen, die Daten mit der Fahrten-
dokumentation abgleichen und sämtliche Transportscheine und
Rechnungen für die Einreichung sortieren. In diesem monotonen
Prozess können durch nachlassende Konzentration Fehler entstehen.
Häufige Fehlerquellen
Die häufigste Fehlerquelle bei Transportscheinen ist die Verwechslung
zwischen genehmigungsfreier und genehmigungspflichtiger Krankenfahrt.
Dieser Fehler entsteht bereits beim Ausfüllen des Transportscheins, wird
jedoch meist erst bei der Abrechnung entdeckt. Weitere häufige Probleme
sind Schreibfehler bei Patientendaten oder fehlende Arztunterschriften.
Zeitaufwändiger Korrekturprozess
Wenn ein Transportschein oder die zugehörige Rechnung fehlerhaft ist,
wird die Kostenerstattung von der Krankenkasse abgelehnt. In solchen
Fällen erhalten die Mitarbeiterinnen den abgelehnten Transportschein
zurück. Manchmal ist der Fehler nur durch ein allgemeines Schlüsselwort
erklärt. In diesem Fall müssen die Mitarbeiterinnen erst zeitaufwändig
prüfen, um den konkreten Fehler zu finden.
Erfordert der Fehler eine Korrektur des Transportscheins durch die
Arztpraxis, steigt der Zeitaufwand nochmal erheblich. Die zuständige
Arztpraxis muss kontaktiert und der Fehler erklärt werden. Erst nach
Ausstellung eines korrigierten Transportscheins, der beim DRK eingeht,
können die Unterlagen erneut abgerechnet und eingereicht werden.
Erhöhter Personalaufwand
Durch strengere Kontrollen seitens der Krankenkassen ist der Personal-
aufwand für die Abrechnung deutlich gestiegen. Der Kreisverband
Schwäbisch Gmünd benötigt heute mehr als doppelt so viele
48 - 49
Mitarbeitende für die Kontrolle, Abrechnung und Nachbearbeitung der
Transportscheine wie noch vor zehn Jahren. Zwar ist in diesem Zeitraum
auch das Fahrtenaufkommen gestiegen, dennoch steht es in keinem
angemessenen Verhältnis zum stark erhöhten Arbeitsaufwand.
Der Austausch mit anderen DRK-Kreisverbänden zeigt, dass diese
Herausforderungen systembedingt sind und alle mit den gleichen
Problemen zu kämpfen haben.
Digitalisierungspotenzial
Viele dieser Probleme könnten durch Digitalisierung gelöst werden.
Ein digitales System zum Scannen und Prüfen der Transportscheine direkt
bei der Aufnahme könnte den Prozess deutlich verbessern und Fehler
minimieren.
Heute wird die Arbeit durch fehlende Zugriffe auf Patientendaten und
Kontaktinformationen erschwert. Zudem verlangsamen gesetzliche
Einschränkungen beim Datenaustausch mit Krankenkassen die Prozesse.
„Das ist lästig, es ist zeit-
aufwendig und es strengt
“furchtbar an.
Recherche und Analyse
Interview
Taxiunternehmen
Diese Zusammenfassung basiert auf zwei separaten Interviews, die mit den Geschäfts-
führer:innen von Taxiunternehmen im Ostalbkreis und im Landkreis Böblingen
durchgeführt wurden.
Wirtschaftliche Bedeutung
Krankenfahrten sind ein zentraler Bestandteil des Geschäftsmodells vieler
Taxiunternehmen und können mehr als die Hälfte ihres Gesamtumsatzes
ausmachen. Um schneller über liquide Mittel zu verfügen, nutzen sie
Factoringanbieter, die offene Forderungen gegenüber den Krankenkassen
übernehmen und den Rechnungsbetrag vorab auszahlen. Da die Zahlung
durch die Krankenkassen oft erst nach acht bis zwölf Wochen erfolgt,
ist diese Vorgehensweise für die Taxiunternehmen oft wirtschaftlich
notwendig.
Fehlerquellen und Zeitaufwand
Die Bearbeitung von Transportscheinen ist mit zahlreichen Heraus-
forderungen verbunden. Etwa 30% der Scheine sind fehlerhaft, wobei
unvollständige Kreuze und fehlende Unterschriften am häufigsten
auftreten. Die Prüfung eines einzelnen Scheins dauert in der Regel
zwischen 5 und 15 Minuten. Bei Fehlern verlängert sich der Korrektur-
prozess erheblich.
Kommunikation mit Krankenkassen
Ein zentrales Problem ist die schwierige Kommunikation mit den Kranken-
kassen bei der Klärung von abgelehnten Transportscheinen. Dies wird bei
fehlenden direkten Ansprechpartner:innen oder bei der Abrechnung über
externe Abrechnungszentren zusätzlich erschwert.
Datenschutzherausforderung
Die strengen Datenschutzbestimmungen erschweren die Arbeit deutlich,
da Genehmigungsbriefe ausschließlich an die Patient:innen geschickt
werden dürfen. Dies stellt besonders dann ein Problem dar, wenn Patient:
innen aus gesundheitlichen Gründen nicht selbst mit den Krankenkassen
kommunizieren können. Die Fahrdienste würden hier gerne unterstützen,
dürfen dies aber nicht.
50 - 51
Verbesserungsvorschläge
Die Taxiunternehmen wünschen sich einen vereinfachten Prozess ohne
Ablehnungen aufgrund von Kleinigkeiten oder formalen Fehlern, sowie
eine flexiblere Handhabung bei zusätzlich benötigten Fahrten. Auch ein
standardisiertes Schema für Ärzt:innen zum korrekten Ausfüllen der
Transportscheine wird als hilfreich erachtet.
„Jeden Tag erhalten wir falsch
ausgefüllte Transportscheine.“
Recherche und Analyse
52 - 53
Interview Interview
Medizinische Fachangestellte Pflegefachkräfte
Diese Zusammenfassung basiert auf Interviews mit drei medizinischen Fachangestellten,
Diese Zusammenfassung basiert auf Interviews mit Pflegefachkräften und
die in verschiedene Hausarzt- und Facharztpraxen in Schwäbisch Gmünd
Wohnbereichleitungen aus drei Pflegeheimen in Schwäbisch Gmünd.
Transportscheine ausstellen.
Herausforderungen bei der Formularausfüllung
Die korrekte Einschätzung des Beförderungsgrundes stellt eine der
Hauptherausforderungen beim Ausfüllen eines Transportscheins dar.
Dieser Grund bestimmt, ob eine Genehmigung durch die Krankenkasse
erforderlich ist. Die medizinischen Fachangestellten müssen dabei die
medizinische Notwendigkeit des Transports sorgfältig prüfen.
Neue Mitarbeiter:innen benötigen hierfür erst eine lange Einarbeitung,
um den richtigen Beförderungsgrund zuverlässig auswählen zu können.
Digitalisierung und technische Aspekte
Die Transportscheine werden in einem digitalen Formular erstellt und
dann ausgedruckt. Das aktuelle System ermöglicht zwar die digitale
Erfassung, bietet jedoch keine automatische Fehlerprüfung oder
Vollständigkeitskontrolle.
Arbeitsablauf und Zeitmanagement
Das Transportscheinformular ist nicht flexibel bei Terminänderungen.
Bei kurzfristigen Änderungen des Behandlungstermins entsteht
erheblicher Mehraufwand. Ein neuer Transportschein muss ausgestellt,
von der Patient:in abgeholt werden und gegebenenfalls auch noch
genehmigt werden.
Beschaffung der Transportscheine
Die Ausstellung der Transportscheine erfolgt hauptsächlich über den
Hausarzt und ist erst möglich, wenn der genaue Behandlungszeitraum
feststeht. Die Transportscheine werden meist im Auftrag in der Arzt-
praxis erstellt, wobei die Bestellung telefonisch oder per Fax erfolgt.
Ein Kurierdienst der Apotheke liefert die Originalscheine zusammen mit
Medikamenten aus. Bei Dringlichkeit wird ein Fahrradkurier eingesetzt.
Koordination mit Fahrdiensten
Die Einrichtungen arbeiten hauptsächlich mit Hilfsorganisationen und
medizinischen Fahrdiensten zusammen, während Taxifahrten selten
vorkommen. Bei Verspätungen ist die Kommunikation unzureichend.
Häufig werden weder die Einrichtung noch die Patient:innen rechtzeitig
über die verzögerte Abholung informiert. Die Zusammenarbeit zwischen
Pflegepersonal und Fahrer:innen gestaltet sich hingegen sehr positiv und
reibungslos.
Digitale Transformation und Verbesserungspotenzial
Die Einrichtungen stellen derzeit teilweise von Papier auf digitale Pflege-
dokumentation um und erkennen dabei erste Vorteile durch Zeitersparnis
und erhöhten Komfort. Es besteht der Wunsch nach einem vollständig
digitalen Transportscheinsystem.
„Es muss schnell gehen!“
„Ein digitaler Transportschein
wäre toll.“
Recherche und Analyse
54 - 55
Interview
Kundencentermitarbeiterin
Diese Zusammenfassung basiert auf einem Interview mit einer Kundencenter-
mitarbeiterin einer gesetzlichen Krankenkasse in Schwäbisch Gmünd.
Transportscheinkorrektur im Kundencenter
Das Kundencenter ist eine frühe Anlaufstelle im Krankentransportprozess,
an der fehlerhafte Transportscheine identifiziert und korrigiert werden.
Bei Fehlern wird entweder das Arztpersonal telefonisch kontaktiert oder
die Patient:innen müssen den Schein zur Korrektur zurückbringen.
In dringenden Fällen sind nach telefonischer Absprache auch kleinere
Korrekturen direkt auf dem Dokument möglich.
Besondere Herausforderungen bei der Kommunikation
Die Aufklärung der Patient:innen über Genehmigungskriterien und die
Kommunikation von Ablehnungen sind besonders herausfordernd, wenn
durch das Ausstellen des Transportscheins bereits die Erwartung einer
genehmigten Beförderung entstanden ist. Auch die unterschiedlichen
Zuzahlungsregeln der Krankenkassen sowie fallspezifische Regelungen
führen häufig zu Verständnisproblemen bei den Patient:innen.
Analoger Prozess und manuelle Datenübertragung
Der Genehmigungsprozess im Kundencenter dauert etwa 10 bis 15
Minuten, wobei die manuelle Datenübertragung in das Krankenkassen-
informationssystem den größten Zeitaufwand verursacht.
Verbesserungsvorschläge
Die Einführung einer Ausfüllhilfe für Arztpraxen sowie eine bessere
Aufklärung der Ärzt:innen über die gesetzlichen Grundlagen werden
als sehr hilfreich eingeschätzt. Auch eine Zusammenfassung der
Anforderungen für verschiedene Transportsituationen wird als
nützlich angesehen.
„Ganz oft füllt der Arzt den
Transportschein falsch aus.“
Recherche und Analyse
56 - 57
Interview
Teamleiter der Transportscheinabrechnung
Diese Zusammenfassung basiert auf einem Interview mit dem Abteilungsleiter der Transportschein-
abrechnung einer großen gesetzlichen Krankenkasse in der Region Stuttgart.
Digitalisierung und Datenübermittlung
Etwa 75% der Taxiunternehmen nutzen bereits das sogenannte Daten-
trägeraustauschverfahren (DTA), bei dem die Abrechnungsdaten digital an
die Abrechnungsstelle übermittelt werden. Dennoch wird der originale
Transportschein für die Abrechnung benötigt. Ein neues, sogenanntes
ImageLink-Verfahren ermöglicht die Übermittlung gescannter, signierter
Dokumente. Dieses ist allerdings eine Eigenentwicklung einiger
gesetzlicher Krankenkassen und nicht flächendeckend im Einsatz.
Häufige Fehlerquellen
Die häufigste Fehlerursache sind falsch ausgefüllte Transportscheine,
insbesondere bei der Angabe des Beförderungsgrundes. Dabei sorgt vor
allem die Unterscheidung zwischen den verschiedenen Transportmitteln
für Verwirrung.
Verbesserungspotenziale
Die Bündelung aller benötigten Daten in einem einzigen Datensatz würde
die Arbeit erheblich erleichtern, da keine Daten mehr aus verschiedenen
Quellen zusammengetragen werden müssten. Zudem erschweren die
Datenschutzbestimmungen eine schnelle Kommunikation mit den Ärzten.
„Wenn man etwas optimieren
könnte, dann wäre es die
Qualität der angelieferten
“Daten.
Recherche und Analyse
Die Beteiligten im Krankentransport
Im Rahmen einer Stakeholderanalyse wurden verschiedene Beteiligte
identifiziert, die direkt oder indirekt am Krankentransportprozess beteiligt
sind. Ziel der Analyse war es, jene Beteiligten hervorzuheben, die durch
ihre Handlungen, Entscheidungen oder Rahmenbedingungen einen
wesentlichen Einfluss auf den Prozess ausüben.
Im Mittelpunkt stehen die Stakeholder, die aktiv und unmittelbar am
Krankentransportprozess beteiligt sind und von den Patient:innen direkt
wahrgenommen werden. Dazu zählen Ärzt:innen, medizinische Fach-
angestellte, Fahrer:innen, Rettungssanitäter:innen, sowie Patient:innen
selber. Ihr Handeln beeinflusst die Prozessqualität, die Patienten-
zufriedenheit und das Fehleraufkommen.
Ergänzend gibt es direkte Beteiligte mit indirektem Einfluss auf den
Beförderungsprozess. Diese übernehmen wichtige Aufgaben, bleiben
jedoch meist außerhalb der Wahrnehmung der Patient:innen. Zu ihnen
gehören das Abrechnungspersonal der Fahrdienste und Krankenkassen,
Pflegefachkräfte, Angehörige, Disponent:innen beim Fahrdienst sowie
Sachbearbeiter:innen der Krankenkassen.
Eine weitere Gruppe bilden indirekte Beteiligte, die zwar nicht direkt in
den Prozess eingebunden sind, aber durch regulatorische Vorgaben oder
technische Standards unterstützend oder steuernd wirken.
Für die Stakeholderanalyse wurde ein klassisches Mapping verwendet.
Dabei wurden die Beteiligten anhand ihrer Relevanz und ihres Einflusses in
Kategorien eingeordnet. Stakeholder mit direktem und hohem Einfluss auf
die Kernthemen wurden näher am Zentrum positioniert, während
Gruppen mit unterstützenden Funktionen weiter außen platziert wurden.
Diese systematische Herangehensweise stellt sicher, dass alle relevanten
Perspektiven berücksichtigt werden. Sie ermöglicht zudem eine klare
Priorisierung derjenigen Gruppen, die für den Erfolg des Projekts
besonders entscheidend sind.
Fahrdienst
Telefon-
personal
Sach-
bearbeiter:in
Abrechnungs-
center
gesetzliche
Krankenkassen-
verband
Angehörige
Patient:innen
medizinische
Fachangestellte
Sach-
bearbeiter:in
Krankenkasse
Abrechnung
Tertiär
Sekundär
Primär
Rettungs-
sanitäter:
innen
medizinische
Software-
hersteller
Leitstellen-
disponent:innen
Fahrer:innen
Ärzt:innen
Abrechnung
Fahrdienst
58 - 59
gematik-
Mitarbeitende
Pflege-
fachpersonal
Gesundheits-
ministerium
Abb. 10: Stakeholder Map
Recherche und Analyse
Die Beteiligten im Krankentransport
Patient:innen
Patient:innen stehen im Mittelpunkt des Krankentransportprozesses.
Der gesamte Prozess erfolgt erst aufgrund ihres medizinischen Zustands
und der Notwendigkeit einer Beförderung.
Die Patient:innen haben kaum explizite Wünsche oder Bedürfnisse an
die Beförderung. Das liegt daran, dass der Krankentransport immer mit
einer Behandlung, Untersuchung oder einem Klinikaufenthalt verbunden
ist. Diese medizinischen Maßnahmen haben für die Patient:innen einen
höheren Stellenwert als die eigentliche Beförderung. Infolgedessen sind
die Patient:innen sehr zufrieden, wenn die Beförderung angenehm und
rechtzeitig erfolgt. Vor allem das freundliche Auftreten der Fahrer:innen
und Rettungssanitäter:innen wird geschätzt und trägt maßgeblich zu einer
positiven Erfahrung bei.
Jedoch empfinden viele Patient:innen die bürokratischen
Anforderungen die mit dem Krankentransport verbunden sind als
komplex und belastend. Besonders ältere Patient:innen sind häufig nicht
in der Lage, den Krankentransportprozess selbstständig zu bewältigen und
sind auf die Unterstützung von Angehörigen angewiesen. In Pflegeheimen
übernehmen Pflegefachkräfte die Organisation von Krankentransporten
für die Bewohner:innen.
Patient:innen sind beim ersten Mal oft nicht mit dem Ablauf des
Prozesses vertraut. Dieser enthält für das deutsche Gesundheits-
system ungewohnte Schritte, wie beispielsweise das Einholen einer
Genehmigung bei der Krankenkasse. Dadurch kann es vorkommen, dass
die Genehmigung nicht vorab eingeholt wird und dies erst bei Fahrtantritt
gemerkt wird. Das führt mindestens zu Zeitverzögerung und zusätzlichem
Aufwand. Fahrdienste sind mit diesem häufig auftretenden Problem
vertraut und wissen oft welche Schritte zur Lösung nötig sind.
Trotz bürokratischer Hürden bewerten Patient:innen den Kranken-
transport insgesamt positiv.
60 - 61
Aufgaben der Patient:innen
Patient:innen übernehmen im Krankentransportprozess verschiedene
Aufgaben. Sie erhalten den Transportschein in der Arztpraxis.
Falls erforderlich müssen sie ihn bei ihrer Krankenkasse einreichen oder
einsenden, um die Genehmigung für die Fahrt zu erhalten. Eventuell
erfolgen Rückfragen seitens der Krankenkasse.
Nach der Genehmigung kann die Fahrt gebucht werden. Abhängig vom
benötigten Fahrzeug und der erforderlichen medizinischen Betreuung
müssen Patient:innen den passenden Fahrdienst kontaktieren, um eine
Fahrt zu buchen.
Vor Fahrtantritt werden Patient:innen von dem Fahrdienst abgeholt,
bei Bedarf medizinisch betreut und befördert. Sie müssen den Transport-
schein dem Fahrdienst übergeben. Bei Serienfahrten bleibt der Transport-
schein jedoch bis zur letzten Fahrt bei den Patient:innen.
Am Ende der Fahrt müssen Patient:innen auf dem Transportschein
durch ihre Unterschrift die Durchführung der Fahrt bestätigen und
gegebenenfalls eine Zuzahlung leisten. Mit Abschluss der Fahrt ist der
Krankentransportprozess für die Patient:innen beendet.
Patient:innen stehen im Mittelpunkt des Krankentransport-
prozesses. Der gesamte Prozess erfolgt erst aufgrund ihres
medizinischen Zustands und der Notwendigkeit einer
Beförderung.
Recherche und Analyse
Aufgaben der Angehörigen
Angehörige von Patient:innen spielen eine wichtige, unterstützende Rolle
im Krankentransportprozess. Besonders bei älteren, alleinstehenden oder
schwer erkrankten Patient:innen übernehmen sie häufig Aufgaben wie die
Organisation des Krankentransports, die Einreichung des Transport-
scheins, sowie den Kontakt mit der Krankenkasse. Neben diesen
administrativen Tätigkeiten tragen Angehörige oft auch zusätzliche
Pflegeverantwortung für die erkrankte Person.
Je nach Wohnsituation der Angehörigen kann ihre Unterstützung
variieren. Leben sie im selben Haushalt oder in unmittelbarer Nähe, fällt es
ihnen leichter, aktiv in den Prozess einzugreifen. Befinden sie sich jedoch
weiter entfernt, sind sie auf andere Kommunikationswege angewiesen,
um ihre Unterstützung zu leisten. Die räumliche Distanz erschwert oft die
Organisation, da wichtige prozessrelevante Dokumente wie Transport-
scheine oder Genehmigungsschreiben nicht direkt eingesehen werden
können.
Aufgaben des Pflegepersonals
Lebt ein:e Patient:in in einem Pflegeheim, übernimmt in der
Regel das Pflegepersonal die Organisation des Krankentransports.
Diese Aufgabe fällt häufig der Stations- oder Heimleitung zu, da sie
verstärkt administrative Tätigkeiten verantworten. Ein Vorteil dieser
zentralen Organisation ist, dass das Pflegepersonal den Transport nahtlos
mit der Vorbereitung und Abholung des:der Patient:in koordinieren kann.
Da Krankentransporte in Pflegeheimen häufig genutzt werden, insbe-
sondere für außerhäusliche Arzttermine, verfügt das Pflegepersonal über
umfassende Erfahrung in der Organisation und Durchführung dieser
Transporte. Dennoch stellt die Einreichung von Transportscheinen
zur Genehmigung bei den Krankenkassen eine Herausforderung dar.
Pflegeheime greifen oft auf langsame Kommunikationswege wie Fax
oder Brief zurück, um die erforderlichen Dokumente einzureichen.
62 - 63
Diese Methoden sind jedoch oft unzureichend, wenn eine kurzfristige
Beförderung notwendig ist. In solchen Fällen wird häufig auf alternative
Lösungen zurückgegriffen, wie den Einsatz von Kurierdiensten oder dem
direkten Besuchen von Mitarbeitenden im Kundencenter der Kranken-
kasse, um eine schnelle Genehmigung zu erhalten.
Herausforderungen und Verbesserungspotenziale
Ein häufiger Kritikpunkt am Krankentransportprozess ist die komplexe
Bürokratie, die viele Patient:innen als unverständlich und überfordernd
empfinden.
Eine gezielte Unterstützung bei der Organisation des Transports,
insbesondere für ältere oder alleinstehende Patient:innen, wäre
wünschenswert und hilfreich. Solche Maßnahmen könnten die Belastung
für die Patient:innen reduzieren und ihre Zufriedenheit deutlich steigern.
Durch eine optimierte Organisation, eine klare und patienten-
freundlichere Kommunikation ließe sich der Krankentransportprozess
noch besser an die Bedürfnisse der Patient:innen anpassen.
Recherche und Analyse
Die Beteiligten im Krankentransport
Medizinisches Personal
Ärzt:innen spielen eine entscheidende Rolle im Krankentransportprozess.
Sie beurteilen die medizinische Notwendigkeit einer Beförderung und
verantworten die Ausstellung des Transportscheins. Häufig übernehmen
Medizinische Fachangestellte (MFA) die praktische Umsetzung und stellen
den Transportschein im Auftrag der Ärzt:innen aus.
Aufgabenteilung zwischen Ärzt:innen und MFAs
Der Prozess beginnt mit der Beurteilung der medizinischen Notwendigkeit
des Transports durch die Ärzt:innen. Sie legen den Beförderungsgrund
fest, der darüber entscheidet, ob eine Genehmigung durch die Kranken-
kasse erforderlich ist. Die medizinischen Fachangestellten übernehmen
die praktische Umsetzung. Sie füllen den Transportschein in der Praxis-
verwaltungssoftware aus. In diesem Programm sind alle Patientendaten
gespeichert und sämtliche Aufgaben des Praxisalltags werden darüber
abgewickelt. Anschließend drucken sie den Transportschein aus, lassen
ihn von Ärzt:innen unterschreiben und geben ihn den Patient:innen mit.
Häufig erklären sie den Patient:innen auch die nächsten erforderlichen
Schritte, wie beispielsweise die Einholung einer Genehmigung bei der
Krankenkasse.
Darüber hinaus sind die Medizinischen Fachangestellten häufig die
ersten Ansprechpartner:innen für Korrekturanforderungen. Sie prüfen,
ob der Fehler korrigiert werden kann, stellen gegebenenfalls einen neuen
Transportschein aus und lassen diesen vor der Ausgabe unterschreiben.
Herausforderungen und Bedürfnisse
Hausarztpraxen sind häufig durch Personalmangel und eine hohe Anzahl
von Patient:innen stark ausgelastet. Daher ist es essenziell, bürokratische
Abläufe möglichst einfach und zeiteffizient zu gestalten.
Besonders in stressigen Phasen stellt die Erstellung oder Korrektur
eines Transportscheins eine zusätzliche Belastung dar und beansprucht
wertvolle Zeit. Dabei treten häufig Fehler auf, insbesondere bei der Angabe
64 - 65
des Beförderungsgrundes, der zu den häufigsten Fehlerquellen gehört.
Zusätzlicher Aufwand entsteht durch die geringe Flexibilität des
Formularsystems bei kurzfristigen Änderungen, wie beispielsweise
verschobenen Arztterminen. Solche Anpassungen erfordern oft eine
Neuerstellung des Transportscheins und teilweise eine erneute
Genehmigung.
Ärzt:innen spielen eine entscheidende Rolle im Kranken-
transportprozess. Sie beurteilen die medizinische Not-
wendigkeit einer Beförderung und verantworten die
Ausstellung des Transportscheins.
Recherche und Analyse
Die Beteiligten im Krankentransport
Fahrdienste
Die Fahrdienste im Krankentransportprozess spielen die zentrale Rolle bei
der Beförderung von Patient:innen. Verschiedene Akteure innerhalb der
Fahrdienste arbeiten eng zusammen, um einen reibungslosen Ablauf
sicherzustellen.
Disponent:innen und Leitstelle
Die Leitstellen sind für die zentrale Koordination und Planung der Fahrten
zuständig. Kreisübergreifend organisieren sie Krankentransportwagen
(KTW) aller anerkannten Hilfsorganisationen und nehmen zudem Notrufe
entgegen, um bei Bedarf den Rettungsdienst zu alarmieren. Private
Fahrdienste, zu denen sowohl Taxiunternehmen als auch medizinische
Fahrdienste zählen, verfügen hingegen über eigene Disponent:innen, die
ihre Fahrzeuge und Fahrten koordinieren.
Sowohl die Leitstellen als auch die Disponent:innen bei den privaten
Fahrdiensten nehmen Buchungsanfragen entgegen und reagieren flexibel
auf kurzfristige Änderungen oder zusätzliche Fahrten. Bei Bedarf müssen
sie priorisieren, welcher Transport den dringendsten Handlungsbedarf hat.
66 - 67
Besatzung eines Krankentransportwagen
Die Besatzung eines Krankentransportwagens (KTW) besteht meistens aus
Rettungssanitäter:in und Rettungshelfer:in. Rettungssanitäter:innen sind
die verantwortlichen Personen auf dem Krankentransport, welche eine
grundlegende Rettungsausbildung haben und die medizinische Betreuung
während der Fahrt leisten können (RettungssanitäterIn, o.D.). Sie kümmern
sich um das Wohl und die medizinische Versorgung von Patient:innen
während der Fahrt. Rettungshelfer:innen fahren den KTW und
unterstützen Rettungssanitäter:innen bei der medizinischen Betreuung
im Krankentransport. (RettungshelferIn, o.D.). Die Besatzung eines KTWs
hat auch administrative Aufgaben. Sie stellt sicher, dass alle erforderlichen
Dokumente, wie Transportschein oder Arztbrief, an die richtige Stelle
weitergegeben werden und die Patientendaten vollständig vorliegen.
Fahrer:innen von Taxis und Mietwagen
Beförderungen mit Taxis oder rollstuhlgerechten Fahrzeugen werden in
der Regel von einer Person durchgeführt. Die Fahrer:innen übernehmen
sowohl die Fahrten als auch administrative Aufgaben, wie die Übergabe
des Transportscheins oder die Abwicklung der Zuzahlung. Insbesondere
Taxifahrer:innen unterstützen hilfsbedürftige Personen gelegentlich bei
bürokratischen Aufgaben im Zusammenhang mit der Fahrt. Beispielsweise
begleiten sie Patient:innen zum Kundencenter der Krankenkasse, um eine
Genehmigung einzuholen, wenn dies nicht eigenständig erledigt wurde.
Recherche und Analyse
68 - 69
Abrechnungspersonal
Das Abrechnungspersonal ist für die Prüfung und den Abgleich von
Transportscheinen mit den Fahrtendaten sowie für das Erstellen von
Rechnungen und die Abwicklung mit den Krankenkassen verantwortlich.
Strengere Vorgaben seitens der Krankenkassen haben diesen Prozess
deutlich aufwendiger gemacht. Fehler wie unvollständig ausgefüllte
Transportscheine oder falsche Angaben werden häufiger bemängelt.
Diese entstehen oftmals bereits in den Arztpraxen und führen zu
zusätzlicher Nachbearbeitung, was Verzögerungen und Mehrarbeit
verursacht.
Die Arbeitsmenge hat sich in den letzten Jahren stark erhöht, da
fehlerhafte Transportscheine und abgelehnte Anträge zunehmen.
Obwohl viele Daten digital vorliegen, fehlen geeignete Schnittstellen für
eine automatisierte Übermittlung, sodass ein Großteil der Informationen
weiterhin manuell eingetragen werden muss. Dies ist nicht nur zeit-
intensiv, sondern erhöht auch das Fehlerrisiko. Zusätzlich erschweren
Datenschutzvorschriften den Zugriff auf Patientendaten und bremsen die
Kommunikation mit den Krankenkassen. All diese Faktoren erhöhen die
Belastung des Abrechnungspersonals und verdeutlichen den Bedarf an
effizienteren, vernetzten Prozessen.
Herausforderungen und Wünsche
Fahrdienste stehen vor großen Herausforderungen, durch eine hohe
Anzahl an Patient:innen, Personalmangel und erheblichen Verwaltungs-
aufwand. In Interviews berichteten verschiedene Fahrdienste, dass die
Abrechnung von Fahrten teilweise um bis zu 12 Monate verzögert war und
sie mit dem Arbeitsaufwand oft nicht Schritt halten können. Besonders
belastend empfinden die Fahrdienste die Abwicklung mehrerer Papier-
dokumente, deren postalische Einreichung sowie die parallele Erstellung
eines digitalen Datensatzes für die Krankenkassen. Dieser Prozess erhöht
den Arbeitsaufwand erheblich und begünstigt Fehler.
Die Fahrdienste äußerten wiederholt den Wunsch nach einem
vollständig digitalen Abrechnungsprozess, um den Verwaltungsaufwand
zu reduzieren. Zudem wünschen sie sich weniger strenge Vorgaben seitens
der Krankenkassen. Der eigentliche Beförderungsprozess wird von den
Fahrer:innen hingegen als insgesamt angenehm wahrgenommen.
Die Fahrdienste im Krankentransportprozess spielen die
zentrale Rolle bei der Beförderung von Patient:innen.
Recherche und Analyse
Die Beteiligten im Krankentransport
Krankenkasse
Gesetzliche Krankenkassen übernehmen im Krankentransportprozess
verschiedene Aufgaben, die sich auf mehrere Ebenen verteilen.
Die Krankenkasse ist der Kostenträger und muss die Fahrt vorab
genehmigen und danach bezahlen.
Kundencenter
Im Kundencenter haben Patient:innen die Möglichkeit, ihre
Transportscheine persönlich einzureichen und genehmigen zu lassen.
Da die anschließende Prüfung und Datenerfassung ins Krankenkassen-
informationssystem manuell erfolgt, können dafür etwa 10 bis 15 Minuten
anfallen. Fehler im Transportschein werden frühzeitig erkannt. Allerdings
besteht durch die händische Übertragung das Risiko zusätzlicher
Übertragungsfehler.
In dringenden Fällen bemühen sich die Kundencentermitarbeiter:innen
um eine rasche Korrektur. Sie kontaktieren dafür bei Bedarf telefonisch die
entsprechende Arztpraxis oder geben den Patient:innen den Transport-
schein zur Überarbeitung zurück. Eine besondere Herausforderung für die
Mitarbeiter:innen stellt die Kommunikation von Ablehnungen dar, da
Patient:innen davon ausgehen, dass der ausgestellte Transportschein
akzeptiert wird.
Neben dem persönlichen Einreichen im Kundencenter können
Patient:innen ihre Transportscheine auch per Post, Fax oder über die
Krankenkassenapp einsenden. In diesen Fällen erfolgt die Genehmigung
oder Ablehnung verzögert und wird in der Regel per Post mitgeteilt.
70 - 71
Abrechnungsabteilung
Am Ende einer Krankenfahrt übermitteln Fahrdienste den Transportschein
zusammen mit der zugehörigen Rechnung an die Abrechnungsstelle der
Krankenkasse. Die Abrechnung kann entweder in einer internen
Abrechnungsabteilung oder bei einem externen Dienstleister erfolgen.
Ein sogenanntes Abrechnungscenter ist ein externer Dienstleister, der für
gesetzliche Krankenkassen die Abrechnung mit den Leistungserbringern
übernimmt.
Nach Eingang der Unterlagen erfolgt zunächst eine Vorprüfung,
bei der kontrolliert wird, ob alle Pflichtfelder korrekt ausgefüllt sind.
Einige Krankenkassen können die Abrechnungsdaten bereits elektronisch
empfangen, doch nicht alle Fahrdienste nutzen diese Möglichkeit.
In solchen Fällen müssen sämtliche Angaben manuell in das Abrechnungs-
programm übertragen werden. Zudem ist nach wie vor der originale
Transportschein erforderlich, um Unterschriften oder andere Angaben zu
überprüfen.
Anschließend durchlaufen die Unterlagen mehrere Prüfschritte, bei
denen Versichertendaten und Fahrtangaben verglichen und auf Voll-
ständigkeit überprüft werden. Liegt ein Fehler vor, wird der Vorgang
abgelehnt, und die Unterlagen werden zurückgesendet. Dies führt zu
wiederholten Prüfungen, welche die Bearbeitung verzögern und den
Personalaufwand erhöhen.
Die verschiedenen Prüfschritte sind notwendig, um die Richtigkeit
aller Angaben zu gewährleisten und Betrug zu verhindern. Die Mitarbeiter:
innen handeln dabei im Interesse der Krankenkasse und im Rahmen
gesetzlicher Vorgaben. Gleichzeitig gilt die weiterhin erforderliche Vorlage
des Originaldokuments und die lückenhafte digitale Datenübermittlung als
verbesserungswürdig.
Herausforderungen und Wünsche
Es liegt im Interesse der Krankenkassen, ausschließlich medizinisch
notwendige und korrekt durchgeführte Krankentransporte zu bezahlen.
Daher führen sie verschiedene Prüfungen durch, bevor ein Transport-
schein genehmigt oder abgerechnet wird. Diese Prüfungen sind
zeitaufwendig.
Eine schnellere Genehmigung und Abrechnung von Transportscheinen
liegt daher im Interesse der Krankenkassen. Eine digitale Version des
Transportscheins, die zeitintensive Aufgaben wie das manuelle
Übertragen von Daten eliminiert, könnte den Prozess deutlich
vereinfachen. Mitarbeiter:innen berichteten, dass sie gelegentlich
Richtlinien nach-schlagen müssen, um Transportscheine korrekt zu
bewerten. Digitale Systeme mit integriertem Zugriff auf relevante Daten
könnten die Mitarbeiter:innen bei diesem Prozess effektiv unterstützen.
Die Krankenkasse ist der Kostenträger und muss die Fahrt
vorab genehmigen und danach bezahlen.
Recherche und Analyse
72 - 73
Prozessanalyse
Um einen detaillierten Einblick in den Krankentransportprozess aus der
Perspektive eines:einer Patient:in zu erhalten, wurde ein vollständiger
Service Blueprint erstellt. Ein Service Blueprint ist eine Methode zur
Visualisierung aller Schritte, die an der Erbringung einer Dienstleistung
beteiligt sind. Er hilft dabei, sowohl den sichtbaren Teil der Dienstleistung
aus Kundenperspektive als auch die internen Prozesse und Abläufe
transparent darzustellen.
Der Inhalt basiert auf den Interviewerkenntnissen und umfasst den
Zeitraum von der Feststellung, dass ein Krankentransport benötigt wird,
bis zur Einreichung der Abrechnungsunterlagen durch den Fahrdienst.
Dadurch wird der aktuelle Stand des Ablaufs dargestellt, ohne Lösungs-
ansätze einzubringen.
Service Blueprint
74 - 75
Zeitdauer 30 Minuten 15 Minuten
5 Minuten 20-30 Minuten 20-30 Minuten
20 Minuten
Physische
Nachweise
Patientenaktionen
Transportschein Transportschein
Transportschein
Smartphone
Transportschein
Transportschein
Genehmigungsdokument
Genehmigungsdokument
Smartphone
• besucht Arztpraxis
• erhält Behandlungstermine
und den Transportschein
Bei Fehlern im Transportschein
• gibt der Krankenkasse den
Transportschein zur
Genehmigung
• wartet auf Genehmigungs-
dokument
• kontaktiert den Fahrdienst
• bucht eine Fahrt
• informiert über Kranken-
transport, Abholzeit und
Zielort
Genehmigungsdokument
Rechnung
Falls jede Behandlungsfahrt separat ausgestellt werden muss
• steigt ein und zeigt Transportschein sowie
Genehmigungsdokument
• zahlt die Zuzahlung
• lässt sich zur Klinik fahren und bestätigt die
Fahrt auf dem Transportschein
Behand-
lungszeit
• bestellt eine Abholung am
Behandlungsort
• wird nach Hause gefahren
• bestätigt die Fahrt auf dem
Transportschein
• übergibt den Transportschein
bei der letzten Fahrt an das
Fahrpersonal
Linie der Interaktion
Aktionen im
Vordergrund
Arztpraxis:
• behandelt die Patient:in
• stellt Behandlungs-
termine aus
• stellt den Transport-
schein aus
Krankenkasse：
• dokumentiert die erfolgte
Genehmigung
• stellt Genehmigungs-
dokumente für Fahrdienst
und Patient:in aus
Fahrdienst：
• nimmt Fahrtenbuchung
entgegen
Fahrer:in:
• holt Patient:in an Abholadresse ab
• überprüft und erhält bei der ersten Fahrt das
Genehmigungsdokument
• fährt Patient:in zur Klinik
• nimmt die Zuzahlung entgegen
• erinnert Patient:in an die Bestätigung der Fahrt
auf dem Transportschein
Fahrdienst:
• nimmt Fahrtenbuchung entgegen
Fahrer:in:
• fährt Patient:in nach Hause
• erhält von Patient:in den
Transportschein bei der letzten
Fahrt
Linie der Sichtbarkeit
Aktionen im
Hintergrund
Arztpraxis:
• dokumentiert die
benötigte Behandlung
• stellt den Transportschein
aus
Krankenkasse：
• prüft den Transportschein
• dokumentiert die
Genehmigung im
Krankenkasseninformations
system
Fahrdienst：
• weist die Fahrt einem:einer
verfügbaren Fahrer:in zu
• notiert die Fahrt in der
Dispositionssoftware
Fahrer:in:
• fährt zur Abholadresse
Fahrdienst:
• weist die Fahrt einem:einer
verfügbaren Fahrer:in zu
• notiert die Fahrt in der
Dispositionssoftware
Fahrdienstabrechnung:
• bereitet Genehmigungs-
dokumente, Transportschein und
Rechnung vor
• sendet diese per Post an die
Krankenkasse
Krankenkasse:
• erhält den Abrechnungsantrag
• prüft die Unterlagen und
veranlasst die Zahlung an den
Fahrdienst
• dokumentiert die Fahrten in den
Versichertendaten
Linie der internen Interaktion
Unterstützende
Prozesse
Arztpraxis:
• Praxissoftware
Krankenkasse：
• Krankenkassen-
informationssystem
Fahrdienst：
• Smartphone
• Dispositionssoftware
Fahrdienst:
• Smartphone
• Dispositionssoftware
Fahrdienst:
• Dispositionssoftware
• Abrechnungssoftware
• Post
Krankenkasse:
• Krankenkassen-
informationssystem
Abb. 11 Service Blueprint
Recherche und Analyse
User Journeys und Error Flows
User Journeys und Error Flows
Patient:in benötigt einen
Arztpraxis stellt einen
Patient:in muss sich die
Krankentransport
Transportschein aus. Ist es
Fahrt von der Kranken-
Wurde der
genehmigungspflichtig?
Ja kasse genehmigen
Im nächsten Schritt erstellten wir User Journeys, die den Weg einer Person
Transportschein falsch
lassen
ausgefüllt?
bei der Interaktion mit einem Produkt, einer Dienstleistung oder einem
Prozess visuell abbilden.
Die einzelnen Prozessschritte wurden chronologisch dargestellt, um
Nein Nein deutlich zu machen, wie Patient:innen von einem Schritt zum nächsten
gelangen.
Durch die Recherche und die Gespräche mit Beteiligten wurde deutlich,
dass der Krankentransportprozess, abhängig von der Beförderungsart und
möglichen Fehlern, sehr unterschiedlich verlaufen kann. Infolgedessen
erstellten wir mehr als zehn verschiedene User Journeys, welche unter-
schiedliche Abläufe rund um den Transportschein darstellten.
In vielen Fällen verläuft alles reibungslos: Ärzt:innen stellen den
Transportschein aus, die Patient:innen werden befördert, und die
Krankenkasse zahlt nach erfolgreicher Prüfung. Allerdings können auch
verschiedene Fehler oder Besonderheiten auftreten, die den Prozess
verzögern. Häufig handelt es sich dabei um einen falsch ausgestellten
oder nicht genehmigten Transportschein, der korrigiert werden muss.
Mitunter gehen Dokumente verloren oder werden aufgrund fehlender
digitaler Schnittstellen nur in Papierform verarbeitet. Darüber hinaus
führen Terminverschiebungen, fehlende Unterlagen oder das Einbeziehen
eines:r Betreuer:in zu zusätzlichen Hürden.
Ein weiterer Sonderfall ist die Nutzung von Factoringanbietern, die für
den Fahrdienst die Rechnungsabwicklung und Auszahlung übernehmen.
Trotz der unterschiedlichen Szenarien bleibt das Ziel stets, die Patient:
innen ordnungsgemäß zu befördern und im Anschluss eine schnelle
und fehlerfreie Abrechnung bei der Krankenkasse sicherzustellen.
Diese zahlreichen User Journeys wurden anschließend in einem
umfangreichen Prozessdiagramm zusammengefasst, das aufzeigt, an
welchen Stellen Fehler entstehen können und welche Auswirkungen sie
haben.
76 - 77
Ist
der Fahrtag
bald?
Ja
Krankenkasse ruft in
Anwesenheit der Patient:
innen die ausstellende
Arztpraxis an
Krankenkasse bespricht
den Fehler mit der
ausstellenden Arztpraxis
Krankenkasse korrigiert
die Fehler schriftlich auf
dem Transportschein
Krankenkasse vermerkt
diese eigene Korrektur
des Transportscheins im
Krankenkassen-
informationssystem
Nein
Benötigt
der/die Patient:in
Hilfe bei der Korrektur
des Transport-
scheins?
Ja Krankenkasse ruft in
Anwesenheit der Patient:
innen die ausstellende
Arztpraxis an
Ist
die Arztpraxis
erreichbar?
Ja
Krankenkasse bespricht
den Fehler mit der
ausstellenden Arztpraxis
Arztpraxis stellt einen
korrekten Transport-
schein aus
Nein Nein
Krankenkasse bespricht
den Fehler mit der
ausstellenden Arztpraxis
Patient:in geht zur
Arztpraxis und beauftragt
die Korrektur des
Transportscheins
Arztpraxis Fahrdienst
Patient:in Factoringanbieter
Krankenkasse Krankenhaus
Das Prozessdiagramm kann
durch Scannen des QR-Codes
eingesehen werden.
Abb. 12 User Journeys und Error Flows
Recherche und Analyse
Recherche und Analyse
78 - 79
78 - 79
Digitale Systeme
Digitale Systeme:
Patient:innen
Im Krankentransport nutzen die meisten Beteiligten bereits digitale
Systeme zur Informationsspeicherung und Datenverwaltung.
Allerdings unterscheiden sich sowohl der Grad der Digitalisierung
als auch die Art der verwendeten Systeme stark zwischen den Beteiligten.
Fahrdienste, Krankenkassen, Arztpraxen und Pflegeheime setzen über-
wiegend branchenspezifische Software ein. Patient:innen hingegen
verwenden derzeit keine speziellen Anwendungen für den
Krankentransport.
In Deutschland gibt es derzeit keine zentrale, umfassende digitale
Plattform, die alle relevanten Gesundheitsdienste und -informationen für
Bürger:innen an einem Ort bündelt. Stattdessen sind digitale Gesundheits-
angebote häufig auf verschiedene Anbieter und Systeme verteilt, was zu
einer uneinheitlichen Nutzerfahrung führt.
Eine der zentralen digitalen Anwendungen für Patient:innen ist die App
der jeweiligen Krankenkasse. Da jede gesetzliche Krankenkasse ihre eigene
App entwickelt, unterscheiden sich diese Anwendungen erheblich im
Funktionsumfang. Während einige Apps lediglich die Änderung grund-
legender Daten ermöglichen, bieten andere zusätzliche Funktionen wie
die Kontaktaufnahme mit der Krankenkasse, das Hochladen von
Bescheinigungen oder die Verwaltung des gesamten Kommunikations-
verlaufs (Service-Apps der Krankenkassen, o.D.).
Der Zugang zur elektronischen Patientenakte (ePA) erfolgt je nach
Krankenkasse entweder direkt über die Krankenkassen-App oder über eine
separate App, die speziell für die ePA entwickelt wurde (ePA-Infoservices,
o.D.). Dies sorgt ebenfalls für eine uneinheitliche Nutzererfahrung, da der
Zugang und die Funktionen von der jeweiligen Krankenkasse abhängen.
Obwohl mit der Einführung der elektronischen Patientenakte (ePA) und
des E-Rezepts erste Schritte zur Digitalisierung des Gesundheitssystems
unternommen wurden, fehlt eine einheitliche Plattform, die diese Dienste
zentral zusammenführt und den Zugang vereinfacht. Daher erfolgen viele
Prozesse, wie die Übermittlung von Dokumenten oder die Beantragung
bestimmter Leistungen, nach wie vor papierbasiert oder erfordern den
persönlichen Kontakt mit Arztpraxen, Krankenkassen oder Apotheken.
Es ist zu beachten, dass die Nutzung dieser digitalen Dienste freiwillig
ist und Patient:innen bestimmten Funktionen, wie beispielsweise der
elektronischen Patientenakte, widersprechen können (Welchen Funktionen
und Zugriffen Versicherte widersprechen können, o.D.). Darüber hinaus zeigt
sich, dass insbesondere ältere Versicherte häufig analoge oder ihnen
vertraute Lösungen bevorzugen. Daher wird bei der Digitalisierung des
Recherche und Analyse
80 - 81
Digitale Systeme:
Arztpraxen
deutschen Gesundheitssystems weiterhin darauf geachtet, auch analoge
oder niedrigschwellige digitale Angebote bereitzustellen, um den
Bedürfnissen älteren Versicherten gerecht zu werden (McKinsey, 2023).
Diese Fragmentierung zwingt Patient:innen häufig dazu, auf analoge
Verfahren zurückzugreifen oder mehrere digitale Anwendungen parallel zu
nutzen, die nicht immer miteinander kompatibel sind. Eine zentrale,
benutzerfreundliche Plattform, die medizinische und organisatorische
Prozesse integriert, könnte die Verwaltung von
Gesundheitsangelegenheiten erheblich erleichtern und den Zugang zu
wichtigen Informationen und Dienstleistungen effizienter gestalten.
In Arztpraxen kommt ein sogenanntes Praxisverwaltungssystem (PVS)
zum Einsatz, das der Verwaltung und Organisation von Arbeitsabläufen
dient. Es unterstützt Praxen bei administrativen, organisatorischen und
medizinischen Aufgaben und trägt zu einer effizienten Patientenbetreuung
bei. Da Praxisverwaltungssysteme nahezu alle Arbeitsprozesse in einer
Arztpraxis begleiten, fungieren sie als zentrale Plattform zur Speicherung
und Verwaltung von Patientendaten. Über das PVS haben Ärzt:innen
zudem Zugriff auf wichtige Funktionen wie die Anbindung an digitale
Gesundheitsdienste, darunter der e-Rezeptfachdienst und die
elektronische Patientenakte (ePA). Darüber hinaus umfasst das System
die Terminplanung, Abrechnung und Dienste zur elektronischen
Kommunikation mit Kolleg:innen sowie externen Einrichtungen
(Praxisverwaltungssysteme (PVS), o.D.).
Weitere digitale Dienste wie Terminvereinbarungen, Rezept-
bestellungen oder Videosprechstunden werden über separate Portale
oder Apps, etwa Doctolib oder Jameda, bereitgestellt. Alternativ greifen
viele Arztpraxen auf technische Standards wie Telefon, Fax oder E-Mail
zurück. Dabei ist jedoch zu beachten, dass E-Mails für den Versand
sensibler Gesundheitsdaten nicht geeignet sind und gegen bestehende
Datenschutzbestimmungen verstoßen können (Dr. Datenschutz, 2023).
Als datenschutzkonforme Alternative zu E-Mails bietet die gematik
mit KIM (Kommunikation im Medizinwesen) einen sicheren, digitalen
Kommunikationsdienst, der speziell für den Austausch sensibler
Gesundheitsdaten im deutschen Gesundheitssystem entwickelt wurde.
KIM ist ein integraler Bestandteil der Telematikinfrastruktur (TI) und
ermöglicht eine verschlüsselte Kommunikation zwischen Einrichtungen
und Institutionen im Gesundheitswesen. Jedoch steht dieser Dienst nicht
für die direkte Kommunikation mit Patient:innen zur Verfügung (KIM –
Kommunikation im Medizinwesen, o.D.).
Recherche und Analyse
Digitale Systeme:
Fahrdienste
Die Digitalisierung bei Fahrdiensten hat in den vergangenen Jahren
deutlich zugenommen, variiert jedoch abhängig von der Art des
Fahrdienstes. Digitale Systeme spielen dabei eine immer zentralere
Rolle und ermöglichen eine effizientere Organisation, Abwicklung und
Verwaltung von Fahrten.
Taxiunternehmen
Moderne Taxiunternehmen setzen auf digitale Dispositionssysteme, die
eine schnelle und automatisierte Zuweisung von Fahrten an Fahrer:innen
ermöglichen. Kund:innen können Fahrten bequem über Apps oder Online-
Portale buchen, den Fahrstatus in Echtzeit verfolgen und elektronische
Zahlungsoptionen nutzen. Dies steigert den Komfort für die Kund:innen
und reduziert gleichzeitig den administrativen Aufwand, da Daten
automatisch erfasst und in die Buchhaltung integriert werden. Solche
Plattformen fördern vor allem die Effizienzsteigerung, Kundenbindung
und vereinfachen die Disposition erheblich (Oppermann, 2024).
Der Einsatz digitaler Systeme in der Taxibranche ist weitgehend
optional und wird überwiegend von größeren Unternehmen genutzt.
Kleinere Taxiunternehmen verwenden solche Systeme seltener, was häufig
auf begrenzte finanzielle oder technische Ressourcen zurückzuführen ist.
Darüber hinaus fehlt es in der Branche an einheitlichen Standards und
Systemen für Softwarelösungen, was die Integration und Nutzung digitaler
Angebote zusätzlich erschwert.
Leitstelle und Krankentransport
Zur Verwaltung und Steuerung von Fahrtanfragen wird in den Leitstellen
der Landkreise, welche die Krankentransportwagenfahrten disponieren,
häufig eine spezielle Dispositionssoftware eingesetzt. Ein weit verbreitetes
System ist rescuetrack, eine digitale Lösung, die die Leitstellen mit den
Einsatzfahrzeugen der anerkannten Hilfsorganisationen vernetzt
(Einsatzunterstützung, Disposition und Transportplanung für Leitstellen, o.D.).
82 - 83
Krankentransportwagen erhalten über ein Interface, das einem Tablet
ähnelt, in Echtzeit Informationen zu ihrem nächsten Einsatz. Während des
Krankentransports erfolgt die Dokumentation meist digital, entweder in
der Dokumentationsapp DocYou oder auf dem Nidapad, einem speziell für
die Dokumentation und Einsatzbegleitung von Rettungssanitäter:innen
entwickelten Tablet (docYou med, o.D.; Ihr Telematiksystem in Perfektion,
o.D.).
Rescuetrack, die Dokumentationslösung und die Abrechnungs-
software sind in der Regel über einen einheitlichen Datensatz mit-
einander verknüpft. Dies ermöglicht eine nahtlose Datenübertragung
und vereinfacht die abschließende Abrechnung der Fahrt erheblich
(Einsatzunterstützung, Disposition und Transportplanung für Leitstellen, o.D.).
Medizinische Fahrdienste
Auch für Medizinische Fahrdienste gibt es Software, welche bei der
Disposition, Kundenverwaltung, Tourenplanung, Mitarbeiterverwaltung,
Buchhaltung und Abrechnung unterstützt. Im Funktionsumfang ähnelt
diese Software der Software für Taxiunternehmen. Manche der Lösungen
bieten auch eine App für Smartphones als Komponente für die Fahrer:
innen, über welche Auftragsinformationen, der Dienstplan, die Auftrag-
dokumentation und Weiteres unterwegs eingesehen werden kann
(Fahrdienst Software: So optimieren Sie die Tourenplanung in der
Personenbeförderung. o.D.; Ihr Telematiksystem in Perfektion. o.D.).
Abrechnung bei Fahrdiensten
Die Abrechnung von Fahrten erfolgt zunehmend digital. Abrechnungs-
systeme erleichtern diesen Prozess, indem sie erfasste Daten automatisch
prüfen, aufbereiten und an Krankenkassen oder Factoringanbieter
weiterleiten (TARIS Krankenfahrten, o.D.). Dennoch gibt es innerhalb der
Branche erhebliche Unterschiede in der Digitalisierung. In einem Interview
mit einem Abteilungsleiter einer gesetzlichen Krankenkasse für die
Recherche und Analyse
84 - 85
Digitale Systeme:
Krankenkassen
Abrechnung von Transportscheinen wurde geschätzt, dass etwa 25 %
der Taxiunternehmen, insbesondere kleinere Betriebe, weiterhin auf
Papierabrechnungen setzen. Dies wird vor allem auf fehlende Software-
lösungen oder das Fehlen von Verträgen mit externen Abrechnungs-
dienstleistern zurückgeführt.
Vernetzte Lösungen im Ausland
In Frankreich gibt es die Plattform amblea, welche die Abwicklung von
Krankentransporten zentralisiert und dadurch Effizienz sowie Nachhaltig-
keit steigert. Das Besondere an dieser Plattform ist die direkte Vernetzung
von Gesundheitseinrichtungen mit Fahrdiensten, wodurch administrative
Aufgaben wie die Übermittlung von Dokumenten und die Bestellung von
Transporten vereinfacht und optimiert werden. Dies verbessert die
Organisation und Durchführung von Krankentransporten sowohl für
die beteiligten Fahrdienste und Gesundheitseinrichtungen, sowie für die
Patient:innen. Patient:innen können über amblea jedoch keine Fahrten
eigenständig buchen, sondern müssen diese über eine Gesundheits-
einrichtung beauftragen lassen (réception des demandes de transport, o.D.).
Ähnlich wie Arztpraxen und Fahrdienste verwenden auch die
Krankenkassen in Deutschland ein digitales System zur Verwaltung
von Versichertendaten, Kundenkontakten und Leistungsabrechnungen.
Diese Softwarelösungen, häufig als Krankenkasseninformationssystem
(KIS) bezeichnet, sind speziell auf die Anforderungen der gesetzlichen
Krankenkassen zugeschnitten und unterstützen eine effiziente
Bearbeitung von Anträgen, Genehmigungen und Abrechnungen.
Die Software ermöglicht den Zugriff auf Versichertendaten, die
Verwaltung von Dokumenten sowie die Abrechnung mit Leistungs-
erbringern. Darüber hinaus bietet sie Schnittstellen für externe Dienst-
leister, beispielsweise für Abrechnungszentren, um eine reibungslose
Übermittlung von Daten und eine automatisierte Bearbeitung zu
gewährleisten (Datenlieferungen und BITMARCK_21c|ng, o.D.).
Synthese
Digitale Systeme:
Pflegeheime
Ab Juli 2025 sollen Pflegeheime Zugriff auf die elektronische Patientenakte
(ePA) erhalten, um Medikationsdaten und weitere relevante Gesundheits-
informationen mit den behandelnden Ärzt:innen sowie anderem Fach-
personal sicher auszutauschen. Ziel ist es, die Patientenversorgung durch
einen verbesserten Informationsfluss und eine effizientere Zusammen-
arbeit zu optimieren.
Dafür müssen Pflegeheime möglicherweise auf eine Software
umstellen, die eine Anbindung an die Telematikinfrastruktur (TI) bietet
und den sicheren Kommunikationsdienst KIM (Kommunikation im
Medizinwesen) unterstützt. In diesem Zusammenhang könnten zusätzlich
digitale Lösungen entwickelt werden, die neben der Pflegedokumentation
auch weitere Prozesse in der Pflege effizienter gestalten und unterstützen
(Telematikinfrastruktur in der Pflege? Geht doch – mit Expertise aus der Pflege!,
o.D.).
86 - 87
Synthese
“
Im Anschluss an die Recherche- und Analysephase war unser
Vorgehen, die gesammelten Daten und Erkenntnisse aus der
Recherche und den Interviews zusammenzuführen, zu
strukturieren und zu interpretieren. Ziel war es, ein klares
Verständnis für die Problemstellung, die Bedürfnisse der
Nutzer:innen und die Rahmenbedingungen zu entwickeln.
Unsere Recherche hat gezeigt, dass die Herausforderungen
im Krankentransportprozess vielschichtig sind und nicht alle
Probleme gleichzeitig und von uns als Gestalter:innen gelöst
werden können. Daher lag der Fokus in dieser Phase darauf,
sogenannte Opportunity Areas zu identifizieren, also Bereiche
im Prozess, in denen gezielte Verbesserungen nicht nur
machbar, sondern auch besonders wirkungsvoll für die
Beteiligten sind.
Synthese
Fehlerquellen im Transportschein
Der Transportschein ist das zentrale Dokument im Krankentransport-
prozess. Gleichzeitig stellt er jedoch eine häufige Fehlerquelle dar, die zu
Verzögerungen und zusätzlichem Aufwand führen kann. Diese Fehler
betreffen nicht nur die Patient:innen, sondern auch alle weiteren
Beteiligten, welche in den Prozess involviert sind.
Ein häufiger Fehler betrifft falsche oder unvollständige Angaben auf
dem Transportschein. Dazu zählen fehlerhafte Patientendaten, wie
beispielsweise Name, Geburtsdatum oder Adresse, sowie unklare oder
unvollständige Angaben zum Beförderungsgrund. Auch die falsche
Auswahl der Beförderungsart, beispielsweise ein Krankentransport-
wagen statt eines Taxis, führt zu Problemen.
Ein weiteres Problem betrifft die Genehmigung des Transportscheins.
Gelegentlich wird der Transportschein für eine Fahrtbuchung genutzt,
ohne dass zuvor eine Genehmigung durch die Krankenkasse eingeholt
wurde. Bleibt dieser Fehler unbemerkt, besteht das Risiko, dass die Fahr-
dienste keine Kostenerstattung erhalten. Das nachträgliche Einholen einer
Genehmigung erschwert den Ablauf zusätzlich und ist nicht in allen Fällen
möglich.
Die fehlende Digitalisierung innerhalb des Systems verschärft diese
Herausforderungen. Da Transportscheine in Papierform verarbeitet
werden, kommt es häufig zu Übertragungsfehlern oder verloren
gegangenen Dokumenten. Dies erschwert die Kommunikation zwischen
den Beteiligten und verursacht zusätzlichen bürokratischen Aufwand.
Auch kurzfristige Terminänderungen stellen eine weitere Hürde dar.
Verschiebungen von Arzt- oder Behandlungsterminen machen oft eine
Anpassung des Transportscheins notwendig. In solchen Fällen muss das
Dokument neu ausgestellt und gegebenenfalls erneut genehmigt werden,
was den Prozess verzögert.
Hinzu kommt, dass viele Patient:innen nicht ausreichend über die
Abläufe informiert sind. Häufig reichen sie den Transportschein nicht
rechtzeitig bei der Krankenkasse ein oder übersehen wichtige Schritte,
90 - 91
wie die erforderliche Genehmigung. Darüber hinaus sind einige Patient:
innen aufgrund ihrer Erkrankung eingeschränkt und nicht in der Lage,
die Fahrt auf dem Transportschein durch ihre Unterschrift zu bestätigen.
Jedoch kann ein Transportschein ohne Unterschrift der Patient:innen nicht
bei den Krankenkassen abgerechnet werden. Besonders ältere oder
hilfsbedürftige Patient:innen sind deswegen auf Unterstützung
angewiesen, um einen Krankentransport zu organisieren.
Ein häufiger Fehler betrifft falsche oder unvollständige
Angaben auf dem Transportschein.
Diese Fehler im Transportscheinprozess führen letztlich zu Zeit-
verlusten, zusätzlicher Bürokratie und Stress für alle Beteiligten. Um diese
Probleme zu minimieren, sind Verbesserungen dringend erforderlich.
Zusammengefasste Fehlerquellen
Arztpraxis Patientendaten fehlen (Name, Geburts-
datum, Adresse, Versicherten-nummer, etc.)
Patientendaten sind falsch (Name,
Geburtsdatum, Adresse, Versicherten-
nummer, Schreibfehler, etc.)
Transportschein wird falsch abgelegt und
geht verloren
Falsch eingetragen, ob Fahrt
genehmigungspflichtig ist und den Grund
der Beförderung
92 - 93
Fahrdienst Patient:in
Praxisstempel oder Unterschrift fehlt
Start- und Zielort falsch ausgefüllt
Ärzt:in hat einen falschen Behandlungsort
ausgewählt (z.B. zu weit entfernt vom
Wohnort)
Unterschrift nicht gültig
Patient:in versteht den Genehmigungs-
prozess nicht und weiß nicht, dass Fahrt
genehmigt werden muss
Patient:in verliert oder erkennt nicht den
Brief mit dem Genehmigungsdokument
Patient:in kann den Anweisungen nur
schlecht folgen
Abb. 13 Zusammengefasste Fehlerquellen im Beförderungspapier
Synthese
Kommunikations- und
Koordinationsprobleme
Kommunikationsprobleme zwischen Beteiligten
Kommunikation ist ein wichtiger Bestandteil des Krankentransport-
prozesses. Dennoch treten häufig Probleme auf, welche den Ablauf
stören und zu Verzögerungen führen. Ein wesentlicher Grund dafür ist
der Einsatz unterschiedlicher Kommunikationswege wie Brief, Telefon, Fax
und manuell übermittelte Dokumente. Diese traditionellen und teilweise
analogen Methoden sind fehleranfällig und können zu Missverständnissen
oder Informationsverlust führen.
Ein häufiges Problem ist die fehlerhafte Übermittlung von Infor-
mationen. Krankenkassenmitarbeiter:innen übertragen Transportschein-
daten oft unvollständig oder fehlerhaft, da diese häufig manuell in ihre
System übertragen werden. Zusätzlich werden bei Abrechnung sowohl
digital übermittelte Datensätze sowie Papier-dokumente von den
Fahrdiensten verlangt. Dies erhöht das Risiko von Dokumentenverlust
und den Verwaltungsaufwand zusätzlich.
Ein wesentlicher Grund dafür ist der Einsatz unterschiedlicher
Kommunikationswege.
Hinzu kommen veraltete technische Strukturen, die den ganzen
Prozess weiter erschweren. Fehlende digitale Schnittstellen führen häufig
zu Medienbrüchen bei der Datenübermittlung. Viele Abläufe basieren nach
wie vor auf Papierdokumenten und Briefen, wodurch eine schnelle und
fehlerfreie Kommunikation erschwert wird. Die Krankenkassen scannen
die eingereichten Transportscheine im Rahmen der Abrechnung und
vernichten anschließend die Originale. Im Falle einer Ablehnung erhalten
die Fahrdienste lediglich eine Kopie zurück. Diese Kopien erschweren die
erneute Ausstellung oder Korrektur, da ihre Echtheit nur durch das
Originaldokument nachweisbar ist und Arztpraxen den Kopien oft
misstrauen. Dies führt häufig zu zusätzlichem Zeitaufwand und einer
verweigerten Kostenübernahme.
94 - 95
Koordinationsprobleme zwischen Beteiligten
Neben den Kommunikationsproblemen stellen auch Koordinations-
probleme eine große Herausforderung im Krankentransport dar.
Die Hauptursache für Koordinationsprobleme im Krankentransport ist
die schlechte Informationsweitergabe. Sie erschweren den Ablauf und
führen häufig zu Verzögerungen sowie unnötigem Mehraufwand für
alle Beteiligten.
Ein Problem entsteht, wenn sich im Behandlungsverlauf der
Patient:innen Änderungen ergeben, beispielsweise der Wechsel von
einer stationären zu einer ambulanten Behandlung. Fahrdienste erhalten
darüber oft keine Informationen, obwohl solche Änderungen dazu führen
können, dass der ursprüngliche Transportschein nicht mehr korrekt aus-
gestellt ist. Diese Änderungen führen häufig zur Ablehnung der Kosten-
übernahme durch die Krankenkassen, da diese nur über die tatsächlich
erfolgte Behandlung, nicht aber über Änderungen im Verlauf, informiert
sind.
Infolgedessen müssen Fahrdienste den Grund der Ablehnung heraus-
finden und einen korrigierten Transportschein erhalten. Datenschutz-
bestimmungen erschweren diesen Prozess deutlich, da die weiteren
Beteiligten den Fahrdiensten eigentlich keine Auskunft darüber geben
dürfen. Gleichzeitig verfügen die Fahrdienste in der Regel nicht über die
Kontaktdaten der Patient:innen, um selbst nachzufragen.
Auch die Zusammenarbeit zwischen Fahrdiensten und Krankenkassen
ist oft von Fehlkommunikation geprägt. Ablehnungen von eingereichten
Transportscheinen für die Abrechnung werden häufig unzureichend oder
unklar begründet, sodass Fahrdienste die Entscheidungen deuten müssen
und missverstehen können. Dies führt zu Unsicherheiten und erfordert
zeitaufwendige Rückfragen. Hinzu kommt, dass Krankenkassen telefonisch
nur schwer erreichbar sind und es oft an klar zuständigen Ansprech-
partner:innen fehlt, die bei Rückfragen unterstützen könnten.
In einigen Fällen kommt es vor, dass Arztpraxen die erneute
Synthese
Ausstellung von Transportscheinen nach Fehlern verweigern. Diese Ent-
scheidungen beruhen meist nicht auf Unwillen, sondern auf fehlendem
Wissen und einer oft unbegründeten Angst vor möglichen Sanktionen
durch die Krankenkassen. Jedoch führt diese Entscheidung zu
Zahlungsausfällen bei den Fahrdiensten.
Die Hauptursache für Koordinationsprobleme im
Krankentransport ist die schlechte Informationsweitergabe.
Probleme mit Online-Portalen
Ein weiteres Problem ergibt sich bei der Nutzung von Onlineportalen für
die Kommunikation im Abrechnungsprozess. Diese Portale sind eigentlich
dazu gedacht, die Kommunikation im Abrechnungsprozess zu ver-
einfachen. In der Praxis zeigt sich jedoch, dass fehlende Zuständigkeiten
dazu führen, dass insbesondere kompliziertere Fälle nicht bearbeitet
werden. Eingehende Nachrichten im Onlineportal bleiben häufig über
längere Zeit unbeantwortet, was Korrekturversuche und Bearbeitungen
verzögert.
Darüber hinaus haben Mitarbeiter:innen der Abrechnungszentren
oftmals keinen Zugriff auf alle relevanten Fall- und Patientendaten.
Dies erschwert die Nachvollziehbarkeit und Überprüfung von Be-
gründungen der Fahrdienste, was zusätzlichen Klärungsbedarf und
weitere Verzögerungen nach sich zieht.
Fahrdienste kritisieren außerdem, dass jede Krankenkasse bzw. jedes
Abrechnungszentrum ein eigenes Onlineportal betreibt. Dies erschwert die
Verwaltung und erfordert einen erheblichen Mehraufwand, da mehrere
Portale regelmäßig überprüft werden müssen.
96 - 97
Folgen für Fahrdienste
Es zeigt sich, dass diese Kommunikations- und Koordinationsprobleme
Fahrdienste erheblich belasten. Fehlerhafte Transportscheine, unklare
Zuständigkeiten und zusätzlicher Verwaltungsaufwand führen zu
Verzögerungen und steigern das Risiko von Zahlungsausfällen.
Das führt zu einem erheblichen Zeit- und Arbeitsaufwand. Verbesserte
Kommunikationswege und klare Strukturen könnten diese Belastungen
reduzieren.
Zusammengefasste Ursache
Arztpraxis Der Transportschein wird falsch übermittelt
und erreicht den Fahrdienst nicht
Die Anweisungen werden falsch verstanden
Die Arztpraxis verweigert die erneute
Ausstellung des Transportscheins
98 - 99
Krankenkasse Fahrdienst
Krankenkassen übertragen
Transportscheindaten oft fehlerhaft
und verlangen sowohl digitale als auch
papierbasierte Dokumente, die oft verloren
gehen
Unterschiedliche Abrechnungsmethoden
und unklare Anforderungen führen zu
Verzögerungen
Informationen über Versicherungswechsel
und Ablehnungen sind oft ungenau.
Hotlines und Onlineportale haben keine
klaren Ansprechpartner:innen, wodurch
Fälle unbearbeitet bleiben
Nachrichten und Daten im Onlineportal
sind unübersichtlich, was die Bearbeitung
erschwert
Es fehlt eine Verbindung zwischen Einsatz-
dokumentation und Abrechnung
Der Fahrdienst erhält nach dem Transport
keine weiteren Informationen von den
Patient:innen (z. B. bei Änderungen im
Behandlungsverlauf)
Der Fahrdienst versteht die Ablehnung
falsch, was zu einem Missverständnis führt
Abb. 14 Zusammengefasste Ursache von Kommunikations- und Koordinationsproblemen
Synthese
100 - 101
Auswirkungen und Folgen des
aktuellen Systems
Der aktuelle Krankentransportprozess erweist sich als fehleranfällig und
wirkt sich unterschiedlich auf alle Beteiligten aus. Während der Prozess
meist als belastend empfunden wird, variieren die konkreten Folgen je
nach Rolle der Beteiligten.
Das Ausstellen von Transportscheinen für Patient:innen erfordert in
den Arztpraxen einen gewissen Zeitaufwand. Die Bearbeitung von Rück-
fragen oder Korrekturanfragen fehlerhafter Transportscheine führt zu
einem insbesondere für medizinische Fachangestellte erhöhten Arbeits-
aufwand. Das ist problematisch, da Arztpraxen häufig ohnehin mit einem
hohen Patientenaufkommen und Personalmangel zu kämpfen haben.
Fahrdienste haben einen hohen Arbeitsaufwand, um die
Anforderungen der Krankenkassen an das Abrechnungsformat umzu-
setzen. Deswegen benötigen Fahrdienste häufig mehr Personal für die
Abrechnung. Bei einer Ablehnung durch die Krankenkassen muss ein
erheblicher Mehraufwand in die Korrektur des Transportscheins investiert
werden, um bei einer erneuten Einreichung eine Auszahlung zu erhalten.
Ablehnungen können die Auszahlung teilweise bis zu 18 Monate
verzögern. Bleibt ein Transportschein länger als zwei Jahre unbezahlt,
stellen Fahrdienste die Abrechnung meist ein und tragen die Kosten selbst.
Je länger eine Fahrt zurückliegt, desto aufwendiger und schwieriger wird
eine Korrektur sowie die Erstattung der Kosten.
Die Auswirkungen auf die Krankenkassen zeigen sich vor allem
in einem hohen Arbeitsaufwand für Genehmigungen, abschließende
Prüfungen sowie die Abrechnung. Da Genehmigungen über verschiedene
Wege erfolgen können, entsteht ein komplexer Verwaltungsprozess.
Ein erheblicher Teil der Arbeit besteht darin, Daten aus Papierdokumenten
manuell in digitale Systeme zu übertragen. Infolgedessen haben Kranken-
kassen hohe Bearbeitungs- und Verwaltungskosten, die durch den
aktuellen Prozess verursacht werden.
Für erkrankte Personen kann der Prozess belastend sein, insbesondere
wenn sie nicht in der Lage sind, eine Genehmigung selbstständig
einzuholen und auf die Unterstützung von Angehörigen angewiesen
sind. In einigen Fällen müssen Patient:innen die Fahrtkosten sogar selbst
übernehmen, wenn Abrechnungen abgelehnt werden, weil der Transport-
schein von Ärzt:innen fälschlicherweise, ohne ausreichende medizinische
Notwendigkeit ausgestellt wurde.
Das aktuelle System führt insbesondere bei den beteiligten
Institutionen zu erheblichem Arbeitsaufwand, zusätzlichen Kosten
und einem langwierigen Prozess. Fahrdienste sind dabei die Hauptleid-
tragenden, da sie häufig unter Fehlern anderer Beteiligten leiden.
Sie müssen erheblichen Mehraufwand betreiben, um ihre erbrachten
Leistungen bezahlt zu bekommen. Der aktuelle Prozess ist auch nicht
ideal für erkrankte Personen und erfordert gegebenenfalls die Unter-
stützung von Angehörigen.
Hoher Zeitaufwand für
Abrechnungsprozess
Hoher
Arbeitungsaufwand
Hoher Arbeitsaufwand
für Fehlerkorrekturen
Belastender Prozess
für erkrankte Personen
Zusätzlicher Aufwand
für die Korrektur
Hohe
Verwaltungskosten
Verzögerte Zahlung
oder Zahlungsausfall
Kostenrisiko für
Selbstzahlung
Arztpraxis Krankenkasse
Fahrdienste Patient:innen
Abb. 15 Auswirkungen und Folgen des aktuellen Systems
Synthese
Synthese
Identifizierte Probleme
Im Rahmen der Prozessanalyse und der Untersuchung verschiedener
Fehlerquellen konnten wir zentrale Problemfelder identifizieren und
systematisch clustern. Dabei wurde deutlich, dass das Hauptproblem
des Krankentransportprozesses in einer komplexen Prozessabwicklung
liegt, die wiederum durch verschiedene Unterprobleme entsteht.
Ein wesentliches Problemfeld sind falsche Transportscheine, die
häufig aufgrund von Flüchtigkeitsfehlern, fehlendem Wissen oder
unzureichender Schulung entstehen. Diese Fehler führen zu Ver-
zögerungen, zusätzlichen Bearbeitungsaufwänden und potenziellen
Zahlungsausfällen.
Ein weiteres zentrales Problemfeld sind Kommunikations- und
Koordinationsprobleme. Hierbei wurde festgestellt, dass insbesondere
die Probleme bei der Informationsübermittlung eine reibungslose
Abwicklung behindern. Dokumente gehen verloren, Nachrichten bleiben
unbeantwortet, fehlende Zuständigkeiten erschweren die Bearbeitung,
und unklare Prozesse führen zu Missverständnissen und Verzögerungen.
Diese identifizierten Problemfelder zeigen, dass die Prozessabwicklung
in ihrer aktuellen Form nicht nur komplex, sondern auch fehleranfällig ist.
102 - 103
102 - 103
Flüchtigkeits-
fehler
Fehlendes Wissen
und Schulung
Kommunikations- und
Koordinationsprobleme
Falscher
Transportschein
Probleme bei der
Informationsübermittlung
Komplexe
Prozessabwicklung
Abb. 16 Identifizierte Probleme im Krankentransport
Synthese
Handlungsspielräume
Nach der Recherche war es entscheidend, klare Rahmenbedingungen
und Handlungsspielräume zu definieren. Diese ermöglichten es uns,
unseren Fokusbereich einzugrenzen und einen klaren Rahmen zu schaffen,
innerhalb dessen wir unsere Lösung gestalten konnten. Dadurch stellten
wir sicher, dass unsere Ansätze nicht nur realisierbar, sondern auch gezielt
auf die identifizierten Herausforderungen ausgerichtet waren.
Umsetzbare Lösung für Deutschland
Uns war es wichtig, eine Lösung für die identifizierten Probleme zu
entwickeln, welche in das bestehende Krankentransport- und Gesundheits-
system in Deutschland integriert werden kann. Dieses Ziel war für uns
essenziell, da eine Lösung, die nicht auf Integration ausgerichtet ist, weder
Handlungsspielräume noch Verbesserungspotenziale aufzeigt und letztlich
lediglich als Konzeptstudie dienen würde.
Deshalb setzten wir uns zum Ziel, die nächste Stufe im Digitalisierungs-
und Optimierungsprozess des deutschen Krankentransportsystems zu
gestalten. Das erfolgt unter Berücksichtigung aller Beteiligten und ohne
eine unrealistische oder nicht umsetzbare Lösung zu gestalten.
Wir waren uns bewusst, dass diese Rahmenbedingungen unsere
gestalterische Freiheit einschränken könnten. Dennoch hielten wir es für
äußerst wichtig, als Gestalter:innen innerhalb eines klar definierten
Rahmens zu arbeiten, um praktikable und nachhaltige Lösungen zu
schaffen.
104 - 105
Unser Ansatz
Als Lösung für die identifizierten Probleme erkennen wir nicht nur
eine Anwendung für eine verbesserte Handhabung des aktuellen
Papiertransportscheins. Unser Ansatz zielt darauf ab, den gesamten
Abwicklungsprozess zu optimieren. Dabei legen wir besonderen Wert
darauf, die bürokratischen Anforderungen und Abläufe zu vereinfachen,
um zusätzlichen Aufwand zu minimieren. Ein zentraler Aspekt unserer
Lösung ist die Vermeidung von Fehlern bereits im Vorfeld.
Unsere Rahmenbedingungen
Unsere Rahmenbedingungen orientieren sich an dem Ziel, eine implemen-
tierbare und realistische Lösung für das deutsche Krankentransport- und
Gesundheitssystem zu entwickeln. Daraus ergeben sich einige Rahmen-
bedingungen.
Wir berücksichtigen die gesetzlichen Vorgaben für die Verordnung von
Krankentransporten durch den Gesetzgeber und die gesetzlichen Kranken-
kassen. Demnach muss die Notwendigkeit eines Krankentransports von
einem:einer Ärzt:in festgestellt werden. Die Beförderung muss mit einem
registrierten und für Krankentransporte qualifizierten Fahrdienst durch-
geführt werden. Außerdem erhalten Patient:innen die Leistungen als
sogenannte Sach- und Dienstleistungen, wodurch eine Vorabzahlung
nicht erforderlich ist (SGB V, 1988, § 2, Abs. 2).
In Deutschland existiert mit der Telematikinfrastruktur ein bestehendes
Netzwerk sowie definierte Standards für den Austausch medizinischer
Daten. Infolgedessen versuchen wir eine Lösung zu erarbeiten, die sich in
das System integrieren lässt und, falls möglich, bestehende Standards und
Dienste wie die elektronische Patientenakte oder die elektronische
Gesundheitskarte verwendet.
Synthese
Folgen dieser Rahmenbedingungen
Ein wesentlicher Nachteil im Vergleich zu anderen Ländern, wie den
skandinavischen Staaten, ist das Fehlen einer zentralisierten Gesundheits-
plattform in Deutschland. Dadurch gibt es keine moderne Daten-
infrastruktur, über die alle relevanten Patientendaten zugänglich wären.
Auch fehlt eine von Patient:innen genutzte zentrale Gesundheits-
anwendung, an die unsere Lösung nahtlos angebunden werden könnte.
Insbesondere ältere Versicherte bevorzugen analoge oder ihnen
vertraute Lösungen (McKinsey, 2023). Aus diesem Grund legen wir bei
der Gestaltung unserer Lösung großen Wert darauf, auch analoge oder
niedrigschwellige digitale Angebote bereitzustellen, um den Bedürfnissen
dieser Beteiligten gerecht zu werden. Diese Fragmentierung könnte dazu
führen, dass bestimmte Lösungsansätze nicht weiterverfolgt werden
können, da es für diese keine Optionen für die Ergänzung eines analogen
Verfahrens besteht.
Das Hauptziel unserer Lösung ist die Optimierung der Abwicklung
von Krankentransporten. Infolgedessen werden wir uns mit dem
Transportschein befassen, der auch in der Notfallrettung eingesetzt wird.
Die spezifischen Anforderungen der Notfallrettung berücksichtigen wir
während der Entwicklung jedoch nicht. Jedoch evaluieren wir nach
Abschluss, ob die von uns entwickelte Lösung für den Krankentransport
als Basis für eine Weiterentwicklung in der Notfallrettung verwendet
werden könnte.
Unsere Lösung sollte möglichst realisierbar und integrierbar in das
deutsche Gesundheitssystem sein. Dennoch sind wir bereit, von diesen
Rahmenbedingungen abzuweichen, wenn sich zeigt, dass eine
Abweichung zu einer signifikanten Verbesserung führt.
Chance für
eine Lösung
106 - 107
Korrekt ausgefüllte
Transportscheine und
vorzeitige Fehler-
vermeidung
Optimierung des
Prozesses
Anbindung an die
Telematikinfrastruktur
Gering digitale
Alternative für Patient:
innen
Software für die
Bearbeitung des
Papiertransportscheins
(Muster 4)
Implementierbare
Lösung für das deutsche
Gesundheitssystem
Chancen für die Beteiligten
Abb. 17 Opportunity Board
Synthese
Unsere Zielgruppe
Unsere Recherche hat gezeigt, dass es viele Beteiligte im Kranken-
transportprozess gibt. Die Patient:innen stehen im Mittelpunkt des
Prozesses, da dieser letztendlich auf ihre Bedürfnisse ausgerichtet ist.
Allerdings sind sie im Vergleich zu anderen Beteiligten weniger tief in
den Ablauf eingebunden.
Wir haben uns entschieden, keine primäre Zielgruppe zu definieren,
sondern eine Lösung zu entwickeln, die mehrere Beteiligte berücksichtigt.
Unser Fokus liegt jedoch auf den Fahrdiensten, da diese am stärksten von
den bestehenden Problemen betroffen sind. Patient:innen sollten
möglichst wenig aktiv in den Prozess involviert sein, da ein Großteil
von ihnen gesundheitlich beeinträchtigt ist. In den Arztpraxen sehen wir
großes Potenzial, Fehler beim Erstellen des Transportscheins zu vermeiden
und dadurch den Prozess zu optimieren.
Wir haben für unsere verschiedenen Nutzer:innengruppen
Personas erstellt. Diese sind fiktive, aber realitätsnahe Darstellungen
einer Zielgruppe, die deren Bedürfnisse, Verhaltensweisen und Ziele
repräsentieren. Sie helfen dabei, die Zielgruppen besser zu verstehen und
gezielt Lösungen für ihre Anforderungen zu entwickeln. Normalerweise
werden pro Zielgruppe mehrere Personas erstellt, um die Vielfalt der
Nutzer:innen abzubilden. Da es jedoch allein bei den Patient:innen eine
Vielzahl unterschiedlicher Krankheitsbilder gibt, haben wir uns
entschieden, für jede Zielgruppe einen generischen Fall darzustellen.
Diese basieren auf unseren vorherigen Recherchen und Interviews und
spiegeln die Bedürfnisse und Wünsche der jeweiligen Zielgruppen wider.
Jede Persona wurde durch ein User Need Statement ergänzt, das die
zentralen Bedürfnisse der Nutzer:innen zusammenfasst. Auch wurden
How Might We Fragen erstellt, welche die Herausforderungen und
Probleme beschreiben. Diese Fragen haben wir verwendet, um unser
Denken anzuregen und erste Lösungen entwickeln zu können.
Arztpraxis
Patient:in
Fahrdienst
Krankenkasse
Krankenhaus
Vor der Fahrt 108 - 109
Während der Fahrt Nach der Fahrt
Fehler ist aufgetreten und wird behoben
Abb. 18 Die Zusammenarbeit der Beteiligten im Krankentransport
Synthese
Unsere Zielgruppe Unsere Zielgruppe
Patient:innen Fahrdienste
Alter: Beruf: Gesundheit: Technologienutzung:
Unterstützung:
User Needs:
Probleme und
Herausforderungen:
Peter „Ich wünsche mir, dass der Krankentransport besser
organisiert wäre, damit ich nicht so viel Zeit mit
dem Bürokratischen verbringen müsste.“
67 Jahre
Rentner
Chronische Nierenerkrankung, regelmäßige Dialysebehandlungen
Besitzt einen Laptop und ein Smartphone, möchte jedoch keine Gesundheits-
daten auf seinem Smartphone verwalten
Seine Frau unterstützt ihn bei der Kommunikation mit der Krankenkasse und
beim Abholen von Transportscheinen
• Regelmäßige Beförderung und medizinische Versorgung, sowie gelegentliche
Unterstützung
• Schnelle Terminvergabe und flexible Transportmöglichkeiten
• Ein vereinfachtes Verfahren für das Erhalten und Genehmigen von
Transportscheinen
• Häufige Arztbesuche und Behandlungstermine (Dialyse), die viel Zeit in
Anspruch nehmen, was ihn frustriert
• Für jede Nutzung des Krankentransports muss der Transportschein bei der
Krankenkasse vorgelegt werden, was zusätzlichen Aufwand bedeutet
• Seine eingeschränkte Mobilität macht ihn stark abhängig von externer Hilfe
und Unterstützung
Alter:
Beruf:
Technologienutzung:
User Needs:
Probleme und
Herausforderungen:
HMW Frage
HMW Frage
Wie können wir die Prozessbelastung für
Patient:innen so gering wie möglich halten?
110 - 111
Thomas
„Ich brauche ein System, das meinen Arbeits-
aufwand bei der Abrechnung reduziert,
Ablehnungen verringert und eine pünktliche
Auszahlung ermöglicht.“
52 Jahre
Taxifahrer und Besitzer eines mittelgroßen Taxiunternehmen
Verwenden eine Abrechnungssoftware und Smartphone für die Disposition der
Taxifahrer:innen
• Unterstützung bei der Abrechnung von Fahrten, um den hohen
Arbeitsaufwand zu verringern
• Weniger Ablehnungen von Transportscheinen und eine rechtzeitige
Auszahlung des Geldes
• Bessere Kommunikationskanäle, um die Krankenkasse und andere Beteiligte
schnell zu erreichen
• Zeitaufwändige manuelle Dokumentation und Abrechnung im
Krankentransport
• Umständliche und zeitaufwendige Korrektur falscher Transportschein
• Kommunikation mit anderen Beteiligten erschwert und zeitaufwendig
Wie können wir Fahrdiensten eine möglichst
einfache und reibungslose Abwicklung
ermöglichen?
Synthese
112 - 113
Unsere Zielgruppe Unsere Zielgruppe
Arztpraxis Krankenkasse
Alter:
Beruf:
Technologienutzung:
User Needs:
Probleme und
Herausforderungen:
Dr. Sabine
„Ich benötige eine Lösung für die schnelle und
fehlerfreie Ausstellung von Transportscheinen, um
den Arbeitsaufwand zu minimieren und das
Patientenaufkommen bewältigen zu können.“
45 Jahre
Hausärztin mit eigener Praxis
Verwendung einer Praxisverwaltungssoftware auf den Desktop-Computern in
der Praxis
• Unterstützung um Fehler bei der Ausstellung von Transportscheinen zu
vermeiden
• Weniger bürokratischr Arbeitsaufwand aufgrund von hoher Anzahl an Patient:
innen • Zeitintensive manuelle Erstellung des Transportscheins
• Hoher bürokratischer Arbeitsaufwand in Kombination mit Personalmangel
führt zu Verzögerungen und erhöhtem Stress im Praxisalltag
• Hoher Schulungsaufwand bis neue Mitarbeitende in der Lage sind
Transportscheine korrekt auszustellen
Alter:
Beruf:
Technologienutzung:
User Needs:
Probleme und
Herausforderungen:
Fiona
„Wir benötigen eine Lösung für eine schnellere
Genehmigung und Abrechnung von Transport-
scheinen, um das Fehleraufkommen sowie den
Arbeitsaufwand zu minimieren.“
34 Jahre
Fachangestellte bei einer gesetzlichen Krankenkasse
Zugriff auf das Krankenkasseninformationssystem über einen Desktop-
Computer
• Schnellerer, digitaler Genehmigungsprozess bei den Transportscheinen
• Ein digitales System, das die manuelle Übertragung von Daten überflüssig
macht
• Zeitaufwändiges Genehmigungsverfahren für Transportscheine
• Hoher Arbeitsaufwand bei der Abrechnung von Transportscheinen durch
Einreichung von Papierdokumenten
HMW Frage
HMW Frage
Wie können wir den Arbeitsaufwand für
Krankenkassen reduzieren und gleichzeitig
korrekte Abrechnungen sicherstellen?
Wie können wir Fehler bei der Erstellung von
Transportscheinen in den Arztpraxen
vermeiden, um den Arbeitsaufwand zu
verringern?
Synthese
Value Proposition Canvas
Der Value Proposition Canvas ist eine Methode, die hilft sicherzustellen,
dass die Bedürfnisse der Nutzer:innen im resultierenden Produkt oder
Service berücksichtigt werden. So wird sichergestellt, dass ein Mehrwert
für die Nutzer:innen geschaffen wird.
Fahrdienste:
Einfache Abrechnung mit
Datenimport
Arztpraxen:
Schnelle und einfache
Erstellung von Transport-
scheinen
Alle:
Einheitliche und integrierte
Lösung für alle Beteiligten
Arztpraxen:
Fahrdienste:
Automatisierte
Patientendaten zur
Fahrdienste:
Digitale Plattform für klare
Kommunikation
automatischen Befüllung des
Abrechnungssoftware Patient:innen:
Transportscheins
Automatisierte Genehmigung
Krankenkassen:
Einheitlicher Datensatz
Arztpraxen:
Weniger Kommunikations-
aufwand durch bessere
Arztpraxen:
Datenqualität
Integration in bestehende
Verwaltungssysteme
Gain Creators Product &
Service
Patient:innen:
Einfache Buchung und
Verfolgung von Kranken-
transporten
Arztpraxen:
Software zur Erstellung
fehlerfreier Transport-
scheine
Alle:
Verlässlichkeit und Vertrauen
durch ein standardisiertes
integriertes System
Pain Relievers Fahrdienste:
Reduzierter bürokratischer
Aufwand durch Fehler-
vermeidung
Krankenkassen:
Gebündelte, fehlerfreie
Datensätze
Arztpraxen:
Algorithmus lehnt nicht
erstattungsfähige Kranken-
transporte automatisch ab
Patient:innen:
Wegfall des manuellen
Genehmigungsprozesses
Patient:innen:
Barrierefreie und analoge
Lösungen für technisch
weniger affine Personen
Alle:
Verbesserung der
Zusammenarbeit zwischen
den Akteuren durch zentrale
Kommunikation
114 - 115
Für jede Persona und Nutzergruppe wird idealerweise ein eigenes Value
Proposition Canvas erstellt. Auf der rechten Seite werden die Bedürfnisse,
Probleme und Erwartungen der Nutzer:innen dargestellt. Die linke Seite
zeigt, wie das Produkt oder der Service darauf eingeht. Stimmen beide
Seiten überein, erfüllt das Produkt die Bedürfnisse der Nutzer:innen.
Patient:innen:
Vereinfachtes Erhalten von
Transportscheinen
Patient:innen:
Vereinfachte Genehmigung
von Transportscheinen
Arztpraxen:
Arztpraxen:
Geringes Fehleraufkommen
bei der Erstellung des
Patient:innen schnell bedienen Fahrdienste:
Transportscheins
Fahrdienste:
Schnelle Abrechnung
Krankenfahrten durchführen
Krankenfahrten abrechnen
Gains
Jobs to
be Done
Pains
Krankenkassen:
Transportschein genehmigen
Krankenfahrten prüfen
Geld auszahlen
Patient:innen:
Muss sich selbständig um die
Genehmigung kümmern
Arztpraxen:
Transportschein ausstellen
Patient:innen bedienen
Arztpraxen:
Schwierigkeit bei der
Entscheidung über die
Genehmigungsart
Fahrdienste:
Zeitaufwendiger Korrektur-
prozess
Krankenkasse:
Ein aufwendiger Erklärungs-
prozess mit den Patient:innen
Arztpraxen:
Zeitaufwendige Erstellung
eines Transportscheins
Abb. 19 Value Proposition Canvas
Synthese
Zielsetzung
Die Ergebnisse der vorangegangenen Methoden haben aufgezeigt, welche
Änderungen unsere Lösung im Krankentransportprozess bewirken muss.
Neben der Verbesserung der Kommunikation zwischen den Beteiligten
steht die Einführung eines zuverlässigen digitalen Transportscheins im
Fokus. Ein weiteres Ziel ist die Entlastung der Patient:innen im aktiven
Prozess. Zudem soll der Arbeitsaufwand durch Automatisierung und
Standardisierung minimiert werden. Es wird angestrebt, eine einheitliche
Plattform für den Datenaustausch zu schaffen. Gleichzeitig soll das System
flexibel auf die unterschiedlichen Bedürfnisse der Beteiligten zuge-
schnitten sein und nahtlos in bestehende Systeme integriert werden
können.
116 - 117
Wie können wir die Kommunikation,
Koordination und Informationsübermittlung
im Krankentransport effizienter gestalten
und ein geringes Fehleraufkommen sicher-
stellen, um die Prozessabwicklung zu
optimieren?
Synthese
Design Principles
Unsere Lösung wird sich über mehrere Plattformen und Produkte
erstrecken. Daher war es für uns wichtig, gemeinsame Gestaltungs-
richtlinien zu definieren und diese in Form von Design Principles
festzuhalten. Diese Prinzipien dienen als Leitfaden bei der
Entscheidungsfindung in designrelevanten Fragen.
118 - 119
Barrierefrei
Eine barrierefreie, visuell ansprechende Gestaltung sorgt für einfache
Bedienung.
Fehlervermeidend
Eingabe-, Bedienungs- und Flüchtigkeitsfehler werden vorgebeugt und
verhindert.
Unterstützende Nutzerführung
Die Nutzer:innen werden durch Prozessschritte und Aufgaben geführt.
Entscheidungsfreiheit
Den Nutzer:innen werden keine Optionen bevorzugt präsentiert oder
anderweitig beeinflusst.
Plattform und Zielgruppen optimiert
Die Interaktion ist an die Plattform und die Bedürfnisse der Nutzer:innen
optimiert.
Verständliche Kommunikation
Es ist ersichtlich, welche Funktion oder welcher Bestandteil im Produkt
beschrieben ist.
Synthese
Brand Filters
Ergänzend zu den Design Principles hielten wir es für sinnvoll, Brand
Filters zu definieren. Während die Design Principles den Fokus auf
allgemeine Gestaltungsrichtlinien legen, konzentrieren sich die Brand
Filters verstärkt auf die Kommunikation und die Wirkung der Marke.
Sie dienen als Hilfe, um Gestaltungsentscheidungen enger mit der
Markenidentität zu verknüpfen
Gerade bei unserem teilmedizinischen Thema ist es essenziell, dass
die Kommunikation über verschiedene Dienste hinweg einheitlich und
stimmig wirkt. Dies trägt maßgeblich dazu bei, Seriosität und Vertrauen
zu schaffen, was besonders bei Produkten, die sensible medizinische
Daten enthalten, von großer Bedeutung ist.
Markenfilter und Erläuterung
Aussehen,
Gefühl und
Tonalität
Informations-
architektur
Nutzerführung,
Navigation
Bewegung,
Interaktion
120 - 121
Verhaltensattribute
Freundlich professionell Zugänglich Präzise
Unterstützend
Nutzer:innen werden durch
die Anwendungen geleitet
und eine angenehme
Bedienung wird angestrebt.
Bekannt
Nutzer:innen finden sich
aufgrund von gewohnten
Pattern und dem mentalen
Modell entsprechend schnell
zurecht.
Freiheit der
Entscheidung
Nutzer:innen werden keine
Optionen bevorzugt prä-
sentiert oder anderweitig
beeinflusst.
Animationen sind
unauffällig und kurz
Animationen erfolgen
unauffällig und ziehen keine
Aufmerksamkeit auf sich.
Barrierefrei
Eine barrierefreie, visuell
ansprechende Gestaltung
sorgt für einfache
Bedienung.
Flache Hierarchie
Nutzer:innen navigieren
auf wenigen Hierarchie-
ebenen und die Ebenen
sind deutlich vonein-
ander getrennt.
Deutliche
Nutzerführung
Die Nutzer:innen werden
durch Prozessschritte
und Aufgaben geführt.
Unterstützende
Animationen
Animationen werden
verwendet, um Feedback
für Interaktionen
bereitzustellen.
Fehlervermeidend
Eingabe-, Bedienungs-
und Flüchtigkeitsfehler
werden vorgebeugt
und verhindert.
Deutliche Benennung
Es ist verständlich,
welche Funktion bzw.
welcher Bestandteil im
Produkt beschrieben
ist.
Klare Abgrenzung der
Inhalte
Die Inhalte der
App sind sortiert.
Sie vermischen und
überlagern sich nicht.
Plattform und
Zielgruppen optimiert
Je Plattform und
Nutzerbedürfnissen
ist die Interaktion
angepasst.
Abb. 20 Brand Filters
Konzeption
“
Nach der Synthesephase führten wir zwei Solo-Design-Sprints
durch, die vom klassischen Ansatz abwichen, da jede:r
eigenständig ein spezifisches Ziel bearbeitete. Dieser Ansatz
war hilfreich, da unser Themenfeld mehrere Beteiligte und
Probleme umfasste.
Die Ergebnisse wurden gemeinsam evaluiert, die Ansätze
abgestimmt und ein Konzept zur Prozessverbesserung
entwickelt. Dabei entstand die Idee, Patient:innen aus dem
aktiven Prozess herauszunehmen. Das Konzept testeten wir
mit Beteiligten im Krankentransport und sammelten Feedback.
Basierend auf dem Feedback änderten wir den Fokus: Ziel
war nun eine digitale Komponente, um Patient:innen mehr
Autonomie zu ermöglichen. Nach Bewertung und Anpassungen
entstand das finale Konzept.
Konzeption
124 - 125
Konzept 1
Ziel des ersten Konzeptentwurfs war es, unsere gewonnenen
Erkenntnisse in eine potenzielle Lösung umzuwandeln. Zunächst nahmen
wir Verbesserungen am allgemeinen Prozess des Krankentransports vor.
Dieser überarbeitete Prozess diente anschließend als Grundlage für die
beiden Solo-Design-Sprints. In ihnen wollten wir testen, ob in der neuen
Prozessumgebung die Entwicklung geeigneter Lösungen einfacher ist.
Das Besondere an den Solo-Design-Sprints im Vergleich zur klassischen
Design-Sprint-Methode war, dass jede:r von uns eigenständig einen
Design-Sprint mit einem spezifischen Ziel durchführte. Das erwies sich
als besonders hilfreich, da wir für mehrere Beteiligte gestalten mussten.
Uns war klar, dass eine einheitliche Lösung nicht allen Problemen und
Bedürfnissen gleichermaßen gerecht werden kann.
In den Solo-Design-Sprints widmeten wir uns der Frage, wie fehler-
freie Transportscheine gewährleistet und die Abrechnung für Fahrdienste
verbessert werden können. Als Ausgangspunkt für die Sprints dienten
die How Might We-Fragen aus den Personas der Arztpraxen und
Fahrdienste. Wir begannen mit diesen Fragen, da sie die zentralen
Probleme direkt adressierten. Auf Grundlage dieser Fragen entwickelten
wir Lösungsansätze. Diese Lösungsansätze sollten nach den Design-
Sprints so weit ausgearbeitet werden, dass sie den Beteiligten im Kranken-
transport vorgestellt und ihr Feedback dazu eingeholt werden kann.
Konzeption
Konzept 1
Überarbeitung des Prozesses
Wir begannen die Überarbeitung des Prozesses mit der Ablösung des
papierbasierten Transportscheins. Unser Ansatz war, einen digitalen
Dienst zu entwickeln, auf dem die Daten des Transportscheins zentral
gespeichert werden. Dadurch entsteht eine Plattform für den gesamten
Datenaustausch im Krankentransportprozess. Alle Beteiligten mit Zugriffs-
berechtigung könnten die benötigten Daten direkt aus diesem Speicher
abrufen.
In den Arztpraxen würden die für den Krankentransport relevanten
Daten erstellt und in diesem zentralen Datenspeicher gespeichert.
Dies würde es ermöglichen, dass Krankenkassen genehmigungs-
pflichtige Fahrten automatisch erhalten und direkt genehmigen können.
Patient:innen könnten per Brief, SMS oder über eine Webseite über die
Genehmigung informiert werden. Anschließend könnten sie eine Fahrt bei
einem Fahrdienst buchen.
Der Fahrdienst könnte bei Bedarf die Versichertennummer der Patient:
innen verwenden, um die Transportdaten aus dem zentralen Speicher
abzurufen. Dies würde über ein Programm erfolgen, das der Fahrdienst
auch für die Planung von Fahrten, die Verwaltung von Kundendaten und
die Abrechnung nutzt.
Während der Fahrt könnten die Fahrer:innen die benötigten Fahrdaten
digital erfassen. Für die Abrechnung kann der Fahrdienst die benötigten
Daten und Rechnung direkt in die Datenbank hochladen. Die Kranken-
kassen könnten diese Informationen anschließend prüfen und die
Auszahlung veranlassen. Das eröffnet zusätzliche Möglichkeiten,
den gesamten Prozess effizienter und transparenter zu gestalten.
126 - 127
Fahrer:in
übermittelt Zugang übermittelt Zugang befördert Patient:in
Arztpraxis Fahrdienst
Patient:in Zielort
kann
zugreifen
Abrechnung
erstellt Verordnung
Daten-
speicher
schreibt Fahrdaten; ergänzt
Abrechnungsdaten; checkt
Abrechnungsprozess
erledigt
Genehmigung &
Abrechnung
zahlt Geld
Krankenkasse
Abb. 21 Ablauf des Konzept 1
Konzeption
Konzept 1
Solo Design Sprint 1: Erstellungslösung für
Transportscheine
Dieser Sprint begann mit der Frage, wie Fehler bei der Erstellung
von Transportscheinen in den Arztpraxen vermieden werden können.
Ziel war es, den Arbeitsaufwand für das Praxispersonal zu verringern.
Nach einer Ideenfindungsphase war der Lösungsansatz, das digitale
Ausfüllen von Transportscheinen um Ausfüllhilfen und Korrektur-
funktionen zu ergänzen. In Arztpraxen wird ein Praxisverwaltungs-
system verwendet, in dem die Patientendaten hinterlegt sind und viele
Prozesse gestartet werden. Daher war es für uns essenziell, die Lösung
direkt in dieses System zu integrieren. Dadurch bleibt der Workflow für
die Arztpraxen weitgehend unverändert.
Eine weitere wichtige Änderung betraf die Restrukturierung der
Angaben zum Grund der Beförderung. Im bisherigen Transportschein-
formular stehen acht Optionen zur Auswahl, die nach der Notwendigkeit
einer Genehmigung sortiert sind. Einige Optionen erfordern zusätzliche
Spezifizierungen durch das Unterstreichen einer Auswahl. Diese Sortierung
erachteten wir als ungeeignet, da sie Optionen teilweise wiederholt,
und die Notwendigkeit einer Genehmigung kein geeigneter Filter ist.
Wir sortierten in unserer Lösung die Optionen nach dem Grund
der Beförderung anhand des Krankheitsbildes, was für medizinisches
Personal einfacher ist. Die Auswahl wurde auf der ersten Ebene reduziert
und bietet bei Bedarf weitere Spezifizierungen an.
Nach dem Design-Sprint unterteilten wir das Ausfüllen des Formulars
in mehrere Teilschritte und überarbeiteten die einzelnen Abschnitte.
Zudem entwickelten wir die Idee, das Formular mithilfe von Daten aus
der Patientenakte oder einer vorherigen Verordnung auszufüllen, um
die Erstellung von Transportscheinen zu beschleunigen.
Aktuelle Version
Neue Version 128 - 129
Abb. 22 Transportschein (Muster 4)
Voll-/teilstationäre Krankenhausbehandlung
Voll-/teilstationäre Behandlung
Ambulante Behandlung
Hochfrequente Behandlung
Dialyse
Onkologische Chemotherapie
Strahlentherapie
Vergleichbarer Ausnahmefall
Hochfrequente Behandlung
Merkzeichen „aG“, „BI“, „H“ / Pflegegrad 4 oder 5 / Pflegegrad 3 mit
dauerhafter Mobilitätsbeeinträchtigung
Vergleichbar Mobilitätsbeeinträchtigung und Behandlungsdauer
mindestens 6 Monate
Anderer Grund
Abb. 23 Neusortierung des Beförderungsgrund
Konzeption
Konzept 1
Solo Design Sprint 2: Abrechnungslösung für
Fahrdienste
Wir befassten uns mit der Frage, wie wir Fahrdiensten eine möglichst
einfache und reibungslose Abwicklung ermöglichen können. Ziel war
es, den Arbeitsaufwand zu reduzieren und insbesondere die Anzahl der
von Krankenkassen abgelehnten Transportscheine zu verringern.
Als Lösung entwickelten wir eine Software für Fahrdienste, in der
die Verwaltung und Abrechnung von Fahrten zentral erfolgt. Die Software
gliedert die Fahrten in die Kategorien „Offen“, „Aktiv“ und „Abgeschlossen“,
wobei wir die Darstellung dieser Ansichten gezielt an die jeweiligen
Bedürfnisse anpassten. Zudem gestalteten wir einen Ansatz für einen
schnellen Abrechnungsflow, der es ermöglicht, aufgezeichnete Fahrdaten
zügig zu überprüfen und daraus Rechnungen zu erstellen.
Darüber hinaus beschäftigten wir uns mit der Darstellung von Fehler-
meldungen und überlegten, wie Ablehnungen der Krankenkasse in
die Software integriert werden könnte. Unser Ansatz sah vor, dass die
gesamte Kommunikation mit den Krankenkassen, einschließlich des
Erhalts von Ablehnungen, direkt in der Fahrdienstsoftware integriert ist.
Diese Integration hielten wir für essenziell, da so alle Fahrten und
Abrechnungen in einer Software abgebildet werden.
Wir entwickelten außerdem einen Workflow, mit dem Fahrdienste
fehlerhafte Transportscheine per Korrekturanfrage direkt an die Arzt-
praxen senden können. Die Arztpraxen könnten daraufhin die Korrek-
turen vornehmen und die aktualisierten Daten im zentralen Speicher
hinter-legen. Dieser Ansatz würde sowohl den bürokratischen als auch
den zeitlichen Aufwand für alle Beteiligten erheblich verringern.
Zudem diskutierten wir, welche Funktionen eine App für Fahrer:innen
benötigen würde, um relevante Fahrdaten während der Fahrt aufzeichnen
zu können.
130 - 131
Abb. 24 Screens für eine Fahrdienstsoftware
Konzeption
Konzept 1
Prozessoptimierung
Infolge der Design-Sprints und der darin entwickelten Ideen wollten
wir versuchen, die Patient:innen noch weniger aktiv am Prozess der
Organisation eines Krankentransportes zu beteiligen. Hierfür passten
wir den Prozess an, sodass Patient:innen die Wahl haben, ob die Fahrt
automatisch gebucht werden soll oder sie diese selbst organisieren
möchten. Dies würde über eine Plattform erfolgen, auf der Fahrten
ausgeschrieben sind und von Fahrdiensten angenommen werden
können. Besonders ältere Patient:innen, die sonst auf Unterstützung
durch Angehörige angewiesen wären, könnten so entlastet werden.
Dieser Ansatz würde jedoch zu einem geringfügigen Mehraufwand in
den Arztpraxen führen, da das Praxispersonal die Patient:innen zunächst
über die Wahlmöglichkeiten informieren und deren Entscheidung
dokumentieren müsste. Zusätzlich könnte es erforderlich sein, dass der
Fahrdienst die Patient:innen nochmals kontaktiert, um Absprachen zu
Abholort und -zeit zu bestätigen. Obwohl diese Daten vorab aus den
Patientendaten in der Arztpraxis generiert werden könnten, können
beispielsweise durch kurzfristige Terminverschiebungen Änderungen
erforderlich werden.
Infolge dieser Prozessoptimierung ergänzten wir die Software für
Fahrdienste um die Funktion, ausgeschriebene Fahrten einsehen und
annehmen zu können.
Arztpraxis
erstellt
Verordnung
Daten-
speicher
genehmigt
Transport-
schein
Krankenkasse
erhält Statusupdate
beauftragt Fahrt
kontaktiert Patient
Fahrdienst
Fahrtenbuchung
liest und schreibt Daten
Freie Fahrdienstwahl
erhält Statusupdate
bucht Fahrt
Patient:in
132 - 133
Patient:in
befördert
Patient:in
Zielort
Fahrdienst
Abb. 25 Ablauf des Konzept 2
Konzeption
Konzeption
Feedback zu Konzept 1
Nachdem die ersten Prototypen und Konzeptentwürfe erstellt worden
waren, holten wir Feedback von Expert:innen aus den jeweiligen
Anwendungsgebieten ein.
134 - 135
134 - 135
Feedback zu Konzept 1
Feedback eines Taxiunternehmen
Wir besprachen das Konzept sowie die Fahrdienstsoftware auch mit
einem Taxiunternehmen aus dem Landkreis Böblingen. Der Fokus lag
dabei darauf, die Perspektive und Anforderungen von Taxiunternehmen
besser zu verstehen.
Folgende Erkenntnisse konnten wir gewinnen:
• Der Ansatz der Fahrtenvermittlung für Patient:innen wird kritisch
betrachtet. Es besteht die Sorge, dass die Entscheidungen über
die Fahrtenvermittlung primär aus wirtschaftlichen Interessen der
Krankenkassen getroffen würde. Dies könnte dazu führen, dass sich
Taxi-unternehmen gegenseitig mit Dumpingpreisen unterhalb des
regionalen Taxitarifs unterbieten, um mehr Fahrten zu erhalten.
• Ein digitaler Speicher für den Datenaustausch mit den Krankenkassen
wird als sehr hilfreich angesehen.
• Der Ansatz zur Aufzeichnung von Fahrdaten im Taxi wird grundsätzlich
positiv bewertet. Allerdings sollte sichergestellt werden, dass dabei nur
benötigte Daten mit den Krankenkassen geteilt werden, um Daten-
schutz und Privatsphäre zu gewährleisten.
Konzeption
136 - 137
Feedback zu Konzept 1
Feedback des Deutschen Roten Kreuz
Die Ergebnisse der Fahrdienstsoftware sowie die überarbeitete
Prozessabwicklung stellten wir der Abrechnungsabteilung des
Deutschen Roten Kreuzes – Kreisverband Schwäbisch Gmünd vor.
Folgende Erkenntnisse konnten wir gewinnen:
• Die in die Software integrierten Kommunikationsschnittstellen zu
Arztpraxen und Krankenkassen wurden als sinnvoller Ansatz bewertet.
• Die automatische Genehmigung wurde als sehr nützlich angesehen,
da aus ihrer Erfahrung viele Pflegeheime keine Genehmigungen
einholen, sondern direkt einen Krankentransportwagen bestellen.
• Bei Krankentransportwagen (KTW) erfolgt die Zuteilung der Fahrten
über die Leitstelle an die verschiedenen anerkannten Hilfs-
organisationen.
• Patient:innen haben hierbei nicht die Wahl, von welcher Hilfs-
organisation sie befördert werden möchten.
• Es wurde empfohlen, den Patient:innen einen Papier-
ausdruck mit allen für sie relevanten Informationen zu geben.
• Eine Kommunikationsmöglichkeit zwischen Patient:innen
beziehungsweise Pflegeheim und Fahrdienst wurde als hilfreich
eingeschätzt, beispielsweise um über mögliche Verspätungen zu
informieren.
• In unserem Softwarekonzept für Fahrdienste waren die benötigten
Informationen zwar vorhanden, jedoch waren einige Begriffe oder
Funktionen nicht eindeutig genug formuliert oder optimal platziert.
Abb. 26 Workshop beim Deutschen Roten Kreuz
Konzeption
Feedback zu Konzept 1
Feedback von Arztpraxen
In Schwäbisch Gmünd haben wir in mehreren Haus- und Facharztpraxen
unseren Ansatz zum Ausfüllen von Transportscheinen vorgestellt.
Folgende Erkenntnisse konnten wir gewinnen:
• Die erste Seite des Formulars wurde als unverständlich empfunden.
weshalb Nutzer:innen besser abgeholt und durch den Prozess geführt
werden müssen.
• Die Möglichkeit, eine Verordnung auf Basis einer Vorlage zu erstellen,
wurde als praktisch angesehen, da die meisten Felder bereits aus-
gefüllt sind und nur noch angepasst werden müssen.
• Das Umgestalten des Feldes „Grund der Beförderung“ erleichtert
das Ausfüllen und macht es einfacher, ohne Vorwissen den Transport-
schein auszufüllen. Es wurde außerdem positiv hervorgehoben, dass
das System automatisch erkennt, ob eine Fahrt genehmigungsfrei
oder genehmigungspflichtig ist.
• Es wurde positiv bewertet, dass das Ausfüllen des Formulars durch
einen geführten Prozess erfolgt, statt das gesamte Formular manuell
auszufüllen.
• Im Softwarekonzept waren alle benötigten Informationen enthalten.
Einige Begriffe und Funktionen waren jedoch nicht präzise genug
formuliert beziehungsweise platziert.
• Die Möglichkeit, eine potenziell erhöhte Fahrtenfrequenz bei Serien-
fahrten direkt auf dem Transportschein anzugeben, wurde als hilfreich
erachtet. Dieser Fall kann beispielsweise eintreten, wenn die Werte der
Patient:innen für eine Chemotherapie an einem Tag unzureichend
sind. Dadurch muss die Behandlung verschoben werden und eine
weitere Fahrt wäre erforderlich.
• Es wurde empfohlen, die Lösung in bestehende Praxisverwaltungs-
systeme zu integrieren, um den technischen Aufwand für die Praxen
zu minimieren und die Akzeptanz zu fördern.
138 - 139
• Eine Option, die ermöglicht einen Transportschein auch ohne festen
Fahrtag auszustellen, wurde als hilfreich wahrgenommen. Mit dieser
kann eine Fahrt zu einer Behandlungsstätte ausgestellt werden, ohne
dass der genaue Fahrtag festgelegt ist.
• Die elektronische Signatur wurde als äußerst hilfreich eingestuft, da
sie ermöglicht, dass Ärzt:innen sich nur einmal anmelden müssen.
So kann das Praxispersonal Transportscheine ausstellen, ohne die
Ärzt:innen häufig für eine Unterschrift unterbrechen zu müssen.
Konzeption
Konzept 2
In Konzept 2 wollten wir vor allem das Feedback der befragten Expert:
innen in unsere Lösung integrieren. Dazu optimierten wir den über-
arbeiteten Krankentransportprozess erneut. Außerdem verlagerten
wir den Fokus von der Software für Fahrdienste, bedingt durch eine
Prozessänderung, hin zu einem verbesserten Zugang für Patient:innen.
Unser Ziel war es, eine App für Patient:innen zu gestalten, die Zugriff
auf relevante Daten und die Möglichkeit zur Fahrtenbuchung bietet.
Ergänzend dazu arbeiteten wir daran, unsere bestehenden Lösungs-
ansätze weiterzuentwickeln und zu vervollständigen.
Richtungswechsel
Sowohl aus dem Gespräch mit dem Deutschen Roten Kreuz als auch
aus unserer eigenen Einschätzung ergab sich, dass die Gestaltung einer
eigenen Fahrdienst-software möglicherweise nicht der beste Ansatz ist,
um die Funktionsweise unseres Systems darzustellen. Bereits bestehende
Abrechnungs-programme der Fahrdienste bieten einen umfangreichen
Funktionsumfang.
Der Einsatz geeigneter Software ist eine entscheidende Komponente
für eine effiziente Abrechnung der Fahrdienste. Wir halten es für sinnvoll,
die bestehenden Abrechnungsprogramme durch Schnittstellen für digitale
Transportscheindaten sowie durch Prüf- und Korrekturfunktionen zu
ergänzen. Jedoch entschieden wir uns in dem zweiten Konzept unseren
Fokus auf die Ausgestaltung der Begleitapp für Patient:innen zu legen.
Prozessoptimierungen
Es zeigte sich, dass das erdachte Konzept mit der Wahlmöglichkeit für
Patient:innen, ob sie eine Fahrt eigenständig buchen möchten, für den
bestehenden Krankentransportprozess ungeeignet war. Dieser Ansatz
hätte zu einem leichten Mehraufwand in den Arztpraxen geführt. Zudem
bestand die Gefahr, dass Patient:innen nicht ausreichend über die
aktuellen Prozessschritte oder den zuständigen Fahrdienst informiert
140 - 141
gewesen wären. Auch war fraglich, ob die Wahlmöglichkeit der Patient:
innen im Fahrdienst gewährleistet werden könnte, obwohl dies durch das
deutsche Gesetz vorgeschrieben ist.
Infolgedessen entfernten wir die Wahloption aus dem Prozess und
nahmen weitere Anpassungen vor. Die Verwendung der Versicherten-
nummer als Identifikationsnummer für den Datensatz über eine Fahrt
erwies sich als ungeeignet und unsicher. Zudem wurde uns empfohlen,
Patient:innen die Möglichkeit zu geben, einen Papierausdruck mit allen
für sie relevanten Informationen zur Krankenfahrt zu erhalten.
Um den Zugriff auf die Daten so einfach wie möglich zu gestalten,
entschieden wir uns, den Zugang durch das Scannen der elektronischen
Gesundheitskarte der Patient:innen zu ermöglichen.
Ausgestaltung des zentralen Speichers
Wir erkannten das Potenzial, den Datenschutz für Patientendaten durch
den zentralen Speicher zu verbessern. Dies könnte erreicht werden, indem
Beteiligte nur auf die für sie relevanten Daten zugreifen und diese
einsehen können.
Zudem stellten wir fest, dass der Speicher nicht lediglich als Dienst
für den Datenaustausch fungieren sollte. Stattdessen müssen die Daten
direkt in diesem Speicher liegen, während weitere Software sie bei Bedarf
verarbeitet. Nur so kann sichergestellt werden, dass alle Beteiligten stets
mit den aktuellen und korrekten Daten arbeiten.
Konzeption
142 - 143
Konzept 2
Für Arztpraxen — Optimierung der
Transportscheinerstellung
Basierend auf dem Feedback von Arztpraxen wurden zahlreiche
Optimierungen und Anpassungen in das Erstellformular integriert.
Die erste Seite des Formulars wurde überarbeitet, um Nutzer:innen
besser abzuholen und sie schrittweise durch den Prozess zu führen.
Eine wichtige Ergänzung ist die Möglichkeit, Transportscheine auch
ohne festen Behandlungstermin auszustellen. Diese Funktion bietet mehr
Flexibilität und reduziert den Aufwand für Patient:innen. Dadurch könnten
zusätzliche Wegstrecken vermieden werden, da bisher nur ein Transport-
schein ausgestellt werden konnte, wenn der genaue Behandlungstermin
bekannt war und als Fahrdatum eingetragen wurde.
Auch wurde die Option integriert, dass die Frequenz der Fahrten
pro Woche bei einer Serienfahrt erhöht sein können. Diese Anpassung
berücksichtigt Situationen wie bei Chemotherapien, bei denen kurz-
fristige Änderungen erforderlich sein können, z. B. wenn die Behandlung
aufgrund schlechter Werte verschoben wird und zusätzliche Fahrten
notwendig sind.
Wir probierten mit verschiedenen Layouts und Darstellungsoptionen,
um die Benutzerfreundlichkeit zu verbessern. Dabei nutzten wir die
Gelegenheit, unsere Layout- und Designentwürfe Kommiliton:innen
sowie den Bewerber:innen bei der Eignungsprüfung für die Hochschule für
Gestaltung vorzustellen. Das erhaltene Feedback half uns, die Gestaltung
der UI Elemente, das Layout und die Positionierung der Inhalte zu
optimieren.
Abb. 27 Screens der Anwendung für Arztpraxen
Konzeption
144 - 145
Konzept 2
Für Patient:innen — Organisation von
Krankentransporten
Infolge der Prozessänderung, wollten wir Patient:innen einen
vereinfachten Zugang zu den Daten ihrer Fahrten ermöglichen.
Eine geeignete Lösung sahen wir in einer Begleitapp, welche Zugriff auf
den zentralen Speicher des Prozesses ermöglicht. Diese sollte neben dem
Einsehen der Verordnungsdaten, auch das Erhalten von Genehmigungs-
bestätigungen ermöglichen. Ebenso sollte über die App eine Fahrt gebucht
werden können.
Unser Fokus lag zunächst auf der Gestaltung eines Flows zur
Buchung einer Fahrt, sowie der Ausarbeitung einer Detailseite für Fahrten-
verordnungen. Diese Entscheidung trafen wir, da wir in diesen Funktionen
das größte Potenzial für einen Mehrwert für alle Nutzer:innen sahen.
Abb. 28 Screens der Begleitapp
Konzeption
Konzept 2
Informationsarchitektur der Begleitapp
Nach dem User Testing priorisierten und ergänzten wir die in der App
benötigten Features. Anschließend entwickelten wir eine Informations-
architektur, die alle Inhalte und Funktionen logisch strukturiert und leicht
zugänglich macht.
Die Informationsarchitektur wurde ausschließlich für die App
entwickelt. Die Fahrerapp und die Funktion zur Erstellung des
Transportscheins wurden als Designentwürfe konzipiert, die in die
Software des Fahrdienstes oder in die Praxisverwaltungssoftware
integriert werden sollen. Daher war für diese beiden Entwürfe keine
separate Informationsarchitektur notwendig, da die Inhalte dort
innerhalb eines klar definierten Flows oder einer einzigen Hierarchie-
ebene organsiert sind.
Die App ist in die Reiter Fahrten, Transportscheine, Nachrichten und
Einstellungen unterteilt, welche die oberste Navigationsebene darstellen.
Aus dieser Hauptebene gelangt man in jeweilige Detailseiten, welche eine
Ebene tiefer liegen. Auf der zweiten Ebene können bei Bedarf ergänzende
Informationen, wie Erklärungen oder der QR-Code, angezeigt werden.
Fahrtenbuchungen oder das Hinzufügen von Transportscheinen
werden aus der obersten Ebene oder aus den Detailseiten gestartet.
Diese Prozesse erfolgen in einem bildschirmfüllenden Modal, um klar
hervorzuheben, dass es sich um aufgabenbezogene Prozesse handelt.
Fahrten Aktive
Vergangene
Fahrt buchen
Fahrtdetails
Fahrdaten
QR-Code
Erklärung
146 - 147
Patientenapp
Transportscheine
Nachrichten
Einstellungen
Aktive
Chatverlauf
Anmeldung
Abgelaufene
Profile
Transportschein
hinzufügen
Transportscheindetails
Nachrichten
Übersicht
Chat
Fahrten
Verlauf
QR-Code
Abb. 29 Informationsarchitektur der Begleitapp
Konzeption
148 - 149
Feedback zu Konzept 2
Anschließend testeten wir diesen Begleitapp Prototypen. Den Tester:innen
wurde ein Smartphone mit einem Click-Dummy-Prototyp gegeben.
Ihre Aufgabe war es, sich durch den Flow zu klicken und eine Fahrt zu
buchen. Dabei erhielten sie Detailinformationen, wie den Abholzeitpunkt,
den sie in den Prototyp eingeben sollten. Während des Tests beobachteten
wir die Tester:innen, ohne aktiv einzugreifen. Ziel war es, Schwachstellen
im Prozess zu identifizieren um die App gezielt optimieren zu können.
Auch zeigten wir den Tester:innen die Entwürfe zur Erstellung von
Transportscheinen. Wir baten sie, die Entwürfe zu erläutern, um zu
überprüfen, wie die UI-Elemente, Begriffe und Informationen wahr-
genommen und interpretiert werden.
Folgende Erkenntnisse konnten wir gewinnen:
• Es war schwer zu unterscheiden, ob die Informationen auf dem
Homescreen zu einer Fahrt oder einer Verordnung gehören.
• Die Auswahl der Abholuhrzeit war unklar und sollte deutlicher
kommuniziert werden.
• Die Darstellung ließ die Zusammengehörigkeit mancher Daten nicht
erkennen. Dadurch entstand ein Eindruck von Unübersichtlichkeit.
• Der Button zur Fahrtbuchung war nicht auffällig genug positioniert,
weshalb Nutzer:innen nicht wussten, was sie als nächstes tun sollten.
• Einspaltige Layouts bei der Transportscheinerstellung wurden
bevorzugt.
• Bei der Erstellung von Transportscheinen waren manche Begriffe für
nicht eingelernte Personen unverständlich.
Abb. 30 Fotos vom Testen bei der Eignungsprüfung
Umsetzung
“
Ein Design System ist eine Sammlung definierter Kompo-
nenten, Muster und Leitlinien, welche helfen, schneller ein
einheitliches und konsistentes Design zu erstellen.
Es war für uns essenziell, ein umfangreiches und auf unsere
Anforderungen angepasstes Design System zu entwickeln,
welches zur Darstellung unseres Konzeptes verwendet wird.
Es schafft Konsistenz und Wiedererkennung über alle
gestalteten Produkte hinweg, was Vertrauen aufbaut,
professionell wirkt und Zugang für alle Nutzer:innen
ermöglicht.
Das Design System wurde in Einklang mit unseren Design
Principles erstellt, die als Leitfaden bei designrelevanten
Entscheidungen dienen. Es stellt sicher, dass die Kommu-
nikation klar und barrierefrei ist, Fehler vermieden werden
und Nutzer:innen durch unterstützende Funktionen begleitet
werden. Das System ist Plattform- und Zielgruppen optimiert,
um verschiedene Bedürfnisse bestmöglich zu erfüllen.
Konzeption
Logo
Das Logo des eTransportscheins besteht aus einem Kreuz, das allgemein
mit medizinischer Versorgung und Hilfe assoziiert wird. Um den Kranken-
transport und eine schnellere Prozessabwicklung zu symbolisieren, haben
wir den linken Strich des Kreuzes mit drei Linien subtrahiert. Diese Linien
erzeugen einen Eindruck von Dynamik und Geschwindigkeit.
Im Designprozess haben wir verschiedene Varianten solcher Logos
entwickelt. Unsere Wahl fiel auf die Variante, bei der die subtrahierten
Linien zusammen mit den Linien im Kreuz eine Treppe formen.
Diese Gestaltung wirkt zugleich dynamisch und dennoch geordnet.
Wir haben uns entschieden, dieses Logo sowohl für den neuen
Prozess als auch für die Begleitapp für Patient:innen zu verwenden.
Es wäre unpassend, wenn die Begleitapp mediTrans, die ein Bestandteil
des eTransportscheinprozesses ist, ein anderes Logo hätte. Dies könnte
Patient:innen verwirren und die Markenwahrnehmung beeinträchtigen.
152 - 153
Abb. 31 Logo
Konzeption
Name
Die Wahl eines passenden Namens für den elektronischen Transportschein
und für die an Patient:innen gerichtete Begleitapp war entscheidend, um
ihre Funktion und Ziele klar zu kommunizieren.
eTransportschein
Der Begriff eTransportschein ist eine Kurzform von “elektronischer
Transportschein”. Im Krankentransport ist die Verordnung einer
Krankenbeförderung das zentrale Prozessdokument, das allgemein
als Transportschein bekannt ist. Um die Einführung der digitalen Weiter-
entwicklung und die damit verbundene einfachere Nutzung und bessere
Zugänglichkeit zu verdeutlichen, entschieden wir uns den behördlich
geprägten Begriff “Verordnung” zu vermeiden und auch im Konzept nicht
zu verwenden.
Der Begriff eTransportschein wird verwendet, um die Prozessänderung
und das neue System zu kommunizieren. In der Anwendung selbst wird
jedoch von Transportschein gesprochen, wenn es um das Dokument bzw.
den Datensatz geht. Diese Bezeichnung ist alltagstauglicher und entspricht
der gewohnten Sprache der Nutzer:innen.
mediTrans App
Der Begriff mediTrans ist eine Wortschöpfung aus “medizinischer
Transport”. Durch die Großschreibung des Buchstabens “T” wird der
Ursprung aus den beiden Wörtern angedeutet.
Den Namen “eTransportschein” empfanden wir aufgrund seiner Länge
als ungeeignet für eine Smartphoneanwendung. Zudem sollte der Name
der App nicht allein auf das Prozessdokument fokussieren, sondern den
gesamten Funktionsumfang widerspiegeln, einschließlich Fahrtenbuchung
und Kommunikation.
154 - 155
Abb. 32 eTransportschein Logo
Abb. 33 mediTrans Logo
Konzeption
Konzeption
Typografie
Die Schriftart wurde mit besonderer Berücksichtigung von einfacher
Lesbarkeit, Zugänglichkeit, Professionalität, Konsistenz und Charakter
ausgewählt.
Infolgedessen entschieden wir uns für die Schriftarten Noto Sans
und Lexend. Die Noto Sans ist eine serifenlose Schrift, die von Google in
Zusammenarbeit mit Monotype, Adobe und weiteren Experten entwickelt
wurde. Sie eignet sich für eine harmonische, ästhetische, typografisch
korrekte Kommunikation (Noto: A typeface for the world, o.D.). Diese
Schrift erwies sich als ideal für die Darstellung von Informationen
und für die Navigation innerhalb der Software.
Die Lexend ist ebenfalls eine serifenlose Schrift, die speziell mit dem
Ziel entwickelt wurde, die Lesekompetenz bei Schüler:innen zu verbessern
(What if we could change the way the world reads—starting with a font
designed to adjust specifically for your needs?, o.D.).
Im Vergleich zur Noto Sans wirkt die Lexend geometrischer und hat
dadurch auch eine stärkere visuelle Präsenz und Charakter. Sie wird von
uns in stärkeren Schriftschnitten im Schriftlogo und für Überschriften
höherer Hierarchie verwendet.
Um verschiedene Hierarchien klarer zu differenzieren, setzten wir
unterschiedliche Schriftschnitte ein. Bei der Wahl der Schriftgrößen
orientierten wir uns an den Typografierichtlinien von Apple und
Microsoft, da unsere Produkte für deren Plattformen entwickelt wurden.
Schriftschnitte Mobile
Lexend
Noto Sans
Schriftschnitte Desktop
Noto Sans
156 - 157
156 - 157
Title 1
SemiBold 34
Title 2 SemiBold 28
Title 3 SemiBold 22
Title 4 Medium 20
Body Strong
Body
Fotonote Strong
SemiBold
16
Regular
SemiBold
Fotonote
Regular
16
12
12
Body Strong
Body
Fotonote
SemiBold
Regular
Regular
14
14
12
Konzeption
Konzeption
158 - 159
158 - 159
Ikonografie
Icons werden eingesetzt, um Nutzer:innen die Bedeutung von Elementen,
Aktionen und Eingabemöglichkeiten klar zu vermitteln.
Im Gegensatz zu App Icons, welche oft einen hohen Grad an visuellen
Details haben, sind die in der Benutzeroberfläche verwendeten Icons
funktional gestaltet und darauf ausgerichtet, die Bedeutung präzise
und eindeutig zu kommunizieren. Wir nutzten hierfür die Tabler Icons.
Bei der Verwendung von Icons in der Benutzeroberfläche
unterscheiden wir zwischen interaktiven und dekorativen Icons.
Interaktive Icons lösen durch Anklicken eine Aktion aus und sind in der
Interaktionsfarbe des jeweiligen Produktes gefärbt. Dekorative Icons
hingegen haben eine beschreibende Funktion und unterstützen Nutzer:
innen dabei, den Kontext eines Elements oder eines Textes schneller zu
verstehen. Sie sind in der Textfarbe gehalten.
Die Icons bestehen aus Konturen und fügen sich harmonisch in die
Typografie und die Benutzeroberfläche ein. Ihre leichten Rundungen
fördern eine freundlich professionelle Erscheinung und unterstreichen
das Gesamterscheinungsbild des Produkts. Sie werden verwendet, um
Informationen intuitiv und effizient zu kommunizieren.
Abb. 34 Verwendete Icons
Konzeption
Farben
Wir nutzen Farben zur visuellen Identität und zur gezielten Nutzerführung.
Für die Begleitapp wählten wir einen Blauton, während der Design-
vorschlag für Arztpraxen einen dunkleren Blauton verwendet.
Blau erschien uns als eine einladende, freundliche Farbe, die einen
guten Kontrast bietet und ideal für den teilmedizinischen Kontext ist.
Der Designvorschlag für die Fahrdienste ist eher farblich schlicht gestaltet.
Textelemente, wie Überschriften, Fließtexte oder Begleittexte, sind in
Farben gestaltet, die ihre jeweilige Hierarchie visuell unterstützen und
die Lesbarkeit verbessern. Ergänzend umfasst die Farbpalette Grau-
abstufungen sowie Grün- und Rottöne, um verschiedene Zustände
darzustellen. In der Benutzeroberfläche werden Farben eingesetzt, um
Interaktionsmöglichkeiten hervorzuheben und Zustände klar darzustellen.
Von einer übermäßigen Nutzung von Farben wurde abgesehen.
160 - 161
Primärfarbe
Textfarbe
Abb. 35 Verwendete Farben
Konzeption
UI Elemente
Die Entwicklung der Elemente der Benutzeroberfläche erfolgt nach dem
Atomic Design Prinzip.
Kleine Elemente, sogenannte Atome wie z.B. Buttons, Eingabefelder,
Farben und Typografie werden zu größeren UI Elementen, den Molekülen
kombiniert. Mehrere solcher zusammengesetzten UI Elemente bilden die
sogenannten Organismen (Frost, o.D.).
Dieses Prinzip unterstützte uns dabei, effiziente, konsistente und
wiederverwendbare UI Elemente zu gestalten. Die UI Elemente wurden
als Komponenten angelegt, um ein einheitliches Erscheinungsbild zu
gewährleisten und Änderungen schnell und unkompliziert umsetzen zu
können.
162 - 163
Atome
Moleküle
Organismen
Abb. 36 Anwendung des Atomic Design Prinzips
Konzeption
Barrierefreiheit
Bei der Entwicklung unseres Design Systems lag ein besonderer Fokus auf
barrierefreier Gestaltung. Wir orientierten uns an den WCAG-Richtlinien
(Web Content Accessibility Guidelines), welche ein internationaler,
anerkannter Standard für barrierefreie Webseiten sind (Campbell et
al., 2024). Obwohl diese nicht vollständig auf Smartphoneapps und
Desktopsoftware übertragbar sind, decken sie einen Großteil der
Anforderungen ab und dienen häufig als Richtlinien für die Entwicklung
barrierefreier Software.
Wir haben uns bewusst entschieden, unser Design System unter
Berücksichtigung einer barrierefreien Gestaltung zu entwickeln.
Zudem tritt in Deutschland am 28. Juni 2025 das Barrierefreiheits-
stärkungsgesetz in Kraft, welches Barrierefreiheitsanforderungen
für verbrauchergerichtete Produkte und Dienstleistungen vorschreibt
(Barrierefreiheitsstärkungs-gesetz,o.D.). Unser Konzept würde unter dieses
Gesetz fallen.
Unabhängig von der gesetzlichen Verpflichtung ist es uns wichtig,
barrierefreie Gestaltung zu berücksichtigen, da sie nicht nur Menschen
mit Einschränkungen zugutekommt. Sie verbessert das Nutzererlebnis und
bietet Vorteile für alle Nutzer:innen, indem sie den Zugang zu Funktionen
und Inhalten erleichtert.
164 - 165
Bei der Auswahl der Farben für Text und interaktive Icons wurden die
erforderlichen Farbkontraste gemäß den WCAG-Richtlinien eingehalten.
Informationen werden nicht ausschließlich durch Farbe vermittelt.
Formularfelder sind benannt, sodass sie leicht identifiziert werden können.
Fehlermeldungen sind klar erkennbar und werden nicht nur durch Farbe
kommuniziert. Sie erläutern den Fehler und bieten im Fehlertext
Lösungshinweise.
Interaktionselemente sind einheitlich beschriftet, um Konsistenz innerhalb
des Produkts zu gewährleisten.
Für Gesteneingaben gibt es alternative Methoden, welche auch mit
assistiven Technologien bedient werden können.
Suchfunktionen sind verfügbar, um die Navigation zu erleichtern.
Eingaben werden gespeichert und erneut vorgeschlagen, um redundante
Eingaben zu vermeiden.
Elemente, die schnell hintereinander blinken, wurden bewusst vermieden.
Ergebnis
“
Das Endergebnis dieser Bachelorarbeit ist ein optimierter
Prozess, ergänzt um Designvorschläge für Schnittstellen zu
den technischen Systemen der verschiedenen Beteiligten
sowie das Design einer Begleitapp für Patient:innen.
Ergebnis
Der eTransportschein
Der elektronische Transportschein (eTransportschein) ist die digitale
Weiterentwicklung des klassischen Papiertransportscheins. Technisch
betrachtet handelt es sich dabei um einen standardisierten Datensatz,
auf den die verschiedenen Beteiligten zugreifen können. Die eTransport-
scheine werden zentral im eTransportscheindienst gespeichert.
Jeder eTransportschein verfügt über eine achtstellige Identifikations-
nummer, die als Transportscheinnummer bezeichnet wird und den
Zugriff auf die zugehörigen Daten ermöglicht.
Für diese digitale Weiterentwicklung wurde deutlich, dass ein
technisches System erforderlich ist, das die Beteiligten unterstützt und
eine zuverlässige Datenverarbeitung sicherstellt. Dafür wurde eine neue
zentrale Komponente integriert.
168 - 169
eTransportscheindienst
Der eTransportscheindienst ist die zentrale Komponente des
Krankentransportprozesses und ermöglicht die sichere Speicherung
sowie Verwaltung elektronischer Transportscheine. Dadurch wird eine
digitale Datenbearbeitung möglich. Dieser Dienst bietet allen Beteiligten
Zugriff auf die Daten des eTransportscheins über ihre jeweiligen digitalen
Systeme. Die Beteiligten erhalten jedoch nur Zugriff auf Daten, welche sie
in ihrer Rolle benötigen. Das erhöht vor allem den Datenschutz für Patient:
innen. Die digitale Verwaltung der Transportscheine fördert eine effiziente
Zusammenarbeit zwischen Patient:innen, Arztpraxen, Fahrdiensten und
Krankenkassen.
Ergebnis
Patientenstammdaten
Name, Geburtsdatum,
Anschrift, Versichertennummer,
Versichertenstatus
Verordnungsstammdaten
Transportscheinnummer,
Ausstellender Arzt,
Arztnummer, Signatur, Datum,
Genehmigungsart
Beförderungsinformationen
z.B. Beförderungsart,
Beförderungszeitraum,
Frequenz, Fahrtrichtung,
Behandlungsstätte
Beförderungsinformationen
ergänzende medizinische
Daten
z.B. Beförderungshilfe,
Begründung für KTW, Grund
der Beförderung
Genehmigungsdaten
z.B. Genehmigungsstatus,
Zuzahlung
Fahrdaten
z.B. Startort, Zielort, Datum,
Uhrzeit, Signatur
Patientenname, Fahrernummer,
Tarif
Abrechnungsdaten
z.B.Transportscheinnummer,
Rechnung
Arztpraxis Kranken-
kasse Patient:in Fahrdienst
(Taxi)
Fahrer:in
(Taxi) Leitstelle Fahrdienst
(KTW)
Fahrer:in
(KTW)
Lesen Erstellen Lesen Lesen Lesen Lesen Lesen Lesen
Erstellen Lesen Lesen Lesen- Lesen Lesen-
Erstellen Lesen Lesen Lesen Lesen Lesen Lesen Lesen
Erstellen Lesen Lesen- - Lesen Lesen Lesen
- Erstellen Lesen Lesen Lesen Lesen Lesen Lesen
- Lesen Lesen Lesen Erstellen- Lesen Erstellen
- Lesen- Erstellen- - Erstellen -
Abb. 37 Datenzugriffe der Beteiligten
170 - 171
Kommunikation im eTransportscheindienst
Der eTransportscheindienst sollte durch eine moderne
Kommunikationslösung erweitert werden, die eine eTransportschein-
bezogene Kommunikation ermöglicht. Ein solcher Dienst könnte die
Kommunikation erheblich verbessern, indem er alle institutionellen
Beteiligten wie Arztpraxen, Fahrdienste und Krankenkassen miteinander
verbindet.
Eine mögliche Lösung wäre der KIM-Standard der gematik
(Kommunikation im Medizinwesen), der als sichere E-Mail-Alternative
dient (KIM - Schnell und sicher kommunizieren, o. D.). Alternativ könnte der
gematik-Standard TI-Messenger eingesetzt werden, der den Versand von
Kurznachrichten zwischen den Beteiligten ermöglicht (TI-Messenger
Schnelle Nachrichten in Echtzeit, o. D.).
Beide Ansätze könnten nahtlos in die bestehenden Systeme der
Beteiligten integriert werden, die bereits an den eTransportschein-
dienst angebunden sind. Sie würden so eine sichere und effiziente
Kommunikation ermöglichen. Ob die Kommunikation per E-Mail oder
Kurznachricht erfolgt, ist zweitrangig. Entscheidend ist das Potenzial,
schnell und direkt eTransportscheinbezogen mit allen Beteiligten in
Kontakt treten zu können.
Ergebnis
Der neue Prozess
Abb. 38 Ausstellung eines Transportscheins Die Ausstellung des eTransportscheins
Der Ausgangspunkt des neuen Prozesses bleiben wie bisher Ärzt:innen,
welche die Notwendigkeit eines Krankentransports aufgrund des
medizinischen Zustands bei Patient:innen feststellen. Die Ärzt:innen
erstellen den eTransportschein in ihrem Praxisverwaltungssystem.
Dabei wird das Praxispersonal durch Ausfüll- und Korrekturfunktionen
unterstützt, welche Fehler verhindern und den Prozess erleichtern.
Zur Sicherstellung der Echtheit müssen Ärzt:innen den
eTransportschein mit einer elektronischen Signatur verifizieren.
Nach dem Erstellen und Signieren wird der eTransportschein zentral im
eTransportscheindienst gespeichert. Auf Wunsch können Patient:innen
zusätzlich einen Papierausdruck des eTransportscheins erhalten.
172 - 173
Abb. 39 Genehmigung des eTransportscheins
Die Genehmigung
Benötigt der eTransportschein eine Genehmigung, wird automatisch eine
Anfrage an die Krankenkasse gesendet. Die Sachbearbeiter:innen können
die Daten des eTransportscheins im Krankenkasseninformationssystem
prüfen und mit den Patientendaten abgleichen. Da alle Daten digital und
zentralisiert vorliegen, könnte dieser Vorgang auch automatisiert werden.
Eine Priorisierung der Anfragen nach Dringlichkeit würde zudem sicher-
stellen, dass kurzfristige Anfragen rechtzeitig genehmigt werden.
Nach erfolgter Genehmigung erhalten Patient:innen eine Be-
nachrichtigung über die Begleitapp, die Krankenkassen-App oder auf
dem Postweg. Wegen Datenschutzvorgaben sind Kommunikationswege
wie SMS, E-Mail oder Messenger-Dienste nicht zulässig. Aufgrund der
Sensibilität medizinischer Daten erfolgt die Kommunikation ausschließlich
über datensichere Kanäle.
Ergebnis
Abb. 40 Buchung einer Fahrt Die Buchung einer Fahrt
Patient:innen können Fahrten über die mediTrans App, telefonisch
oder auf andere Weise buchen.
In der App lassen sich Fahrten schnell buchen, da zuvor eingegebene
Daten gespeichert werden, was zukünftige Buchungen erleichtert.
Patient:innen können den Fahrdienst frei wählen. Nach Absenden der
Buchungsanfrage werden die Daten digital an das Dispositionssystem
des ausgewählten Fahrdienstes übermittelt. Bei Annahme der Buchung
erhalten Fahrdienste Zugriff auf den eTransportschein.
Auch bei telefonischen Buchungen kann der Fahrdienst durch
Übermittlung der Versichertennummer Zugriff auf den eTransportschein
erhalten.
174 - 175
Abb. 41 Die Fahrt
Die Fahrt
Vor Fahrtbeginn können Patient:innen über die mediTrans App an die
anstehende Fahrt erinnert werden. Auch werden sie benachrichtigt,
falls es zu einer verspäteten Abholung kommt. Zudem können sie die
voraussichtliche Ankunftszeit des Fahrzeugs in der App einsehen.
Nach Einsteigen in das Fahrzeug muss dem Fahrdienst möglicher-
weise noch Zugriff auf den eTransportschein gegeben werden. Das kann
durch das Scannen der Gesundheitskarte oder des QR-Code auf dem
Papierausdruck oder in der App erfolgen.
Während der Fahrt zeichnen die Fahrer:innen Fahrdaten wie Start-
und Zielort, Kilometer, Fahrzeit und Fahrpreis auf. Am Ende der Fahrt
bestätigen Patient:innen die Durchführung der Fahrt durch ihre
Unterschrift. Diese Unterschrift wird zusammen mit den Fahrdaten
im eTransportscheindienst gespeichert.
Ergebnis
Abb. 42 Die Abrechnung Die Abrechnung
Am Ende der Fahrt greift die Abrechnungsabteilung des Fahrdienstes auf
die im eTransportscheindienst gespeicherten Daten zu und erstellt die
Abrechnung. Eine Rechnung sowie notwendige Dokumente können
ergänzt werden. Danach wird eine Abrechnungsanfrage an die zuständige
Krankenkasse gesendet.
Mitarbeiter:innen in der Abrechnungsabteilung oder im Abrechnungs-
center können den eTransportscheindatensatz mit ergänzten Fahr- und
Abrechnungsdaten abrufen. Die digitalen Daten erweitern die Prüfungs-
möglichkeiten erheblich.
Nach korrekter Prüfung und Auszahlung wird der Fahrdienst informiert,
und die Änderung automatisch ins Dispositionssystem übernommen.
Anschließend kann der eTransportscheindatensatz archiviert oder
gelöscht werden.
176 - 177
Abb. 43 Ablehnung einer Abrechnung
Ablehnung der Abrechnung
Im Falle einer Ablehnung der Abrechnung werden die Fahrdienste
umgehend über die Ablehnung benachrichtigt. Durch den Zugriff auf
den gebündelten Datensatz können sie den Grund der Ablehnung schnell
nachvollziehen. Zudem haben sie über die Transportscheindaten die
Möglichkeit, direkt Kontakt mit den beteiligten Arztpraxen oder Patient:
innen aufzunehmen, um eventuelle Unklarheiten zu beseitigen.
Eine Korrektur durch die ausstellende Arztpraxis kann dadurch
schneller erfolgen, da lediglich der bereits bestehende eTransportschein-
datensatz angepasst werden muss. Nach der Korrektur ist eine erneute
Einreichung des Transportscheins möglich.
Auswirkungen des neuen Prozesses
Im Rahmen dieser Bachelorarbeit können wir lediglich über die
potenziellen Auswirkungen des erarbeiteten Konzepts auf die Abwicklung
von Krankentransporten spekulieren. Es ist jedoch anzunehmen, dass die
Ausfüll- und Korrekturfunktionen in den Arztpraxen dazu beitragen
könnten, Transportscheine mit weniger Fehlern auszustellen. Zudem
könnte das automatische Senden von Genehmigungsanfragen an die
Krankenkassen die Anzahl nicht genehmigter Transportscheine bei
Fahrtantritt deutlich verringern.
Eine volldigitale Lösung würde den allgemeinen Arbeitsaufwand im
Umgang mit Transportscheinen spürbar verringern. Der zeitliche Aufwand
für Korrekturen könnte durch den eTransportscheindienst als zentralen
Kommunikationsweg ebenfalls reduziert werden. Darüber hinaus würde
der zentrale digitale Speicher die Gefahr von Übertragungsfehlern
eliminieren.
Ergebnis
178 - 179
Service Blueprint und drei User
Journeys
Service Blueprint
Zur Visualisierung des neuen Prozesses erstellten wir einen Service
Blueprint, welcher alle relevanten Prozessschritte, Berührungspunkte
und Aufgaben erklärt, wie ein Krankentransport unter dem neuen Prozess
erfolgt.
Drei User Journeys
Um den neuen Prozess zu evaluieren, haben wir mehrere User
Journeys erstellt, welche verschiedene Szenarien von Krankentransporten
visualisieren. Dies half uns zu überprüfen, ob unsere Lösung in unter-
schiedlichen Situationen funktioniert und den realen Anforderungen
standhält. Beim User Journey Mapping haben wir neben den Handlungen
der Nutzer:innen auch die technischen Handlungen, sowie die zugrunde
liegende Plattform und die verwendeten Daten für jeden Schritt
dokumentiert.
Die User Journey, die einen Patienten mit Serienfahrten abbildet, dient
zudem als Grundlage für die Gestaltung der Designprototypen. Sie eignet
sich besonders, um die Funktionsweise der verschiedenen Schnittstellen
darzustellen, und wird auch in einem begleitenden Video verwendet.
Service Blueprint
180 - 181
Zeitdauer 20 Minuten 5 Minuten 20 Minuten
5 Minuten 5 Minuten 10 - 20 Minuten
Physische
Nachweise
Patientenaktionen
Papierausdruck /
mediTrans App
• besucht Arztpraxis
• erhält Behandlungs-
termine
• erhält alternativ einen
Papierausdruck
Smartphone /
- Papierausdruck /
mediTrans App
• erhält Benachrichtigung
über Genehmigung per Brief
• erhält alternativ
Benachrichtigung über
Genehmigung in der
mediTrans App
• bucht eine Fahrt per Telefon
und teilt die eTransportschein-
nummer mit
• bucht alternativ eine Fahrt per
mediTrans App und erhält
dann die Fahrtbestätigung
Gesundheitskarte /
mediTrans App
• steigt ein und zeigt Versicherten-
karte oder QR-Code auf Smart-
phone oder Papierausdruck
• zahlt die Zuzahlung
• lässt sich zur Klinik fahren
• bestätigt die Fahrt durch
Unterschrift in Fahrerapp
Papierausdruck /
Gesundheitskarte /
mediTrans App
eTransportschein
Behand-
lungszeit
• bestellt eine Abholung am
Behandlungsort
• steigt ein und zeigt Versicherten-
karte oder QR-Code
• wird nach Hause gefahren
• bestätigt die Fahrt durch
Unterschrift in Fahrerapp
Linie der Interaktion
Aktionen im
Vordergrund
Arztpraxis:
• behandelt die Patient:in
• stellt Behandlungs-
termine aus
• stellt den eTransport-
schein aus
Fahrdienst：
• nimmt Fahrtbuchung per
Telefon entgegen
Fahrer:in:
• holt Patient:in an Abholadresse ab
• scannt QR-Code oder
Versichertenkarte
• fährt Patient:in zur Klinik
• nimmt die Zuzahlung entgegen
• lässt Patient:in in Fahrerapp
unterschreiben
Fahrdienst:
• nimmt Fahrtenbuchung entgegen
Fahrer:in:
• scannt QR-Code oder
Versichertenkarte
• fährt Patient:in nach Hause
• lässt Patient:in in Fahrerapp
unterschreiben
Linie der Sichtbarkeit
Aktionen im
Hintergrund
Arztpraxis:
• dokumentiert die
benötigte Behandlung
• sendet den
genehmigungspflichtigen
eTransportschein über
den eTransportschein-
dienst an die
Krankenkasse
Krankenkasse：
• prüft und genehmigt
eTransportschein digital
• sendet Bestätigung über
Genehmigung an Patient:in
• dokumentiert die
Genehmigung im
Krankenkassen-
informationssystem
Fahrdienst：
• nimmt Fahrtbuchung über
mediTrans App entgegen und
sendet Fahrtbestätigung an
Patient:in
• weist die Fahrt einem/einer
verfügbaren Fahrer:in zu
• notiert die Fahrt in der
Dispositionssoftware
Fahrer:in:
• fährt zur Abholadresse
Fahrdienst:
• weist die Fahrt einem:einer
verfügbaren Fahrer:in zu
• notiert die Fahrt in der
Dispositionssoftware
Fahrer:in:
• fährt zur Abholadresse
Fahrdienstabrechnung:
• ergänzt die Abrechnungsdaten im
eTransportscheindienst und sendet sie
an die Krankenkasse
Krankenkasse:
• erhält den Abrechnungsantrag
• prüft die Unterlagen und zahlt aus
• dokumentiert die Fahrten in den
Versichertendaten
eTransportschein wird direkt
im eTransportscheindienst
erstellt
Krankenkassen erhält
Zugriff auf Daten im
eTransportscheindienst
Fahrdienst erhält Zugriff auf
Daten im eTransportscheindienst
Fahrdaten werden elektronisch erfasst
und im eTransportscheindienst
gespeichert
Fahrdaten werden elektronisch
erfasst und im eTransportschein-
dienst gespeichert
Abrechnungsdaten des Fahrdienstes werden
im eTransportscheindienst gespeichert und
die Krankenkasse erhält eine
Abrechnungsanfrage
Linie der internen Interaktion
Unterstützende
Prozesse
Arztpraxis:
• Praxisverwaltungssystem
mit eTransportschein-
plugin
• eTransportscheindienst
(zentraler Datenspeicher)
Krankenkasse：
• Krankenkassen-
informationssystem
• eTransportscheindienst
Fahrdienst：
• Smartphone
• Dispositionssoftware
• eTransportscheindienst
Fahrer:in：
• Fahrerapp
• eTransportscheindienst
Fahrdienst:
• Smartphone
• Dispositionssoftware
• eTransportscheindienst
Fahrer:in：
• Fahrerapp
Fahrdienst:
• Abrechnungssoftware
• eTransportscheindienst
Krankenkasse:
• Krankenkasseninformationssystem
• eTransportscheindienst
Abb. 44 Service Blueprint für den eTransportscheinprozess
User Jouney 1 — Patientin im Pflegeheim
Schritt
Handlungen
Ursula Graf (83 Jahre alt)
Die Patientin lebt in einem Pflegeheim und
hat eine Untersuchung durch ihren Haus-
arzt. Der Hausarzt entscheidet, die Patientin
zu einem Facharzt zu überweisen.
Da die Patientin aufgrund einer Mobilitäts-
einschränkung nur mit einem Tragestuhl
befördert werden kann, wird ein Kranken-
transportwagen (KTW) benötigt, was die
Beförderung genehmigungspflichtig
macht. Zudem steht noch kein genauer
Behandlungstermin fest, weshalb der
Hausarzt eine einmalige Hin- und Rück-
fahrt zum Facharzt verordnet.
Nach der Genehmigung durch die Kranken-
kasse erhält die Leitstelle die Verordnung.
Die Leitstelle nimmt Kontakt mit dem
Pflegeheim auf, das in der Zwischenzeit
einen Termin beim Facharzt vereinbart hat.
Gemeinsam besprechen das Pflegeheim
und die Leitstelle den Fahrtentermin sowie
die Abholung.
Die Patientin wird termingerecht zum Fach-
arzt befördert und nach der Behandlung
wieder abgeholt.
Anschließend erfolgt die Abrechnung des
Transports.
Technische
Handlungen
Plattform
Daten
182 - 183
Untersuchung des Hausarztes Ausstellung des eTransportscheins Genehmigung des eTransportscheins Termin ausmachen
• Hausarzt besucht Patientin im
Altenheim, führt Anamnese und
Gespräch
• Hausarzt entscheidet, dass die
Patientin eine kardiologische
Untersuchung benötigt und
stellt eine Überweisung aus
• Hausarzt erstellt eTransportschein
für die genehmigungspflichtige
KTW-Fahrt der Patientin aufgrund
von Mobilitätseinschränkungen
• Hausarzt informiert Pfleger:innen
über den Facharzttermin und den
eTransportschein
• Krankenkasse prüft Patientendaten und
genehmigt den eTransportschein
• Pfleger:innen werden in der mediTrans
App über die Genehmigung informiert,
in welcher alle Krankentransporte für
Pflegeheimbewohner:innen verwaltet
werden
• Pfleger:innen machen
für Patientin per
Telefon einen
Arzttermin beim
Kardiologen aus
Hausarzt:
• Scannt Gesundheitskarte
• Erhält Zugriff auf Patienten-
daten und elektronische
Patientenakte
Hausarzt:
• Erstellt eTransportschein über
Praxisverwaltungssystem
• Signiert eTransportschein digital
Pfleger:innen:
• Hat Zugriff auf eTransportschein
über mediTrans App
Krankenkasse:
• Gleicht eTransportscheindaten mit
Patientendaten ab und genehmigt
den eTransportschein
Pfleger:innen:
• Informiert über den Genehmigungs-
status
Praxisverwaltungssystem
• Gesundheitskarte einlesen
• Patientenakte und elektronische
Patientenakte anzeigen
eTransportscheindienst
• Überweisungsschein erstellen
eTransportscheindienst
• eTransportschein erstellen
• Elektronisch signieren
Krankenkasseninformationssystem
• eTransportschein erhalten
• Patientendaten aufrufen und
abgleichen
eTransportscheindienst
• Genehmigung im eTransportschein-
datensatz hinzufügen
MediTrans App
• Genehmigungsstatus abfragen
• Versichertenstammdaten
• Elektronische Patientenakte
• Patientenakte im PVS
• Vollständiger eTransportschein-
datensatz
• eTransportschein Papierausdruck
• Vollständiger eTransportschein-
datensatz
• Patientendaten
User Jouney 1 — Patientin im Pflegeheim
Fahrt buchen Hinfahrt
Abholung Patientin bei Facharzt Rückfahrt
• Pfleger:innen buchen
eine Fahrt für
Patientin über die
mediTrans App
• Pfleger:innen bereiten Patientin
am Behandlungstag für den
Krankentransport zum Kardio-
logen vor
• mediTrans App informiert über
eine Verspätung von 30 Minuten
des KTWs
• Nach Ankunft des KTWs übergeben
Pfleger:innen die Patientin an das
KTW-Personal, und die Patientin
wird in den KTW befördert
• Patientin wird vom
KTW transportiert
• KTW-Personal führt
ein Patienten-
gespräch und
dokumentiert den
Krankentransport
während der Fahrt
• KTW erreicht das Ziel und lädt
die Patientin aus
• Patientin wird in die
Facharztpraxis gebracht und
an das Praxispersonal
übergeben
• Nach dem Aufenthalt beim
Facharzt ruft die Praxis den
KTW.
• KTW holt die Patientin ab
• Patientin wird in den KTW
eingeladen
• KTW-Personal führt ein
Patientengespräch und
dokumentiert den Kranken-
transport während der Fahrt
• KTW erreicht das Pflegeheim,
lädt die Patientin aus und
übergibt sie an das
Pflegepersonal
Leitstelle:
• Erhält den
eTransportschein
Datensatz und weist
die Fahrt einem KTW
zu
KTW-Personal:
• Scannt Gesundheitskarte
• Erhält eTransportschein und teilt
Positionsdaten in Fahrerapp
Pfleger:innen:
• Erhält die Positionsdaten von
mediTrans App
KTW-Personal:
• Schreibt
Fahrtbericht
KTW-Personal:
• Übermittelt Positionsdaten
über Fahrerapp
• Lässt Patientin zur
Bestätigung unterschreiben
Leitstelle:
• Weist die Fahrt einem KTW zu
KTW-Personal:
• Scannt Gesundheitskarte
• Erhält eTransportschein in
Fahrerapp
• Schreibt Fahrtbericht
• Lässt Patientin zur
Bestätigung unterschreiben
mediTrans App
• Fahrt buchen
Dispositionssystem
• Fahrt organisieren
Fahrerapp
• Informationen über Start-/Zielort
aus Verordnung erhalten
• Position des KTWs senden
• Gesundheitskarte scannen zur
Patientenauthentifizierung
mediTrans App
• Über Verspätung benachrichtigen
• Ankunftszeit des KTWs anzeigen
Fahrerapp
• Fahrtaufzeichnung
starten
• Fahrtbericht
dokumentieren
Fahrerapp
• Ende der Fahrt erkennen
• Patient:in unterschreiben
Fahrerapp
• Position des KTWs senden
• Gesundheitskarte scannen zur
Patientenauthentifizierung
• Fahrtbericht dokumentieren
• Ende der Fahrt erkennen
• Fahrtbestätigung
• Vollständiger
eTransportschein-
datensatz
• Vollständiger eTransportschein-
datensatz
• Stammdaten der
Gesundheitskarte
• Fahrtdaten
• Fahrtbericht
• Vollständiger
eTransportscheindatensatz
• Patientenunterschrift
• Vollständiger
eTransportscheindatensatz
• Stammdaten der
Gesundheitskarte
• Patientenunterschrift
• Fahrtbericht
184 - 185
Abrechnung beim
Fahrdienst
Abrechnung bei
der Krankenkasse
• Fahrdienst öffnet den
Datensatz der
getätigten Fahrt und
markiert diese als
"Bereit für
Abrechnung"
• Gesammelte Fahrten
werden zur
Abrechnung an die
Krankenkassen
übermittelt
• Krankenkasse prüft die Rechnung
des Fahrdienstes mit den
eingereichten eTransportscheinen
und Fahrten
• Krankenkasse genehmigt und zahlt
die Abrechnung, der Fahrdienst
wird über die Bearbeitung
informiert
KTW-Abrechnung:
• Vorbereitet
Fahrtdatensatz
• Erfolgt Abrechnung
Krankenkasse-Abrechnung:
• Liest und prüft eTransportschein-
datensätze mit Fahr- und
Abrechnungsdaten
eTransportscheindienst
• eTransportschein-
datensatz lesen
Dispositionssystem
• Rechnung erstellen
• Alle Abrechnungsdaten
an die Krankenkasse
senden
eTransportscheindienst
• eTransportscheindatensatz lesen
Krankenkasseninformationssystem
• Patientendaten aufrufen
Dispositionssystem
• Zahlungen und bezahlte Fahrten
überprüfen
• Erforderlicher
eTransportschein-
datensatz
• Erforderlicher
Fahrdaten
• Abrechnungsdaten
• Vollständiger
eTransportscheindatensatz
• Alle Fahrdaten
• Patientenakte bei Krankenkasse
• Auszahlungsdaten über
abgerechnete Fahrten
Abb. 45 User Jouney 1 - Patientin im Pflegeheim
User Jouney 2 — Patient mit regelmäßiger Dialysebehandlung
186 - 187
Schritt
Patient beim Facharzt Ausstellung des eTransportscheins Genehmigung des eTransportscheins Termin ausmachen
Handlungen
• Patient ist bei Facharzt
• Facharzt führt
Patientengespräch und
Anamnese
Werner Schmidt (42 Jahre alt)
• Hausarzt erstellt eTransportschein
Dialyse für Patient
• Patient benötigt frei Fahrten in der
Woche zur Dialyse, aufgrund von
hochfrequenter Behandlung für
drei Monate
• Arzt informiert Patient über
eTransportschein
• Krankenkasse prüft Patientendaten und
genehmigt den eTransportschein
• Patient wird in der mediTrans App über
die Genehmigung informiert
• Patient macht
Dialysetermin aus
Der Patient nutzt die mediTrans App, um
Fahrten bei einem Fahrdienst seiner Wahl
zu buchen.
Für das kommende Quartal erhält er einen
eTransportschein für die Hin- und Rück-
fahrten zur Dialyse. Da es sich um Serien-
fahrten handelt, ist die Verordnung
genehmigungspflichtig.
Der Patient wird zum Dialysezentrum
gebracht und nach der Behandlung wieder
abgeholt. Anschließend erfolgt die
Abrechnung.
Technische
Handlungen
Hausarzt:
• Scannt Gesundheitskarte
• Erhält Zugriff auf Patienten-
daten und elektronische
Patientenakte
Hausarzt:
• Erstellt eTransportschein über
Praxisverwaltungssystem
• Signiert eTransportschein digital
Patient:
• Hat Zugriff auf eTransportschein
über mediTrans App
Krankenkasse:
• Gleicht eTransportscheindaten mit
Patientendaten ab und genehmigt den
eTransportschein
Patient:
• Informiert über den Genehmigungs-
status
Plattform
Praxisverwaltungssystem
• Gesundheitskarte einlesen
• Patientenakte und elektronische
Patientenakte anzeigen
eTransportscheindienst
• eTransportschein erstellen
• Elektronisch signieren
MediTrans App
• eTransportschein hinzufügen
Krankenkasseninformationssystem
• eTransportschein erhalten
• Patientendaten aufrufen und
abgleichen
eTransportscheindienst
• Genehmigung im eTransportschein
Datensatz hinzufügen
MediTrans App
• Genehmigungsstatus abfragen
Daten
• Versichertenstammdaten
• Elektronische Patientenakte
• Patientenakte
• Vollständiger eTransportschein-
datensatz
• eTransportschein Papierausdruck
• Vollständiger eTransportschein-
datensatz
• Patientendaten
User Jouney 2 — Patient mit regelmäßiger Dialysebehandlung
Fahrt buchen Hinfahrt
Abholung Patient bei Facharzt Rückfahrt
• Patient bucht
regelmäßige Hin- und
Rückfahrt über die
mediTrans App
• Fahrdienst bestätigt
die gebuchte Fahrt
• Taxi ist am Abholort angekommen
• Patient steigt ins Fahrzeug ein
• Patient wird
transportiert
• Das Taxi erreicht das Ziel
• Patient wird in die Facharzt-
praxis gebracht und an das
Praxispersonal übergeben
• Fahrer holt Patient zur
gebuchten Rückfahrt ab
• Patient steigt ins Fahrzeug
ein
• Taxi trifft am Wohnort des
Patienten ein
Patient:
• Bucht Fahrten per
mediTrans App
Fahrdienst:
• Bestätigt die Buchung
• Plant die Fahrt im
Dispositionssystem
Fahrer:
• Scannt Gesundheitskarte
• Erhält Daten über die Fahrt und
teilt Positionsdaten in Fahrerapp
Patient:
• Erhält die Positionsdaten von
mediTrans App
Fahrer:
• Speichert
Fahrtdaten
Fahrer:
• Lässt Patient zur Bestätigung
des Transports unterschreiben
Fahrer:
• Scannt Gesundheitskarte
• Erhält Daten über die Fahrt
und übermittelt Positions-
daten in Fahrerapp
• Lässt Patient zur Bestätigung
unterschreiben
mediTrans App
• Fahrt buchen
Dispositionssystem
• Fahrt organisieren
Fahrerapp
• Informationen über Start-/Zielort
aus Verordnung erhalten
• Position des Taxis senden
• Gesundheitskarte scannen zur
Patientenauthentifizierung
mediTrans App
• Ankunftszeit des Taxis anzeigen
Fahrerapp
• Fahrtaufzeichnung
starten
Fahrerapp
• Ende der Fahrt erkennen
• Patient:in unterschreiben
Fahrerapp
• Position des Taxis senden
• Gesundheitskarte scannen zur
Patientenauthentifizierung
• Fahrtdaten erhalten
• Fahrt aufzeichnen
• Ende der Fahrt erkennen
• Fahrtbestätigung
• Vollständiger
eTransportschein-
datensatz
• Erforderlicher eTransportschein-
datensatz
• Stammdaten der
Gesundheitskarte
• Fahrtdaten
• Fahrtdaten
• Patientenunterschrift • Erforderlicher
eTransportscheindatensatz
• Stammdaten der
Gesundheitskarte
• Patientenunterschrift
• Fahrtdaten
188 - 189
Abrechnung beim
Fahrdienst
Abrechnung bei
der Krankenkasse
• Fahrdienst öffnet
den Datensatz der
getätigten Fahrt und
markiert diese als
"Bereit für
Abrechnung"
• Gesammelte Fahrten
werden zur
Abrechnung an die
Krankenkassen
übermittelt
• Krankenkasse prüft die Rechnung
des Fahrdienstes mit den
eingereichten eTransportscheinen
und Fahrten
• Krankenkasse genehmigt und zahlt
die Abrechnung, der Fahrdienst
wird über die Bearbeitung
informiert
KTW-Abrechnung:
• Vorbereitet
Fahrtdatensatz
• Erfolgt Abrechnung
Krankenkasse-Abrechnung:
• Liest und prüft eTransportschein-
datensätze mit Fahr- und
Abrechnungsdaten
eTransportscheindienst
• eTransportschein-
datensatz lesen
Dispositionssystem
• Rechnung erstellen
• alle Abrechnungsdaten
an die Krankenkasse
senden
eTransportscheindienst
• eTransportscheindatensatz lesen
Krankenkasseninformationssystem
• Patientendaten aufrufen
Dispositionssystem
• Zahlungen und bezahlte Fahrten
überprüfen
• Erforderlicher
eTransportschein-
datensatz
• Erforderlicher
Fahrdaten
• Abrechnungsdaten
• Vollständiger
eTransportscheindatensatz
• Alle Fahrdaten
• Patientenakte bei Krankenkasse
• Auszahlungsdaten über
abgerechnete Fahrten
Abb. 46 User Jouney 2 - Patient mit regelmäßiger Dialysebehandlung
User Jouney 3 — Entlassung aus dem Krankenhaus
Schritt
Handlungen
Patient im
Krankenhaus
• Patient wird aus
dem Krankenhaus
entlassen
Toni Reuscher (57 Jahre alt)
Der Patient wird nach einem stationären
Krankenhausaufenthalt mit einem Taxi nach
Hause gefahren.
Die Fahrt ist genehmigungsfrei.
Der Patient verwendet die mediTrans App
nicht.
Technische
Handlungen
Plattform
Daten
Ausstellung des
eTransportscheins
• Arzt erstellt
eTransportschein
• Patient benötigt
eine einfache Fahrt
vom Krankenhaus
nach Hause mit dem
Taxi
• Arzt informiert
Patient über
eTransportschein
Hausarzt:
• Erstellt eTransport-
schein
• Signiert eTransport-
schein digital
eTransportschein-
dienst
• eTransportschein
erstellen
• Elektronisch
signieren
• Vollständiger
eTransportschein-
datensatz
Beförderung
• Taxi ist am Abholort
angekommen
• Patient steigt ins
Fahrzeug ein
• Taxi trifft am Wohnort
des Patienten ein
Fahrer:
• Scannt
Gesundheitskarte
• Erhält Daten
• Lässt Patient zur
Bestätigung
unterschreiben
Fahrerapp
• Gesundheitskarte
scannen zur Patienten-
authentifizierung
• Fahrtdaten erhalten
• Fahrt aufzeichnen
• Ende der Fahrt
erkennen
• Fahrtbestätigung
• Erforderlicher
eTransportschein-
datensatz
• Stammdaten der
Gesundheitskarte
• Patientenunterschrift
• Fahrtdaten
190 - 191
Abrechnung beim
Fahrdienst
Abrechnung bei
der Krankenkasse
• Fahrdienst öffnet den
Datensatz der
getätigten Fahrt und
markiert diese als
"Bereit für
Abrechnung"
• Gesammelte Fahrten
werden zur
Abrechnung an die
Krankenkassen
übermittelt
• Krankenkasse prüft die Rechnung
des Fahrdienstes mit den
eingereichten eTransportscheinen
und Fahrten
• Krankenkasse genehmigt und zahlt
die Abrechnung, der Fahrdienst
wird über die Bearbeitung
informiert
KTW-Abrechnung:
• Vorbereitet
Fahrtdatensatz
• Erfolgt Abrechnung
Krankenkasse-Abrechnung:
• Liest und prüft eTransportschein-
datensätze mit Fahr- und
Abrechnungsdaten
eTransportscheindienst
• eTransportschein-
datensatz lesen
Dispositionssystem
• Rechnung erstellen
• Alle Abrechnungsdaten
an die Krankenkasse
senden
eTransportscheindienst
• eTransportscheindatensatz lesen
Krankenkasseninformationssystem
• Patientendaten aufrufen
Dispositionssystem
• Zahlungen und bezahlte Fahrten
überprüfen
• Erforderlicher
eTransportschein-
datensatz
• Erforderliche Fahrdaten
• Abrechnungsdaten
• Vollständiger
eTransportscheindatensatz
• Alle Fahrdaten
• Patientenakte bei Krankenkasse
• Auszahlungsdaten über
abgerechnete Fahrten
Abb. 47 User Jouney 3 — Entlassung aus dem Krankenhaus
Ergebnis
Feedback der gematik zum finalen
Konzept
Diese Zusammenfassung basiert auf einem Gespräch mit einer Produkt-
managerin des eRezepts bei der gematik.
Realisierbarkeit und technische Machbarkeit
Das vorgestellte Konzept wird als durchdacht und umsetzbar eingeschätzt.
Die Realisierbarkeit des Konzepts wird als hoch bewertet, da es viele
bestehende TI-Standards nutzen könnte. So könnte der bei der häuslichen
Krankenpflege bereits implementierte Genehmigungsschritt durch die
Krankenkassen auch auf den Transportschein-Prozess übertragen werden,
was die Entwicklung und Implementierung zusätzlich erleichtern würde.
Eine Erweiterung um Datensätze für Transportscheine wird als
unkompliziert angesehen. Die Integration von Schnittstellen für die
Abrechnung wird als sinnvoll und technisch realisierbar bewertet.
Herausforderungen mit digitaler Affinität der Zielgruppen
Ein zentraler Aspekt bei der Digitalisierung des Gesundheitswesens
betrifft die geringe digitale Affinität einiger Patient:innen. Für diese
Zielgruppe werden Apps als ungeeignet wahrgenommen. Eine teildigitale
Lösung, wie die Verwendung der Gesundheitskarte als Alternative zu
volldigitalen Lösungen, wird positiv bewertet.
Einbindung von TI-Diensten und in die Telematikinfrastruktur
Das Konzept wurde unabhängig von der Telematikinfrastruktur (TI)
entwickelt. Es wird jedoch empfohlen, TI-Dienste und Standards wie den
Heilberufsausweis für Authentifizierung und elektronische Signaturen
sowie einen Standard für Genehmigungsprozesse durch Krankenkassen zu
integrieren.
192 - 193
Integration von Leistungserbringern in die TI
Das Konzept berücksichtigt die Einbindung von Leistungserbringer:innen
wie Taxifahrer:innen in die TI. Hierbei wurde betont, dass dies derzeit nicht
möglich ist, aber langfristig, auch für andere Verordnungen, ermöglicht
werden muss. In Bezug auf Taxiunternehmen wird eingeschätzt, dass eine
Anbindung an die TI mangels einheitlicher Softwarestandards in der
Branche mit anfänglichen Schwierigkeiten verbunden sein könnte.
Ergebnis
Ergebnis
194 - 195
194 - 195
Beteiligte und ihre Zugänge
Beteiligte und ihre Zugänge
Patient:innen
Die Beteiligten im Krankentransportprozess haben unterschiedliche
Zugänge zur Nutzung des eTransportscheindienstes. Diese Entscheidung
wurde bewusst getroffen, da vor allem die institutionellen Beteiligten, wie
Arztpraxen, Fahrdienste und Krankenkassen zentrale Softwarelösungen für
die Verwaltung verwenden. Eine einheitliche Lösung würde den unter-
schiedlichen Anforderungen und Arbeitsabläufen der Beteiligten nicht
gerecht werden. Auch wäre eine solche Lösung nicht geeignet für
Endanwender:innen wie Patient:innen.
Patient:innen stehen im Mittelpunkt des Krankentransportprozesses.
Wir erachten es als wichtig, ihnen nicht nur Zugriff auf die Daten zu
ermöglichen, sondern auch die Möglichkeit zu geben, den Prozess des
Krankentransports aktiv zu steuern.
mediTrans Begleitapp
Patient:innen können den eTransportschein in der Begleitapp mediTrans
einsehen. Sie müssen sich in der App anmelden oder die Gesundheitskarte
scannen, um Zugriff zu erhalten.
Mit der App können Patient:innen nicht nur ihre Transportscheine
einsehen, sondern auch Fahrten buchen und mit Fahrdiensten in Kontakt
treten. Der Funktionsumfang der App umfasst auch die administrativen
Tätigkeiten, die im Rahmen des Krankentransports für Patient:innen
anfallen könnten.
Wir entschieden uns bewusst für eine eigenständige App, da die Apps
der gesetzlichen Krankenkassen in Deutschland stark fragmentiert sind.
Eine Integration der Funktionen in die Krankenkassenapps wäre daher nur
mit erheblichem Zeit- und Arbeitsaufwand umsetzbar und nebenbei
schlecht steuerbar. Durch die Nutzung der mediTrans App kann der
administrative Aufwand für Patient:innen im Krankentransportprozess
erheblich reduziert werden. Die App bleibt jedoch optional, da Fahrten-
buchungen, Genehmigungsbestätigungen und der Zugriff auf
Transportscheindaten auch auf weniger digitalen Wegen möglich sind.
Wir gehen davon aus, dass die App anfangs eine kleine Nutzergruppe
haben wird, da Krankentransporte häufig von einer älteren Zielgruppe
genutzt werden, die tendenziell analoge und vertraute Lösungen
bevorzugt (McKinsey, 2023). Daher haben wir uns bei der Zielgruppe der
App auf Patient:innen und Nutzer:innen von Krankentransporten bis etwa
Anfang 60 Jahre konzentriert. Zudem erwarten wir, dass die App vor allem
für Nutzer:innen von Serienfahrten interessant ist, da es unwahrscheinlich
erscheint, dass sie für einmalige Fahrten genutzt wird.
Ergebnis
196 - 197
Ergebnis 196 - 197
Gesundheitskarte
Patient:innen haben mehrere Möglichkeiten, um einen eTransportschein
einzulösen. Sie können selber entscheiden, welche Option für sie am
besten geeignet ist. Die einfachste Variante ist das Scannen der
Gesundheitskarte. Diese teildigitale Option kann ohne zusätzlichen
Aufwand genutzt werden.
Papierausdruck
Die weitere Möglichkeit bietet die ausstellenden Arztpraxis, in der Patient:
innen einen Papierausdruck erhalten können. Dieser Ausdruck enthält alle
relevanten Daten und ein QR-Code, der durch Einscannen Zugriff auf den
Datensatz im eTransportscheindienst ermöglicht. Diese Option eignet sich
vor allem für Patient:innen, welche einen Transportschein auf Papier
gewöhnt sind. Bei der Gestaltung des Ausdrucks haben wir großen
Wert auf Verständlichkeit gelegt. Fachbegriffe, die den Transportschein
betreffen, werden erklärt, und am unteren Rand wird auf die mediTrans
Begleitapp und ihre Vorteile hingewiesen.
Abb. 48 Papierausdruck
Screenflow — Transportscheine hinzufügen
198 - 199
In der App können sich die Nutzer:innen anmelden, um Transportscheine
abzurufen.
Abb. 49 Screenflow - Transportscheine hinzufügen
Screenflow — Transportscheine verwalten
200 - 201
Im Transportscheine-Reiter sind alle aktiven und abgelaufenen
Transportscheine aufgelistet.
In den Transportscheindetails können die Daten des eTransportscheins
gelesen werden.
Abb. 50 Screenflow - Transportscheine verwalten
Screenflow — Erste Fahrt buchen
Nutzer:innen werden durch die App und ihre erste Fahrtenbuchung geleitet. 202 - 203
Vorherige Eingaben und bereits erhaltene Informationen werden erneut
vorgeschlagen, um redundante Eingabe zu vermeiden.
Abb. 51 Screenflow - Erste Fahrt buchen
Screenflow — Transportscheine verwalten
204 - 205
Nutzer:innen haben die freie Wahl bei den Fahrdiensten. Am Ende des Buchungsprozesses können Nutzer:innen ihre Eingaben
überprüfen. Für Serienfahrten kann eine wiederholende Buchung getätigt
werden.
Abb. 52 Screenflow - Transportscheine verwalten
Screenflow — Transportscheine verwalten
206 - 207
Mitteilungen an den Fahrdienst können ergänzt werden.
Abb. 52 Screenflow - Transportscheine verwalten
Screenflow — Weitere Fahrten buchen
Bei der Buchung weiterer Fahrten werden bereits getroffene Entscheidungen
aus dem jeweiligen Transportschein automatisch übernommen. Der
Buchungsvorgang wird dadurch verkürzt.
208 - 209
Abb. 53 Screenflow - Weitere Fahrten buchen
Screenflow — Fahrten verwalten
210 - 211
Im Fahrten-Reiter sind alle aktiven und abgelaufenen Fahrten getrennt
aufgelistet. Die nächste anstehende Fahrt wird besonders hervorgehoben.
In den Fahrtdetails können die Details zu der Fahrt und der aktuelle Status der
Fahrt eingesehen werden. Ergänzende Erklärungen zu verschiedenen
Informationen bieten zusätzliche Unterstützung.
Abb. 54 Screenflow - Fahrten verwalten
Screenflow — Fahrten verwalten
212 - 213
Steht eine Fahrt kurz bevor und das Fahrzeug ist unterwegs zur Patient:in,
kann die voraussichtliche Ankunftszeit eingesehen werden. Der QR-Code des
Transportscheins dient zur Identifikation und kann beim Fahrdienst vorgezeigt
werden.
Abb. 54 Screenflow - Fahrten verwalten
Screenflow — Nachrichten senden
Die Chats sind jeweils einer spezifischen Fahrt zugeordnet. 214 - 215
Im Chat gibt es die Möglichkeit, direkt zu den entsprechenden Fahrtdetails
zu navigieren.
Abb. 55 Screenflow - Nachrichten senden
Ergebnis
216 - 217
Beteiligte und ihre Zugänge
Angehörige
Angehörige von Patient:innen nehmen eine unterstützende Rolle im
Krankentransportprozess ein. Insbesondere bei älteren, alleinstehenden
oder schwer erkrankten Patient:innen übernehmen sie häufig Aufgaben
wie die Organisation des Krankentransports, das Einreichen des
Transportscheins sowie die Kommunikation mit der Krankenkasse.
Um diese Unterstützer:innen bestmöglich einzubinden, halten wir es
für essenziell, ihnen Zugriff auf die erforderlichen Daten und Funktionen
zu gewähren. So können sie den Krankentransportprozess im Vertretung
der Patient:innen effizient und gezielt steuern.
mediTrans Begleitapp
Als Lösung haben wir vorgesehen, dass Angehörige hierfür die mediTrans
Begleitapp nutzen können. Dies bietet vor allem Vorteile für Angehörige,
die nicht in der Nähe wohnen. Über die App können sämtliche adminis-
trativen Aufgaben zentral gesteuert und der gesamte Prozess aus der
Ferne verwaltet werden.
Für eine bessere Übersicht bietet die App zudem umfassende Verlaufs-
ansichten, in denen alle durchgeführten Aktionen nachvollziehbar
dokumentiert sind. Auch kann in Kontakt mit Fahrdiensten getreten
werden, um diese auf Besonderheiten bei der Beförderung hinzuweisen.
Alle Informationen zum eTransportschein können eingesehen werden.
Angehörige können sich auch direkt mit dem Fahrdienst in Verbindung setzen.
Abb. 56 meditrans App für Angehörige
Ergebnis
Beteiligte und ihre Zugänge
Pflegefachkräfte
Pflegefachkräfte übernehmen, ähnlich wie Angehörige, eine unter-
stützende Rolle bei der Organisation von Krankentransporten für
Patient:innen.
mediTrans Begleitapp
Digitale Systeme sind in der Pflege aktuell noch wenig verbreitet. Daher ist
es uns wichtig, eine Lösung anzubieten, die auch Pflegeheime ohne
bestehende oder nur mit einfachen digitalen Systemen nutzen können.
Aus diesem Grund haben wir die mediTrans App so gestaltet, dass sie auch
für die Verwaltung von Krankentransporten mehrerer Personen verwendet
werden kann.
Wir sehen es jedoch als optimale Lösung, die Verwaltung von
Transportscheinen und Krankentransporten in die digitalen Systeme der
Pflegeheime zu integrieren. So könnten Informationen zu anstehenden
Krankentransporten mit Daten wie Terminen und Aufgaben verknüpft
werden, um die Organisation noch effizienter und übersichtlicher zu
gestalten.
Um die Bedienung zu erleichtern, haben wir Filteroptionen ergänzt,
mit denen die Daten gezielt nach einzelnen Patient:innen sortiert werden
können.
218 - 219
Pflegekräfte können eTransportscheine von mehreren Nutzer:innen verwalten.
Abb. 57 meditrans App für Pflegefachkräfte
Ergebnis
220 - 221
Beteiligte und ihre Zugänge
Medizinisches Personal
Ärzt:innen und medizinische Fachangestellte spielen eine zentrale Rolle im
Krankentransportprozess. Sie beurteilen die medizinische Notwendigkeit
und stellen die entsprechenden Transportscheine aus.
In Arztpraxen wird eine Praxisverwaltungssoftware (PVS) verwendet, in
der alle Patientendaten gespeichert sind und die sämtliche Aufgaben des
Praxisalltags unterstützt. Es ist essenziell, das Erstellen und Verwalten von
Transportscheinen in diese Software zu integrieren, statt eine separate
Lösung anzubieten. Die Integration hat den Vorteil, dass auf Patienten-
daten zugegriffen werden kann und das medizinische Personal die
Transportscheine auf vertraute Art erstellen kann.
eTransportschein-Plugin für Praxisverwaltungssysteme
Wir haben uns dazu entschieden, einen Designvorschlag für die Erstellung
eines elektronischen Transportscheins innerhalb einer Praxisverwaltungs-
software zu gestalten. Diese Lösung bietet den Vorteil, dass das
medizinische Personal bereits mit der Software vertraut ist und nur die
neue Funktion zur Transportscheinerstellung erlernen muss. Darüber
hinaus kann die Implementierung mit einem einfachen Softwareupdate
erfolgen, was den Einführungsaufwand verringert.
Die Erstellung des eTransportscheins erfolgt über die Patienten-
detailseite, auf welcher der Behandlungsverlauf sowie weitere relevante
Daten der Patient:innen einsehbar sind. Das Erstellen selbst findet in
einem separaten Fenster statt, das sich über das Hauptfenster der
Praxisverwaltungssoftware legt. Das medizinische Personal kann dabei
entscheiden, ob der Transportschein von Grund auf neu ausgefüllt oder
auf Basis einer Vorlage aus einem vorherigen Transportschein erstellt
werden soll. Die weiteren Schritte variieren je nach Auswahl.
Das Ausfüllen des Transportscheins erfolgt in einem separaten
Fenster, das sich über die Praxisverwaltungssoftware legt. Dadurch wird
der Ausfüllprozess visuell und hierarchisch von der restlichen Software
abgegrenzt, was für eine klare Fokussierung sorgt.
Abb. 58 eTransportschein-Plugin
Screenflow — Modul 1: Leerer Transportschein
Das Ausfüllen eines leeren Formulars ist in mehrere Schritte unterteilt, um
den Prozess übersichtlich und effizient zu gestalten. Eine automatische
Ausfüllfunktion ermöglicht das Befüllen des Formulars anhand der
vorliegenden Daten aus der Patientenakte und der Behandlungshistorie.
Zusätzlich können relevante Patientendaten eingeblendet werden, um
das medizinische Personal beim Ausfüllen zu unterstützen.
Die Auswahl des Grundes der Beförderung wurde überarbeitet,
da dieser darüber entscheidet, ob die Fahrt genehmigt werden muss.
Im nächsten Schritt werden Informationen zum Fahrzeug und zum
Fahrtenaufkommen eingegeben. Eingabefelder für Begründungen oder
Optionen zur Spezifizierung werden nur angezeigt, wenn sie erforderlich
sind, um die Benutzeroberfläche aufgeräumt und schlank zu halten.
Bei der Eingabe der Behandlungsstätte werden Vorschläge angezeigt,
welche die Eingabe erleichtern. Die Angabe der Gültigkeit des Transport-
scheins beginnt mit der Anzahl der Behandlungstage. Falls der
Behandlungstag noch nicht feststeht und somit das Datum der Fahrt
ungewiss ist, kann dies entsprechend angegeben werden. Für Serien-
fahrten besteht die Möglichkeit anzugeben, dass sich die Anzahl der
Fahrten pro Woche erhöhen kann.
Nach Abschluss der Eingaben werden alle Daten in einer Übersicht
zusammengefasst und können bei Bedarf bearbeitet werden.
Abschließend wird der eTransportschein elektronisch signiert und an den
eTransportscheindienst übermittelt. Auf Wunsch kann ein Papierausdruck
für Patient:innen erstellt werden.
222 - 223
Die automatische Ausfüllhilfe und das Anzeigen von Patientendaten
unterstützen das Ausfüllen des eTransportscheins.
Der Beförderungsgrund wurde neu strukturiert und wird nun basierend auf
dem Grund der Behandlung angegeben.
Abb. 59 Screenflow - Modul 1: Leerer Transportschein
Screenflow — Modul 1: Leerer Transportschein
Zusatzoptionen und Eingabefelder für Begründungen werden nur angezeigt,
wenn diese benötigt werden.
Bei der Eingabe der Behandlungsstätte werden passende Vorschläge zu
Behandlungsstätten angezeigt.
224 - 225
Bei der Eingabe des Beförderungstag kann zwischen einem oder mehreren
Beförderungstagen gewählt werden.
Am Ende erfolgt eine Übersicht der Eingaben. Änderungen können auf dieser
Seite vorgenommen werden.
Abb. 59 Screenflow - Modul 1: Leerer Transportschein
Screenflow — Modul 1: Leerer Transportschein
Modul 2: Aus vorherigem Transportschein
226 - 227
Wird das Formular mithilfe einer Vorlage eines zuvor ausgestellten
Transportscheins für diese:n Patient:in ausgefüllt, sind alle Daten in
einer bearbeitbaren Übersicht aufgelistet. Änderungen können bei
Bedarf vorgenommen werden. Anschließend wird der eTransportschein
elektronisch signiert und an den eTransportscheindienst übermittelt.
Ein Papierausdruck für Patient:innen kann ebenfalls erstellt werden.
Nach Abschluss des Prozesses wird das separate Fenster geschlossen,
und der eTransportschein wird mit den Patientendaten verknüpft und
gespeichert.
Nach dem Ausfüllen des Transportscheins muss dieser elektronisch signiert
werden. Anschließend wird er in den eTransportscheindienst hochgeladen,
und bei Bedarf kann ein Papierausdruck für Patient:innen erstellt werden.
Abb. 59 Screenflow - Modul 1: Leerer Transportschein
Screenflow — Modul 2: Aus vorherigem Transportschein
Wurden für Patient:innen bereits Transportscheine ausgestellt, können diese
als Vorlage für neue Transportscheine genutzt werden.
Alle Daten des Transportscheins werden in einem editierbaren Formular
angezeigt. Änderungen sind schnell möglich, und markierte Pflichtfelder
sichern eine korrekte Bearbeitung.
228 - 229
Sind alle Änderungen getätigt, kann der Transportschein fertiggestellt und
signiert werden.
Abb. 60 Screenflow - Modul 2: Aus vorherigem Transportschein
Ergebnis
Beteiligte und ihre Zugänge
Fahrdienste
Die Fahrdienste spielen durch die Beförderung der Patient:innen eine
zentrale Rolle im Krankentransportprozess.
Dispositionssoftware von Fahrdiensten
Um interne Abläufe und die Abwicklung von Fahrten zu steuern, nutzen
Fahrdienste eine Dispositionssoftware. Die Dispositionssoftware eignet
sich gut für eine Integration und wäre an den eTransportscheindienst
angebunden. Das würde ermöglichen, Fahrtbuchungen direkt in den
Fahrtenplan zu übernehmen. Zudem könnten die Kundenkommunikation
und die Verwaltung von Kundendaten innerhalb derselben Software
erfolgen.
Die Fahrdaten, die von Fahrer:innen über eine App aufgenommen
werden, würden ebenfalls in der Dispositionssoftware verfügbar sein.
Auch könnte die Einreichung von Transportscheinen zur Abrechnung
direkt aus der Dispositionssoftware erfolgen, da alle relevanten Daten
dort gebündelt vorliegen. Ein Abrechnungsdatensatz könnte aus diesen
Informationen erstellt und in den eTransportscheindienst hochgeladen
werden. Eine zentrale Lösung für die gesamte Fahrtenabwicklung und
Abrechnung würde es den Fahrdiensten ermöglichen, den kompletten
Prozess innerhalb eines Systems zu verwalten.
Unsere Wireframes für eine Dispositionssoftware aus dem ersten
Konzept stellen eine einfache Version einer solchen Software dar. Wir
haben uns jedoch entschieden, im Rahmen dieser Arbeit keinen
spezifischen Designvorschlag für diese Schnittstelle auszuarbeiten,
da sie im Vergleich zu anderen gestalteten Schnittstellen weniger
zentral für die Darstellung unseres Konzeptes ist.
Eine Anbindung der Dispositionssoftware an den eTransportschein-
dienst könnte über ein Softwareupdate realisiert werden. Für die Fahr-
dienste hätte dies den Vorteil eines geringen Einrichtungsaufwands, da
keine zusätzliche Software benötigt würde.
230 - 231
eTransportschein-Plugin für Dispositionsapp von Fahrer:innen
Während der Fahrt haben Fahrer:innen über eine Smartphoneapp Zugriff
auf den eTransportschein. Wir haben hierfür einen Designvorschlag
entwickelt, der die spezifischen Anforderungen der Fahrer:innen
berücksichtigt. Mit dieser Fahrerapp können die Daten des eTransport-
scheins eingesehen und Fahrdaten während der Fahrt aufgezeichnet
werden. Fahrer:innen erhalten dabei nur Zugriff auf die für sie relevanten
Informationen wie Abholort, Zielort und Beförderungsart, um den
Datenschutz der Patient:innen zu gewährleisten. Am Ende der Fahrt
können Patient:innen diese auf dem Smartphone der Fahrer:innen mit
ihrer Unterschrift bestätigen.
In Taxiunternehmen werden bereits häufig Smartphones und Apps
für die Disposition von Fahrten sowie die Kommunikation mit den Fahrer:
innen genutzt. Daher sahen wir die Möglichkeit, die Anforderungen an die
Fahrerapp in bestehende Apps zu integrieren. Dadurch könnten die Fahrer:
innen in ihrem gewohnten Workflow bleiben und es wäre keine zusätzliche
App erforderlich. Es ist zu beachten, dass unser Design lediglich einen
Vorschlag darstellt und die tatsächliche Implementierung der Funktionen
und Benutzeroberfläche außerhalb unseres Einflusses liegt.
Mit der fortschreitenden Digitalisierung und der zunehmenden
Technologisierung sowie Vernetzung von Fahrzeugen könnte diese App
in Zukunft auch direkt über das Betriebssystem des Fahrzeugs betrieben
werden, anstelle eines Smartphones.
Screenflow — Fahrt starten
Der eTransportschein kann auf verschiedene Weise hinzugefügt werden. 232 - 233
Vor Fahrtbeginn können Details überprüft werden. Die App informiert Fahrer:
innen bei fehlender Genehmigung oder Unstimmigkeiten. Während der Fahrt
werden Fahrdaten erfasst, jedoch ohne genaue Standortspeicherung, wie die
Kartendarstellung zeigt.
Abb. 61 Screenflow - Fahrt starten
Screenflow — Fahrt starten
Am Ende der Fahrt wird eine Übersicht angezeigt, die auch an die Entrichtung
einer möglichen Zuzahlung erinnert.
234 - 235
Patient:innen bestätigen die absolvierte Fahrt durch ihre Unterschrift.
Abb. 61 Screenflow - Fahrt starten
Ergebnis
Beteiligte und ihre Zugänge
Krankenkassen
Krankenkassen übernehmen im Krankentransportprozess verschiedene
Aufgaben, die sich auf mehrere Ebenen verteilen. Sie sind über das
Krankenkasseninformationssystem (KIS) an den eTransportscheindienst
angebunden. Das KIS ist das interne Programm der Krankenkassen, in
dem alle Mitgliedsdaten und Vorgänge verwaltet werden. Eine Integration
in das KIS ist vorteilhaft, da sie den Implementierungsaufwand gering hält
und den bestehenden Workflow der Mitarbeiter:innen nicht beeinträchtigt.
Krankenkasseninformationssystem
Krankenkassen spielen zu Beginn des Krankentransportprozesses
eine zentrale Rolle, da sie die Fahrten genehmigen müssen, bevor der
Krankentransport erfolgen kann.
Sobald ein eTransportschein erstellt und in den eTransportscheindienst
hochgeladen wird, erhält die zuständige Krankenkasse automatisch eine
Benachrichtigung über den Eingang einer Genehmigungsanfrage.
Der eTransportschein kann dann innerhalb des Krankenkassen-
informationssystems (KIS) eingesehen werden. Dies eröffnet die
Möglichkeit, eine Benutzeroberfläche zu entwickeln, die speziell auf die
Anforderungen des Genehmigungsprozesses zugeschnitten ist. Dadurch
könnte eine schnellere Genehmigung erfolgen, und Sachbearbeiter:innen
könnten bei komplexeren Fragen Unterstützung erhalten, beispielsweise
durch spezifische Hinweise und Einbindung relevanter Daten.
Zusätzlich besteht die Option, Transportscheine automatisiert zu
genehmigen, da alle erforderlichen Daten elektronisch vorliegen und
zentral in der Software verarbeitet werden. Eine weniger umfassende
Variante dieses Ansatzes wäre die automatische Genehmigung von
Transportscheinen, die aufgrund einer ähnlichen Behandlung bereits in
der Vergangenheit genehmigt wurden. Solche Maßnahmen könnten zu
Effizienzsteigerungen und Kosteneinsparungen führen (Nahnsen, 2024).
Auch wäre es möglich, Genehmigungsanfragen nach Dringlichkeit zu
priorisieren oder datenbasierte Vorschläge für Entscheidungen
236 - 237
bereitzustellen, um die Arbeit der Sachbearbeiter:innen weiter zu
unterstützen.
Abrechnungsprogramm von Krankenkasse
Am Ende des Krankentransportprozesses prüfen die Krankenkassen den
Abrechnungsdatensatz und können anschließend die Zahlung an den
Fahrdienst veranlassen.
Eine Anbindung des Abrechnungsprogramms an den eTransportschein-
dienst würde den Abrechnungsprozess erheblich beschleunigen, da
keine manuellen Übertragungen von Daten aus dem eTransportschein
erforderlich wären. Der Vorteil eines vollständig digitalen Datensatzes liegt
darin, dass eine Vielzahl der Prüfungen automatisiert durchgeführt werden
könnten.
Durch die Optimierung der Benutzeroberfläche und des Workflows
im Abrechnungsprogramm könnte der gesamte Prozess beschleunigt
werden. Darüber hinaus wäre auch eine vollständig automatisierte
Bearbeitung der Abrechnungen denkbar, was den Arbeitsaufwand für
die Krankenkassen weiter reduzieren würde.
Ergebnis
Einführung in Deutschland
Die Einführung des eTransportscheinprozesses in Deutschland wäre ein
großes Vorhaben, das mehrere Schritte erfordert. Zunächst müsste der
neue Prozess gesetzlich verankert werden. Anschließend müssten sich
alle Beteiligten darauf vorbereiten, den neuen Ablauf zu implementieren.
Der Betrieb und die Finanzierung des Systems könnten durch die
gematik, die nationale Agentur für Digitale Medizin in Deutschland,
erfolgen. Angesichts ihrer zentralen Rolle im deutschen Gesundheits-
system wäre dies naheliegend. Der eTransportscheindienst sowie der
dazugehörige Datensatz könnten als von der gematik definierter Standard
entwickelt werden. Die Integration in die Telematikinfrastruktur (TI), das
zentrale digitale Netzwerk des deutschen Gesundheitswesens, wäre dabei
ein entscheidender Schritt, um eine schnelle und sichere Implementierung
zu gewährleisten. Bei der Entwicklung des eTransportscheindienstes wäre
es sinnvoll, bereits etablierte Technologien und Standards der gematik zu
nutzen. Dies würde die Akzeptanz seitens der Krankenkassen und des
medizinischen Personals fördern, da diese bereits an die TI angebunden
sind und mit deren Prozessen vertraut sind.
Vor dem bundesweiten Start des eTransportscheins müsste
sichergestellt werden, dass alle Beteiligten im Krankentransport-
prozess rechtzeitig Zugriff auf den eTransportscheindienst erhalten.
Insbesondere für Fahrdienste, die bisher nicht an die TI oder andere
Systeme der gematik angebunden sind, könnte dieser Schritt mit hohen
Aufwand verbunden sein. Eine schrittweise Einführung mit einer Testphase
in einer begrenzten Region wäre daher ratsam.
In der Anfangsphase des eTransportscheinprozesses könnte der
herkömmliche Papiertransportschein weiterhin als Alternative angeboten
werden. Dies würde die gesundheitliche Versorgung sicherstellen und
mögliche Startprobleme des neuen Systems abfangen. Nach einer
erfolgreichen Pilotphase könnte der eTransportschein dann
deutschlandweit eingeführt werden.
238 - 239
eTransportschein in der Notfallrettung
Neben dem Krankentransport werden Papiertransportscheine in
einigen Landkreisen auch in der Notfallrettung verwendet. Dies wurde im
Gestaltungsprozess des eTransportscheins nicht berücksichtigt, da der
Fokus der Bachelorarbeit auf dem Krankentransport lag. In der Notfall-
rettung erhält die Besatzung eines Rettungswagens nach der Einlieferung
von Patient:innen in eine Klinik einen Transportschein als Bestätigung für
die durchgeführte Fahrt.
Die Erstellung eines eTransportscheins für die Notfallrettung wäre
grundsätzlich möglich. Allerdings wäre es sinnvoll, den Datensatz an die
spezifischen Anforderungen der Notfallrettung anzupassen. Eine zentrale
Fragestellung wäre dabei, wie die Besatzung Zugriff auf den eTransport-
schein erhalten könnte. Eine mögliche Lösung wäre, den eTransportschein
direkt an den jeweiligen Fahrdienst, in diesem Fall eine anerkannte
Hilfsorganisation, zu übermitteln.
Das zugrunde liegende technische Konzept des eTransportscheins
umfasst die digitale Ausstellung eines Datensatzes, dessen zentrale
Speicherung in einem Datenspeicherdienst sowie die Übermittlungs-
möglichkeiten an den Fahrdienst. Dieses Konzept könnte einfach
übernommen werden.
Ergebnis
eTransportschein für private Krankenkassen
Es stellt sich die Frage, ob private Krankenkassen den eTransportschein-
dienst nutzen möchten. Derzeit sind private Krankenkassen nicht an die
Telematikinfrastruktur (TI) angeschlossen, und die Nutzung von Diensten
und Produkten der gematik ist für sie optional. Eine Anbindung an die TI
könnte jedoch eine Voraussetzung für die Nutzung des eTransportschein-
dienstes darstellen.
Dies wirft eine größere, übergreifende Frage auf, wie private Kranken-
kassen künftig in digitale Standards des deutschen Gesundheitssystems
eingebunden werden. Diese Frage wird im Zuge der fortschreitenden
Digitalisierung des deutschen Gesundheitssystems in den kommenden
Jahren geklärt werden müssen.
240 - 241
Ergebnis
242 - 243
Kommunikation des neuen Prozesses
Der Systemwechsel sollte frühzeitig und gezielt an die Patient:innen
kommuniziert werden. Da Krankentransporte ein Nischenthema sind,
eignen sich breit angelegte Informations- und Aufklärungskampagnen
weniger. Stattdessen sollten Patient:innen bei ihrer ersten Inanspruch-
nahme eines Krankentransports im Rahmen des neuen Prozesses über
die Änderungen informiert werden.
Zu diesem Zweck haben wir einen Flyer gestaltet, der an Patient:innen
ausgehändigt werden kann. Der Flyer richtet sich speziell an Patient:innen
und erklärt, was ein eTransportschein ist und wie ein Krankentransport
mit dem neuen eTransportscheinprozess abläuft. Zudem werden die
Funktionen der mediTrans Begleitapp vorgestellt, und ein QR-Code
verweist auf eine Downloadseite.
Zusätzlich haben wir ein animiertes Video erstellt, das den eTransport-
schein aus der Perspektive der Patient:innen erklärt und auch die
abschließende Abrechnung des Fahrdienstes mit den Krankenkassen
beschreibt. Das Video verwendet einfache, animierte Illustrationen, die
den Fokus auf das Wesentliche lenken und den Prozess darstellen.
Es wurde verschiedenen Personen aus der Zielgruppe gezeigt, und
deren Feedback wurde berücksichtigt, um ein möglichst zugängliches
und verständliches Video zu schaffen.
Abb. 62 eTransportschein Flyer
Ergebnis
244 - 245
Ausblick
Der eTransportschein bietet als Konzept für eine optimierte Abwicklung
von Krankentransporten eine Lösung für die identifizierten Probleme im
Prozess. Er ist eine digitale Variante, welche ins deutsche Gesundheits-
system integriert werden könnte.
Er deckt zentrale Aspekte wie den vollständigen digitalen Daten-
austausch ab, bietet aber auch Potenzial für zukünftige Erweiterungen.
Weiteres Potenzial sehen wir durch die Integration unseres Konzepts in
eine zentralisierte Gesundheitsplattform, wie sie bereits in einigen
skandinavischen und baltischen Ländern Europas mit stärker
digitalisierten Gesundheitssystemen existiert. Über eine solche Plattform
könnten Patient:innen alle Angelegenheiten des Gesundheitssystem
zentral abwickeln.
Langfristig wäre eine Entwicklung denkbar, bei der Krankentransporte
automatisch zu einem Arzttermin mitgebucht werden. Ergänzend könnte
die App ein Formular für die private Fahrkostenübernahme integrieren,
um Angehörigen oder Privatversicherten die Abwicklung zu erleichtern.
Mit dem in dieser Bachelorarbeit entwickelten Konzept wird eine
Grundlage geschaffen, auf der schrittweise weitere Funktionen und
Prozesse realisiert werden können – mit dem Ziel, den administrativen
Aufwand zu reduzieren und den Komfort für Patient:innen zu erhöhen.
Anhang
Abkürzungsverzeichnis
E
eGK
ePA
elektronische Gesundheitskarte
elektronische Patientenakte
K
KIM
KTW
Kommunikation im Medizinwesen
Krankentransportwagen
M
MFA
Medizinische Fachangestellte
P
PVS
Praxisverwaltungssystem
T
TI
TS
Telematikinfrastruktur
Transportschein
(Verordnung über Krankenbeförderung)
248 - 249
Definitionsverzeichnis
A
Abrechnungscenter
Abrechnungsprogramm
Ein externer Dienstleister, der für gesetzliche
Krankenkassen die Abrechnung mit den
Leistungsträgern durchführt.
Mit dieser Software kann die Abrechnung eines
Transportscheins durchgeführt werden.
D
Dispositionssystem
Software die Fahrdienste bei der Organisation und
Verwaltung ihrer Fahrten unterstützen.
E
elektronischen
Gesundheitskarte (eGK)
Die elektronische Gesundheitskarte (eGK) ist eine
Chipkarte, die alle gesetzlich Krankenversicherten in
Deutschland erhalten. Sie dient als Nachweis der
Krankenversicherung und trägt dazu bei den Zugriff
auf wichtige Daten zu ermöglichen.
F
Factoringanbieter
Ein Factoringanbieter übernimmt die offenen
Forderungen eines Unternehmens (z. B. eines
Fahrdienstes) gegenüber seinen Kund:innen (z.B. einer
Krankenkasse) und zahlt den Rechnungsbetrag nach
einem festgelegten Tarif vorab aus, wodurch das
Unternehmen schneller über liquide Mittel verfügt.
G
gematik
Die Nationale Agentur für Digitale Medizin in
Deutschland. Sie verantwortet die Entwicklung und
den Betrieb der technischen Infrastruktur für digitale
Anwendungen wie die elektronische Patientenakte
(ePA) und das E-Rezept. Darüber hinaus definiert die
gematik verbindliche Standards für den sicheren und
effizienten Datenaustausch im Gesundheitswesen.
K
Kommunikation im
Medizinwesen (KIM)
Krankenkassen-
informationssystem (KIS)
KIM ist ein Standard der gematik, der für die sichere
digitale Kommunikation im deutschen Gesundheits-
wesen entwickelt wurde.
Das ist eine Software, mit welcher Krankenkassen
Mitgliedsdaten, Kundenkontakte und Kundendaten
verwalten.
L
P
T
Krankentransport
Leistungserbringer
Praxisverwaltungs-
system (PVS)
Telematik-infrastruktur
(TI)
250 - 251
Krankentransport bezeichnet die Beförderung von
Patient:innen, welche im Zusammenhang mit einer
Leistung der Krankenkasse aus medizinischen
Gründen notwendig ist.
Im deutschen Gesundheitssystem ist dies ein
Sammelbegriff, der niedergelassene Ärzt:innen,
Arztpraxen, Kliniken und weitere fachmedizinische
Einrichtungen umfasst.
In der PVS sind alle Patientendaten gespeichert und es
unterstützt bei sämtlichen Aufgaben im Praxisalltag.
Das zentralen digitalen Netzwerk des deutschen
Gesundheitswesens.
Literaturverzeichnis
A
Alle Infos rund um den Transportschein. (o. D.). Deutsches Medizinrechenzentrum.
https://www.dmrz.de/wissen/ratgeber/alle-infos-rund-um-den-transportschein
(Abgerufen am 03.01.2025)
B
Barrierefreiheitsstärkungsgesetz. (o.D.). Bundesministerium für Arbeit und Soziales.
https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/
barrierefreiheitsstaerkungsgesetz.html (Abgerufen am 13.01.2025)
C
Campbell et al. (2024, 12. Dezember). Web Content Accessibility Guidelines (WCAG) 2.2.
W3C. https://www.w3.org/TR/WCAG22/ (Abgerufen 13.01.2025)
D
Datenlieferungen und BITMARCK_21c|ng. (o.D.) Abrechnungszentrum Emmendingen.
https://www.abrechnungszentrum-emmendingen.de/fuer-krankenkassen/
datenmanagement/datenlieferungen-und-bitmarck-21ng (Abgerufen am 05.01.2025)
Die Hardware zur mobilen Datenerfassung im Rettungsdienst. (o.D.). medDV. https://
www.meddv.de/nidapad/ (Abgerufen am 05.01.2025)
Digitale helsetjenester i et felles økosystem. (o. D.). Norsk helsenett. https://www.nhn.
no/tjenester/helsenorge/digitale-helsetjenester-i-et-felles-okosystem (Abgerufen am
03.01.2025)
Digitale–Versorgung–und–Pflege–Modernisierungs–Gesetz (DVPMG). (o.D.).
Bundesministerium für Gesundheit. https://www.bundesgesundheitsministerium.
de/service/gesetze-und-verordnungen/guv-19-lp/dvpmg (Abgerufen am 05.01.2025)
docYou med. (o.D.). pulsation IT. https://pulsation-it.com/docyoumed/ (Abgerufen
am 05.01.2025)
Dr. Datenschutz. (2023, 03. Januar). Datenschutz in der Arztpraxis: Alles Wichtige im
Überblick. Dr. Datenschutz. https://www.dr-datenschutz.de/datenschutz-in-der-
arztpraxis-alles-wichtige-im-ueberblick/ (Abgerufen 05.01.2025)
E
Einsatzunterstützung, Disposition und Transportplanung für Leitstellen.(o.D.).
rescuetrack. https://www.rescuetrack.de/de-de/krankentransport/ (Abgerufen 05.01.
2025)
ePA-Infoservices. (o.D.). gematik. https://www.gematik.de/anwendungen/epa/epa-
aktuell/epa-app (Abgerufen 05.01.2025)
F
G
H
I
K
252 - 253
Fahrdienst Software: So optimieren Sie die Tourenplanung in der Personenbeförderung.
(o.D.). GTS Systems and Consulting GmbH. https://gts-systems.com/branchen/
personenbefoerderung/ (Abgerufen am 05.01.2025)
Frost, B. (o.D.). Atomic Design Methodology. atomic design. https://atomicdesign.
bradfrost.com/chapter-2/ (Abgerufen am 13.01.2025)
Gesetzliche Krankenversicherung Leistungsfälle und -tage 2022. (2023).
Bundesministerium für Gesundheit. https://www.bundesgesundheitsministerium.
de/fileadmin/Dateien/3_Downloads/Statistiken/GKV/Geschaeftsergebnisse/KG2_
2022.pdf (Abgerufen am 03.01.2025)
Gesetz zur Beschleunigung der Digitalisierung des Gesundheitswesens (Digital-Gesetz –
DigiG). (o. D.) Bundesministerium für Gesundheit. https://www.
bundesgesundheitsministerium.de/ministerium/gesetze-und-verordnungen/guv-20-
lp/digig (Abgerufen am 03.01.2025)
Healthcare-Barometer 2024. (o. D.). PwC Deutschland. https://www.pwc.de/de/
gesundheitswesen-und-pharma/healthcare-barometer.html (Abgerufen am 03.01.
2025)
Ihr Telematiksystem in Perfektion. (o.D.). GTS Systems and Consulting GmbH. https://
gts-systems.com/telematiksystem/ (Abgerufen am 05.01.2025)
KIM – Kommunikation im Medizinwesen. (o.D.). gematik Fachportal. https://fachportal.
gematik.de/anwendungen/kommunikation-im-medizinwesen (Abgerufen am 05.01.
2025)
KIM - Schnell und sicher kommunizieren. (o. D.). gematik https://www.gematik.de/
anwendungen/kim (Abgerufen am 21.01.2025)
Krankenkassen-Verband kündigt weitere Beitragserhöhungen an. (2024, 30. Dezember).
Handelsblatt. https://www.handelsblatt.com/politik/deutschland/
krankenversicherung-krankenkassen-verband-kuendigt-weitere-
beitragserhoehungen-an/100097540.html (Abgerufen am 03.01.2025)
Krankentransporte und Fahrtkosten. (o. D.). Österreichische Gesundheitskasse. https://
www.gesundheitskasse.at/cdscontent/?contentid=10007.870423 (Abgerufen am 03.
01.2025)
K
M
N
O
P
Krankentransportwagen (KTW). (o. D.). DRK Rettungsdienst Esslingen-Nürtingen
gGmbH. https://www.drk-rettungsdienst-esnt.de/start/ueberuns/ausstattung/
krankentransportwagen (Abgerufen am 03.01.2025)
Krankenversicherung. (o.D.). Bundesministerium für Soziales, Gesundheit, Pflege und
Konsumentenschutz. https://www.sozialministerium.at/Themen/Soziales/
Sozialversicherung/Krankenversicherung.html (Abgerufen am 03.01.2025)
McKinsey. (2023, 02. Januar). E-Rezept und ePA – die Schlüssel zur Digitalisierung des
deutschen Gesundheitswesens?. McKinsey. [https://www.mckinsey.de/~/media/
mckinsey/locations/europe and middle east/deutschland/publikationen/2023-02-01
e-rezept und epa/mckinsey_e-rezept_und_epa_2023.pdf](https://www.mckinsey.de/
~/media/mckinsey/locations/europe%20and%20middle%20east/deutschland/
publikationen/2023-02-01%20e-rezept%20und%20epa/mckinsey_e-rezept_und_epa_
2023.pdf) (Abgerufen 05.01.2025)
Nahnsen, D. (2024, 29. Juli). Künstliche Intelligenz in Krankenkassen: Eine
vielversprechende Zukunftsvision. Capgemini. https://www.capgemini.com/de-de/
insights/blog/kuenstliche-intelligenz-in-krankenkassen-eine-vielversprechende-
zukunftsvision/ (Abgerufen am 20.01.2025)
Noto: A typeface for the world. (o.D.). Google Fonts. https://fonts.google.com/noto
(Abgerufen am 13.01.2025)
Oppermann, M. (2024, 19. Juni). Die Stadt der Zukunft braucht das Taxi. Tagesspiegel
Background. https://background.tagesspiegel.de/verkehr-und-smart-mobility/
briefing/die-stadt-der-zukunft-braucht-das-taxi (Abgerufen am 05.01.2025)
Optimierte Krankenfahrten-Abrechnung. (o.D.). Taxi.de. https://www.taxi.de/
krankenfahrten-abrechnen/ (Abgerufen am 05.01.2025)
PKV oder GKV: Was ist 2024 besser?. (2024, 9. Oktober). Handelsblatt. https://www.
handelsblatt.com/vergleich/pkv-oder-gkv/ (Abgerufen 03.01.2025)
Praxisverwaltungssysteme (PVS). (o.D.). Kassenärztliche Bundesvereinigung. https://
www.kbv.de/html/pvs.php (Abgerufen 05.01.2025)
R
S
T
Ü
V
W
254 - 255
RDG. (2024). https://dejure.org/gesetze/RDG_
réception des demandes de transport. (o.D.). amblea. https://www.amblea.fr/
ts#reception-des-demandes (Abgerufen am 05.01.2025)
Service-Apps der Krankenkassen. (o.D.). Krankenkassen.Deutschland. https://www.
krankenkassen.de/gesetzliche-krankenkassen/leistungen-gesetzliche-
krankenkassen/service-beratung/service/ (Abgerufen 05.01.2025)
SGB V. (1988). https://www.gesetze-im-internet.de/sgb_5/
Strukturreform Sozialversicherung. (o.D.). Bundesministerium für Soziales,
Gesundheit, Pflege und Konsumentenschutz. https://www.sozialministerium.at/
Themen/Soziales/Sozialversicherung/Strukturreform-Sozialversicherung.html
(Abgerufen am 03.01.2025)
TARIS Krankenfahrten. (o.D.). MPC-Software. https://www.mpc-software.de/taris-
krankenfahrten (Abgerufen am 05.01.2025)
Telematikinfrastruktur in der Pflege? Geht doch – mit Expertise aus der Pflege!. (o.D.).
CompuGroup Medical. https://www.cgm.com/deu_de/produkte/soziale-einrichtung/
ti-in-der-pflege.html (Abgerufen am 05.01.2025)
TI-Messenger Schnelle Nachrichten in Echtzeit. (o. D.). gematik https://www.gematik.
de/anwendungen/ti-messenger (Abgerufen am 21.01.2025)
Über uns. (o. D.). gematik. https://www.gematik.de/ueber-uns (Abgerufen 03.01.2025)
Vivendi PD. (o.D.). Connext. https://www.connext.de/software/vivendi-pd/pflege.aspx
(Abgerufen am 05.01.2025)
Welchen Funktionen und Zugriffen Versicherte widersprechen können. (o.D.). gematik.
https://www.gematik.de/anwendungen/epa/epa-fuer-alle/widerspruch (Abgerufen
05.01.2025)
What if we could change the way the world reads—starting with a font designed to adjust
specifically for your needs?. (o.D.). Lexend. [https://www.lexend.com](https://www.
lexend.com/) (Abgerufen am 13.01.2025)
Abbildungsverzeichnis
Team. Eigene Darstellung
Abbildung 1 Abbildung 10
Abbildung 2 Abbildung 11
Projektplan, In Anlehnung an Chen, M. (2021, 15. Dezember). The Zendesk Triple
Diamond. Medium.com. https://medium.com/zendesk-creative-blog/the-zendesk-
triple-diamond-process-fd857a11c179 (Abgerufen am 12.01.2025)
Abbildung 3
Normales Taxi, Taxiflotte. (o. D.). menchen-reisen.de. https://www.menchen-reisen.
de/taxiunternehmen/taxiflotte (Abgerufen am 12.01.2025)
Abbildung 4
Abbildung 12
Abbildung 13
Abbildung 14
Taxi für die Rollstuhlbeförderung, Taxi mit Rollstuhlstransport. (o. D.). menchen-
reisen.de. https://www.menchen-reisen.de/taxiunternehmen/taxiflotte (Abgerufen
am 12.01.2025)
Abbildung 5
Abbildung 6
KTW mit medizinischer Ausrüstung, Fahrzeug-Angebote-KTW. (o. D.). Mittelstädt
Einsatzfahrzeuge. https://mittelstaedt-einsatzfahrzeuge.de(Abgerufen am 12.01.
2025)
GKV Leistungsfälle und -tage (KG2/ 2022), In Anlehnung an Gesetzliche
Krankenversicherung Leistungsfälle und -tage 2022. (2023). Bundesministerium für
Gesundheit. https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_
Downloads/Statistiken/GKV/Geschaeftsergebnisse/KG2_2022.pdf (Abgerufen am 13.
01.2025)
Abbildung 15
Abbildung 16
Abbildung 17
Abbildung 18
Abbildung 7 Abbildung 19
Ablauf eines Krankentransports. Eigene Darstellung
Abbildung 8 Abbildung 20
Transportschein (Muster 4), Kassenärztliche Bundesvereinigung (KBV). (2024, 7.
Januar). Krankenbeförderung-Verordnungsformular. https://www.kbv.de/html/
krankentransport.php (Abgerufen am 13.01.2025)
Abbildung 21
Abbildung 9
Tabellarische Übersicht aller Interviews. Eigene Darstellung
Abbildung 22
256 - 257
Stakeholder Map. Eigene Darstellung
Service Blueprint. Eigene Darstellung
User Journeys und Error Flows. Eigene Darstellung.
Zusammengefasste Fehlerquellen im Beförderungspapier. Eigene Darstellung
Zusammengefasste Ursache von Kommunikations- und Koordinationsproblemen.
Eigene Darstellung
Auswirkungen und Folgen des aktuellen Systems. Eigene Darstellung
Identifizierte Probleme im Krankentransport. Eigene Darstellung
Opportunity Board. Eigene Darstellung
Die Zusammenarbeit der Beteiligten im Krankentransport. Eigene Darstellung
Value Proposition Canvas. Eigene Darstellung
Brand Filters. Eigene Darstellung
Ablauf des Konzept 1. Eigene Darstellung
Transportschein (Muster 4), Kassenärztliche Bundesvereinigung (KBV). (2024, 7.
Januar). Krankenbeförderung-Verordnungsformular. https://www.kbv.de/html/
krankentransport.php (Abgerufen am 13.01.2025)
Abbildung 23
Neusortierung des Beförderungsgrund. Eigene Darstellung
Abbildung 36
Abbildung 24
Screens für eine Fahrdienstsoftware. Eigene Darstellung
Abbildung 37
Abbildung 25
Ablauf des Konzept 2. Eigene Darstellung
Abbildung 38
Abbildung 26
Workshop beim Deutschen Roten Kreuz. Eigene Darstellung
Abbildung 39
Abbildung 27
Screens der Anwendung für Arztpraxen. Eigene Darstellung
Abbildung 40
Abbildung 28 Abbildung 41
Screens der Begleitapp. Eigene Darstellung
Abbildung 29 Abbildung 42
Informationsarchitektur der Begleitapp. Eigene Darstellung
Abbildung 30 Abbildung 43
Fotos vom Testen bei der Eignungsprüfung. Eigene Darstellung
Abbildung 31 Abbildung 44
Logo. Eigene Darstellung
Abbildung 32 Abbildung 45
eTransportschein Logo. Eigene Darstellung
Abbildung 33 Abbildung 46
mediTrans Logo. Eigene Darstellung
Abbildung 34 Abbildung 47
Verwendete Icons. Eigene Darstellung
Abbildung 35 Abbildung 48
Verwendete Farben. Eigene Darstellung
258 - 259
Anwendung des Atomic Design Prinzips. Eigene Darstellung
Datenzugriffe der Beteiligten. Eigene Darstellung
Ausstellung eines Transportscheins. Eigene Darstellung
Genehmigung des eTransportscheins. Eigene Darstellung
Buchung einer Fahrt. Eigene Darstellung
Die Fahrt. Eigene Darstellung
Die Abrechnung. Eigene Darstellung
Ablehnung einer Abrechnung. Eigene Darstellung
Service Blueprint für den eTransportscheinprozess. Eigene Darstellung
User Jouney 1 - Patientin im Pflegeheim. Eigene Darstellung
User Jouney 2 - Patient mit regelmäßiger Dialysebehandlung. Eigene Darstellung
User Jouney 3 — Entlassung aus dem Krankenhaus. Eigene Darstellung
Papierausdruck. Eigene Darstellung
Abbildung 49
Abbildung 50
Abbildung 51
Abbildung 52
Abbildung 53
Abbildung 54
Abbildung 55
Abbildung 56
Abbildung 57
Abbildung 58
Abbildung 59
Abbildung 60
Abbildung 61
Screenflow - Transportscheine hinzufügen. Eigene Darstellung
Screenflow - Transportscheine verwalten. Eigene Darstellung
Screenflow - Erste Fahrt buchen. Eigene Darstellung
Screenflow - Transportscheine verwalten. Eigene Darstellung
Screenflow - Weitere Fahrten buchen. Eigene Darstellung
Screenflow - Fahrten verwalten. Eigene Darstellung
Screenflow - Nachrichten senden. Eigene Darstellung
meditrans App für Angehörige. Eigene Darstellung
meditrans App für Pflegefachkräfte. Eigene Darstellung
eTransportschein-Plugin. Eigene Darstellung
Screenflow - Modul 1: Leerer Transportschein. Eigene Darstellung
Screenflow - Modul 2: Aus vorherigem Transportschein. Eigene Darstellung
Screenflow - Fahrt starten. Eigene Darstellung
Abbildung 62
260 - 261
eTransportschein Flyer. Eigene Darstellung
Danksagung
Wir möchten uns herzlich bei allen bedanken, die uns während unserer
Bachelorarbeit unterstützt und begleitet haben.
Ein besonderer Dank gilt unseren beiden Betreuern,
Prof. Andreas Pollok
Prof. Hartmut Bohnacker
für ihre kontinuierliche Unterstützung und die vielen wertvollen Impulse,
die sie in unseren Besprechungen eingebracht haben.
Ebenso danken wir allen Interviewpartner:innen und Expert:innen, die uns
mit ihren Einblicken und ihrer fachlichen Expertise während der Erstellung
dieser Arbeit unterstützt haben.
Ein großes Dankeschön gilt außerdem unseren Freund:innen, Partner:
innen und Familien, die uns in dieser Zeit zur Seite gestanden und
unterstützt haben.
262 - 263
Eidesstattliche
Erklärung
Eidesstattliche Versicherung nach § 19 Absatz 1 der Studien- und
Prüfungsordnung
Hiermit versichern wir, dass wir die vorliegende Arbeit selbstständig
verfasst und keine anderen als die angegebenen Quellen und Hilfsmittel
verwendet habe. Alle Ausführungen, die wörtlich oder sinngemäß
übernommen wurden, sind als solche gekennzeichnet.
Mark Eisele
Schwäbisch Gmünd, 30.01.2025
Jun Wang
Schwäbisch Gmünd, 30.01.2025
Optimierung der Abwicklung von Krankentransporten
B.A. Interaktionsgestaltung
Wintersemester 2024/2025
Verfasser:innen
Jun Wang
Mark Eisele
Betreuer
Prof. Andreas Pollok
Prof. Hartmut Bohnacker
Hochschule
Hochschule für Gestaltung
Schwäbisch Gmünd
Rektor-Klaus-Straße 100
73525 Schwäbisch Gmünd
Typografie
Lexend
Noto Sans
Erscheinungsdatum
Februar 2025