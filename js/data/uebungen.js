// Course-book style exercises for every level:
// GAPS  = typed gap-fill ("Ergänzen Sie in der richtigen Form"): [topic, sentence with ___, hint, accepted answers, explanation EN, explanation DE]
// PAIRS = "Was passt?" – choose the right reply: [topic, line, right reply, wrong reply, explanation EN, explanation DE]
// Extra MESSAGES = emails and messages to write.
window.A1 = window.A1 || {};

(function () {
  const T = (en, de) => ({ en, de });

  // ================= A1.1 =================
  A1.GAPS = [
    // ein / einen / eine – kein / keinen / keine
    ['stadt', 'Ich suche ___ Bäckerei. Gibt es hier eine?', 'ein / eine / einen', ['eine'], 'die Bäckerei → eine Bäckerei.', 'die → eine'],
    ['stadt', 'Gibt es hier in der Nähe ___ Supermarkt?', 'ein / eine / einen', ['einen'], 'es gibt + accusative: der Supermarkt → einen Supermarkt.', 'es gibt + Akkusativ: einen'],
    ['stadt', 'Gibt es hier ___ Café?', 'ein / eine / einen', ['ein'], 'das Café → ein Café.', 'das → ein'],
    ['stadt', 'Nein, hier gibt es ___ Kindergarten.', 'kein / keine / keinen', ['keinen'], 'der Kindergarten → keinen Kindergarten (accusative).', 'der → keinen'],
    ['stadt', 'Nein, in Waldberg gibt es ___ Krankenhaus.', 'kein / keine / keinen', ['kein'], 'das Krankenhaus → kein Krankenhaus.', 'das → kein'],
    ['stadt', 'Ich brauche ___ Apotheke. Wo ist hier eine?', 'ein / eine / einen', ['eine'], 'die Apotheke → eine Apotheke.', 'die → eine'],
    ['stadt', 'Wo ist hier ___ Blumenladen?', 'ein / eine / einen', ['ein'], 'After "ist" use the nominative: der Blumenladen → ein Blumenladen.', 'Nominativ nach „sein“: ein'],
    ['stadt', 'Ich suche ___ Park. Ist hier einer?', 'ein / eine / einen', ['einen'], 'suchen + accusative: der Park → einen Park.', 'suchen + Akkusativ: einen'],
    // zum / zur
    ['stadt', 'Lea schwimmt gern. Am Samstag fährt sie ___ Schwimmbad.', 'zum / zur', ['zum'], 'das Schwimmbad → zum (zu + dem).', 'das → zum'],
    ['stadt', 'Wir brauchen Brötchen. Ich gehe schnell ___ Bäckerei.', 'zum / zur', ['zur'], 'die Bäckerei → zur (zu + der).', 'die → zur'],
    ['stadt', 'Herr Demir hat Zahnschmerzen. Er geht heute ___ Zahnarztpraxis.', 'zum / zur', ['zur'], 'die Praxis → zur.', 'die → zur'],
    ['stadt', 'Ich muss ein Paket schicken. Ich gehe ___ Post.', 'zum / zur', ['zur'], 'die Post → zur.', 'die → zur'],
    ['stadt', 'Familie Silva kommt in Wien an. Zuerst fährt sie mit dem Taxi ___ Hotel.', 'zum / zur', ['zum'], 'das Hotel → zum.', 'das → zum'],
    ['stadt', 'Mein Fahrrad ist kaputt. Ich gehe zu Fuß ___ Arbeit.', 'zum / zur', ['zur'], 'die Arbeit → zur.', 'die → zur'],
    ['stadt', 'Wie komme ich ___ Bahnhof?', 'zum / zur', ['zum'], 'der Bahnhof → zum.', 'der → zum'],
    // mit dem / mit der
    ['stadt', 'Ich fahre ___ Bus zur Arbeit.', 'mit dem / mit der', ['mit dem'], 'der Bus → mit dem Bus.', 'mit + Dativ: dem Bus'],
    ['stadt', 'Fährst du ___ U-Bahn?', 'mit dem / mit der', ['mit der'], 'die U-Bahn → mit der U-Bahn.', 'die → mit der'],
    ['stadt', 'Sie fahren fünf Stationen ___ Straßenbahn.', 'mit dem / mit der', ['mit der'], 'die Straßenbahn → mit der Straßenbahn.', 'die → mit der'],
    ['stadt', 'Mein Sohn fährt ___ Fahrrad zur Schule.', 'mit dem / mit der', ['mit dem'], 'das Fahrrad → mit dem Fahrrad.', 'das → mit dem'],
    // Imperativ mit Sie
    ['stadt', 'Sie suchen die Post? ___ hier geradeaus! (gehen)', 'Imperativ mit Sie', ['Gehen Sie'], 'Sie-imperative: verb + Sie: Gehen Sie …!', 'Gehen Sie …!'],
    ['stadt', '___ die zweite Straße links! (nehmen, Sie)', 'Imperativ mit Sie', ['Nehmen Sie'], 'Nehmen Sie …!', 'Nehmen Sie …!'],
    ['gesundheit', 'Sie sind krank? ___ bitte zum Arzt! (gehen, Sie)', 'Imperativ mit Sie', ['Gehen Sie'], 'Gehen Sie bitte zum Arzt!', 'Gehen Sie …!'],
    // Verben
    ['person', 'Woher ___ du? (kommen)', 'Verb in der richtigen Form', ['kommst'], 'du → -st: kommst.', 'du kommst'],
    ['person', 'Wir ___ in Hamburg. (wohnen)', 'Verb in der richtigen Form', ['wohnen'], 'wir → -en.', 'wir wohnen'],
    ['person', 'Er ___ Spanisch und Deutsch. (sprechen)', 'Verb in der richtigen Form', ['spricht'], 'sprechen: er spricht (e → i).', 'er spricht'],
    ['person', '___ du Kinder? (haben)', 'Verb in der richtigen Form', ['Hast'], 'haben: du hast.', 'du hast'],
    ['person', 'Ich ___ 52 Jahre alt. (sein)', 'Verb in der richtigen Form', ['bin'], 'Age with sein: ich bin.', 'ich bin'],
    ['essen', 'Was ___ du? – Einen Tee, bitte. (möchten)', 'Verb in der richtigen Form', ['möchtest'], 'möchten: du möchtest.', 'du möchtest'],
    ['einkaufen', 'Was ___ die Tomaten? (kosten)', 'Verb in der richtigen Form', ['kosten'], 'die Tomaten = plural → kosten.', 'Plural: kosten'],
    ['alltag', 'Ich ___ um sieben Uhr ___. (aufstehen)', 'trennbares Verb (zwei Wörter)', ['stehe auf', 'stehe … auf', 'stehe...auf'], 'Separable verb: ich stehe … auf. Write both parts: "stehe auf".', 'Ich stehe … auf.'],
  ];
  A1.PAIRS = [
    ['stadt', 'Wie komme ich von hier zum Rathaus?', 'Sie nehmen den Bus 12 und fahren zwei Stationen.', 'Ja, es gibt ein Rathaus.', 'A "wie"-question needs a description of the way.', 'Auf „Wie komme ich …?“ beschreibt man den Weg.'],
    ['stadt', 'Entschuldigung, gibt es hier in der Nähe eine Apotheke?', 'Tut mir leid, ich bin nicht von hier.', 'Nein, das ist zu weit.', 'If you don\'t know: "Tut mir leid, ich bin nicht von hier."', '„Ich bin nicht von hier“ = Ich kenne die Stadt nicht.'],
    ['stadt', 'Kann ich zu Fuß gehen?', 'Ja, das ist nicht weit.', 'Sie gehen die erste Straße rechts.', 'A yes/no question needs ja or nein.', 'Ja/Nein-Frage → Ja oder Nein.'],
    ['stadt', 'Ist der Bahnhof weit?', 'Nein, nur fünf Minuten zu Fuß.', 'Ja, mit dem Bahnhof.', '"weit" = far. Answer with the distance.', 'Antwort mit der Entfernung.'],
    ['stadt', 'Können Sie mir den Weg zum Markt beschreiben?', 'Gern. Gehen Sie geradeaus und dann links.', 'Ja, ich bin nicht von hier.', 'beschreiben = describe → give directions.', 'Den Weg beschreiben.'],
    ['essen', 'Was möchten Sie trinken?', 'Ein Wasser, bitte.', 'Ja, sehr gut.', 'Answer with a drink.', 'Antwort: ein Getränk.'],
    ['essen', 'Schmeckt es Ihnen?', 'Ja, sehr gut, danke.', 'Ein Wasser, bitte.', 'schmecken = taste good.', '„Schmeckt es?“ – „Ja, sehr gut.“'],
    ['einkaufen', 'Was kostet das Brot?', 'Zwei Euro zwanzig.', 'Um zwei Uhr.', 'kosten → a price.', 'kosten → Preis'],
    ['einkaufen', 'Haben Sie die Jacke auch in Größe 40?', 'Ja, hier, bitte.', 'Nein, ich habe keine Zeit.', 'Answer about the size.', 'Antwort zur Größe.'],
    ['zeit', 'Wie spät ist es?', 'Es ist halb drei.', 'Es ist Montag.', '"Wie spät" asks for the time.', 'Uhrzeit'],
    ['termine', 'Haben Sie am Dienstag Zeit?', 'Ja, am Nachmittag geht es.', 'Am Dienstag ist Dienstag.', 'Answer yes/no + time.', 'Ja/Nein + Zeit'],
    ['person', 'Wie ist Ihre Telefonnummer?', '0176 334512.', 'In der Bahnhofstraße 5.', 'Telefonnummer → a number.', 'Telefonnummer → Zahlen'],
    ['person', 'Woher kommen Sie?', 'Aus der Ukraine.', 'Nach Berlin.', 'Woher? → aus …', 'Woher? → aus'],
    ['familie', 'Hast du Geschwister?', 'Ja, einen Bruder.', 'Ja, ich bin 40.', 'Geschwister = brothers and sisters.', 'Geschwister = Bruder/Schwester'],
    ['gesundheit', 'Was fehlt Ihnen?', 'Ich habe Kopfschmerzen.', 'Mir fehlt nichts, danke, gut.', '"Was fehlt Ihnen?" = What\'s wrong with you? (at the doctor\'s)', 'Beim Arzt: „Was fehlt Ihnen?“'],
    ['freizeit', 'Kommst du mit ins Kino?', 'Gern! Wann?', 'Das Kino ist groß.', 'Accept an invitation: "Gern!"', 'Einladung annehmen: „Gern!“'],
  ];

  // ================= A1.2 =================
  A1.A12.GAPS = [
    // Komparativ / Superlativ
    ['g_komparativ', 'Was isst du ___? – Pizza! (gern, Superlativ)', 'gern – lieber – am liebsten', ['am liebsten'], 'gern – lieber – am liebsten.', 'gern – lieber – am liebsten'],
    ['g_komparativ', 'Ich trinke nicht so gern Kaffee. Ich trinke ___ Tee. (gern, Komparativ)', 'gern – lieber – am liebsten', ['lieber'], 'Comparative of gern: lieber.', 'gern → lieber'],
    ['g_komparativ', 'Welcher Pullover gefällt dir ___, der blaue oder der rote? (gut, Komparativ)', 'gut – besser – am besten', ['besser'], 'Comparing two: besser.', 'zwei vergleichen: besser'],
    ['g_komparativ', 'Von allen Kuchen schmeckt mir der Apfelkuchen ___. (gut, Superlativ)', 'gut – besser – am besten', ['am besten'], 'Superlative: am besten.', 'am besten'],
    ['g_komparativ', 'Mein Bruder arbeitet viel, aber meine Schwester arbeitet noch ___. (viel, Komparativ)', 'viel – mehr – am meisten', ['mehr'], 'viel – mehr – am meisten.', 'viel → mehr'],
    ['g_komparativ', 'Im Dezember regnet es hier ___. (viel, Superlativ)', 'viel – mehr – am meisten', ['am meisten'], 'Superlative of viel: am meisten.', 'viel → am meisten'],
    ['g_komparativ', 'Das Hotel ist teuer, aber das Hotel am Meer ist noch ___. (teuer)', 'Komparativ', ['teurer'], 'teuer → teurer (the e drops out).', 'teuer → teurer'],
    ['g_komparativ', 'Meine Wohnung ist klein. Deine Wohnung ist ___. (groß)', 'Komparativ', ['größer'], 'groß → größer (umlaut).', 'groß → größer'],
    ['g_komparativ', 'Der Weg zur Post ist lang, aber der Weg zum Bahnhof ist ___. (lang)', 'Komparativ', ['länger'], 'lang → länger.', 'lang → länger'],
    ['g_komparativ', 'Der Bus ist schnell, aber die U-Bahn ist ___. (schnell)', 'Komparativ', ['schneller'], 'schnell → schneller.', 'schnell → schneller'],
    ['g_komparativ', 'Der Juni ist warm, aber im Juli ist es am ___. (warm, Superlativ)', 'Superlativ', ['wärmsten'], 'am wärmsten.', 'am wärmsten'],
    ['g_komparativ', 'Ich lese gern und koche gern. Am ___ tanze ich. (gern)', 'Superlativ', ['liebsten'], 'gern – lieber – am liebsten.', 'am liebsten'],
    ['g_komparativ', 'Das Museum ist interessant, aber den Zoo finde ich am ___. (interessant)', 'Superlativ', ['interessantesten'], 'Adjectives ending in -t add -esten: am interessantesten.', '-t → am …esten'],
    // Imperativ mit du
    ['g_imperativ', 'Ich bin so müde. (ins Bett gehen) → Dann ___!', 'Imperativ mit du', ['geh ins Bett', 'geh doch ins Bett', 'gehe ins Bett'], 'du-imperative: geh! (no -st, no "du").', 'Dann geh ins Bett!'],
    ['g_imperativ', 'Ich bin krank. (zum Arzt gehen) → Dann ___!', 'Imperativ mit du', ['geh zum Arzt', 'geh doch zum Arzt', 'gehe zum Arzt'], 'Dann geh zum Arzt!', 'Dann geh zum Arzt!'],
    ['g_imperativ', 'Ich bin total gestresst. (Urlaub machen) → Dann ___!', 'Imperativ mit du', ['mach Urlaub', 'mach doch Urlaub', 'mache Urlaub'], 'Dann mach Urlaub!', 'Dann mach Urlaub!'],
    ['g_imperativ', 'Ich habe Kopfschmerzen. (eine Tablette nehmen) → Dann ___!', 'Imperativ mit du', ['nimm eine Tablette', 'nimm doch eine Tablette'], 'nehmen → nimm! (e → i)', 'nehmen → nimm!'],
    ['g_imperativ', 'Ich habe Durst. (etwas trinken) → Dann ___!', 'Imperativ mit du', ['trink etwas', 'trink doch etwas', 'trinke etwas'], 'Dann trink etwas!', 'Dann trink etwas!'],
    ['g_imperativ', 'Ich habe Hunger. (etwas essen) → Dann ___!', 'Imperativ mit du', ['iss etwas', 'iss doch etwas'], 'essen → iss! (e → i)', 'essen → iss!'],
    ['g_imperativ', 'Morgen habe ich frei. (dich ausruhen) → Dann ___!', 'Imperativ mit du', ['ruh dich aus', 'ruh dich doch aus', 'ruhe dich aus'], 'Reflexive and separable: ruh dich aus!', 'Dann ruh dich aus!'],
    ['g_imperativ', 'Sara, ___ mir bitte den Weg zur Post! (zeigen)', 'Imperativ mit du', ['zeig', 'zeige'], 'zeigen → zeig!', 'zeig(e)!'],
    ['g_imperativ', 'Am Bahnhof ___ du die U-Bahn. (nehmen)', 'Verb in der richtigen Form', ['nimmst'], 'nehmen: du nimmst (e → i).', 'du nimmst'],
    ['g_imperativ', 'Bei der Ampel ___ links ___! (abbiegen)', 'Imperativ mit du (zwei Wörter)', ['bieg ab', 'biege ab', 'bieg … ab'], 'Separable: bieg … ab! Write "bieg ab".', 'abbiegen → bieg … ab!'],
    ['g_imperativ', 'Kinder, ___ nicht so laut! (sein)', 'Imperativ mit ihr', ['seid'], 'sein → ihr-imperative: seid!', 'seid!'],
    ['g_imperativ', 'Wenn ihr den Weg nicht findet, ___ einfach jemanden! (fragen)', 'Imperativ mit ihr', ['fragt'], 'ihr-imperative = ihr-form: fragt!', 'fragt!'],
    // Präpositionen mit bestimmtem Artikel (Dativ / Akkusativ)
    ['g_dativ', 'Paula kommt um 17 Uhr aus ___ Büro.', 'der / die / das / dem / den', ['dem'], 'aus + dative: das Haus → aus dem Haus.', 'aus + Dativ'],
    ['g_dativ', 'Ist das Geschenk von ___ Oma?', 'der / die / das / dem / den', ['der'], 'von + dative: die Großmutter → von der.', 'von + Dativ: der'],
    ['g_dativ', 'Am Sonntag gehe ich mit ___ Nachbarin spazieren.', 'der / die / das / dem / den', ['der'], 'mit + dative: die Tante → mit der.', 'mit + Dativ: der'],
    ['g_dativ', 'Nach ___ Frühstück fahren wir in die Stadt.', 'der / die / das / dem / den', ['dem'], 'nach + dative: das Essen → nach dem.', 'nach + Dativ: dem'],
    ['g_dativ', 'Die Apotheke ist gegenüber ___ Supermarkt.', 'der / die / das / dem / den', ['dem'], 'gegenüber + dative: der Bahnhof → dem.', 'gegenüber + Dativ: dem'],
    ['g_dativ', 'Mein Sohn wohnt noch bei ___ Eltern.', 'der / die / das / dem / den', ['den'], 'bei + dative plural: die Eltern → den Eltern.', 'Dativ Plural: den'],
    ['g_dativ', 'Das Kind trinkt Milch aus ___ Glas.', 'der / die / das / dem / den', ['dem'], 'aus + dative: das Glas → dem.', 'aus + Dativ: dem'],
    ['g_dativ', 'Ich trinke meinen Tee aus ___ Tasse mit den Blumen.', 'der / die / das / dem / den', ['der'], 'aus + dative: die Tasse → der.', 'aus + Dativ: der'],
    ['g_dativ', 'Meine Tochter kommt gerade von ___ Schule.', 'der / die / das / dem / den', ['der'], 'von + dative: die Universität → der.', 'von + Dativ: der'],
    ['g_akkusativ', 'Der Bus fährt durch ___ Innenstadt.', 'der / die / das / dem / den', ['die'], 'durch + accusative: die Stadt → die.', 'durch + Akkusativ'],
    ['g_akkusativ', 'Der Hund läuft um ___ Auto.', 'der / die / das / dem / den', ['das'], 'um + accusative: das Haus → das.', 'um + Akkusativ'],
    ['g_akkusativ', 'Frau Ali arbeitet für ___ Firma Lehmann.', 'der / die / das / dem / den', ['die'], 'für + accusative: die Firma → die.', 'für + Akkusativ'],
    ['g_akkusativ', 'Ich kaufe ein Geschenk für ___ Lehrer.', 'der / die / das / dem / den', ['den'], 'für + accusative: der Vater → den.', 'für + Akkusativ: den'],
    ['g_akkusativ', 'Die Bäckerei ist gleich um ___ Ecke.', 'der / die / das / dem / den', ['die'], 'um + accusative: die Ecke → die.', 'um + Akkusativ'],
    ['g_akkusativ', 'Der Ball fliegt gegen ___ Fenster.', 'der / die / das / dem / den', ['das'], 'gegen + accusative: das Auto → das.', 'gegen + Akkusativ'],
    // Perfekt
    ['g_perfekt', 'Gestern ___ ich mit dem Bus zur Arbeit ___. (fahren)', 'Perfekt (zwei Wörter)', ['bin gefahren', 'bin … gefahren'], 'fahren → sein + gefahren. Write "bin gefahren".', 'bin … gefahren'],
    ['g_perfekt', 'Am Wochenende ___ wir Pizza ___. (essen)', 'Perfekt (zwei Wörter)', ['haben gegessen', 'haben … gegessen'], 'essen → haben + gegessen.', 'haben … gegessen'],
    ['g_perfekt', 'Wann ___ du heute ___? (aufstehen)', 'Perfekt (zwei Wörter)', ['bist aufgestanden', 'bist … aufgestanden'], 'aufstehen → sein + aufgestanden.', 'bist … aufgestanden'],
  ];
  A1.A12.PAIRS = [
    ['gesundheit', 'Was hast du am Wochenende gemacht?', 'Ich habe meine Eltern besucht.', 'Ich besuche meine Eltern.', 'Perfekt question → answer in the Perfekt.', 'Frage im Perfekt → Antwort im Perfekt.'],
    ['gesundheit', 'Wo warst du gestern?', 'Beim Arzt. Ich hatte Fieber.', 'Zum Arzt. Ich habe Fieber.', 'Wo? → beim Arzt (dative). gestern → war/hatte.', 'Wo? → beim Arzt'],
    ['wohnen', 'Wohin stellen wir den Tisch?', 'Ans Fenster, bitte.', 'Am Fenster, bitte.', 'Wohin? → accusative: ans (an das) Fenster.', 'Wohin? → ans Fenster'],
    ['wohnen', 'Wo ist meine Brille?', 'Sie liegt auf dem Tisch.', 'Sie liegt auf den Tisch.', 'Wo? → dative: auf dem Tisch.', 'Wo? → auf dem Tisch'],
    ['einkaufen', 'Wie gefällt dir die Jacke?', 'Sehr gut, aber sie ist ein bisschen zu teuer.', 'Ich gefalle die Jacke.', 'gefallen: Die Jacke gefällt mir.', 'Die Jacke gefällt mir.'],
    ['reisen', 'Wie bist du nach Wien gefahren?', 'Mit dem Zug.', 'Mit den Zug.', 'mit + dative: mit dem Zug.', 'mit dem Zug'],
    ['feste', 'Kommst du zu meiner Hochzeit?', 'Ja, natürlich! Herzlichen Glückwunsch!', 'Gute Besserung!', 'Wedding → congratulations.', 'Hochzeit → Herzlichen Glückwunsch!'],
    ['amt', 'Darf ich hier mit Karte bezahlen?', 'Ja, natürlich.', 'Ja, ich darf.', '"Darf ich …?" asks for permission; answer: Ja, natürlich.', 'Erlaubnis: „Ja, natürlich.“'],
    ['stadt', 'Wie komme ich zur Post?', 'Gehen Sie bis zur Ampel und dann rechts.', 'Die Post ist zu.', 'Describe the way.', 'Den Weg beschreiben.'],
    ['stadt', 'Fährt dieser Bus zum Bahnhof?', 'Nein, nehmen Sie die Linie 5.', 'Ja, ich fahre gern Bus.', 'Answer about the bus line.', 'Antwort zur Buslinie.'],
  ];

  // ================= A2.1 =================
  A1.A21.GAPS = [
    ['g_nebensatz', 'Ich komme heute nicht, weil ich krank ___. (sein)', 'Verb am Ende', ['bin'], 'weil → verb at the end: weil ich krank bin.', 'weil … bin'],
    ['g_nebensatz', 'Er sagt, dass er keine Zeit ___. (haben)', 'Verb am Ende', ['hat'], 'dass → verb at the end.', 'dass … hat'],
    ['g_nebensatz', 'Wenn das Wetter schön ___, gehen wir schwimmen. (sein)', 'Verb am Ende', ['ist'], 'wenn → verb at the end.', 'wenn … ist'],
    ['g_reflexiv', 'Ich freue ___ auf den Urlaub.', 'Reflexivpronomen', ['mich'], 'ich → mich.', 'ich → mich'],
    ['g_reflexiv', 'Wir treffen ___ um acht vor dem Kino.', 'Reflexivpronomen', ['uns'], 'wir → uns.', 'wir → uns'],
    ['g_reflexiv', 'Ärgerst du ___ über den Lärm?', 'Reflexivpronomen', ['dich'], 'du → dich.', 'du → dich'],
    ['g_praep_verb', 'Ich warte schon zehn Minuten ___ den Bus.', 'Präposition', ['auf'], 'warten auf.', 'warten auf'],
    ['g_praep_verb', 'Interessierst du dich ___ Sport?', 'Präposition', ['für'], 'sich interessieren für.', 'sich interessieren für'],
    ['g_praep_verb', 'Ich denke oft ___ meine Familie.', 'Präposition', ['an'], 'denken an.', 'denken an'],
    ['g_praeteritum', 'Gestern ___ ich nicht kommen. (können)', 'Präteritum', ['konnte'], 'können → konnte.', 'können → konnte'],
    ['g_praeteritum', 'Letzte Woche ___ wir viel arbeiten. (müssen)', 'Präteritum', ['mussten'], 'müssen → wir mussten.', 'wir mussten'],
    ['g_praeteritum', 'Als Kind ___ ich Ärztin werden. (wollen)', 'Präteritum', ['wollte'], 'wollen → ich wollte.', 'ich wollte'],
    ['g_adjektiv', 'Der ___ Kollege ist sehr nett. (neu)', 'Adjektivendung', ['neue'], 'der + -e.', 'der neue'],
    ['g_adjektiv', 'Ich suche den ___ Schlüssel. (klein)', 'Adjektivendung', ['kleinen'], 'den (accusative masculine) + -en.', 'den kleinen'],
    ['g_adjektiv', 'Die ___ Wohnung hat einen Balkon. (hell)', 'Adjektivendung', ['helle'], 'die + -e.', 'die helle'],
    ['g_komparativ', 'Das ist das ___ Restaurant in der Stadt. (gut, Superlativ)', 'Superlativ', ['beste'], 'Before a noun: das beste Restaurant.', 'das beste'],
  ];
  A1.A21.PAIRS = [
    ['beruf', 'Warum möchten Sie bei uns arbeiten?', 'Weil mich die Arbeit mit Kunden interessiert.', 'Weil interessiert mich die Arbeit.', 'weil → verb at the end.', 'weil → Verb am Ende'],
    ['freizeit', 'Wollen wir am Samstag ins Theater gehen?', 'Gute Idee! Ich freue mich darauf.', 'Ich freue mich darüber, dass gestern.', 'Accept a suggestion: Gute Idee!', 'Zustimmen: Gute Idee!'],
    ['gesundheit', 'Was hat die Ärztin gesagt?', 'Dass ich mehr Sport machen soll.', 'Dass ich soll mehr Sport machen.', 'dass → verb at the end.', 'dass → Verb am Ende'],
    ['medien', 'Kannst du mir mit dem Drucker helfen?', 'Klar, was ist denn das Problem?', 'Klar, ich drucke gern.', 'Offer help and ask what\'s wrong.', 'Hilfe anbieten.'],
    ['wohnen', 'Entschuldigung, könnten Sie die Musik leiser machen?', 'Oh, Entschuldigung! Natürlich.', 'Ja, die Musik ist schön.', 'React politely to a complaint.', 'Höflich reagieren.'],
    ['schule', 'Wie war das Zeugnis von deiner Tochter?', 'Sehr gut! In Mathe hat sie eine Eins.', 'Sie geht in die Schule.', 'Answer about the marks.', 'Antwort zu den Noten.'],
    ['beruf', 'Wie lange haben Sie als Verkäuferin gearbeitet?', 'Fünf Jahre, von 2018 bis 2023.', 'Seit morgen.', 'Answer with a time span.', 'Zeitraum angeben.'],
    ['freizeit', 'Hast du Lust, mitzukommen?', 'Ja, gern. Wann treffen wir uns?', 'Ja, ich habe Lust auf gestern.', 'Accept and ask about the time.', 'Zusagen und nach der Zeit fragen.'],
  ];

  // ================= A2.2 =================
  A1.A22.GAPS = [
    ['g_konjunktiv', 'Wenn ich mehr Zeit ___, würde ich öfter reisen. (haben)', 'Konjunktiv II', ['hätte'], 'Unreal: wenn ich … hätte.', 'hätte'],
    ['g_konjunktiv', 'An deiner Stelle ___ ich zum Arzt gehen. (werden)', 'Konjunktiv II', ['würde'], 'Advice: an deiner Stelle würde ich …', 'würde'],
    ['g_konjunktiv', 'Es ___ toll, wenn du kommen könntest. (sein)', 'Konjunktiv II', ['wäre'], 'sein → wäre.', 'wäre'],
    ['g_konjunktiv', 'Du ___ mehr schlafen. (sollen, Ratschlag)', 'Konjunktiv II', ['solltest'], 'Advice: du solltest.', 'du solltest'],
    ['g_relativ', 'Das ist die Kollegin, ___ mir immer hilft.', 'Relativpronomen', ['die'], 'Subject, feminine → die.', 'die'],
    ['g_relativ', 'Der Film, ___ wir gesehen haben, war spannend.', 'Relativpronomen', ['den'], 'Accusative masculine → den.', 'den'],
    ['g_relativ', 'Das Hotel, in ___ wir gewohnt haben, war sehr schön.', 'Relativpronomen', ['dem'], 'in + dative: in dem Hotel → in dem.', 'in dem'],
    ['g_passiv', 'Die Pakete ___ morgen geliefert. (werden)', 'Passiv', ['werden'], 'Plural → werden.', 'werden'],
    ['g_passiv', 'Das Essen ___ frisch gekocht. (werden)', 'Passiv', ['wird'], 'Singular → wird.', 'wird'],
    ['g_nebensatz', 'Weißt du, ___ das Konzert beginnt? – Um acht.', 'Fragewort / ob', ['wann'], 'Indirect W-question: wann.', 'wann'],
    ['g_nebensatz', 'Ich frage mich, ___ sie morgen kommt.', 'Fragewort / ob', ['ob'], 'Yes/no → ob.', 'ob'],
    ['g_nebensatz', '___ ich jung war, habe ich viel Sport gemacht.', 'als / wenn', ['Als'], 'One period in the past → als.', 'als'],
    ['g_praeteritum', 'Gestern ___ ich lange im Park. (laufen)', 'Präteritum', ['lief'], 'laufen → lief.', 'lief'],
    ['g_praeteritum', 'Wir ___ den Zug um acht. (nehmen)', 'Präteritum', ['nahmen'], 'nehmen → wir nahmen.', 'wir nahmen'],
    ['g_zu', 'Ich habe vergessen, die Blumen ___. (gießen)', 'zu + Infinitiv', ['zu gießen'], 'vergessen + zu + infinitive.', 'zu gießen'],
    ['g_zu', 'Hast du Lust, heute Abend ___? (mitkommen)', 'zu + Infinitiv', ['mitzukommen'], 'Separable: mit-zu-kommen.', 'mitzukommen'],
  ];
  A1.A22.PAIRS = [
    ['einkaufen', 'Ich möchte mich beschweren. Die Lieferung ist nicht gekommen.', 'Das tut mir leid. Wie ist Ihre Bestellnummer?', 'Gern geschehen.', 'Respond to a complaint and ask for details.', 'Auf eine Beschwerde reagieren.'],
    ['gesundheit', 'Was würdest du an meiner Stelle machen?', 'Ich würde mit deiner Chefin sprechen.', 'Ich wurde mit deiner Chefin sprechen.', 'Advice with würde.', 'Rat mit „würde“.'],
    ['reisen', 'Könnten Sie mir sagen, wann der nächste Zug fährt?', 'Um 14:20 Uhr von Gleis 3.', 'Ja, ich könnte.', 'An indirect question still wants the information.', 'Die Information geben.'],
    ['beruf', 'Wer ist die Frau, die neben dem Chef sitzt?', 'Das ist die neue Kollegin aus Berlin.', 'Sie sitzt neben dem Chef.', '"Wer ist …?" → say who she is.', 'Wer? → Person nennen.'],
    ['umwelt', 'Was kann man gegen zu viel Plastik tun?', 'Man könnte eigene Taschen zum Einkaufen mitnehmen.', 'Plastik ist aus Plastik.', 'Give a suggestion with "könnte".', 'Vorschlag mit „könnte“.'],
    ['freizeit', 'Wenn du im Lotto gewinnen würdest, was würdest du machen?', 'Ich würde eine Weltreise machen.', 'Ich habe im Lotto gewonnen.', 'Hypothetical question → würde.', 'Irreale Frage → würde.'],
    ['wohnen', 'Wissen Sie, ob die Wohnung noch frei ist?', 'Ja, Sie können sie am Samstag besichtigen.', 'Ob ist ein Wort.', 'Answer the yes/no information.', 'Antwort mit der Information.'],
    ['einkaufen', 'Wird die Ware auch am Samstag geliefert?', 'Ja, aber nur bis 14 Uhr.', 'Ja, ich werde liefern.', 'Passive question → information.', 'Information geben.'],
  ];

  // ================= More emails and messages =================
  const P = (de, en, kw) => ({ de, en, kw });
  A1.MESSAGES.push(
    { id: 's2-e01', topic: 'stadt',
      situation: T('Describe your way to the German course for a new classmate.', 'Beschreiben Sie einer neuen Kurskollegin Ihren Weg zum Deutschkurs.'),
      points: [P('Mit welchem Verkehrsmittel fahren Sie?', 'Which transport you take', 'bus|u-bahn|s-bahn|straßenbahn|zug|fahrrad|auto|zu fuß'), P('Wie viele Stationen / wie lange?', 'How many stops / how long', 'station|minuten|stunde|\\d'), P('Was machen Sie dann? (links, rechts, geradeaus)', 'What you do then (left, right, straight on)', 'links|rechts|geradeaus|straße')],
      model: 'Liebe Ana,\nich fahre mit dem Bus 12 zum Deutschkurs. Ich fahre fünf Stationen bis zum Marktplatz. Dann gehe ich geradeaus und die zweite Straße rechts. Das dauert 20 Minuten.\nViele Grüße\nMaria' },
    { id: 's2-e02', topic: 'stadt',
      situation: T('Your friend Jan visits you on Saturday. Write him how to get from the station to your flat.', 'Ihr Freund Jan besucht Sie am Samstag. Schreiben Sie ihm den Weg vom Bahnhof zu Ihrer Wohnung.'),
      points: [P('Verkehrsmittel und Stationen', 'Transport and stops', 'bus|u-bahn|straßenbahn|station|linie'), P('Der Weg zu Fuß', 'The way on foot', 'links|rechts|geradeaus|straße|meter'), P('Adresse oder Hausnummer', 'Address or house number', 'straße|nummer|hausnummer|stock|\\d')],
      model: 'Hallo Jan,\nam Bahnhof nimmst du die U-Bahn U2 und fährst drei Stationen bis zur Goethestraße. Dann gehst du 100 Meter geradeaus und die erste Straße links. Ich wohne in der Lindenstraße 8, im zweiten Stock.\nBis Samstag!\nOlga' },
    { id: 's2-e03', topic: 'stadt',
      situation: T('Your new neighbour asks about shops nearby. Write a short note.', 'Ihr neuer Nachbar fragt nach Geschäften in der Nähe. Schreiben Sie eine kurze Nachricht.'),
      points: [P('Wo gibt es eine Bäckerei?', 'Where there is a bakery', 'bäckerei|brot'), P('Wo gibt es einen Supermarkt?', 'Where there is a supermarket', 'supermarkt'), P('Wo gibt es eine Apotheke oder einen Arzt?', 'Where there is a pharmacy or doctor', 'apotheke|arzt|praxis')],
      model: 'Lieber Herr Novak,\nherzlich willkommen! Eine Bäckerei gibt es gleich an der Ecke. Der Supermarkt ist in der Bahnhofstraße, nur fünf Minuten zu Fuß. Eine Apotheke ist neben der Post.\nViele Grüße\nIhre Nachbarin Frau Kaya' },
  );
  A1.A12.MESSAGES.push(
    { id: 's2-b06', topic: 'freizeit',
      situation: T('Write to your friend Petra about your weekend.', 'Schreiben Sie Ihrer Freundin Petra über Ihr Wochenende.'),
      points: [P('Was haben Sie am Samstag gemacht?', 'What you did on Saturday', 'samstag|habe|bin|gemacht|gegangen|gefahren|besucht'), P('Was haben Sie am Sonntag gemacht?', 'What you did on Sunday', 'sonntag'), P('Wie war das Wetter?', 'What the weather was like', 'wetter|sonne|regen|warm|kalt|war')],
      model: 'Liebe Petra,\nam Samstag habe ich mit meiner Schwester eingekauft und wir haben zusammen gekocht. Am Sonntag sind wir in den Park gegangen. Das Wetter war sehr schön und warm.\nLiebe Grüße\nSvetlana' },
    { id: 's2-b07', topic: 'wohnen',
      situation: T('You have moved. Describe your new living room to your friend.', 'Sie sind umgezogen. Beschreiben Sie Ihrer Freundin Ihr neues Wohnzimmer.'),
      points: [P('Welche Möbel haben Sie?', 'Which furniture you have', 'sofa|tisch|schrank|regal|sessel|lampe|stuhl'), P('Wo stehen die Möbel?', 'Where the furniture is', 'neben|vor|an|auf|unter|zwischen|über'), P('Laden Sie Ihre Freundin ein.', 'Invite your friend', 'komm|besuch|einlad|zeit')],
      model: 'Liebe Mira,\nmein neues Wohnzimmer ist schön hell! Das Sofa steht am Fenster und neben dem Sofa steht eine Lampe. An der Wand hängt ein großes Bild. Komm doch am Sonntag zum Kaffee!\nViele Grüße\nIrina' },
  );
  A1.A21.MESSAGES.push(
    { id: 's2-c05', part: 2, words: '30–40', topic: 'beruf',
      situation: T('You saw a job advert for a shop assistant in a bakery. Write a short email.', 'Sie haben eine Anzeige gelesen: Eine Bäckerei sucht eine Verkäuferin. Schreiben Sie eine kurze E-Mail.'),
      points: [P('Warum schreiben Sie?', 'Why you are writing', 'anzeige|stelle|interessiere|bewerbe'), P('Ihre Erfahrung', 'Your experience', 'erfahrung|gearbeitet|jahre|früher|verkäufer'), P('Wann können Sie arbeiten?', 'When you can work', 'kann|vormittag|nachmittag|ab|montag|uhr|zeit')],
      model: 'Sehr geehrte Damen und Herren,\nich habe Ihre Anzeige gelesen und interessiere mich für die Stelle als Verkäuferin. Ich habe schon drei Jahre in einem Supermarkt gearbeitet. Ich kann ab Mai jeden Vormittag arbeiten.\nMit freundlichen Grüßen\nMarta Nowak' },
  );
  A1.A22.MESSAGES.push(
    { id: 's2-d05', part: 2, words: '30–40', topic: 'wohnen',
      situation: T('Your neighbours have loud parties every weekend. Write to the property management.', 'Ihre Nachbarn feiern jedes Wochenende laute Partys. Schreiben Sie an die Hausverwaltung.'),
      points: [P('Was ist das Problem?', 'What the problem is', 'laut|lärm|party|musik|nachbar'), P('Seit wann / wie oft?', 'Since when / how often', 'seit|jedes|wochenende|nacht|uhr|oft'), P('Was soll die Hausverwaltung tun?', 'What the management should do', 'könnten|bitte|sprechen|lösung|hilfe|würde')],
      model: 'Sehr geehrte Damen und Herren,\nseit zwei Monaten feiern meine Nachbarn im dritten Stock jedes Wochenende bis drei Uhr nachts. Die Musik ist sehr laut und ich kann nicht schlafen. Könnten Sie bitte mit den Nachbarn sprechen?\nMit freundlichen Grüßen\nHelga Brandt' },
  );
})();
