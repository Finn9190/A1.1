// A1.2 content: second half of A1. Grammar: Perfekt, Präteritum of sein/haben, Dativ,
// Wechselpräpositionen, Modalverben wollen/dürfen/sollen, Imperativ du/ihr, Komparativ, und/aber/oder/denn.
// Topics: health, home and furniture, travel, clothes and colours, celebrations, offices/bank/post, work.
window.A1 = window.A1 || {};

(function () {
  const lines = (s) => s.trim().split('\n').map((l) => l.split('|'));

  // ---------- Vocabulary ----------
  const NOUNS = `
wohnen|der|Flur|Flure|hallway|🚪
wohnen|das|Regal|Regale|shelf|📚
wohnen|der|Teppich|Teppiche|carpet|🟫
wohnen|der|Herd|Herde|cooker|🍳
wohnen|die|Dusche|Duschen|shower|🚿
wohnen|der|Spiegel|Spiegel|mirror|🪞
wohnen|das|Bild|Bilder|picture|🖼️
wohnen|die|Pflanze|Pflanzen|plant|🪴
wohnen|der|Sessel|Sessel|armchair|🛋️
wohnen|die|Wand|Wände|wall|🧱
wohnen|die|Treppe|Treppen|stairs|🪜
wohnen|der|Aufzug|Aufzüge|lift; elevator|🛗
wohnen|der|Keller|Keller|cellar|🏚️
wohnen|der|Nachbar|Nachbarn|neighbour (male)|🧑
wohnen|die|Nachbarin|Nachbarinnen|neighbour (female)|👩
wohnen|der|Vermieter|Vermieter|landlord|🧑‍💼
wohnen|der|Umzug|Umzüge|move (house)|📦
gesundheit|die|Erkältung|Erkältungen|cold (illness)|🤧
gesundheit|der|Husten|-|cough|😷
gesundheit|der|Schnupfen|-|runny nose|🤧
gesundheit|die|Krankmeldung|Krankmeldungen|sick note|📄
gesundheit|die|Versichertenkarte|Versichertenkarten|health insurance card|💳
gesundheit|das|Wartezimmer|Wartezimmer|waiting room|🪑
gesundheit|das|Pflaster|Pflaster|plaster|🩹
gesundheit|das|Gesicht|Gesichter|face|🙂
gesundheit|das|Knie|Knie|knee|🦵
gesundheit|der|Finger|Finger|finger|☝️
gesundheit|der|Zahnarzt|Zahnärzte|dentist|🦷
reisen|die|Reise|Reisen|journey; trip|🧳
reisen|der|Koffer|Koffer|suitcase|🧳
reisen|das|Gepäck|-|luggage|🧳
reisen|der|Strand|Strände|beach|🏖️
reisen|das|Meer|Meere|sea|🌊
reisen|der|Berg|Berge|mountain|⛰️
reisen|der|See|Seen|lake|🏞️
reisen|die|Insel|Inseln|island|🏝️
reisen|das|Zelt|Zelte|tent|⛺
reisen|die|Sehenswürdigkeit|Sehenswürdigkeiten|tourist sight|🗼
reisen|der|Stadtplan|Stadtpläne|city map|🗺️
reisen|die|Abfahrt|Abfahrten|departure|🛫
reisen|die|Ankunft|Ankünfte|arrival|🛬
reisen|die|Verspätung|Verspätungen|delay|⏰
reisen|das|Doppelzimmer|Doppelzimmer|double room|🛏️
reisen|das|Einzelzimmer|Einzelzimmer|single room|🛏️
feste|das|Fest|Feste|celebration; festival|🎉
feste|die|Hochzeit|Hochzeiten|wedding|💒
feste|die|Einladung|Einladungen|invitation|💌
feste|der|Gast|Gäste|guest|🧑‍🤝‍🧑
feste|die|Kerze|Kerzen|candle|🕯️
feste|die|Blume|Blumen|flower|💐
feste|der|Feiertag|Feiertage|public holiday|📅
feste|der|Glückwunsch|Glückwünsche|congratulations|🎊
feste|die|Torte|Torten|gateau; layer cake|🎂
feste|die|Feier|Feiern|party; celebration|🥳
amt|das|Amt|Ämter|public office|🏛️
amt|das|Konto|Konten|bank account|🏦
amt|die|Überweisung|Überweisungen|bank transfer|💸
amt|der|Brief|Briefe|letter|✉️
amt|das|Paket|Pakete|parcel|📦
amt|die|Briefmarke|Briefmarken|postage stamp|📮
amt|die|Gebühr|Gebühren|fee|💶
amt|die|Anmeldung|Anmeldungen|registration|📝
amt|der|Antrag|Anträge|application form|📝
amt|die|Kreditkarte|Kreditkarten|credit card|💳
amt|der|Geldautomat|Geldautomaten|cash machine|🏧
amt|die|Öffnungszeit|Öffnungszeiten|opening time|🕘
amt|der|Schalter|Schalter|counter (post office, bank)|🪟
einkaufen|der|Pullover|Pullover|jumper; sweater|🧶
einkaufen|die|Mütze|Mützen|woolly hat|🧢
einkaufen|der|Mantel|Mäntel|coat|🧥
einkaufen|der|Stiefel|Stiefel|boot|🥾
einkaufen|die|Brille|Brillen|glasses|👓
einkaufen|der|Schal|Schals|scarf|🧣
einkaufen|das|T-Shirt|T-Shirts|T-shirt|👕
einkaufen|die|Socke|Socken|sock|🧦
einkaufen|der|Handschuh|Handschuhe|glove|🧤
einkaufen|die|Farbe|Farben|colour|🎨
beruf|die|Ausbildung|Ausbildungen|vocational training|🎓
beruf|der|Arbeitsplatz|Arbeitsplätze|workplace|💼
beruf|die|Besprechung|Besprechungen|meeting|🗣️
beruf|der|Feierabend|Feierabende|end of the working day|🏁
beruf|der|Mechaniker|Mechaniker|mechanic|🔧
beruf|die|Friseurin|Friseurinnen|hairdresser (female)|💇
beruf|der|Fahrer|Fahrer|driver|🚚
beruf|das|Gehalt|Gehälter|salary|💶
wetter|das|Gewitter|Gewitter|thunderstorm|⛈️
wetter|der|Nebel|-|fog|🌫️
`;
  lines(NOUNS).forEach(([topic, art, word, plural, en, emoji]) => {
    A1.nouns.push({ topic, art, word, plural: plural === '-' ? null : plural, en, emoji, level: 'A1.2' });
  });

  const VERBS = `
beruf|wollen|to want
beruf|dürfen|may; to be allowed to
beruf|sollen|should; to be supposed to
alltag|telefonieren|to phone
alltag|frühstücken|to have breakfast
alltag|verstehen|to understand
alltag|vergessen|to forget
alltag|waschen|to wash
alltag|werden|to become
einkaufen|gefallen|to please (gefällt mir = I like it)
einkaufen|bestellen|to order
reisen|fliegen|to fly
reisen|wandern|to hike
reisen|buchen|to book
reisen|übernachten|to stay overnight
reisen|packen|to pack
feste|feiern|to celebrate
feste|schenken|to give (as a present)
feste|gratulieren|to congratulate
wohnen|mieten|to rent
amt|bringen|to bring
amt|zahlen|to pay
`;
  lines(VERBS).forEach(([topic, inf, en]) => A1.verbs.push({ topic, inf, en, level: 'A1.2' }));

  Object.assign(A1.IRREGULAR, {
    wollen: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
    dürfen: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
    sollen: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
    vergessen: ['vergesse', 'vergisst', 'vergisst', 'vergessen', 'vergesst', 'vergessen'],
    waschen: ['wasche', 'wäschst', 'wäscht', 'waschen', 'wascht', 'waschen'],
    werden: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'],
    gefallen: ['gefalle', 'gefällst', 'gefällt', 'gefallen', 'gefallt', 'gefallen'],
    wandern: ['wandere', 'wanderst', 'wandert', 'wandern', 'wandert', 'wandern'],
    feiern: ['feiere', 'feierst', 'feiert', 'feiern', 'feiert', 'feiern'],
  });

  const ADJ = `
rot|red|
blau|blue|
grün|green|
gelb|yellow|
schwarz|black|weiß
weiß|white|schwarz
grau|grey|
braun|brown|
sauber|clean|schmutzig
schmutzig|dirty|sauber
bequem|comfortable|unbequem
eng|tight|weit
weit|wide; loose; far|eng
glücklich|happy|traurig
traurig|sad|glücklich
frei|free; vacant|besetzt
besetzt|occupied; taken|frei
laut|loud|leise
leise|quiet|laut
leicht|light; easy|schwer
schwer|heavy; difficult|leicht
nass|wet|trocken
trocken|dry|nass
gemütlich|cosy|
`;
  lines(ADJ).forEach(([word, en, opp]) => A1.adjectives.push({ word, en, opp: opp || null, level: 'A1.2' }));

  // Perfekt: infinitive | auxiliary | participle | English (past) | rest of the sentence
  A1.PERFEKT = `
machen|haben|gemacht|did; made|gestern die Hausaufgaben
spielen|haben|gespielt|played|am Samstag Fußball
kaufen|haben|gekauft|bought|im Supermarkt Brot
kochen|haben|gekocht|cooked|am Sonntag Suppe
lernen|haben|gelernt|learned|gestern Abend Deutsch
arbeiten|haben|gearbeitet|worked|letzte Woche viel
hören|haben|gehört|heard; listened to|im Auto Musik
wohnen|haben|gewohnt|lived|zehn Jahre in Polen
besuchen|haben|besucht|visited|am Wochenende die Oma
bezahlen|haben|bezahlt|paid|die Rechnung schon
telefonieren|haben|telefoniert|phoned|lange mit Mama
frühstücken|haben|gefrühstückt|had breakfast|heute um sieben Uhr
essen|haben|gegessen|ate|mittags eine Pizza
trinken|haben|getrunken|drank|heute schon zwei Kaffee
lesen|haben|gelesen|read|im Urlaub ein Buch
sehen|haben|gesehen|saw|gestern einen Film
schreiben|haben|geschrieben|wrote|eine E-Mail an den Chef
schlafen|haben|geschlafen|slept|heute Nacht schlecht
finden|haben|gefunden|found|den Schlüssel nicht
sprechen|haben|gesprochen|spoke|mit der Ärztin
treffen|haben|getroffen|met|gestern eine Freundin
einkaufen|haben|eingekauft|went shopping|am Freitag
anrufen|haben|angerufen|phoned|heute Morgen den Arzt
aufräumen|haben|aufgeräumt|tidied up|am Samstag die Wohnung
bekommen|haben|bekommen|got; received|ein Geschenk
vergessen|haben|vergessen|forgot|den Termin
verstehen|haben|verstanden|understood|die Frage nicht
fernsehen|haben|ferngesehen|watched TV|gestern Abend
bringen|haben|gebracht|brought|die Kinder zur Schule
nehmen|haben|genommen|took|ein Taxi
waschen|haben|gewaschen|washed|die Wäsche
feiern|haben|gefeiert|celebrated|am Samstag Geburtstag
gehen|sein|gegangen|went|gestern ins Kino
fahren|sein|gefahren|drove; went|im Sommer nach Italien
kommen|sein|gekommen|came|zu spät zur Arbeit
fliegen|sein|geflogen|flew|letztes Jahr nach Spanien
laufen|sein|gelaufen|ran; walked|heute fünf Kilometer
schwimmen|sein|geschwommen|swam|im See
bleiben|sein|geblieben|stayed|am Sonntag zu Hause
aufstehen|sein|aufgestanden|got up|heute um sechs Uhr
ankommen|sein|angekommen|arrived|um acht Uhr in Berlin
umziehen|sein|umgezogen|moved house|im Mai nach Köln
einschlafen|sein|eingeschlafen|fell asleep|vor dem Fernseher
reisen|sein|gereist|travelled|im Urlaub viel
wandern|sein|gewandert|hiked|in den Bergen
sein|sein|gewesen|was; were|im Urlaub in Österreich
`.trim().split('\n').map((l) => { const [inf, aux, part, en, rest] = l.split('|'); return { inf, aux, part, en, rest }; });

  // Komparativ: base | comparative | superlative
  A1.KOMPARATIV = `
gut|besser|am besten
viel|mehr|am meisten
gern|lieber|am liebsten
groß|größer|am größten
klein|kleiner|am kleinsten
alt|älter|am ältesten
jung|jünger|am jüngsten
teuer|teurer|am teuersten
billig|billiger|am billigsten
schnell|schneller|am schnellsten
lang|länger|am längsten
kalt|kälter|am kältesten
warm|wärmer|am wärmsten
schön|schöner|am schönsten
hoch|höher|am höchsten
nah|näher|am nächsten
`.trim().split('\n').map((l) => l.split('|'));

  // ---------- Hören ----------
  A1.A12 = {};
  A1.A12.HOEREN = [
    { id: '2h1-01', part: 1, topic: 'gesundheit', type: 'mc',
      audio: [['A', 'Was fehlt Ihnen denn?'], ['B', 'Ich habe seit drei Tagen Husten und Fieber.'], ['A', 'Sie müssen im Bett bleiben und viel trinken.']],
      q: 'Was soll die Patientin machen?', options: ['Im Bett bleiben', 'Sport machen', 'Zur Arbeit gehen'], answer: 0,
      ex: { en: '"Sie müssen im Bett bleiben" = you must stay in bed.', de: '„Sie müssen im Bett bleiben und viel trinken.“' } },
    { id: '2h1-02', part: 1, topic: 'freizeit', type: 'mc',
      audio: [['A', 'Was hast du am Wochenende gemacht?'], ['B', 'Ich bin mit meiner Familie an den See gefahren. Wir sind viel geschwommen.']],
      q: 'Wo war die Familie am Wochenende?', options: ['Am See', 'In den Bergen', 'Im Kino'], answer: 0,
      ex: { en: '"an den See gefahren" = went to the lake. Perfekt: ich bin … gefahren.', de: '„Ich bin … an den See gefahren.“' } },
    { id: '2h1-03', part: 1, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Wie viel kostet die Wohnung?'], ['B', 'Die Miete ist fünfhundertachtzig Euro, mit Nebenkosten sechshundertneunzig Euro.']],
      q: 'Was kostet die Wohnung mit Nebenkosten?', options: ['690 €', '580 €', '960 €'], answer: 0,
      ex: { en: 'Nebenkosten = extra costs (heating, water). With them: 690 €.', de: 'Mit Nebenkosten: sechshundertneunzig Euro.' } },
    { id: '2h1-04', part: 1, topic: 'einkaufen', type: 'mc',
      audio: [['A', 'Wie gefällt Ihnen der Pullover?'], ['B', 'Die Farbe ist schön, aber er ist zu eng. Haben Sie ihn eine Nummer größer?']],
      q: 'Was ist das Problem?', options: ['Der Pullover ist zu eng.', 'Die Farbe gefällt nicht.', 'Der Pullover ist zu teuer.'], answer: 0,
      ex: { en: '"er ist zu eng" = it is too tight.', de: '„Er ist zu eng.“' } },
    { id: '2h1-05', part: 1, topic: 'reisen', type: 'mc',
      audio: [['A', 'Wann fährt der nächste Zug nach Salzburg?'], ['B', 'Um sechzehn Uhr zwölf. Sie müssen in München umsteigen.']],
      q: 'Wo muss man umsteigen?', options: ['In München', 'In Salzburg', 'In Wien'], answer: 0,
      ex: { en: 'umsteigen = change trains. "in München umsteigen".', de: '„Sie müssen in München umsteigen.“' } },
    { id: '2h1-06', part: 1, topic: 'feste', type: 'mc',
      audio: [['A', 'Mia, kommst du am Samstag zu meiner Geburtstagsfeier?'], ['B', 'Leider nicht, ich muss arbeiten. Aber ich rufe dich an!']],
      q: 'Kommt Mia zur Feier?', options: ['Nein, sie muss arbeiten.', 'Ja, sie kommt später.', 'Nein, sie ist krank.'], answer: 0,
      ex: { en: '"Leider nicht, ich muss arbeiten" = unfortunately not, I have to work.', de: '„Leider nicht, ich muss arbeiten.“' } },
    { id: '2h1-07', part: 1, topic: 'amt', type: 'mc',
      audio: [['A', 'Ich möchte dieses Paket nach Polen schicken. Was kostet das?'], ['B', 'Bis fünf Kilo kostet es sechzehn Euro neunzig.']],
      q: 'Was kostet das Paket?', options: ['16,90 €', '60,90 €', '16,19 €'], answer: 0,
      ex: { en: '"sechzehn Euro neunzig" = 16,90 €.', de: '„sechzehn Euro neunzig“ = 16,90 €.' } },
    { id: '2h1-08', part: 1, topic: 'stadt', type: 'mc',
      audio: [['A', 'Entschuldigung, wie komme ich zum Rathaus?'], ['B', 'Gehen Sie hier geradeaus bis zur Ampel. Dann rechts. Das Rathaus ist neben der Kirche.']],
      q: 'Wo ist das Rathaus?', options: ['Neben der Kirche', 'Hinter der Post', 'An der Ampel'], answer: 0,
      ex: { en: '"neben der Kirche" = next to the church (dative after neben: wo?).', de: '„neben der Kirche“ (Wo? → Dativ).' } },
    { id: '2h1-09', part: 1, topic: 'gesundheit', type: 'mc',
      audio: [['A', 'Warum warst du gestern nicht im Kurs?'], ['B', 'Ich hatte einen Termin beim Zahnarzt.']],
      q: 'Wo war die Person gestern?', options: ['Beim Zahnarzt', 'Im Kurs', 'Bei der Arbeit'], answer: 0,
      ex: { en: '"Ich hatte einen Termin beim Zahnarzt." – hatte = had (past of haben).', de: 'hatte = Präteritum von haben.' } },
    { id: '2h1-10', part: 1, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Wohin stellen wir das Sofa?'], ['B', 'Ins Wohnzimmer, neben das Fenster.']],
      q: 'Wohin kommt das Sofa?', options: ['Neben das Fenster', 'In die Küche', 'Neben die Tür'], answer: 0,
      ex: { en: '"neben das Fenster" = next to the window (accusative: wohin?).', de: '„neben das Fenster“ (Wohin? → Akkusativ).' } },
    { id: '2h1-11', part: 1, topic: 'reisen', type: 'mc',
      audio: [['A', 'Wie war dein Urlaub?'], ['B', 'Super! Wir waren zwei Wochen in Griechenland. Das Wetter war jeden Tag sonnig.']],
      q: 'Wie lange war die Person im Urlaub?', options: ['Zwei Wochen', 'Eine Woche', 'Zwei Tage'], answer: 0,
      ex: { en: '"zwei Wochen" = two weeks. waren = were (past of sein).', de: '„Wir waren zwei Wochen in Griechenland.“' } },
    { id: '2h1-12', part: 1, topic: 'beruf', type: 'mc',
      audio: [['A', 'Wann hast du heute Feierabend?'], ['B', 'Um halb fünf. Dann hole ich die Kinder vom Kindergarten ab.']],
      q: 'Wann hat die Person Feierabend?', options: ['16:30 Uhr', '17:30 Uhr', '15:30 Uhr'], answer: 0,
      ex: { en: '"halb fünf" = 4:30 = 16:30.', de: '„halb fünf“ = 16:30 Uhr.' } },

    { id: '2h2-01', part: 2, topic: 'reisen', type: 'tf',
      audio: [['A', 'Information zum ICE fünfhundertachtundsiebzig nach Hamburg: Der Zug fällt heute leider aus. Bitte nehmen Sie den nächsten Zug um vierzehn Uhr sechsundvierzig.']],
      q: 'Der ICE 578 fährt heute nicht.', answer: true,
      ex: { en: '"fällt aus" = is cancelled.', de: '„Der Zug fällt aus.“' } },
    { id: '2h2-02', part: 2, topic: 'reisen', type: 'tf',
      audio: [['A', 'Letzter Aufruf für den Flug nach Rom. Bitte kommen Sie sofort zu Ausgang C sieben.']],
      q: 'Die Passagiere nach Rom sollen zu Ausgang C 7 gehen.', answer: true,
      ex: { en: '"zu Ausgang C sieben" = to gate C 7.', de: 'Ausgang C 7.' } },
    { id: '2h2-03', part: 2, topic: 'einkaufen', type: 'tf',
      audio: [['A', 'Heute im Angebot: alle Wintermäntel dreißig Prozent billiger. Sie finden die Mäntel im zweiten Stock.']],
      q: 'Die Mäntel sind im Erdgeschoss.', answer: false,
      ex: { en: 'They are on the second floor (im zweiten Stock).', de: 'Im zweiten Stock.' } },
    { id: '2h2-04', part: 2, topic: 'wetter', type: 'tf',
      audio: [['A', 'Das Wetter für morgen: Im Norden gibt es viel Regen und Wind. Im Süden scheint die Sonne bei achtzehn Grad.']],
      q: 'Morgen ist es im Süden sonnig.', answer: true,
      ex: { en: '"Im Süden scheint die Sonne" = the sun shines in the south.', de: '„Im Süden scheint die Sonne.“' } },
    { id: '2h2-05', part: 2, topic: 'amt', type: 'tf',
      audio: [['A', 'Sie sind mit dem Bürgeramt verbunden. Unsere Öffnungszeiten: Montag bis Freitag von acht bis zwölf Uhr, am Donnerstag auch von vierzehn bis achtzehn Uhr.']],
      q: 'Am Donnerstagnachmittag ist das Bürgeramt geöffnet.', answer: true,
      ex: { en: 'Thursday also 14–18 (afternoon).', de: 'Donnerstag auch 14 bis 18 Uhr.' } },
    { id: '2h2-06', part: 2, topic: 'einkaufen', type: 'tf',
      audio: [['A', 'Liebe Kunden, unsere Kasse drei ist jetzt geöffnet. Heute gibt es frische Erdbeeren für nur zwei Euro neunundneunzig.']],
      q: 'Kasse 3 ist geschlossen.', answer: false,
      ex: { en: '"Kasse drei ist jetzt geöffnet" = checkout 3 is now open.', de: 'Kasse 3 ist geöffnet.' } },
    { id: '2h2-07', part: 2, topic: 'stadt', type: 'tf',
      audio: [['A', 'Wegen einer Baustelle hält der Bus sieben heute nicht am Rathaus. Bitte steigen Sie an der Haltestelle Marktplatz aus.']],
      q: 'Der Bus 7 hält heute am Rathaus.', answer: false,
      ex: { en: '"hält heute nicht am Rathaus" = doesn\'t stop at the town hall today.', de: 'Er hält heute nicht am Rathaus.' } },
    { id: '2h2-08', part: 2, topic: 'reisen', type: 'tf',
      audio: [['A', 'Liebe Gäste, das Frühstück gibt es heute von sieben bis zehn Uhr im Restaurant im Erdgeschoss.']],
      q: 'Das Frühstück ist im ersten Stock.', answer: false,
      ex: { en: 'Breakfast is on the ground floor (im Erdgeschoss).', de: 'Im Erdgeschoss.' } },

    { id: '2h3-01', part: 3, topic: 'gesundheit', type: 'mc',
      audio: [['A', 'Guten Tag, Frau Nowak, hier ist die Praxis Doktor Fischer. Ihre Blutwerte sind da. Bitte rufen Sie uns morgen zwischen neun und elf Uhr zurück.']],
      q: 'Was soll Frau Nowak machen?', options: ['Morgen zurückrufen', 'Sofort vorbeikommen', 'Ein Rezept holen'], answer: 0,
      ex: { en: '"Bitte rufen Sie uns morgen … zurück" = please call us back tomorrow.', de: 'Sie soll morgen zurückrufen.' } },
    { id: '2h3-02', part: 3, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Hallo Sven, hier ist Lara. Ich habe meinen Schlüssel bei dir vergessen. Ich glaube, er liegt auf dem Tisch in der Küche. Kann ich ihn heute Abend holen?']],
      q: 'Wo ist der Schlüssel?', options: ['Auf dem Küchentisch', 'Im Auto', 'Bei Lara zu Hause'], answer: 0,
      ex: { en: '"auf dem Tisch in der Küche" = on the kitchen table.', de: 'Auf dem Tisch in der Küche.' } },
    { id: '2h3-03', part: 3, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Guten Tag, Herr Ali, hier ist die Hausverwaltung. Morgen von acht bis zwölf Uhr funktioniert der Aufzug nicht. Wir reparieren ihn. Bitte nehmen Sie die Treppe.']],
      q: 'Was ist morgen Vormittag?', options: ['Der Aufzug funktioniert nicht.', 'Die Heizung ist kaputt.', 'Die Treppe ist gesperrt.'], answer: 0,
      ex: { en: '"funktioniert der Aufzug nicht" = the lift doesn\'t work.', de: 'Der Aufzug funktioniert nicht.' } },
    { id: '2h3-04', part: 3, topic: 'feste', type: 'mc',
      audio: [['A', 'Hallo Tante Maria, hier ist Julia. Wir feiern am zwölften Juli unsere Hochzeit! Die Einladung kommt bald mit der Post. Kannst du kommen?']],
      q: 'Was feiert Julia?', options: ['Ihre Hochzeit', 'Ihren Geburtstag', 'Ihre neue Wohnung'], answer: 0,
      ex: { en: 'Hochzeit = wedding.', de: 'Julia feiert ihre Hochzeit.' } },
    { id: '2h3-05', part: 3, topic: 'reisen', type: 'mc',
      audio: [['A', 'Guten Tag, hier ist das Reisebüro Sonnenschein. Ihre Tickets nach Lissabon sind fertig. Sie können sie ab Mittwoch bei uns abholen.']],
      q: 'Ab wann kann man die Tickets abholen?', options: ['Ab Mittwoch', 'Ab Montag', 'Ab Freitag'], answer: 0,
      ex: { en: '"ab Mittwoch" = from Wednesday.', de: '„ab Mittwoch“.' } },
    { id: '2h3-06', part: 3, topic: 'beruf', type: 'mc',
      audio: [['A', 'Hallo Kemal, hier ist Ina. Ich war gestern beim Arzt. Ich habe eine Erkältung und muss drei Tage zu Hause bleiben. Kannst du bitte dem Chef Bescheid sagen?']],
      q: 'Was soll Kemal machen?', options: ['Dem Chef Bescheid sagen', 'Zum Arzt gehen', 'Ina besuchen'], answer: 0,
      ex: { en: '"Bescheid sagen" = let someone know.', de: 'Er soll dem Chef Bescheid sagen.' } },
    { id: '2h3-07', part: 3, topic: 'amt', type: 'mc',
      audio: [['A', 'Guten Morgen, hier ist die Sparkasse. Ihre neue Bankkarte ist da. Bitte bringen Sie Ihren Ausweis mit, wenn Sie die Karte abholen.']],
      q: 'Was braucht man zum Abholen?', options: ['Den Ausweis', 'Die alte Karte', 'Einen Termin'], answer: 0,
      ex: { en: '"Bitte bringen Sie Ihren Ausweis mit" = please bring your ID.', de: 'Man braucht den Ausweis.' } },
    { id: '2h3-08', part: 3, topic: 'reisen', type: 'mc',
      audio: [['A', 'Hallo Papa, ich bin es, Nora. Der Zug hat eine Stunde Verspätung. Ich komme erst um neunzehn Uhr am Bahnhof an. Holst du mich trotzdem ab?']],
      q: 'Wann kommt Nora an?', options: ['Um 19 Uhr', 'Um 18 Uhr', 'Um 9 Uhr'], answer: 0,
      ex: { en: '"erst um neunzehn Uhr" = not until 19:00.', de: 'Um neunzehn Uhr.' } },
  ];

  // ---------- Lesen ----------
  const TEXTE = [
    { id: '2l1-a', topic: 'wohnen', kind: 'E-Mail',
      text: 'Liebe Sabine,\nich wohne jetzt seit einer Woche in der neuen Wohnung. Am Samstag haben mir meine Brüder beim Umzug geholfen. Die Küche ist schon fertig, aber im Wohnzimmer stehen noch viele Kartons.\nAm 20. Mai mache ich eine kleine Party. Kommst du?\nLiebe Grüße\nEwa',
      statements: [
        ['Ewa ist umgezogen.', true, 'She lives in the new flat; her brothers helped with the move (Umzug).', 'Sie wohnt in der neuen Wohnung.'],
        ['Das Wohnzimmer ist schon fertig.', false, 'There are still many boxes in the living room.', 'Im Wohnzimmer stehen noch Kartons.'],
        ['Ewa lädt Sabine zu einer Party ein.', true, '"Am 20. Mai mache ich eine kleine Party. Kommst du?"', 'Sie fragt: „Kommst du?“'],
      ] },
    { id: '2l1-b', topic: 'gesundheit', kind: 'Nachricht von der Schule',
      text: 'Liebe Frau Klein,\nIhr Sohn Tom war heute in der Schule krank. Er hatte Kopfschmerzen und Fieber. Ich habe ihn um 10 Uhr nach Hause geschickt. Bitte gehen Sie mit ihm zum Arzt. Er soll morgen zu Hause bleiben.\nViele Grüße\nAnna Berg (Klassenlehrerin)',
      statements: [
        ['Tom hatte Fieber.', true, '"Er hatte Kopfschmerzen und Fieber."', '„Er hatte … Fieber.“'],
        ['Tom soll morgen in die Schule kommen.', false, '"Er soll morgen zu Hause bleiben."', 'Er soll zu Hause bleiben.'],
      ] },
    { id: '2l1-c', topic: 'reisen', kind: 'Postkarte',
      text: 'Hallo ihr Lieben,\nwir sind seit Montag in den Bergen. Am ersten Tag hat es geregnet, aber jetzt scheint die Sonne. Gestern sind wir sechs Stunden gewandert. Das Essen im Hotel ist sehr gut. Am Sonntag fahren wir zurück.\nBis bald!\nMax und Tina',
      statements: [
        ['Am ersten Tag war das Wetter schlecht.', true, '"Am ersten Tag hat es geregnet."', 'Es hat geregnet.'],
        ['Max und Tina sind gestern geschwommen.', false, 'They hiked (gewandert), they didn\'t swim.', 'Sie sind gewandert.'],
      ] },
    { id: '2l1-d', topic: 'beruf', kind: 'E-Mail',
      text: 'Hallo Team,\nmorgen um 9 Uhr haben wir eine Besprechung in Raum 3. Bitte bringt eure Kalender mit. Wir planen die Urlaubszeiten für den Sommer. Danach gibt es Kaffee und Kuchen.\nGruß\nBirgit',
      statements: [
        ['Die Besprechung ist am Nachmittag.', false, 'It is at 9 o\'clock in the morning.', 'Um 9 Uhr = am Vormittag.'],
        ['In der Besprechung geht es um den Urlaub im Sommer.', true, '"Wir planen die Urlaubszeiten für den Sommer."', 'Sie planen den Urlaub.'],
      ] },
  ];
  A1.A12.LESEN = [];
  TEXTE.forEach((t) => t.statements.forEach(([q, answer, en, de], i) => {
    A1.A12.LESEN.push({ id: `${t.id}-${i + 1}`, part: 1, topic: t.topic, type: 'tf', kind: t.kind, text: t.text, q, answer, ex: { en, de } });
  }));
  A1.A12.LESEN.push(
    { id: '2l2-01', part: 2, topic: 'reisen', type: 'ad', q: 'Sie suchen ein günstiges Hotel in Berlin für eine Nacht.',
      options: ['Grand Hotel am Park\nEinzelzimmer ab 290 € pro Nacht', 'Pension Mitte\nEinzelzimmer 49 € mit Frühstück'], answer: 1,
      ex: { en: 'günstig = cheap. 49 € is much cheaper.', de: '49 € ist günstig.' } },
    { id: '2l2-02', part: 2, topic: 'gesundheit', type: 'ad', q: 'Sie brauchen am Sonntag Medikamente.',
      options: ['Löwen-Apotheke\nMo–Fr 8–18.30 Uhr, Sa 8–13 Uhr', 'Apotheken-Notdienst heute:\nBahnhof-Apotheke, 0–24 Uhr'], answer: 1,
      ex: { en: 'The emergency pharmacy (Notdienst) is open all day.', de: 'Der Notdienst hat 24 Stunden offen.' } },
    { id: '2l2-03', part: 2, topic: 'wohnen', type: 'ad', q: 'Sie suchen ein Zimmer in einer WG. Es soll nicht mehr als 400 Euro kosten.',
      options: ['WG-Zimmer, 16 m²\n380 € warm, ab 1. März', '1-Zimmer-Wohnung, 30 m²\n520 € warm'], answer: 0,
      ex: { en: 'WG = shared flat. 380 € is under 400 €.', de: '380 € ist weniger als 400 €.' } },
    { id: '2l2-04', part: 2, topic: 'freizeit', type: 'ad', q: 'Ihr Sohn (7 Jahre) möchte schwimmen lernen.',
      options: ['Schwimmkurs für Kinder (6–10 Jahre)\nsamstags 10 Uhr', 'Aqua-Fitness für Senioren\ndienstags 9 Uhr'], answer: 0,
      ex: { en: 'The children\'s course is for ages 6 to 10.', de: 'Der Kinderkurs ist für 6- bis 10-Jährige.' } },
    { id: '2l2-05', part: 2, topic: 'wohnen', type: 'ad', q: 'Sie möchten Ihr altes Sofa verkaufen.',
      options: ['Möbelhaus Krone\nNeue Sofas ab 399 €', 'Kleinanzeigen online\nVerkaufen Sie gebrauchte Möbel kostenlos!'], answer: 1,
      ex: { en: 'verkaufen = sell. Ad b is for selling used (gebraucht) furniture.', de: 'In b kann man gebrauchte Möbel verkaufen.' } },
    { id: '2l2-06', part: 2, topic: 'feste', type: 'ad', q: 'Sie möchten Ihrer Freundin zur Hochzeit Blumen schicken.',
      options: ['Blumen Rosa\nLieferung in ganz Deutschland, auch am Wochenende', 'Gartencenter Grün\nPflanzen und Erde für Ihren Balkon'], answer: 0,
      ex: { en: 'Lieferung = delivery. Blumen Rosa delivers flowers.', de: 'Blumen Rosa liefert Blumen.' } },
    { id: '2l2-07', part: 2, topic: 'reisen', type: 'ad', q: 'Sie fahren mit dem Auto nach Wien und brauchen einen Parkplatz am Hotel.',
      options: ['Hotel Stadtblick\nZimmer mit Frühstück, Garage 15 € pro Tag', 'Hostel Zentral\ngünstige Betten, keine Parkplätze'], answer: 0,
      ex: { en: 'Hotel Stadtblick has a garage. The hostel has no parking.', de: 'Hotel Stadtblick hat eine Garage.' } },
    { id: '2l2-08', part: 2, topic: 'beruf', type: 'ad', q: 'Sie möchten am Abend einen Computerkurs machen.',
      options: ['Volkshochschule\nComputer für Anfänger, Mi 18–20 Uhr', 'Computerschule Bit\nKurse Mo–Fr 9–11 Uhr'], answer: 0,
      ex: { en: '18–20 Uhr is in the evening.', de: '18–20 Uhr ist am Abend.' } },
    { id: '2l3-01', part: 3, topic: 'gesundheit', type: 'tf', kind: 'An der Praxistür',
      text: 'Wir haben Urlaub vom 3. bis 17. August.\nVertretung: Dr. Wolf, Lindenstraße 4',
      q: 'Vom 3. bis 17. August kann man zu Dr. Wolf gehen.', answer: true,
      ex: { en: 'Vertretung = the doctor covering during the holiday.', de: 'Dr. Wolf ist die Vertretung.' } },
    { id: '2l3-02', part: 3, topic: 'wohnen', type: 'tf', kind: 'In der Waschküche',
      text: 'Waschmaschine bitte nur bis 22 Uhr benutzen!',
      q: 'Man darf in der Nacht waschen.', answer: false,
      ex: { en: 'Only until 22:00 (10 pm) – not at night.', de: 'Nur bis 22 Uhr.' } },
    { id: '2l3-03', part: 3, topic: 'reisen', type: 'tf', kind: 'Am Bahnhof',
      text: 'Gleis 2: Heute keine Züge!\nErsatzbusse fahren vor dem Bahnhof ab.',
      q: 'Heute fahren Busse statt Züge.', answer: true,
      ex: { en: 'Ersatzbusse = replacement buses.', de: 'Ersatzbusse fahren statt Züge.' } },
    { id: '2l3-04', part: 3, topic: 'amt', type: 'tf', kind: 'In der Post',
      text: 'Pakete bitte an Schalter 3 abgeben.',
      q: 'Man soll die Pakete an Schalter 3 bringen.', answer: true,
      ex: { en: 'abgeben = hand in.', de: 'abgeben = bringen und dort lassen.' } },
    { id: '2l3-05', part: 3, topic: 'reisen', type: 'tf', kind: 'Im Hotel',
      text: 'Check-out bis 11 Uhr.\nIhr Gepäck können Sie gern an der Rezeption lassen.',
      q: 'Man muss das Gepäck um 11 Uhr mitnehmen.', answer: false,
      ex: { en: 'You can leave your luggage at reception.', de: 'Man kann das Gepäck an der Rezeption lassen.' } },
    { id: '2l3-06', part: 3, topic: 'freizeit', type: 'tf', kind: 'Im Schwimmbad',
      text: 'Kinder unter 8 Jahren nur mit Erwachsenen!',
      q: 'Ein Kind (6 Jahre) darf allein schwimmen gehen.', answer: false,
      ex: { en: 'Children under 8 only with an adult.', de: 'Unter 8 Jahren nur mit Erwachsenen.' } },
    { id: '2l3-07', part: 3, topic: 'essen', type: 'tf', kind: 'Am Restaurant',
      text: 'Montag Ruhetag',
      q: 'Am Montag ist das Restaurant geschlossen.', answer: true,
      ex: { en: 'Ruhetag = day off; the restaurant is closed.', de: 'Ruhetag = geschlossen.' } },
    { id: '2l3-08', part: 3, topic: 'gesundheit', type: 'tf', kind: 'In der Arztpraxis',
      text: 'Bitte bringen Sie bei jedem Besuch Ihre Versichertenkarte mit.',
      q: 'Man braucht die Versichertenkarte nur beim ersten Besuch.', answer: false,
      ex: { en: '"bei jedem Besuch" = at every visit.', de: '„bei jedem Besuch“.' } },
  );

  // ---------- Grammar (first option correct) ----------
  A1.A12.GRAMMAR = [
    ['g_perfekt', 'Ich ___ gestern lange geschlafen.', ['habe', 'bin', 'hat'], 'schlafen → Perfekt with haben: ich habe geschlafen.', 'schlafen: ich habe geschlafen'],
    ['g_perfekt', 'Wir ___ am Sonntag nach Hamburg gefahren.', ['sind', 'haben', 'seid'], 'Verbs of movement (fahren, gehen, fliegen) use sein: wir sind gefahren.', 'Bewegung → sein: wir sind gefahren'],
    ['g_perfekt', 'Was hast du am Wochenende ___?', ['gemacht', 'machen', 'gemachen'], 'Regular verbs: ge- + stem + -t: gemacht.', 'regelmäßig: ge…t → gemacht'],
    ['g_perfekt', 'Er ist heute um 7 Uhr ___.', ['aufgestanden', 'aufgestehen', 'geaufstanden'], 'Separable verbs: the ge- goes in the middle: auf-ge-standen.', 'trennbar: auf-ge-standen'],
    ['g_perfekt', 'Hast du die E-Mail schon ___?', ['geschrieben', 'geschreibt', 'schreiben'], 'schreiben is irregular: geschrieben.', 'schreiben → geschrieben'],
    ['g_perfekt', 'Sie hat den Termin ___.', ['vergessen', 'gevergessen', 'vergesst'], 'Verbs starting with ver-, be-, er- have no ge-: vergessen.', 'ver-/be-/er- → kein ge-'],
    ['g_perfekt', 'Wir haben die Frage nicht ___.', ['verstanden', 'geversteht', 'verstehen'], 'verstehen → verstanden (no ge-).', 'verstehen → verstanden'],
    ['g_perfekt', 'Wann ___ ihr in Berlin angekommen?', ['seid', 'habt', 'sind'], 'ankommen uses sein; ihr → seid.', 'ankommen mit sein: ihr seid'],
    ['g_perfekt', 'Ich habe gestern mit meiner Mutter ___.', ['telefoniert', 'getelefoniert', 'telefonieren'], 'Verbs ending in -ieren have no ge-: telefoniert.', '-ieren → kein ge-: telefoniert'],
    ['g_perfekt', 'Wo ___ du im Urlaub gewesen?', ['bist', 'hast', 'warst'], 'sein → Perfekt with sein: du bist gewesen.', 'sein: du bist gewesen'],
    ['g_praeteritum', 'Gestern ___ ich krank.', ['war', 'bin', 'hatte'], 'Past of sein: ich war.', 'sein: ich war'],
    ['g_praeteritum', '___ du am Wochenende Zeit?', ['Hattest', 'Hast', 'Warst'], 'Past of haben: du hattest.', 'haben: du hattest'],
    ['g_praeteritum', 'Wo ___ ihr im Sommer?', ['wart', 'waren', 'warst'], 'sein: ihr wart.', 'sein: ihr wart'],
    ['g_praeteritum', 'Wir ___ leider keine Zeit.', ['hatten', 'hattet', 'waren'], 'haben: wir hatten.', 'haben: wir hatten'],
    ['g_praeteritum', 'Als Kind ___ ich einen Hund.', ['hatte', 'war', 'habe'], 'haben: ich hatte.', 'haben: ich hatte'],
    ['g_dativ', 'Ich fahre mit ___ Bus zur Arbeit.', ['dem', 'den', 'der'], 'mit + dative. der Bus → mit dem Bus.', 'mit + Dativ: dem Bus'],
    ['g_dativ', 'Ich wohne bei ___ Eltern.', ['meinen', 'meine', 'meiner'], 'bei + dative plural: meinen Eltern.', 'bei + Dativ Plural: meinen'],
    ['g_dativ', 'Das Kind spielt mit ___ Katze.', ['der', 'die', 'dem'], 'die Katze → mit der Katze.', 'die → der (Dativ)'],
    ['g_dativ', 'Ich gehe heute ___ Arzt.', ['zum', 'zur', 'zu'], 'zu + dem = zum (der Arzt).', 'zu dem = zum'],
    ['g_dativ', 'Ich muss noch ___ Post.', ['zur', 'zum', 'zu die'], 'zu + der = zur (die Post).', 'zu der = zur'],
    ['g_dativ', 'Er kommt gerade ___ Arbeit.', ['von der', 'vom', 'von die'], 'von + dative: von der Arbeit.', 'von + Dativ: von der Arbeit'],
    ['g_dativ', 'Wie geht es ___? (du)', ['dir', 'dich', 'du'], 'Es geht + dative: dir.', 'du → dir (Dativ)'],
    ['g_dativ', 'Kannst du ___ bitte helfen? (ich)', ['mir', 'mich', 'ich'], 'helfen + dative: mir.', 'helfen + Dativ: mir'],
    ['g_dativ', 'Die Jacke gefällt ___ sehr. (sie, Singular)', ['ihr', 'sie', 'ihm'], 'gefallen + dative: sie → ihr.', 'gefallen + Dativ: ihr'],
    ['g_dativ', 'Ich gebe ___ das Buch. (er)', ['ihm', 'ihn', 'er'], 'Dative of er: ihm.', 'er → ihm (Dativ)'],
    ['g_dativ', 'Nach ___ Essen trinke ich einen Kaffee.', ['dem', 'das', 'den'], 'nach + dative: nach dem Essen.', 'nach + Dativ'],
    ['g_wechsel', 'Das Buch liegt auf ___ Tisch.', ['dem', 'den', 'der'], 'Wo? → dative: auf dem Tisch.', 'Wo? → Dativ'],
    ['g_wechsel', 'Ich lege das Buch auf ___ Tisch.', ['den', 'dem', 'der'], 'Wohin? → accusative: auf den Tisch.', 'Wohin? → Akkusativ'],
    ['g_wechsel', 'Die Lampe steht neben ___ Sofa.', ['dem', 'das', 'den'], 'Wo? → dative: neben dem Sofa.', 'Wo? → Dativ'],
    ['g_wechsel', 'Ich stelle die Lampe neben ___ Sofa.', ['das', 'dem', 'den'], 'Wohin? → accusative: neben das Sofa.', 'Wohin? → Akkusativ'],
    ['g_wechsel', 'Die Kinder sind in ___ Schule.', ['der', 'die', 'dem'], 'Wo? → dative: in der Schule.', 'Wo? → Dativ'],
    ['g_wechsel', 'Die Kinder gehen in ___ Schule.', ['die', 'der', 'dem'], 'Wohin? → accusative: in die Schule.', 'Wohin? → Akkusativ'],
    ['g_wechsel', 'Das Bild hängt an ___ Wand.', ['der', 'die', 'dem'], 'Wo? → dative: an der Wand.', 'Wo? → Dativ'],
    ['g_wechsel', 'Ich hänge das Bild an ___ Wand.', ['die', 'der', 'dem'], 'Wohin? → accusative: an die Wand.', 'Wohin? → Akkusativ'],
    ['g_wechsel', 'Wohin gehst du? – In ___ Küche.', ['die', 'der', 'den'], 'Wohin? → accusative: in die Küche.', 'Wohin? → Akkusativ'],
    ['g_modal', 'Hier ___ man nicht rauchen.', ['darf', 'dürft', 'darfst'], 'dürfen: man darf. "nicht dürfen" = not allowed.', 'dürfen: man darf'],
    ['g_modal', 'Ich ___ im Sommer nach Spanien fahren.', ['will', 'willst', 'wollt'], 'wollen: ich will.', 'wollen: ich will'],
    ['g_modal', 'Der Arzt sagt, ich ___ viel trinken.', ['soll', 'sollst', 'sollen'], 'sollen: ich soll (someone else says so).', 'sollen: ich soll'],
    ['g_modal', '___ ich das Fenster öffnen?', ['Darf', 'Darfst', 'Dürft'], 'Asking for permission: Darf ich …?', 'Erlaubnis: Darf ich …?'],
    ['g_modal', 'Was ___ du heute Abend machen?', ['willst', 'will', 'wollt'], 'wollen: du willst.', 'wollen: du willst'],
    ['g_imperativ', 'Tom, ___ bitte das Fenster zu!', ['mach', 'macht', 'machst'], 'du-command: the stem without -st: mach!', 'du-Imperativ: mach!'],
    ['g_imperativ', 'Kinder, ___ eure Zimmer auf!', ['räumt', 'räum', 'räumen'], 'ihr-command = ihr form without "ihr": räumt … auf!', 'ihr-Imperativ: räumt!'],
    ['g_imperativ', 'Lisa, ___ mir bitte!', ['hilf', 'hilfst', 'helfen'], 'helfen → hilf! (e → i stays).', 'helfen → hilf!'],
    ['g_imperativ', '___ doch noch ein Stück Kuchen, Paul!', ['Nimm', 'Nimmst', 'Nehm'], 'nehmen → nimm!', 'nehmen → nimm!'],
    ['g_imperativ', 'Kinder, ___ bitte leise!', ['seid', 'sind', 'sei'], 'sein: ihr-command = seid!', 'sein: seid!'],
    ['g_komparativ', 'Der Zug ist schnell, aber das Flugzeug ist ___.', ['schneller', 'schnell', 'am schnellsten'], 'Comparative: adjective + -er.', 'Komparativ: -er'],
    ['g_komparativ', 'Ich trinke gern Tee, aber ich trinke ___ Kaffee.', ['lieber', 'gerner', 'mehr gern'], 'gern → lieber → am liebsten.', 'gern – lieber – am liebsten'],
    ['g_komparativ', 'Meine Schwester ist ___ als ich.', ['älter', 'alter', 'mehr alt'], 'alt → älter (with umlaut).', 'alt → älter'],
    ['g_komparativ', 'Das Wetter ist heute ___ als gestern.', ['besser', 'guter', 'mehr gut'], 'gut → besser → am besten.', 'gut – besser – am besten'],
    ['g_komparativ', 'Welches Kleid gefällt dir ___?', ['am besten', 'besser', 'gut'], 'Superlative: am besten.', 'Superlativ: am besten'],
    ['g_konj', 'Ich möchte kommen, ___ ich habe keine Zeit.', ['aber', 'denn', 'oder'], '"aber" = but (contrast).', 'aber = Gegensatz'],
    ['g_konj', 'Möchtest du Tee ___ Kaffee?', ['oder', 'aber', 'denn'], '"oder" = or.', 'oder = Alternative'],
    ['g_konj', 'Ich lerne Deutsch, ___ ich wohne jetzt in Deutschland.', ['denn', 'oder', 'aber'], '"denn" = because (verb stays in position 2).', 'denn = Grund'],
    ['g_konj', 'Ich bleibe heute zu Hause, ___ ich bin krank.', ['denn', 'aber', 'oder'], '"denn" gives a reason.', 'denn = Grund'],
    ['g_praep', 'Ich wohne ___ drei Jahren in Köln.', ['seit', 'vor', 'in'], '"seit" = since / for (still true now) + dative.', 'seit + Dativ'],
    ['g_praep', '___ zwei Wochen war ich im Urlaub.', ['Vor', 'Seit', 'In'], '"vor" = ago (past).', 'vor = in der Vergangenheit'],
    ['g_praep', 'Der Kurs beginnt ___ einer Woche.', ['in', 'vor', 'seit'], '"in einer Woche" = in one week (future).', 'in = Zukunft'],
    ['g_praep', 'Ich arbeite ___ 8 ___ 16 Uhr.', ['von … bis', 'ab … nach', 'seit … bis'], '"von … bis" = from … to.', 'von … bis'],
  ];

  A1.A12.PHRASES = [
    ['gesundheit', 'At the doctor\'s: your head hurts.', 'Beim Arzt: Ihr Kopf tut weh.', ['Mein Kopf tut weh.', 'Mein Kopf ist weh.', 'Ich habe Kopf weh.']],
    ['feste', 'Your friend is getting married.', 'Ihre Freundin heiratet.', ['Herzlichen Glückwunsch!', 'Gute Besserung!', 'Guten Appetit!']],
    ['feste', 'You cannot accept an invitation.', 'Sie können eine Einladung nicht annehmen.', ['Tut mir leid, ich kann leider nicht.', 'Ja, gern, ich komme!', 'Bitte schön!']],
    ['feste', 'You accept an invitation.', 'Sie nehmen eine Einladung an.', ['Gern, ich komme!', 'Leider nicht.', 'Entschuldigung!']],
    ['einkaufen', 'In a clothes shop you want to try on a coat.', 'Im Geschäft möchten Sie einen Mantel anprobieren.', ['Kann ich den Mantel anprobieren?', 'Kann ich den Mantel anrufen?', 'Kann ich den Mantel aufstehen?']],
    ['stadt', 'You ask the way to the station.', 'Sie fragen nach dem Weg zum Bahnhof.', ['Wie komme ich zum Bahnhof?', 'Wie geht es dem Bahnhof?', 'Wann ist der Bahnhof?']],
    ['reisen', 'At the hotel reception you need a room.', 'An der Hotelrezeption brauchen Sie ein Zimmer.', ['Haben Sie noch ein Zimmer frei?', 'Haben Sie noch ein Zimmer geschlossen?', 'Sind Sie ein Zimmer?']],
    ['feste', 'It is 1 January.', 'Es ist der 1. Januar.', ['Frohes neues Jahr!', 'Frohe Ostern!', 'Gute Nacht!']],
    ['feste', 'It is 24 December.', 'Es ist der 24. Dezember.', ['Frohe Weihnachten!', 'Frohes neues Jahr!', 'Gute Besserung!']],
    ['reisen', 'Your friend is going on holiday.', 'Ihr Freund fährt in den Urlaub.', ['Gute Reise!', 'Guten Appetit!', 'Gute Besserung!']],
    ['einkaufen', 'You ask a friend for their opinion about a dress.', 'Sie fragen eine Freundin nach ihrer Meinung zu einem Kleid.', ['Wie findest du das Kleid?', 'Wo findest du das Kleid?', 'Wann findest du das Kleid?']],
    ['einkaufen', 'You like the shoes.', 'Die Schuhe gefallen Ihnen.', ['Die Schuhe gefallen mir gut.', 'Die Schuhe gefalle ich gut.', 'Ich gefalle die Schuhe.']],
    ['amt', 'At the bank you want an account.', 'In der Bank möchten Sie ein Konto.', ['Ich möchte ein Konto eröffnen.', 'Ich möchte ein Konto essen.', 'Ich möchte ein Konto anziehen.']],
    ['amt', 'You did not understand a name on the phone.', 'Sie haben am Telefon einen Namen nicht verstanden.', ['Können Sie das bitte buchstabieren?', 'Können Sie das bitte bezahlen?', 'Können Sie das bitte kochen?']],
  ];

  A1.A12.SENTENCES = `
Ich habe gestern meine Oma besucht.|I visited my grandma yesterday.|familie
Wir sind am Wochenende nach Berlin gefahren.|We went to Berlin at the weekend.|reisen
Hast du die Hausaufgaben schon gemacht?|Have you done the homework yet?|alltag
Ich war letzte Woche krank.|I was ill last week.|gesundheit
Das Buch liegt auf dem Tisch.|The book is on the table.|wohnen
Ich stelle die Blumen auf den Tisch.|I put the flowers on the table.|wohnen
Wann bist du heute aufgestanden?|When did you get up today?|alltag
Mein Bruder ist älter als ich.|My brother is older than me.|familie
Ich fahre mit dem Fahrrad zur Arbeit.|I cycle to work.|stadt
Im Urlaub haben wir viel gesehen.|On holiday we saw a lot.|reisen
Hier darf man nicht parken.|You are not allowed to park here.|stadt
Ich möchte kommen, aber ich habe keine Zeit.|I would like to come, but I have no time.|feste
Seit zwei Jahren wohne ich in Deutschland.|I have lived in Germany for two years.|person
Die Jacke gefällt mir sehr gut.|I like the jacket very much.|einkaufen
Wir haben zusammen Geburtstag gefeiert.|We celebrated a birthday together.|feste
Ich muss morgen zum Zahnarzt gehen.|I have to go to the dentist tomorrow.|gesundheit
Am Samstag sind wir in die Berge gefahren.|On Saturday we drove to the mountains.|reisen
Ich bleibe zu Hause, denn ich bin krank.|I am staying at home because I am ill.|gesundheit
`.trim().split('\n').map((l) => { const [de, en, topic] = l.split('|'); return { de, en, topic }; });

  // ---------- Schreiben ----------
  A1.A12.FORMS = [
    { id: 's1-b01', topic: 'amt', title: 'Bürgeramt Kassel – Anmeldung der Wohnung',
      text: 'Familie Haddad zieht am 1. Juni von Hamburg nach Kassel. Die neue Adresse ist Goethestraße 17, 34119 Kassel. Herr Samir Haddad ist 41 Jahre alt, seine Frau Lina ist 38. Sie haben eine Tochter.',
      fields: [['Familienname', ['Haddad']], ['Einzugsdatum', ['1. Juni', '01.06.', '1.6.', '1. 6.', 'am 1. Juni']], ['Neue Straße, Hausnummer', ['Goethestraße 17', 'Goethestr. 17', 'Goethestrasse 17']], ['Postleitzahl', ['34119']], ['Frühere Stadt', ['Hamburg']]] },
    { id: 's1-b02', topic: 'reisen', title: 'Reisebüro Sonnenschein – Ihre Reisewünsche',
      text: 'Elif Demir möchte im August eine Woche Urlaub am Meer machen. Sie reist mit ihrem Mann und ihren zwei Kindern. Sie möchten fliegen und in einem Hotel mit Halbpension wohnen.',
      fields: [['Reiseziel (Meer / Berge)', ['Meer', 'am Meer']], ['Monat', ['August', 'im August']], ['Erwachsene (Anzahl)', ['2', 'zwei']], ['Kinder (Anzahl)', ['2', 'zwei']], ['Verkehrsmittel (Zug / Flugzeug / Auto)', ['Flugzeug', 'mit dem Flugzeug']]] },
    { id: 's1-b03', topic: 'amt', title: 'Paketschein',
      text: 'Juan Pérez schickt ein Paket an seine Schwester Carmen Pérez in Madrid. Das Paket wiegt 4 Kilo. Im Paket sind Bücher. Juan wohnt in der Kantstraße 9 in Leipzig.',
      fields: [['Absender (Name)', ['Juan Pérez', 'Juan Perez', 'Pérez', 'Perez']], ['Empfänger (Name)', ['Carmen Pérez', 'Carmen Perez']], ['Stadt des Empfängers', ['Madrid']], ['Gewicht', ['4 Kilo', '4 kg', '4', 'vier Kilo']], ['Inhalt', ['Bücher', 'Buecher']]] },
    { id: 's1-b04', topic: 'freizeit', title: 'Fitnessstudio Aktiv – Kursanmeldung',
      text: 'Svetlana Orlova ist 46 Jahre alt. Sie möchte einen Yoga-Kurs machen. Sie hat nur am Dienstag und am Donnerstag Zeit, immer abends. Sie bezahlt jeden Monat per Überweisung.',
      fields: [['Familienname', ['Orlova']], ['Kurs', ['Yoga', 'Yoga-Kurs', 'Yogakurs']], ['Tage', ['Dienstag und Donnerstag', 'Dienstag, Donnerstag', 'Di und Do', 'Di, Do']], ['Uhrzeit (morgens / abends)', ['abends', 'am Abend', 'Abend']], ['Bezahlung (bar / Überweisung)', ['Überweisung', 'per Überweisung']]] },
  ];

  A1.A12.MESSAGES = [
    { id: 's2-b01', topic: 'beruf',
      situation: { en: 'You are ill and cannot go to work. Write to your boss, Herr Schulte.', de: 'Sie sind krank und können nicht zur Arbeit gehen. Schreiben Sie Ihrem Chef, Herrn Schulte.' },
      points: [
        { de: 'Was haben Sie?', en: 'What is wrong with you', kw: 'krank|erkält|fieber|husten|schmerz|grippe' },
        { de: 'Wie lange bleiben Sie zu Hause?', en: 'How long you stay at home', kw: 'tage|woche|bis|montag|dienstag|mittwoch|donnerstag|freitag|morgen' },
        { de: 'Bitte an eine Kollegin / einen Kollegen', en: 'A request to a colleague', kw: 'kolleg|bitte|termin|absagen|übernehmen|vertret' },
      ],
      model: 'Sehr geehrter Herr Schulte,\nich bin leider krank. Ich habe eine Erkältung und Fieber. Der Arzt sagt, ich soll bis Freitag zu Hause bleiben. Kann Frau Ilić bitte meinen Termin am Mittwoch übernehmen?\nMit freundlichen Grüßen\nAnna Kovač' },
    { id: 's2-b02', topic: 'reisen',
      situation: { en: 'You are back from a holiday. Write to your friend Lena about it.', de: 'Sie sind aus dem Urlaub zurück. Schreiben Sie Ihrer Freundin Lena.' },
      points: [
        { de: 'Wo waren Sie?', en: 'Where you were', kw: 'war|waren|in |nach |am meer|in den bergen' },
        { de: 'Was haben Sie gemacht?', en: 'What you did', kw: 'habe|haben|bin|sind|gemacht|gesehen|gefahren|geschwommen|gegessen|besucht|gewandert' },
        { de: 'Wie war das Wetter?', en: 'What the weather was like', kw: 'wetter|sonne|sonnig|regen|warm|kalt|heiß|grad' },
      ],
      model: 'Liebe Lena,\nich bin wieder zu Hause! Ich war zwei Wochen in Kroatien am Meer. Ich bin jeden Tag geschwommen und habe viel Fisch gegessen. Das Wetter war super, es war sonnig und heiß.\nViele Grüße\nMaria' },
    { id: 's2-b03', topic: 'feste',
      situation: { en: 'Your friend Daniel invited you to his birthday party on Saturday. You cannot come. Write to him.', de: 'Ihr Freund Daniel hat Sie am Samstag zu seiner Geburtstagsparty eingeladen. Sie können nicht kommen. Schreiben Sie ihm.' },
      points: [
        { de: 'Danken Sie für die Einladung.', en: 'Thank him for the invitation', kw: 'danke|vielen dank' },
        { de: 'Sagen Sie ab und nennen Sie den Grund.', en: 'Say no and give the reason', kw: 'leider|kann nicht|keine zeit|arbeiten|krank|termin|muss' },
        { de: 'Machen Sie einen Vorschlag.', en: 'Suggest something else', kw: 'treffen|nächste|anderes mal|besuche|kaffee|wochenende|essen gehen|sonntag' },
      ],
      model: 'Lieber Daniel,\nvielen Dank für die Einladung! Leider kann ich am Samstag nicht kommen, denn ich muss arbeiten. Wollen wir uns am Sonntag treffen? Ich lade dich zum Kaffee ein.\nViele Grüße\nAnna' },
    { id: 's2-b04', topic: 'reisen',
      situation: { en: 'You want to book a room at Hotel Seeblick. Write an email.', de: 'Sie möchten im Hotel Seeblick ein Zimmer buchen. Schreiben Sie eine E-Mail.' },
      points: [
        { de: 'Wann kommen Sie, wie lange bleiben Sie?', en: 'When you arrive and how long you stay', kw: 'vom|bis|nacht|nächte|mai|juni|juli|august|september|wochenende|\\d' },
        { de: 'Welches Zimmer möchten Sie?', en: 'Which room you want', kw: 'einzelzimmer|doppelzimmer|zimmer' },
        { de: 'Stellen Sie eine Frage (Preis, Frühstück, Parkplatz).', en: 'Ask a question (price, breakfast, parking)', kw: 'preis|kostet|frühstück|parkplatz|garage|\\?' },
      ],
      model: 'Sehr geehrte Damen und Herren,\nich möchte vom 12. bis 14. Juli ein Doppelzimmer buchen. Wir sind zwei Personen. Was kostet das Zimmer mit Frühstück? Haben Sie auch einen Parkplatz?\nMit freundlichen Grüßen\nPetra Lang' },
    { id: 's2-b05', topic: 'wohnen',
      situation: { en: 'A parcel arrives tomorrow, but you are not at home. Write to your neighbour, Frau Weiß.', de: 'Morgen kommt ein Paket, aber Sie sind nicht zu Hause. Schreiben Sie Ihrer Nachbarin, Frau Weiß.' },
      points: [
        { de: 'Wann sind Sie nicht zu Hause?', en: 'When you are not at home', kw: 'morgen|nicht zu hause|nicht da|weg|arbeit|uhr' },
        { de: 'Bitten Sie um Hilfe mit dem Paket.', en: 'Ask for help with the parcel', kw: 'paket|annehmen|nehmen' },
        { de: 'Wann holen Sie das Paket ab?', en: 'When you will pick up the parcel', kw: 'abhol|hole|abend|uhr|später|morgen' },
      ],
      model: 'Liebe Frau Weiß,\nmorgen kommt ein Paket für mich, aber ich bin bis 18 Uhr bei der Arbeit. Können Sie das Paket bitte annehmen? Ich hole es morgen Abend bei Ihnen ab. Vielen Dank!\nIhre Olga Petrova' },
  ];

  // ---------- Sprechen ----------
  A1.A12.TOPIC_CARDS = [
    ['reisen', 'Urlaub', 'letzter Urlaub', 'Wo warst du im letzten Urlaub?', 'Ich war in Italien. Ich bin viel geschwommen.', 'urlaub|warst'],
    ['freizeit', 'Wochenende', 'gestern', 'Was hast du gestern gemacht?', 'Ich habe meine Freundin besucht.', 'gestern|gemacht'],
    ['gesundheit', 'Gesundheit', 'Arzt', 'Wie oft gehst du zum Arzt?', 'Nur einmal im Jahr.', 'arzt'],
    ['wohnen', 'Wohnen', 'Möbel', 'Welche Möbel hast du im Wohnzimmer?', 'Ich habe ein Sofa, einen Tisch und ein Regal.', 'möbel|wohnzimmer'],
    ['einkaufen', 'Kleidung', 'Lieblingsfarbe', 'Was ist deine Lieblingsfarbe?', 'Meine Lieblingsfarbe ist Blau.', 'farbe'],
    ['feste', 'Feste', 'Geburtstag', 'Wie feierst du deinen Geburtstag?', 'Ich koche für meine Familie und wir essen Kuchen.', 'geburtstag|feierst'],
    ['feste', 'Feste', 'Weihnachten', 'Was machst du an Weihnachten?', 'Ich besuche meine Eltern.', 'weihnachten'],
    ['reisen', 'Reisen', 'Zug', 'Fährst du gern mit dem Zug?', 'Ja, das ist bequem.', 'zug'],
    ['beruf', 'Arbeit', 'Feierabend', 'Was machst du nach dem Feierabend?', 'Ich gehe spazieren.', 'feierabend'],
    ['wetter', 'Wetter', 'Winter', 'Magst du den Winter?', 'Nein, ich mag den Sommer lieber.', 'winter'],
    ['einkaufen', 'Kleidung', 'Schuhe', 'Wo kaufst du deine Schuhe?', 'Im Schuhgeschäft in der Stadt.', 'schuh'],
  ];
  A1.A12.REQUEST_CARDS = [
    ['reisen', '🧳', 'Koffer', 'Können Sie mir bitte mit dem Koffer helfen?', 'koffer'],
    ['reisen', '🛏️', 'Doppelzimmer', 'Ich möchte bitte ein Doppelzimmer.', 'zimmer'],
    ['amt', '📦', 'Paket', 'Ich möchte bitte das Paket abholen.', 'paket'],
    ['gesundheit', '🩺', 'Termin', 'Ich brauche bitte einen Termin beim Arzt.', 'termin'],
    ['einkaufen', '🧥', 'Mantel', 'Kann ich bitte den Mantel anprobieren?', 'mantel'],
    ['reisen', '🗺️', 'Stadtplan', 'Haben Sie bitte einen Stadtplan für mich?', 'stadtplan|karte'],
    ['feste', '💐', 'Blumen', 'Ich hätte gern einen Strauß Blumen, bitte.', 'blumen'],
    ['amt', '🏧', 'Geldautomat', 'Wo ist bitte ein Geldautomat?', 'geldautomat|automat'],
    ['wohnen', '🔇', 'leise', 'Seid bitte leise!', 'leise'],
  ];
})();
