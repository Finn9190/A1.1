// Sprechen (speaking). Modelled on Goethe "Start Deutsch 1":
// Teil 1 = introduce yourself, Teil 2 = ask and answer about a topic word, Teil 3 = make a polite request.
window.A1 = window.A1 || {};

// Teil 1: points with keywords for the microphone check.
A1.INTRO = {
  id: 'sp1-intro', topic: 'person',
  points: [
    { de: 'Name?', en: 'Name', kw: 'heiße|name ist|ich bin [a-zäöü]+' },
    { de: 'Alter?', en: 'Age', kw: 'jahre alt|\\d+ jahre|jahre' },
    { de: 'Land?', en: 'Country', kw: 'komme aus|aus ' },
    { de: 'Wohnort?', en: 'Place you live', kw: 'wohne' },
    { de: 'Sprachen?', en: 'Languages', kw: 'spreche|sprachen' },
    { de: 'Beruf?', en: 'Job', kw: 'beruf|arbeite|bin [a-zäöü]+in|rentner|hausfrau|hausmann' },
    { de: 'Hobby?', en: 'Hobby', kw: 'hobby|hobbys|gern|gerne' },
  ],
  model: 'Guten Tag! Ich heiße Maria Kowalska. Ich bin 54 Jahre alt. Ich komme aus Polen und wohne jetzt in Dortmund. Ich spreche Polnisch, ein bisschen Englisch und ein bisschen Deutsch. Ich bin Verkäuferin von Beruf. Mein Hobby ist Kochen. Ich gehe auch gern spazieren.',
};

// Extra Teil-1 tasks the examiner often adds
A1.INTRO_EXTRA = [
  { id: 'sp1-spell', topic: 'alphabet', task: { en: 'Spell your surname letter by letter.', de: 'Buchstabieren Sie Ihren Familiennamen.' }, model: 'Mein Name ist Kaya: K – A – Y – A.', kw: [] },
  { id: 'sp1-phone', topic: 'zahlen', task: { en: 'Say your phone number.', de: 'Sagen Sie Ihre Telefonnummer.' }, model: 'Meine Telefonnummer ist 0 1 7 6 – 5 4 8 2 9 3.', kw: [] },
];

// Teil 2: theme + word. She asks a question with the word and answers a partner's question.
// [theme, word, example question, example answer, keywords]
A1.TOPIC_CARDS = [
  ['essen', 'Essen und Trinken', 'Frühstück', 'Was isst du zum Frühstück?', 'Ich esse Brot mit Käse und trinke Kaffee.', 'frühstück'],
  ['essen', 'Essen und Trinken', 'Lieblingsessen', 'Was ist dein Lieblingsessen?', 'Mein Lieblingsessen ist Pizza.', 'lieblingsessen|isst du gern|essen'],
  ['essen', 'Essen und Trinken', 'Getränk', 'Was trinkst du gern?', 'Ich trinke gern Tee.', 'trink'],
  ['essen', 'Essen und Trinken', 'Obst', 'Isst du gern Obst?', 'Ja, ich esse gern Äpfel und Bananen.', 'obst'],
  ['essen', 'Essen und Trinken', 'Restaurant', 'Gehst du oft ins Restaurant?', 'Nein, ich koche lieber zu Hause.', 'restaurant'],
  ['freizeit', 'Wochenende', 'Samstag', 'Was machst du am Samstag?', 'Am Samstag kaufe ich ein und besuche meine Tochter.', 'samstag'],
  ['freizeit', 'Wochenende', 'Sport', 'Machst du am Wochenende Sport?', 'Ja, ich gehe schwimmen.', 'sport'],
  ['freizeit', 'Wochenende', 'Freunde', 'Triffst du am Wochenende Freunde?', 'Ja, am Sonntag trinken wir zusammen Kaffee.', 'freund'],
  ['freizeit', 'Wochenende', 'Kino', 'Gehst du gern ins Kino?', 'Ja, ich sehe gern Filme.', 'kino'],
  ['familie', 'Familie', 'Geschwister', 'Hast du Geschwister?', 'Ja, ich habe zwei Brüder.', 'geschwister|bruder|brüder|schwester'],
  ['familie', 'Familie', 'Kinder', 'Hast du Kinder?', 'Ja, ich habe einen Sohn und eine Tochter.', 'kind'],
  ['familie', 'Familie', 'Eltern', 'Wo wohnen deine Eltern?', 'Meine Eltern wohnen in der Türkei.', 'eltern'],
  ['wohnen', 'Wohnen', 'Wohnung', 'Wie groß ist deine Wohnung?', 'Meine Wohnung hat drei Zimmer.', 'wohnung'],
  ['wohnen', 'Wohnen', 'Küche', 'Ist deine Küche groß?', 'Nein, sie ist klein, aber hell.', 'küche'],
  ['wohnen', 'Wohnen', 'Balkon', 'Hast du einen Balkon?', 'Ja, ich habe einen kleinen Balkon mit Blumen.', 'balkon'],
  ['beruf', 'Arbeit', 'Beruf', 'Was bist du von Beruf?', 'Ich bin Köchin.', 'beruf|arbeit'],
  ['beruf', 'Arbeit', 'Arbeitszeit', 'Wann arbeitest du?', 'Ich arbeite von Montag bis Freitag, von 8 bis 16 Uhr.', 'arbeit'],
  ['freizeit', 'Freizeit', 'Hobby', 'Was ist dein Hobby?', 'Mein Hobby ist Lesen.', 'hobby'],
  ['freizeit', 'Freizeit', 'Musik', 'Welche Musik hörst du gern?', 'Ich höre gern Popmusik.', 'musik|hörst'],
  ['freizeit', 'Freizeit', 'Urlaub', 'Wohin fährst du im Urlaub?', 'Im Urlaub fahre ich nach Spanien.', 'urlaub'],
  ['einkaufen', 'Einkaufen', 'Supermarkt', 'Wann gehst du in den Supermarkt?', 'Ich gehe am Montag und am Freitag.', 'supermarkt|einkauf'],
  ['einkaufen', 'Einkaufen', 'Kleidung', 'Wo kaufst du Kleidung?', 'Ich kaufe Kleidung im Kaufhaus.', 'kleidung|kauf'],
  ['stadt', 'Stadt', 'Bus', 'Fährst du oft mit dem Bus?', 'Ja, ich fahre jeden Tag mit dem Bus zur Arbeit.', 'bus'],
  ['wetter', 'Wetter', 'Sommer', 'Was machst du im Sommer?', 'Im Sommer gehe ich gern in den Park.', 'sommer'],
];

// Teil 3: picture card → polite request. [emoji, word, example, keywords]
A1.REQUEST_CARDS = [
  ['wohnen', '🪟', 'Fenster', 'Können Sie bitte das Fenster öffnen?', 'fenster'],
  ['essen', '☕', 'Kaffee', 'Einen Kaffee, bitte!', 'kaffee'],
  ['alltag', '✏️', 'Stift', 'Kannst du mir bitte einen Stift geben?', 'stift|kuli|kugelschreiber'],
  ['alltag', '📱', 'Handy', 'Machen Sie bitte das Handy aus.', 'handy'],
  ['zeit', '🕐', 'Uhr', 'Wie spät ist es, bitte?', 'spät|uhr'],
  ['essen', '💧', 'Wasser', 'Kann ich bitte ein Glas Wasser haben?', 'wasser'],
  ['wohnen', '🚪', 'Tür', 'Mach bitte die Tür zu!', 'tür'],
  ['wohnen', '💡', 'Licht', 'Können Sie bitte das Licht anmachen?', 'licht'],
  ['essen', '🧂', 'Salz', 'Gib mir bitte das Salz.', 'salz'],
  ['stadt', '🎫', 'Fahrkarte', 'Eine Fahrkarte nach Köln, bitte.', 'fahrkarte|ticket'],
  ['freizeit', '📖', 'Buch', 'Kannst du mir bitte das Buch geben?', 'buch'],
  ['essen', '🧾', 'Rechnung', 'Die Rechnung, bitte!', 'rechnung|bezahlen'],
  ['begruessung', '🐢', 'langsam', 'Bitte sprechen Sie langsamer.', 'langsam'],
  ['stadt', '🗺️', 'Bahnhof', 'Entschuldigung, wo ist bitte der Bahnhof?', 'bahnhof'],
  ['termine', '📅', 'Termin', 'Ich möchte bitte einen Termin.', 'termin'],
  ['einkaufen', '👜', 'Tasche', 'Haben Sie eine Tasche für mich, bitte?', 'tasche|tüte'],
  ['wohnen', '🔑', 'Schlüssel', 'Kannst du mir bitte den Schlüssel geben?', 'schlüssel'],
  ['gesundheit', '💊', 'Tabletten', 'Ich brauche bitte Tabletten gegen Kopfschmerzen.', 'tablette'],
];
