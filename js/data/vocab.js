// Vocabulary for A1.1, based on the topics of the Goethe A1 word list.
// Nouns: topic | article | singular | plural ("-" = no plural used at A1) | English | emoji
window.A1 = window.A1 || {};

A1.NOUNS = `
person|der|Name|Namen|name|🪪
person|der|Vorname|Vornamen|first name|🪪
person|der|Familienname|Familiennamen|surname|🪪
person|die|Adresse|Adressen|address|🏠
person|die|Straße|Straßen|street|🛣️
person|die|Hausnummer|Hausnummern|house number|🔢
person|die|Postleitzahl|Postleitzahlen|postcode|📮
person|die|Telefonnummer|Telefonnummern|phone number|☎️
person|das|Land|Länder|country|🌍
person|die|Sprache|Sprachen|language|💬
person|das|Alter|-|age|🎂
person|der|Geburtstag|Geburtstage|birthday|🎂
person|die|E-Mail|E-Mails|email|📧
person|der|Mann|Männer|man; husband|👨
person|die|Frau|Frauen|woman; wife|👩
person|das|Kind|Kinder|child|🧒
person|die|Unterschrift|Unterschriften|signature|✍️
person|der|Wohnort|Wohnorte|place of residence|📍
person|der|Pass|Pässe|passport|🛂
person|das|Formular|Formulare|form|📝
familie|die|Familie|Familien|family|👨‍👩‍👧
familie|die|Mutter|Mütter|mother|👩
familie|der|Vater|Väter|father|👨
familie|der|Sohn|Söhne|son|👦
familie|die|Tochter|Töchter|daughter|👧
familie|der|Bruder|Brüder|brother|👦
familie|die|Schwester|Schwestern|sister|👧
familie|die|Oma|Omas|grandma|👵
familie|der|Opa|Opas|grandpa|👴
familie|die|Großmutter|Großmütter|grandmother|👵
familie|der|Großvater|Großväter|grandfather|👴
familie|das|Baby|Babys|baby|👶
familie|der|Enkel|Enkel|grandson|👦
familie|die|Enkelin|Enkelinnen|granddaughter|👧
familie|der|Onkel|Onkel|uncle|👨
familie|die|Tante|Tanten|aunt|👩
essen|das|Brot|Brote|bread|🍞
essen|das|Brötchen|Brötchen|bread roll|🥖
essen|die|Butter|-|butter|🧈
essen|der|Käse|-|cheese|🧀
essen|die|Wurst|Würste|sausage|🌭
essen|das|Ei|Eier|egg|🥚
essen|die|Milch|-|milk|🥛
essen|der|Kaffee|Kaffees|coffee|☕
essen|der|Tee|Tees|tea|🍵
essen|das|Wasser|-|water|💧
essen|der|Saft|Säfte|juice|🧃
essen|das|Bier|Biere|beer|🍺
essen|der|Wein|Weine|wine|🍷
essen|der|Apfel|Äpfel|apple|🍎
essen|die|Banane|Bananen|banana|🍌
essen|die|Tomate|Tomaten|tomato|🍅
essen|die|Kartoffel|Kartoffeln|potato|🥔
essen|der|Reis|-|rice|🍚
essen|das|Fleisch|-|meat|🥩
essen|der|Fisch|Fische|fish|🐟
essen|das|Hähnchen|Hähnchen|chicken|🍗
essen|der|Kuchen|Kuchen|cake|🍰
essen|die|Suppe|Suppen|soup|🍲
essen|der|Salat|Salate|salad|🥗
essen|das|Obst|-|fruit|🍇
essen|das|Gemüse|-|vegetables|🥦
essen|der|Zucker|-|sugar|🍬
essen|das|Frühstück|Frühstücke|breakfast|🍳
essen|das|Mittagessen|Mittagessen|lunch|🍽️
essen|das|Abendessen|Abendessen|dinner|🍽️
essen|die|Nudel|Nudeln|noodle; pasta|🍝
essen|die|Rechnung|Rechnungen|bill (in a restaurant)|🧾
einkaufen|der|Supermarkt|Supermärkte|supermarket|🛒
einkaufen|die|Bäckerei|Bäckereien|bakery|🥨
einkaufen|der|Markt|Märkte|market|🧺
einkaufen|das|Geld|-|money|💶
einkaufen|der|Preis|Preise|price|🏷️
einkaufen|die|Kasse|Kassen|checkout; till|🧾
einkaufen|die|Tasche|Taschen|bag|👜
einkaufen|die|Flasche|Flaschen|bottle|🍾
einkaufen|die|Packung|Packungen|packet|📦
einkaufen|das|Kilo|Kilo|kilo|⚖️
einkaufen|der|Liter|Liter|litre|🥛
einkaufen|das|Stück|Stücke|piece|🍰
einkaufen|die|Kleidung|-|clothes|👕
einkaufen|die|Hose|Hosen|trousers|👖
einkaufen|das|Hemd|Hemden|shirt|👔
einkaufen|die|Jacke|Jacken|jacket|🧥
einkaufen|der|Schuh|Schuhe|shoe|👞
einkaufen|das|Kleid|Kleider|dress|👗
einkaufen|der|Rock|Röcke|skirt|👗
einkaufen|die|Größe|Größen|size|📏
einkaufen|das|Angebot|Angebote|special offer|🏷️
wohnen|die|Wohnung|Wohnungen|flat; apartment|🏢
wohnen|das|Haus|Häuser|house|🏠
wohnen|das|Zimmer|Zimmer|room|🚪
wohnen|die|Küche|Küchen|kitchen|🍳
wohnen|das|Bad|Bäder|bathroom|🛁
wohnen|das|Schlafzimmer|Schlafzimmer|bedroom|🛏️
wohnen|das|Wohnzimmer|Wohnzimmer|living room|🛋️
wohnen|der|Balkon|Balkone|balcony|🪴
wohnen|der|Garten|Gärten|garden|🌳
wohnen|der|Tisch|Tische|table|🪑
wohnen|der|Stuhl|Stühle|chair|🪑
wohnen|das|Bett|Betten|bed|🛏️
wohnen|der|Schrank|Schränke|cupboard; wardrobe|🗄️
wohnen|das|Sofa|Sofas|sofa|🛋️
wohnen|die|Lampe|Lampen|lamp|💡
wohnen|das|Fenster|Fenster|window|🪟
wohnen|die|Tür|Türen|door|🚪
wohnen|der|Kühlschrank|Kühlschränke|fridge|🧊
wohnen|die|Miete|Mieten|rent|💶
wohnen|die|Waschmaschine|Waschmaschinen|washing machine|🧺
wohnen|der|Schlüssel|Schlüssel|key|🔑
wohnen|die|Heizung|Heizungen|heating|🔥
freizeit|das|Hobby|Hobbys|hobby|🎨
freizeit|der|Sport|-|sport|⚽
freizeit|der|Fußball|Fußbälle|football|⚽
freizeit|das|Buch|Bücher|book|📖
freizeit|die|Zeitung|Zeitungen|newspaper|📰
freizeit|der|Film|Filme|film|🎬
freizeit|das|Kino|Kinos|cinema|🎬
freizeit|die|Musik|-|music|🎵
freizeit|das|Konzert|Konzerte|concert|🎻
freizeit|das|Fahrrad|Fahrräder|bicycle|🚲
freizeit|der|Park|Parks|park|🌳
freizeit|das|Schwimmbad|Schwimmbäder|swimming pool|🏊
freizeit|der|Freund|Freunde|friend (male)|🧑
freizeit|die|Freundin|Freundinnen|friend (female)|👩
freizeit|das|Spiel|Spiele|game|🎲
freizeit|die|Party|Partys|party|🎉
freizeit|das|Foto|Fotos|photo|📷
freizeit|das|Wochenende|Wochenenden|weekend|📅
freizeit|der|Urlaub|Urlaube|holiday; vacation|🏖️
freizeit|das|Geschenk|Geschenke|present; gift|🎁
beruf|der|Beruf|Berufe|job; profession|💼
beruf|die|Arbeit|-|work|💼
beruf|der|Lehrer|Lehrer|teacher (male)|👨‍🏫
beruf|die|Lehrerin|Lehrerinnen|teacher (female)|👩‍🏫
beruf|der|Arzt|Ärzte|doctor (male)|👨‍⚕️
beruf|die|Ärztin|Ärztinnen|doctor (female)|👩‍⚕️
beruf|der|Verkäufer|Verkäufer|shop assistant (male)|🧑‍💼
beruf|die|Verkäuferin|Verkäuferinnen|shop assistant (female)|👩‍💼
beruf|der|Koch|Köche|cook (male)|👨‍🍳
beruf|die|Köchin|Köchinnen|cook (female)|👩‍🍳
beruf|der|Kellner|Kellner|waiter|🤵
beruf|der|Student|Studenten|student (male)|🧑‍🎓
beruf|die|Studentin|Studentinnen|student (female)|👩‍🎓
beruf|die|Firma|Firmen|company|🏢
beruf|das|Büro|Büros|office|🏢
beruf|der|Chef|Chefs|boss (male)|🧑‍💼
beruf|die|Chefin|Chefinnen|boss (female)|👩‍💼
beruf|der|Kollege|Kollegen|colleague (male)|🧑
beruf|die|Kollegin|Kolleginnen|colleague (female)|👩
beruf|der|Computer|Computer|computer|💻
beruf|die|Hausfrau|Hausfrauen|housewife|🏠
stadt|die|Stadt|Städte|town; city|🏙️
stadt|das|Dorf|Dörfer|village|🏘️
stadt|der|Bahnhof|Bahnhöfe|train station|🚉
stadt|die|Haltestelle|Haltestellen|bus or tram stop|🚏
stadt|der|Bus|Busse|bus|🚌
stadt|der|Zug|Züge|train|🚆
stadt|die|U-Bahn|U-Bahnen|underground; subway|🚇
stadt|das|Auto|Autos|car|🚗
stadt|das|Taxi|Taxis|taxi|🚕
stadt|das|Flugzeug|Flugzeuge|aeroplane|✈️
stadt|der|Flughafen|Flughäfen|airport|🛫
stadt|die|Fahrkarte|Fahrkarten|ticket|🎫
stadt|die|Bank|Banken|bank|🏦
stadt|die|Post|-|post office|🏤
stadt|die|Apotheke|Apotheken|pharmacy|💊
stadt|das|Krankenhaus|Krankenhäuser|hospital|🏥
stadt|das|Hotel|Hotels|hotel|🏨
stadt|das|Restaurant|Restaurants|restaurant|🍽️
stadt|das|Café|Cafés|café|☕
stadt|die|Schule|Schulen|school|🏫
stadt|die|Kirche|Kirchen|church|⛪
stadt|das|Museum|Museen|museum|🏛️
stadt|die|Ampel|Ampeln|traffic light|🚦
stadt|der|Platz|Plätze|square; seat|📍
stadt|das|Gleis|Gleise|platform; track|🚉
stadt|der|Weg|Wege|way; path|🧭
zeit|der|Tag|Tage|day|📅
zeit|die|Woche|Wochen|week|📅
zeit|der|Monat|Monate|month|🗓️
zeit|das|Jahr|Jahre|year|🗓️
zeit|die|Stunde|Stunden|hour|⏳
zeit|die|Minute|Minuten|minute|⏱️
zeit|die|Uhr|Uhren|clock; o'clock|🕐
zeit|der|Morgen|-|morning|🌅
zeit|der|Vormittag|Vormittage|late morning|🌤️
zeit|der|Mittag|Mittage|noon|🕛
zeit|der|Nachmittag|Nachmittage|afternoon|🌇
zeit|der|Abend|Abende|evening|🌆
zeit|die|Nacht|Nächte|night|🌙
zeit|das|Datum|Daten|date|📆
zeit|der|Kalender|Kalender|calendar|📆
termine|der|Termin|Termine|appointment|📌
termine|die|Praxis|Praxen|doctor's surgery|🏥
termine|die|Sprechstunde|Sprechstunden|surgery hours|🕘
termine|der|Kurs|Kurse|course; class|📚
termine|die|Prüfung|Prüfungen|exam|📝
termine|der|Ausweis|Ausweise|ID card|🪪
wetter|das|Wetter|-|weather|🌦️
wetter|die|Sonne|-|sun|☀️
wetter|der|Regen|-|rain|🌧️
wetter|der|Schnee|-|snow|❄️
wetter|der|Wind|Winde|wind|💨
wetter|die|Wolke|Wolken|cloud|☁️
wetter|der|Frühling|-|spring|🌷
wetter|der|Sommer|-|summer|🌞
wetter|der|Herbst|-|autumn|🍂
wetter|der|Winter|-|winter|⛄
wetter|die|Temperatur|Temperaturen|temperature|🌡️
gesundheit|der|Körper|Körper|body|🧍
gesundheit|der|Kopf|Köpfe|head|🙂
gesundheit|das|Auge|Augen|eye|👁️
gesundheit|das|Ohr|Ohren|ear|👂
gesundheit|die|Nase|Nasen|nose|👃
gesundheit|der|Mund|Münder|mouth|👄
gesundheit|der|Zahn|Zähne|tooth|🦷
gesundheit|der|Hals|Hälse|throat; neck|🧣
gesundheit|der|Arm|Arme|arm|💪
gesundheit|die|Hand|Hände|hand|✋
gesundheit|der|Bauch|Bäuche|stomach; belly|🫃
gesundheit|der|Rücken|Rücken|back|🧍
gesundheit|das|Bein|Beine|leg|🦵
gesundheit|der|Fuß|Füße|foot|🦶
gesundheit|das|Fieber|-|fever|🤒
gesundheit|die|Tablette|Tabletten|tablet; pill|💊
gesundheit|das|Medikament|Medikamente|medicine|💊
gesundheit|das|Rezept|Rezepte|prescription; recipe|📄
gesundheit|der|Schmerz|Schmerzen|pain|🤕
`;

// Verbs: topic | infinitive | English
// Conjugation: regular verbs are built by rule; irregular ones are listed in A1.IRREGULAR.
A1.VERBS = `
person|heißen|to be called
person|kommen|to come
person|wohnen|to live
person|sprechen|to speak
person|sein|to be
person|haben|to have
familie|lieben|to love
familie|besuchen|to visit
alltag|machen|to do; to make
alltag|lernen|to learn
alltag|schlafen|to sleep
alltag|gehen|to go
alltag|fahren|to drive; to go (by vehicle)
alltag|arbeiten|to work
alltag|warten|to wait
alltag|brauchen|to need
alltag|helfen|to help
alltag|fragen|to ask
alltag|antworten|to answer
alltag|sagen|to say
alltag|schreiben|to write
alltag|lesen|to read
alltag|sehen|to see
alltag|hören|to hear; to listen
alltag|öffnen|to open
alltag|finden|to find
alltag|suchen|to look for
alltag|wissen|to know (a fact)
essen|essen|to eat
essen|trinken|to drink
essen|kochen|to cook
essen|nehmen|to take
essen|möchten|would like
einkaufen|kaufen|to buy
einkaufen|bezahlen|to pay
einkaufen|kosten|to cost
einkaufen|tragen|to carry; to wear
freizeit|spielen|to play
freizeit|schwimmen|to swim
freizeit|tanzen|to dance
freizeit|reisen|to travel
freizeit|treffen|to meet
freizeit|laufen|to run; to walk
freizeit|mögen|to like
beruf|studieren|to study (at university)
beruf|zeigen|to show
beruf|geben|to give
beruf|können|can; to be able to
beruf|müssen|must; to have to
`;

// Full present-tense tables: ich, du, er/sie/es, wir, ihr, sie/Sie
A1.IRREGULAR = {
  sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
  haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
  möchten: ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'],
  können: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
  müssen: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
  mögen: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
  wissen: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
  sprechen: ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'],
  essen: ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'],
  lesen: ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'],
  sehen: ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'],
  nehmen: ['nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen'],
  geben: ['gebe', 'gibst', 'gibt', 'geben', 'gebt', 'geben'],
  helfen: ['helfe', 'hilfst', 'hilft', 'helfen', 'helft', 'helfen'],
  treffen: ['treffe', 'triffst', 'trifft', 'treffen', 'trefft', 'treffen'],
  fahren: ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'],
  schlafen: ['schlafe', 'schläfst', 'schläft', 'schlafen', 'schlaft', 'schlafen'],
  tragen: ['trage', 'trägst', 'trägt', 'tragen', 'tragt', 'tragen'],
  laufen: ['laufe', 'läufst', 'läuft', 'laufen', 'lauft', 'laufen'],
  heißen: ['heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen'],
  tanzen: ['tanze', 'tanzt', 'tanzt', 'tanzen', 'tanzt', 'tanzen'],
  reisen: ['reise', 'reist', 'reist', 'reisen', 'reist', 'reisen'],
};

// Adjectives with their opposite: German | English | opposite
A1.ADJECTIVES = `
groß|big; tall|klein
klein|small|groß
alt|old|jung
jung|young|alt
neu|new|alt
gut|good|schlecht
schlecht|bad|gut
teuer|expensive|billig
billig|cheap|teuer
warm|warm|kalt
kalt|cold|warm
heiß|hot|kalt
schnell|fast|langsam
langsam|slow|schnell
früh|early|spät
spät|late|früh
krank|ill; sick|gesund
gesund|healthy|krank
lang|long|kurz
kurz|short|lang
hell|bright; light|dunkel
dunkel|dark|hell
voll|full|leer
leer|empty|voll
links|left|rechts
rechts|right|links
richtig|right; correct|falsch
falsch|wrong|richtig
offen|open|geschlossen
geschlossen|closed|offen
müde|tired|wach
lecker|tasty|
schön|beautiful; nice|hässlich
`;

// Separable verbs: infinitive | prefix | ich-form of the base | English
A1.SEPARABLE = [
  ['aufstehen', 'auf', 'stehe', 'steht', 'to get up'],
  ['einkaufen', 'ein', 'kaufe', 'kauft', 'to go shopping'],
  ['anrufen', 'an', 'rufe', 'ruft', 'to phone'],
  ['fernsehen', 'fern', 'sehe', 'sieht', 'to watch TV'],
  ['aufräumen', 'auf', 'räume', 'räumt', 'to tidy up'],
  ['mitkommen', 'mit', 'komme', 'kommt', 'to come along'],
  ['ankommen', 'an', 'komme', 'kommt', 'to arrive'],
  ['abholen', 'ab', 'hole', 'holt', 'to pick up'],
  ['anfangen', 'an', 'fange', 'fängt', 'to begin'],
  ['zumachen', 'zu', 'mache', 'macht', 'to close'],
  ['aufmachen', 'auf', 'mache', 'macht', 'to open'],
];

A1.DAYS = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
A1.DAYS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
A1.MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
A1.MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Names used for spelling practice
A1.SPELL_NAMES = ['Müller', 'Schmidt', 'Becker', 'Wagner', 'Yilmaz', 'Novak', 'Kowalski', 'Nguyen', 'Silva', 'Ivanova', 'Weber', 'Fischer', 'Hoffmann', 'Kaya', 'Jansen', 'Petrov', 'Garcia', 'Vogel', 'Krause', 'Haddad', 'Zimmer', 'Quast', 'Wolff', 'Lange', 'Braun'];

// Parse the line-based lists above into objects
(function () {
  const lines = (s) => s.trim().split('\n').map((l) => l.split('|'));
  A1.nouns = lines(A1.NOUNS).map(([topic, art, word, plural, en, emoji]) => ({
    topic, art, word, plural: plural === '-' ? null : plural, en, emoji,
  }));
  A1.verbs = lines(A1.VERBS).map(([topic, inf, en]) => ({ topic, inf, en }));
  A1.adjectives = lines(A1.ADJECTIVES).map(([word, en, opp]) => ({ word, en, opp: opp || null }));
})();
