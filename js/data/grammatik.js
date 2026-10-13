// Grammar, set phrases and word order. In each list the FIRST option is the correct one;
// the app shuffles the options before showing them.
window.A1 = window.A1 || {};

// [topic, question, options (first = correct), explanation EN, explanation DE]
A1.GRAMMAR = [
  ['g_fragen', '___ heißen Sie?', ['Wie', 'Wo', 'Was'], 'Ask for a name with "Wie": Wie heißen Sie?', 'Nach dem Namen fragt man mit „Wie“.'],
  ['g_fragen', '___ kommen Sie? – Aus Polen.', ['Woher', 'Wo', 'Wohin'], '"Woher" = where from. The answer "aus …" shows the origin.', '„Woher?“ – „Aus …“.'],
  ['g_fragen', '___ wohnen Sie? – In Köln.', ['Wo', 'Woher', 'Wann'], '"Wo" = where (a place). Answer: in …', '„Wo?“ – „In …“.'],
  ['g_fragen', '___ alt sind Sie?', ['Wie', 'Was', 'Wer'], 'Age: "Wie alt sind Sie?"', '„Wie alt …?“'],
  ['g_fragen', '___ ist das? – Das ist mein Bruder.', ['Wer', 'Was', 'Wo'], '"Wer" = who (a person). "Was" = what (a thing).', '„Wer“ fragt nach Personen.'],
  ['g_fragen', '___ kostet das Brot? – Zwei Euro.', ['Wie viel', 'Wie', 'Wann'], 'Prices: "Wie viel kostet …?" or "Was kostet …?"', 'Preis: „Wie viel kostet …?“'],
  ['g_fragen', '___ beginnt der Kurs? – Um 9 Uhr.', ['Wann', 'Wo', 'Wie'], '"Wann" = when.', '„Wann?“ – „Um 9 Uhr.“'],
  ['g_fragen', '___ Sprachen sprechen Sie?', ['Welche', 'Was', 'Wie'], '"Welche" = which, before a plural noun.', '„Welche Sprachen …?“'],
  ['g_fragen', '___ machst du am Wochenende?', ['Was', 'Wer', 'Wo'], '"Was" = what.', '„Was machst du?“'],
  ['g_fragen', 'Entschuldigung, ___ ist der Bahnhof?', ['wo', 'woher', 'wann'], '"Wo ist …?" asks for a place.', '„Wo ist …?“'],
  ['g_fragen', '___ fährst du im Urlaub? – Nach Italien.', ['Wohin', 'Wo', 'Woher'], '"Wohin" = where to. Answer: nach …', '„Wohin?“ – „Nach …“.'],
  ['g_verben', 'Ich ___ aus der Türkei.', ['komme', 'kommst', 'kommt'], 'ich → -e: ich komme.', 'ich komme'],
  ['g_verben', 'Wir ___ in Berlin.', ['wohnen', 'wohnt', 'wohne'], 'wir → -en: wir wohnen.', 'wir wohnen'],
  ['g_verben', 'Du ___ sehr gut Deutsch.', ['sprichst', 'sprecht', 'sprechst'], 'sprechen changes e → i with du and er/sie/es: du sprichst.', 'sprechen: du sprichst'],
  ['g_verben', 'Er ___ gern Bücher.', ['liest', 'lest', 'lesen'], 'lesen changes e → ie: er liest.', 'lesen: er liest'],
  ['g_verben', 'Was ___ du am Samstag?', ['machst', 'macht', 'machen'], 'du → -st: du machst.', 'du machst'],
  ['g_verben', 'Die Kinder ___ im Garten.', ['spielen', 'spielt', 'spielst'], 'die Kinder = sie (plural) → -en.', 'sie (Plural) spielen'],
  ['g_verben', '___ Sie aus Spanien?', ['Kommen', 'Kommt', 'Kommst'], 'Formal "Sie" uses the -en form: Kommen Sie …?', 'Sie kommen'],
  ['g_verben', 'Mein Mann ___ als Koch.', ['arbeitet', 'arbeit', 'arbeitest'], 'Verbs ending in -t add an extra e: er arbeitet.', 'er arbeitet'],
  ['g_verben', 'Sie (= she) ___ jeden Tag mit dem Bus.', ['fährt', 'fahrt', 'fahren'], 'fahren changes a → ä: sie fährt.', 'sie fährt'],
  ['g_verben', 'Was ___ du zum Frühstück?', ['isst', 'esst', 'essen'], 'essen: du isst.', 'du isst'],
  ['g_seinhaben', 'Ich ___ 45 Jahre alt.', ['bin', 'habe', 'ist'], 'German uses "sein" for age: Ich bin 45 Jahre alt.', 'Alter mit „sein“: Ich bin 45.'],
  ['g_seinhaben', 'Meine Tochter ___ Lehrerin.', ['ist', 'sind', 'bist'], 'meine Tochter = sie → ist.', 'sie ist'],
  ['g_seinhaben', '___ du Kinder?', ['Hast', 'Bist', 'Habt'], 'haben: du hast.', 'du hast'],
  ['g_seinhaben', '___ ihr heute Abend Zeit?', ['Habt', 'Hast', 'Haben'], 'haben: ihr habt.', 'ihr habt'],
  ['g_seinhaben', 'Wir ___ verheiratet.', ['sind', 'seid', 'haben'], 'sein: wir sind.', 'wir sind'],
  ['g_seinhaben', 'Er ___ Hunger.', ['hat', 'ist', 'habt'], 'Hunger haben = to be hungry. er hat.', 'Hunger haben: er hat Hunger.'],
  ['g_negation', 'Ich habe ___ Auto.', ['kein', 'keine', 'nicht'], 'das Auto → kein Auto. Use "kein" instead of "ein".', 'ein Auto → kein Auto'],
  ['g_negation', 'Ich habe heute ___ Zeit.', ['keine', 'kein', 'nicht'], 'die Zeit → keine Zeit.', 'die Zeit → keine Zeit'],
  ['g_negation', 'Das ist ___ teuer.', ['nicht', 'kein', 'keine'], 'Use "nicht" with adjectives: nicht teuer.', 'Adjektiv → „nicht“'],
  ['g_negation', 'Ich trinke ___ Kaffee.', ['keinen', 'kein', 'nicht'], 'der Kaffee (accusative) → keinen Kaffee.', 'der Kaffee → keinen Kaffee'],
  ['g_negation', 'Arbeitest du heute? – Nein, ich arbeite heute ___.', ['nicht', 'kein', 'keine'], 'Use "nicht" with verbs.', 'Verb → „nicht“'],
  ['g_negation', 'Hast du Kinder? – Nein, ich habe ___ Kinder.', ['keine', 'kein', 'nicht'], 'Plural → keine.', 'Plural → keine'],
  ['g_akkusativ', 'Ich kaufe ___ Tisch.', ['einen', 'ein', 'eine'], 'der Tisch → accusative: einen Tisch.', 'der → einen (Akkusativ)'],
  ['g_akkusativ', 'Ich brauche ___ Lampe.', ['eine', 'einen', 'ein'], 'die Lampe → eine Lampe (no change).', 'die → eine'],
  ['g_akkusativ', 'Hast du ___ Kugelschreiber?', ['einen', 'ein', 'eine'], 'der Kugelschreiber → einen.', 'der → einen'],
  ['g_akkusativ', 'Ich nehme ___ Salat.', ['den', 'der', 'dem'], 'der → den in the accusative.', 'der → den (Akkusativ)'],
  ['g_akkusativ', 'Ich möchte ___ Kilo Tomaten.', ['ein', 'eine', 'einen'], 'das Kilo → ein Kilo.', 'das → ein'],
  ['g_akkusativ', 'Wir suchen ___ Wohnung.', ['eine', 'einen', 'ein'], 'die Wohnung → eine Wohnung.', 'die → eine'],
  ['g_possessiv', 'Das ist ___ Mutter.', ['meine', 'mein', 'meinen'], 'die Mutter → meine.', 'die → meine'],
  ['g_possessiv', 'Das ist ___ Vater.', ['mein', 'meine', 'meinen'], 'der Vater → mein.', 'der → mein'],
  ['g_possessiv', 'Wie ist ___ Name? (formal)', ['Ihr', 'Ihre', 'Sie'], 'der Name → Ihr Name (formal "your").', 'der Name → Ihr Name'],
  ['g_possessiv', 'Anna, wo ist ___ Tasche?', ['deine', 'dein', 'du'], 'die Tasche → deine (informal "your").', 'die Tasche → deine'],
  ['g_possessiv', 'Wie ist ___ Telefonnummer, Frau Kaya?', ['Ihre', 'Ihr', 'deine'], 'die Telefonnummer + formal → Ihre.', 'die → Ihre (formell)'],
  ['g_modal', 'Ich ___ gut kochen.', ['kann', 'kannst', 'können'], 'können: ich kann (no -e!).', 'ich kann'],
  ['g_modal', 'Du ___ heute arbeiten.', ['musst', 'muss', 'müssen'], 'müssen: du musst.', 'du musst'],
  ['g_modal', '___ Sie mir bitte helfen?', ['Können', 'Kann', 'Könnt'], 'Polite request: Können Sie …?', 'Höfliche Bitte: Können Sie …?'],
  ['g_modal', 'Ich ___ einen Kaffee, bitte.', ['möchte', 'möchtest', 'möchten'], 'ich möchte = I would like.', 'ich möchte'],
  ['g_modal', 'Ich muss heute lange ___.', ['arbeiten', 'arbeite', 'arbeitet'], 'With a modal verb the second verb goes to the END as infinitive.', 'Modalverb + Infinitiv am Ende'],
  ['g_trennbar', 'Ich stehe um 7 Uhr ___.', ['auf', 'an', 'ein'], 'aufstehen → ich stehe … auf.', 'aufstehen: Ich stehe … auf.'],
  ['g_trennbar', 'Wann ___ der Zug in Berlin ___?', ['kommt … an', 'ankommt … –', 'kommt … ab'], 'ankommen → Der Zug kommt … an.', 'ankommen: kommt … an'],
  ['g_trennbar', 'Ich rufe dich morgen ___.', ['an', 'auf', 'mit'], 'anrufen → ich rufe … an.', 'anrufen: Ich rufe … an.'],
  ['g_trennbar', 'Wir ___ am Samstag im Supermarkt ___.', ['kaufen … ein', 'einkaufen … –', 'kaufen … an'], 'einkaufen → wir kaufen … ein.', 'einkaufen: wir kaufen … ein'],
  ['g_trennbar', 'Am Abend ___ ich ___.', ['sehe … fern', 'fernsehe … –', 'sehe … an'], 'fernsehen → ich sehe fern.', 'fernsehen: Ich sehe fern.'],
  ['g_praep', 'Der Kurs ist ___ Montag.', ['am', 'um', 'im'], 'Days: am Montag.', 'Tage: am'],
  ['g_praep', 'Der Film beginnt ___ 20 Uhr.', ['um', 'am', 'im'], 'Clock times: um 20 Uhr.', 'Uhrzeit: um'],
  ['g_praep', 'Mein Geburtstag ist ___ Mai.', ['im', 'am', 'um'], 'Months: im Mai.', 'Monate: im'],
  ['g_praep', '___ Sommer fahren wir nach Italien.', ['Im', 'Am', 'Um'], 'Seasons: im Sommer.', 'Jahreszeiten: im'],
  ['g_praep', '___ Wochenende besuche ich meine Eltern.', ['Am', 'Im', 'Um'], 'am Wochenende.', 'am Wochenende'],
  ['g_praep', '___ Abend sehe ich fern.', ['Am', 'Im', 'Um'], 'Parts of the day: am Morgen, am Abend (but: in der Nacht).', 'am Abend'],
  ['g_praep', 'Ich wohne ___ Deutschland.', ['in', 'nach', 'aus'], 'Where you are: in.', 'Wo? → in'],
  ['g_praep', 'Ich fahre morgen ___ Berlin.', ['nach', 'in', 'aus'], 'To a city or country: nach.', 'Wohin (Stadt, Land)? → nach'],
  ['g_praep', 'Ich komme ___ Polen.', ['aus', 'von', 'nach'], 'Origin: aus.', 'Woher? → aus'],
  ['g_praep', 'Ich fahre ___ dem Bus zur Arbeit.', ['mit', 'von', 'in'], 'Transport: mit dem Bus, mit dem Auto.', 'Verkehrsmittel: mit'],
  ['g_pronomen', 'Der Tisch ist neu. ___ kostet 80 Euro.', ['Er', 'Sie', 'Es'], 'der Tisch → er.', 'der → er'],
  ['g_pronomen', 'Die Lampe ist schön. ___ ist aus Italien.', ['Sie', 'Er', 'Es'], 'die Lampe → sie.', 'die → sie'],
  ['g_pronomen', 'Das Buch ist gut. ___ ist sehr spannend.', ['Es', 'Er', 'Sie'], 'das Buch → es.', 'das → es'],
  ['g_satzbau', 'Welcher Satz ist richtig?', ['Heute gehe ich ins Kino.', 'Heute ich gehe ins Kino.', 'Heute ins Kino ich gehe.'], 'The verb is always in position 2: Heute (1) gehe (2) ich …', 'Das Verb steht auf Position 2.'],
  ['g_satzbau', 'Welche Frage ist richtig?', ['Wohnst du in Köln?', 'Wohnen du in Köln?', 'Wohnst in Köln du?'], 'Yes/no questions start with the verb: Wohnst du …?', 'Ja/Nein-Frage: Verb auf Position 1.'],
  ['g_satzbau', 'Welcher Satz ist richtig?', ['Am Montag habe ich einen Termin.', 'Am Montag ich habe einen Termin.', 'Ich am Montag habe einen Termin.'], 'Verb in position 2: Am Montag (1) habe (2) ich …', 'Verb auf Position 2.'],
  ['g_satzbau', 'Welcher Satz ist richtig?', ['Ich kann heute nicht kommen.', 'Ich kann heute kommen nicht.', 'Ich heute kann nicht kommen.'], 'Modal verb in position 2, infinitive at the end.', 'Modalverb Position 2, Infinitiv am Ende.'],
  ['g_plural', 'Ich habe zwei ___.', ['Kinder', 'Kinds', 'Kinden'], 'das Kind → die Kinder.', 'das Kind → die Kinder'],
  ['g_plural', 'Ich kaufe drei ___.', ['Äpfel', 'Apfels', 'Äpfeln'], 'der Apfel → die Äpfel.', 'der Apfel → die Äpfel'],
  ['g_plural', 'Die Wohnung hat vier ___.', ['Zimmer', 'Zimmers', 'Zimmern'], 'das Zimmer → die Zimmer (no change).', 'das Zimmer → die Zimmer'],
  ['g_imperativ', '___ Sie bitte langsam!', ['Sprechen', 'Sprecht', 'Sprichst'], 'Formal request: verb (-en) + Sie: Sprechen Sie …!', 'Imperativ mit Sie: Sprechen Sie!'],
  ['g_imperativ', '___ Sie bitte hier!', ['Unterschreiben', 'Unterschreibt', 'Unterschreibst'], 'Formal request: Unterschreiben Sie bitte hier!', 'Unterschreiben Sie!'],
  ['g_imperativ', 'Paul, ___ bitte die Tür zu!', ['mach', 'machst', 'machen'], 'Informal request to one person: the verb stem: Mach …!', 'du-Imperativ: Mach …!'],
];

// Set phrases for situations: [topic, situation EN, situation DE, options (first = correct)]
A1.PHRASES = [
  ['begruessung', 'It is 8 o\'clock in the morning. You meet your neighbour.', 'Es ist 8 Uhr morgens. Sie treffen Ihre Nachbarin.', ['Guten Morgen!', 'Gute Nacht!', 'Guten Abend!']],
  ['begruessung', 'You leave a party with friends.', 'Sie gehen von einer Party mit Freunden nach Hause.', ['Tschüss!', 'Guten Tag!', 'Herzlich willkommen!']],
  ['begruessung', 'You say goodbye to the doctor (formal).', 'Sie verabschieden sich vom Arzt.', ['Auf Wiedersehen!', 'Hallo!', 'Guten Appetit!']],
  ['begruessung', 'Your colleague is ill.', 'Ihre Kollegin ist krank.', ['Gute Besserung!', 'Viel Spaß!', 'Guten Appetit!']],
  ['begruessung', 'It is your friend\'s birthday.', 'Ihr Freund hat Geburtstag.', ['Alles Gute zum Geburtstag!', 'Gute Besserung!', 'Gute Reise!']],
  ['begruessung', 'You start eating together.', 'Sie beginnen zusammen mit dem Essen.', ['Guten Appetit!', 'Gute Nacht!', 'Entschuldigung!']],
  ['begruessung', 'You did not understand.', 'Sie haben nicht verstanden.', ['Wie bitte?', 'Wie geht\'s?', 'Bitte schön!']],
  ['begruessung', 'You bump into someone by accident.', 'Sie stoßen aus Versehen eine Person an.', ['Entschuldigung!', 'Danke schön!', 'Herzlich willkommen!']],
  ['begruessung', 'Someone says "Danke!" to you.', 'Jemand sagt „Danke!“ zu Ihnen.', ['Bitte!', 'Entschuldigung!', 'Wie bitte?']],
  ['begruessung', 'You ask an older neighbour how she is (formal).', 'Sie fragen eine ältere Nachbarin, wie es ihr geht.', ['Wie geht es Ihnen?', 'Wie heißt du?', 'Wie alt sind Sie?']],
  ['begruessung', 'A friend asks: "Wie geht\'s?"', 'Ein Freund fragt: „Wie geht\'s?“', ['Danke, gut. Und dir?', 'Ich heiße Maria.', 'Ich komme aus Polen.']],
  ['begruessung', 'You go to bed.', 'Sie gehen ins Bett.', ['Gute Nacht!', 'Guten Morgen!', 'Guten Tag!']],
  ['begruessung', 'Friday afternoon, you leave work.', 'Freitagnachmittag, Sie gehen nach Hause.', ['Schönes Wochenende!', 'Gute Besserung!', 'Guten Appetit!']],
  ['begruessung', 'The teacher speaks too fast.', 'Die Lehrerin spricht zu schnell.', ['Bitte sprechen Sie langsamer.', 'Bitte sprechen Sie lauter.', 'Bitte schreiben Sie schneller.']],
  ['einkaufen', 'In a shop you want to know the price.', 'Im Geschäft möchten Sie den Preis wissen.', ['Was kostet das?', 'Wie spät ist es?', 'Wo wohnen Sie?']],
  ['essen', 'You order a coffee in a café.', 'Sie bestellen im Café einen Kaffee.', ['Ich hätte gern einen Kaffee.', 'Ich bin ein Kaffee.', 'Ich gebe einen Kaffee.']],
  ['essen', 'You want to pay in a restaurant.', 'Sie möchten im Restaurant bezahlen.', ['Die Rechnung, bitte.', 'Das Rezept, bitte.', 'Die Karte, danke.']],
  ['stadt', 'You are looking for the train station.', 'Sie suchen den Bahnhof.', ['Entschuldigung, wo ist der Bahnhof?', 'Entschuldigung, wann ist der Bahnhof?', 'Entschuldigung, wer ist der Bahnhof?']],
  ['zeit', 'You want to know the time.', 'Sie möchten die Uhrzeit wissen.', ['Wie spät ist es?', 'Wie alt ist es?', 'Wie geht es?']],
  ['termine', 'You call a doctor\'s surgery.', 'Sie rufen in der Arztpraxis an.', ['Ich möchte bitte einen Termin.', 'Ich möchte bitte eine Rechnung.', 'Ich möchte bitte ein Zimmer.']],
  ['person', 'Someone asks: "Woher kommen Sie?"', 'Jemand fragt: „Woher kommen Sie?“', ['Ich komme aus Rumänien.', 'Ich wohne in Rumänien.', 'Ich fahre nach Rumänien.']],
  ['person', 'Someone asks: "Was sind Sie von Beruf?"', 'Jemand fragt: „Was sind Sie von Beruf?“', ['Ich bin Verkäuferin.', 'Ich bin 50 Jahre alt.', 'Ich bin verheiratet.']],
];

// Sentences for "put the words in order": German | English
A1.SENTENCES = `
Ich wohne seit zwei Jahren in Hamburg.|I have lived in Hamburg for two years.|person
Am Montag gehe ich zum Arzt.|On Monday I go to the doctor.|termine
Woher kommst du?|Where are you from?|person
Meine Schwester arbeitet in einem Hotel.|My sister works in a hotel.|beruf
Ich stehe jeden Tag um sechs Uhr auf.|I get up at six every day.|alltag
Wir kaufen am Samstag im Supermarkt ein.|We go shopping at the supermarket on Saturday.|einkaufen
Kannst du mir bitte helfen?|Can you help me, please?|alltag
Ich muss heute lange arbeiten.|I have to work long today.|beruf
Heute Abend sehe ich fern.|This evening I watch TV.|freizeit
Was möchten Sie trinken?|What would you like to drink?|essen
Um wie viel Uhr beginnt der Kurs?|At what time does the course start?|termine
Mein Sohn spielt gern Fußball.|My son likes playing football.|familie
Im Sommer fahren wir nach Spanien.|In summer we go to Spain.|freizeit
Haben Sie morgen einen Termin frei?|Do you have an appointment free tomorrow?|termine
Der Bus fährt um acht Uhr ab.|The bus leaves at eight.|stadt
Ich möchte einen Tee mit Zucker.|I would like a tea with sugar.|essen
Wo ist hier die Apotheke?|Where is the pharmacy here?|stadt
Morgen rufe ich meine Mutter an.|Tomorrow I will call my mother.|familie
Wir essen am Abend zusammen.|We eat together in the evening.|essen
Ich habe leider keine Zeit.|Unfortunately I have no time.|termine
Sprechen Sie bitte langsam.|Please speak slowly.|begruessung
Am Wochenende räume ich die Wohnung auf.|At the weekend I tidy the flat.|wohnen
Können Sie das bitte wiederholen?|Can you repeat that, please?|begruessung
Meine Wohnung hat drei Zimmer.|My flat has three rooms.|wohnen
Ich lerne jeden Tag Deutsch.|I learn German every day.|alltag
Wann hast du Geburtstag?|When is your birthday?|zeit
Das Brot kostet zwei Euro.|The bread costs two euros.|einkaufen
Ich gehe heute nicht zur Arbeit.|I am not going to work today.|beruf
Nach dem Kurs trinken wir einen Kaffee.|After the course we drink a coffee.|freizeit
Mein Mann kocht sehr gern.|My husband likes cooking very much.|familie
Es regnet heute den ganzen Tag.|It is raining all day today.|wetter
Ich habe seit gestern Kopfschmerzen.|I have had a headache since yesterday.|gesundheit
Wie viel kostet die Jacke?|How much does the jacket cost?|einkaufen
Wir fahren mit dem Zug nach Berlin.|We are going to Berlin by train.|stadt
`.trim().split('\n').map((l) => { const [de, en, topic] = l.split('|'); return { de, en, topic }; });
