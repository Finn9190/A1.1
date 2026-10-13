// A2.1 and A2.2 content. Exam format: Goethe-Zertifikat A2 (Hören, Lesen, Schreiben ~30 min each, Sprechen ~15 min, paired).
// A2.1 grammar: weil/dass/wenn, reflexive verbs, verbs with prepositions, modal verbs in the past, adjective endings, superlative.
// A2.2 grammar: Konjunktiv II (hätte, wäre, würde, sollte, könnte), relative clauses, indirect questions (ob/W-), als/wenn,
// Präteritum, Passiv Präsens, zu + Infinitiv.
window.A1 = window.A1 || {};

(function () {
  const lines = (s) => s.trim().split('\n').map((l) => l.split('|'));
  const addNouns = (s, level) => lines(s).forEach(([topic, art, word, plural, en, emoji]) => {
    A1.nouns.push({ topic, art, word, plural: plural === '-' ? null : plural, en, emoji, level });
  });
  const addVerbs = (s, level) => lines(s).forEach(([topic, inf, en]) => A1.verbs.push({ topic, inf, en, level }));
  const addAdj = (s, level) => lines(s).forEach(([word, en, opp]) => A1.adjectives.push({ word, en, opp: opp || null, level }));

  // ================= Vocabulary =================
  addNouns(`
beruf|die|Bewerbung|Bewerbungen|job application|📄
beruf|der|Lebenslauf|Lebensläufe|CV; résumé|📄
beruf|das|Vorstellungsgespräch|Vorstellungsgespräche|job interview|🤝
beruf|die|Erfahrung|Erfahrungen|experience|⭐
beruf|das|Praktikum|Praktika|internship|🧑‍💼
beruf|der|Kunde|Kunden|customer (male)|🧑
beruf|die|Kundin|Kundinnen|customer (female)|👩
beruf|die|Abteilung|Abteilungen|department|🏢
beruf|der|Vertrag|Verträge|contract|📃
beruf|die|Stelle|Stellen|job; position|💼
medien|das|Handy|Handys|mobile phone|📱
medien|der|Bildschirm|Bildschirme|screen|🖥️
medien|die|Nachricht|Nachrichten|message; news|💬
medien|das|Internet|-|internet|🌐
medien|die|Webseite|Webseiten|website|🌐
medien|das|Passwort|Passwörter|password|🔑
medien|der|Drucker|Drucker|printer|🖨️
medien|die|Sendung|Sendungen|programme (TV, radio)|📺
medien|der|Fernseher|Fernseher|television set|📺
medien|die|Zeitschrift|Zeitschriften|magazine|📰
gesundheit|die|Gesundheit|-|health|💚
gesundheit|die|Ernährung|-|nutrition; diet|🥗
gesundheit|die|Bewegung|Bewegungen|exercise; movement|🏃
gesundheit|die|Krankenkasse|Krankenkassen|health insurance company|🏥
gesundheit|die|Untersuchung|Untersuchungen|medical examination|🩺
gesundheit|die|Verletzung|Verletzungen|injury|🩹
freizeit|die|Ausstellung|Ausstellungen|exhibition|🖼️
freizeit|das|Theater|Theater|theatre|🎭
freizeit|der|Verein|Vereine|club; association|🏅
freizeit|das|Mitglied|Mitglieder|member|🪪
freizeit|die|Eintrittskarte|Eintrittskarten|admission ticket|🎟️
freizeit|der|Chor|Chöre|choir|🎶
wohnen|die|Hausordnung|Hausordnungen|house rules|📋
wohnen|der|Müll|-|rubbish; waste|🗑️
wohnen|der|Mieter|Mieter|tenant|🧑
wohnen|die|Kaution|Kautionen|deposit|💶
wohnen|das|Treppenhaus|Treppenhäuser|stairwell|🪜
schule|das|Zeugnis|Zeugnisse|school report; certificate|📜
schule|die|Note|Noten|mark; grade|🔢
schule|das|Fach|Fächer|school subject|📚
schule|der|Schüler|Schüler|pupil (male)|🧒
schule|die|Schülerin|Schülerinnen|pupil (female)|👧
schule|der|Kindergarten|Kindergärten|nursery school|🧸
schule|die|Hausaufgabe|Hausaufgaben|homework|📝
schule|die|Klasse|Klassen|class; school year|🏫
schule|der|Unterricht|-|lessons|👩‍🏫
`, 'A2.1');
  addNouns(`
umwelt|die|Umwelt|-|environment|🌍
umwelt|die|Natur|-|nature|🌳
umwelt|die|Energie|Energien|energy|⚡
umwelt|das|Klima|-|climate|🌡️
umwelt|die|Mülltonne|Mülltonnen|dustbin|🗑️
umwelt|das|Plastik|-|plastic|🧴
umwelt|der|Abfall|Abfälle|waste|♻️
umwelt|der|Wald|Wälder|forest|🌲
umwelt|das|Tier|Tiere|animal|🐾
einkaufen|die|Bestellung|Bestellungen|order|🛒
einkaufen|die|Lieferung|Lieferungen|delivery|🚚
einkaufen|die|Rücksendung|Rücksendungen|return (of goods)|📦
einkaufen|die|Reklamation|Reklamationen|complaint (about goods)|📣
einkaufen|die|Garantie|Garantien|guarantee|✅
einkaufen|der|Kundenservice|-|customer service|☎️
einkaufen|die|Quittung|Quittungen|receipt|🧾
einkaufen|der|Gutschein|Gutscheine|voucher|🎫
reisen|die|Unterkunft|Unterkünfte|accommodation|🏨
reisen|die|Jugendherberge|Jugendherbergen|youth hostel|🛏️
reisen|der|Ausflug|Ausflüge|day trip; outing|🚌
reisen|der|Reiseführer|Reiseführer|guidebook; tour guide|📘
reisen|die|Grenze|Grenzen|border|🛂
reisen|die|Aussicht|Aussichten|view|🏞️
beruf|die|Kündigung|Kündigungen|notice of termination|📄
beruf|die|Schicht|Schichten|shift|🕒
beruf|die|Überstunde|Überstunden|hour of overtime|⏱️
beruf|der|Betrieb|Betriebe|company; business|🏭
beruf|der|Arbeitgeber|Arbeitgeber|employer|🏢
beruf|der|Arbeitnehmer|Arbeitnehmer|employee|🧑‍💼
freizeit|die|Beziehung|Beziehungen|relationship|💞
freizeit|die|Freundschaft|Freundschaften|friendship|🤝
freizeit|die|Meinung|Meinungen|opinion|💭
amt|die|Versicherung|Versicherungen|insurance|🛡️
amt|die|Steuer|Steuern|tax|💶
amt|die|Mahnung|Mahnungen|payment reminder|⚠️
amt|die|Behörde|Behörden|public authority|🏛️
amt|die|Bescheinigung|Bescheinigungen|official certificate|📄
amt|die|Staatsangehörigkeit|Staatsangehörigkeiten|nationality|🪪
`, 'A2.2');

  addVerbs(`
beruf|bewerben|to apply (sich bewerben)
beruf|verdienen|to earn
beruf|unterschreiben|to sign
beruf|erklären|to explain
medien|drucken|to print
medien|speichern|to save (data)
medien|schicken|to send
alltag|beeilen|to hurry (sich beeilen)
alltag|ärgern|to annoy (sich ärgern = to be annoyed)
alltag|erinnern|to remind (sich erinnern = to remember)
alltag|empfehlen|to recommend
alltag|vergleichen|to compare
alltag|diskutieren|to discuss
freizeit|trainieren|to train
freizeit|besichtigen|to visit (a sight)
`, 'A2.1');
  addVerbs(`
einkaufen|reparieren|to repair
einkaufen|liefern|to deliver
einkaufen|beschweren|to complain (sich beschweren)
umwelt|sparen|to save (money, energy)
umwelt|trennen|to separate (rubbish)
umwelt|schützen|to protect
umwelt|verbrauchen|to consume
wohnen|vermieten|to let; to rent out
beruf|kündigen|to give notice; to quit
alltag|entscheiden|to decide
alltag|erleben|to experience
alltag|träumen|to dream
alltag|hoffen|to hope
alltag|glauben|to believe
alltag|meinen|to think; to mean
`, 'A2.2');

  Object.assign(A1.IRREGULAR, {
    bewerben: ['bewerbe', 'bewirbst', 'bewirbt', 'bewerben', 'bewerbt', 'bewerben'],
    empfehlen: ['empfehle', 'empfiehlst', 'empfiehlt', 'empfehlen', 'empfehlt', 'empfehlen'],
    speichern: ['speichere', 'speicherst', 'speichert', 'speichern', 'speichert', 'speichern'],
    liefern: ['liefere', 'lieferst', 'liefert', 'liefern', 'liefert', 'liefern'],
    schützen: ['schütze', 'schützt', 'schützt', 'schützen', 'schützt', 'schützen'],
    ärgern: ['ärgere', 'ärgerst', 'ärgert', 'ärgern', 'ärgert', 'ärgern'],
    erinnern: ['erinnere', 'erinnerst', 'erinnert', 'erinnern', 'erinnert', 'erinnern'],
    setzen: ['setze', 'setzt', 'setzt', 'setzen', 'setzt', 'setzen'],
    unterschreiben: ['unterschreibe', 'unterschreibst', 'unterschreibt', 'unterschreiben', 'unterschreibt', 'unterschreiben'],
  });

  addAdj(`
freundlich|friendly|unfreundlich
unfreundlich|unfriendly|freundlich
pünktlich|punctual|unpünktlich
zufrieden|satisfied|unzufrieden
wichtig|important|unwichtig
interessant|interesting|langweilig
langweilig|boring|interessant
sicher|safe; sure|unsicher
möglich|possible|unmöglich
nervös|nervous|ruhig
`, 'A2.1');
  addAdj(`
umweltfreundlich|environmentally friendly|
günstig|good value; cheap|teuer
kostenlos|free of charge|
kaputt|broken|
ehrlich|honest|unehrlich
höflich|polite|unhöflich
unhöflich|rude|höflich
selbstständig|independent; self-employed|
notwendig|necessary|
gefährlich|dangerous|ungefährlich
`, 'A2.2');

  // ================= Template lists =================
  A1.A2T = {
    // main clause | conjunction | subject | rest | verb (goes to the end)
    NEBENSATZ: [
      ['Ich bleibe heute zu Hause', 'weil', 'ich', 'krank', 'bin'],
      ['Ich komme später', 'weil', 'der Bus', 'Verspätung', 'hat'],
      ['Sie lernt Deutsch', 'weil', 'sie', 'in Deutschland', 'arbeitet'],
      ['Wir gehen nicht spazieren', 'weil', 'es', 'stark', 'regnet'],
      ['Er kann nicht kommen', 'weil', 'er', 'arbeiten', 'muss'],
      ['Ich glaube', 'dass', 'der Kurs', 'um neun Uhr', 'beginnt'],
      ['Sie sagt', 'dass', 'sie', 'keine Zeit', 'hat'],
      ['Ich hoffe', 'dass', 'du', 'bald wieder gesund', 'bist'],
      ['Wir wissen', 'dass', 'die Prüfung', 'schwer', 'ist'],
      ['Ich freue mich', 'dass', 'du', 'mich', 'besuchst'],
      ['Ich trinke einen Tee', 'wenn', 'ich', 'Halsschmerzen', 'habe'],
      ['Wir fahren an den See', 'wenn', 'das Wetter', 'schön', 'ist'],
      ['Ruf mich an', 'wenn', 'du', 'Hilfe', 'brauchst'],
      ['Ich gehe ins Bett', 'wenn', 'ich', 'müde', 'bin'],
    ],
    // verb (without sich) | rest of the sentence
    REFLEXIV: [
      ['freuen', 'auf das Wochenende'], ['treffen', 'mit Freunden im Park'], ['interessieren', 'für Musik'],
      ['waschen', 'jeden Morgen kalt'], ['beeilen', 'am Morgen immer'], ['ärgern', 'über den Lärm'],
      ['erinnern', 'gern an den Urlaub'], ['fühlen', 'heute nicht gut'], ['entschuldigen', 'für die Verspätung'],
      ['setzen', 'auf das Sofa'],
    ],
    MODAL_PRAET: {
      können: { forms: ['konnte', 'konntest', 'konnte', 'konnten', 'konntet'], frame: 'Gestern ___ {s} nicht kommen.' },
      müssen: { forms: ['musste', 'musstest', 'musste', 'mussten', 'musstet'], frame: 'Letzte Woche ___ {s} viel arbeiten.' },
      wollen: { forms: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet'], frame: 'Am Wochenende ___ {s} eigentlich wandern.' },
      dürfen: { forms: ['durfte', 'durftest', 'durfte', 'durften', 'durftet'], frame: 'Als Kind ___ {s} nicht lange fernsehen.' },
    },
    ADJ_NOUNS: ['Tisch', 'Stuhl', 'Schrank', 'Sofa', 'Lampe', 'Teppich', 'Mantel', 'Jacke', 'Hose', 'Pullover', 'Kleid', 'Hemd', 'Tasche', 'Schal', 'Bett', 'Regal', 'Sessel', 'Spiegel', 'Rock', 'Mütze'],
    ADJ_WORDS: ['neu', 'alt', 'schön', 'groß', 'klein', 'rot', 'blau', 'schwarz', 'bequem', 'billig'],
    KONJ2: {
      haben: { forms: ['hätte', 'hättest', 'hätte', 'hätten', 'hättet'], wrong: ['hatte', 'hattest', 'hatte', 'hatten', 'hattet'], frame: '{S} ___ gern mehr Zeit.' },
      sein: { forms: ['wäre', 'wärst', 'wäre', 'wären', 'wärt'], wrong: ['war', 'warst', 'war', 'waren', 'wart'], frame: '{S} ___ jetzt gern am Meer.' },
      werden: { forms: ['würde', 'würdest', 'würde', 'würden', 'würdet'], wrong: ['wurde', 'wurdest', 'wurde', 'wurden', 'wurdet'], frame: '{S} ___ gern einmal nach Japan reisen.' },
      sollen: { forms: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet'], wrong: ['soll', 'sollst', 'soll', 'sollen', 'sollt'], frame: '{S} ___ mehr Sport machen.' },
    },
    RELATIV_PERSONS: ['Nachbar', 'Nachbarin', 'Lehrerin', 'Arzt', 'Kollegin', 'Kollege', 'Mann', 'Frau', 'Kind', 'Mieter'],
    RELATIV_THINGS: ['Tisch', 'Lampe', 'Jacke', 'Mantel', 'Kleid', 'Buch', 'Tasche', 'Pullover', 'Fahrrad', 'Handy', 'Fernseher', 'Regal'],
    // infinitive | er/sie form in the Präteritum
    PRAET: `gehen|ging
kommen|kam
sehen|sah
geben|gab
nehmen|nahm
finden|fand
sprechen|sprach
schreiben|schrieb
lesen|las
essen|aß
trinken|trank
fahren|fuhr
laufen|lief
schlafen|schlief
bleiben|blieb
rufen|rief
fliegen|flog
beginnen|begann
helfen|half
treffen|traf
wissen|wusste
denken|dachte
bringen|brachte
kennen|kannte
sagen|sagte
machen|machte
spielen|spielte
wohnen|wohnte
arbeiten|arbeitete
leben|lebte`.split('\n').map((l) => l.split('|')),
    // subject | singular? | rest | participle
    PASSIV: [
      ['Das Paket', true, 'morgen', 'geliefert'], ['Die Briefe', false, 'jeden Tag', 'abgeholt'],
      ['Der Müll', true, 'am Montag', 'abgeholt'], ['Die Fenster', false, 'einmal im Monat', 'geputzt'],
      ['Das Auto', true, 'in der Werkstatt', 'repariert'], ['Die Zimmer', false, 'jeden Morgen', 'sauber gemacht'],
      ['Hier', true, 'Deutsch', 'gesprochen'], ['Der Kuchen', true, 'am Sonntag', 'gebacken'],
      ['Die Rechnungen', false, 'pünktlich', 'bezahlt'], ['Das Fest', true, 'im Garten', 'gefeiert'],
      ['Die Kinder', false, 'um 16 Uhr', 'abgeholt'], ['Im Restaurant', true, 'frisch', 'gekocht'],
    ],
  };

  const T = (en, de) => ({ en, de });

  // ================= A2.1 static content =================
  const A21 = {};
  A21.HOEREN = [
    { id: '21h1-01', part: 1, topic: 'wetter', type: 'mc',
      audio: [['A', 'Und nun das Wetter für das Wochenende: Am Samstag bleibt es trocken, aber kühl, nur zwölf Grad. Am Sonntag wird es wärmer, bis zu zwanzig Grad. Am Nachmittag kann es aber Gewitter geben.']],
      q: 'Wie wird das Wetter am Sonntag?', options: ['Wärmer, aber am Nachmittag vielleicht Gewitter', 'Kühl und trocken', 'Den ganzen Tag Regen'], answer: 0,
      ex: T('Sunday: warmer (up to 20 degrees), possibly thunderstorms in the afternoon.', 'Sonntag: wärmer, am Nachmittag vielleicht Gewitter.') },
    { id: '21h1-02', part: 1, topic: 'gesundheit', type: 'mc',
      audio: [['A', 'Hier ist die Praxis Doktor Meyer. Unsere Praxis ist bis zum fünfzehnten August geschlossen. In dringenden Fällen gehen Sie bitte zu Doktor Schulz in der Hauptstraße zwölf.']],
      q: 'Was sollen Patienten in dringenden Fällen machen?', options: ['Zu Doktor Schulz gehen', 'Nach dem 15. August anrufen', 'Ins Krankenhaus fahren'], answer: 0,
      ex: T('"In dringenden Fällen" = in urgent cases → go to Doktor Schulz.', 'In dringenden Fällen: zu Doktor Schulz.') },
    { id: '21h1-03', part: 1, topic: 'freizeit', type: 'mc',
      audio: [['A', 'Hallo Sandra, hier ist Petra. Du, ich kann heute Abend leider nicht ins Kino kommen, weil meine Tochter krank ist. Können wir den Film nächste Woche sehen? Ruf mich doch morgen an!']],
      q: 'Warum kann Petra nicht ins Kino gehen?', options: ['Ihre Tochter ist krank.', 'Sie muss arbeiten.', 'Der Film ist ausverkauft.'], answer: 0,
      ex: T('"weil meine Tochter krank ist" – the reason follows "weil".', '„weil meine Tochter krank ist“.') },
    { id: '21h1-04', part: 1, topic: 'einkaufen', type: 'mc',
      audio: [['A', 'Liebe Kundinnen und Kunden, ab heute finden Sie unsere Backwaren nicht mehr am Eingang, sondern hinten links, neben Kasse fünf.']],
      q: 'Wo ist das Brot jetzt?', options: ['Hinten links neben Kasse 5', 'Am Eingang', 'Vorne rechts'], answer: 0,
      ex: T('Backwaren = bread and baked goods. Now: at the back on the left, next to checkout 5.', 'Backwaren: hinten links neben Kasse fünf.') },
    { id: '21h1-05', part: 1, topic: 'stadt', type: 'mc',
      audio: [['A', 'Achtung, Autofahrer: Auf der A drei zwischen Würzburg und Nürnberg gibt es nach einem Unfall zehn Kilometer Stau. Bitte fahren Sie über die A sieben.']],
      q: 'Was sollen die Autofahrer machen?', options: ['Eine andere Autobahn nehmen', 'Langsamer fahren', 'Eine Pause machen'], answer: 0,
      ex: T('"Bitte fahren Sie über die A7" = take a different motorway.', 'Sie sollen über die A7 fahren.') },
    { id: '21h1-06', part: 1, topic: 'beruf', type: 'mc',
      audio: [['A', 'Guten Tag, Herr Rossi, hier ist Frau Engel von der Firma Bauer. Vielen Dank für Ihre Bewerbung. Wir möchten Sie gern zu einem Vorstellungsgespräch einladen. Passt Ihnen Dienstag um zehn Uhr?']],
      q: 'Warum ruft Frau Engel an?', options: ['Sie lädt Herrn Rossi zu einem Gespräch ein.', 'Sie sagt einen Termin ab.', 'Sie möchte eine Bewerbung schicken.'], answer: 0,
      ex: T('Vorstellungsgespräch = job interview. She invites him.', 'Sie lädt ihn zum Vorstellungsgespräch ein.') },
    { id: '21h1-07', part: 1, topic: 'schule', type: 'mc',
      audio: [['A', 'Liebe Teilnehmerinnen und Teilnehmer, der Computerkurs am Donnerstag fällt heute aus, weil der Kursleiter krank ist. Wir holen die Stunde am nächsten Montag nach.']],
      q: 'Wann ist die nächste Kursstunde?', options: ['Am nächsten Montag', 'Am Donnerstag', 'Heute Abend'], answer: 0,
      ex: T('"nachholen" = make up for it later: next Monday.', 'Die Stunde wird am Montag nachgeholt.') },
    { id: '21h1-08', part: 1, topic: 'feste', type: 'mc',
      audio: [['A', 'Am Samstag feiert unsere Stadt ihr Sommerfest auf dem Marktplatz. Es gibt Musik, Essen aus vielen Ländern und ein Programm für Kinder. Der Eintritt ist frei.']],
      q: 'Was kostet das Sommerfest?', options: ['Nichts', '5 Euro', 'Nur Kinder bezahlen.'], answer: 0,
      ex: T('"Der Eintritt ist frei" = entry is free.', 'Eintritt frei = kostenlos.') },
    { id: '21h3-01', part: 3, topic: 'beruf', type: 'mc',
      audio: [['A', 'Na, wie war dein erster Arbeitstag?'], ['B', 'Ganz gut. Die Kollegen sind sehr nett, aber ich musste schon um sechs Uhr anfangen. Das ist für mich noch zu früh.']],
      q: 'Was findet die Person schwierig?', options: ['Sie muss sehr früh anfangen.', 'Die Kollegen sind unfreundlich.', 'Die Arbeit ist zu schwer.'], answer: 0,
      ex: T('"ich musste schon um sechs Uhr anfangen … zu früh".', '„um sechs Uhr anfangen … zu früh“.') },
    { id: '21h3-02', part: 3, topic: 'freizeit', type: 'mc',
      audio: [['A', 'Ich möchte mich für den Yogakurs anmelden. Ist noch ein Platz frei?'], ['B', 'Am Montag ist der Kurs leider voll, aber am Mittwoch gibt es noch zwei Plätze.'], ['A', 'Gut, dann nehme ich Mittwoch.']],
      q: 'Wann macht die Person den Kurs?', options: ['Am Mittwoch', 'Am Montag', 'Am Montag und am Mittwoch'], answer: 0,
      ex: T('Monday is full, so she takes Wednesday.', 'Montag ist voll, also Mittwoch.') },
    { id: '21h3-03', part: 3, topic: 'freizeit', type: 'mc',
      audio: [['A', 'Wollen wir am Wochenende wandern gehen?'], ['B', 'Ich würde gern, aber ich muss für meine Prüfung lernen. Wie wäre es mit nächstem Wochenende?']],
      q: 'Warum geht die Person nicht mit?', options: ['Sie muss lernen.', 'Sie wandert nicht gern.', 'Sie ist krank.'], answer: 0,
      ex: T('"ich muss für meine Prüfung lernen".', '„ich muss für meine Prüfung lernen“.') },
    { id: '21h3-04', part: 3, topic: 'einkaufen', type: 'mc',
      audio: [['A', 'Entschuldigung, ich habe diese Jacke gestern gekauft, aber sie ist mir zu klein.'], ['B', 'Haben Sie den Kassenbon dabei? Dann können Sie sie umtauschen.']],
      q: 'Was braucht man zum Umtauschen?', options: ['Den Kassenbon', 'Die Kreditkarte', 'Den Ausweis'], answer: 0,
      ex: T('Kassenbon = receipt. umtauschen = exchange.', 'Man braucht den Kassenbon.') },
    { id: '21h3-05', part: 3, topic: 'gesundheit', type: 'mc',
      audio: [['A', 'Was hat der Arzt gesagt?'], ['B', 'Ich soll mich mehr bewegen und weniger Süßes essen. Ab morgen gehe ich jeden Tag eine halbe Stunde spazieren.']],
      q: 'Was will die Person ab morgen machen?', options: ['Jeden Tag spazieren gehen', 'Keinen Kaffee mehr trinken', 'Ins Fitnessstudio gehen'], answer: 0,
      ex: T('"Ab morgen gehe ich jeden Tag … spazieren."', 'Jeden Tag eine halbe Stunde spazieren.') },
    { id: '21h3-06', part: 3, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Hast du schon gehört? Die Müllers ziehen aus.'], ['B', 'Ja, sie haben ein Haus mit Garten gekauft, weil die Wohnung für drei Kinder zu klein ist.']],
      q: 'Warum ziehen die Müllers aus?', options: ['Die Wohnung ist zu klein.', 'Die Miete ist zu teuer.', 'Sie haben eine neue Arbeit.'], answer: 0,
      ex: T('"weil die Wohnung … zu klein ist".', '„weil die Wohnung zu klein ist“.') },
    { id: '21h3-07', part: 3, topic: 'medien', type: 'mc',
      audio: [['A', 'Kannst du mir helfen? Mein Handy funktioniert nicht mehr.'], ['B', 'Hast du es schon ausgeschaltet und wieder eingeschaltet?'], ['A', 'Nein, das versuche ich mal.']],
      q: 'Was macht die Person zuerst?', options: ['Sie schaltet das Handy aus und wieder ein.', 'Sie kauft ein neues Handy.', 'Sie ruft den Kundenservice an.'], answer: 0,
      ex: T('ausschalten = switch off, einschalten = switch on.', 'Aus- und wieder einschalten.') },
    { id: '21h3-08', part: 3, topic: 'stadt', type: 'mc',
      audio: [['A', 'Wie kommst du eigentlich zur Arbeit?'], ['B', 'Früher bin ich mit dem Auto gefahren, aber jetzt nehme ich das Fahrrad. Das ist gesünder und billiger.']],
      q: 'Wie fährt die Person jetzt zur Arbeit?', options: ['Mit dem Fahrrad', 'Mit dem Auto', 'Mit dem Bus'], answer: 0,
      ex: T('"früher" = before (car), "jetzt" = now (bike).', 'Jetzt: mit dem Fahrrad.') },
  ];
  // Teil 4: radio interview, richtig/falsch
  const INTERVIEW21 = [['A', 'Frau Yildiz, Sie haben vor einem Jahr ein Café eröffnet. Warum?'], ['B', 'Ich habe zwanzig Jahre in einem Büro gearbeitet. Das war mir zu langweilig. Ich wollte schon immer gern backen.'],
    ['A', 'Was ist besonders an Ihrem Café?'], ['B', 'Alle Kuchen backe ich selbst, nach Rezepten von meiner Großmutter. Und am Sonntag gibt es ein großes Frühstück.'],
    ['A', 'Ist es schwer, ein eigenes Café zu haben?'], ['B', 'Ja, ich arbeite oft zwölf Stunden am Tag. Aber ich bin sehr glücklich, weil ich jeden Tag nette Leute treffe.']];
  [['Frau Yildiz hat früher in einem Büro gearbeitet.', true, 'She worked in an office for 20 years.', 'Sie hat zwanzig Jahre im Büro gearbeitet.'],
    ['Die Kuchen kauft sie in einer Bäckerei.', false, 'She bakes all the cakes herself.', 'Sie backt alle Kuchen selbst.'],
    ['Am Sonntag gibt es im Café Frühstück.', true, '"am Sonntag gibt es ein großes Frühstück".', '„am Sonntag … Frühstück“.'],
    ['Sie arbeitet nur am Vormittag.', false, 'She often works twelve hours a day.', 'Sie arbeitet oft zwölf Stunden.'],
    ['Frau Yildiz ist mit ihrer Arbeit zufrieden.', true, '"ich bin sehr glücklich".', '„ich bin sehr glücklich“.'],
  ].forEach(([q, answer, en, de], i) => A21.HOEREN.push({ id: `21h4-a-${i + 1}`, part: 4, group: '21h4-a', topic: 'beruf', type: 'tf', audio: INTERVIEW21, q, answer, ex: T(en, de) }));

  // ---- Lesen A2.1 ----
  const group = (prefix, part, topic, kind, text, qs) => qs.map(([q, opts, en, de], i) => ({
    id: `${prefix}-${i + 1}`, part, group: prefix, topic, type: 'mc', kind, text, q, options: opts, answer: 0, ex: T(en, de) }));
  A21.LESEN = [].concat(
    group('21l1-a', 1, 'stadt', 'Zeitungsartikel', 'Immer mehr Menschen fahren mit dem Rad zur Arbeit\nIn unserer Stadt fahren immer mehr Menschen mit dem Fahrrad zur Arbeit. Vor fünf Jahren waren es zehn Prozent, heute sind es schon fünfundzwanzig Prozent. Viele sagen, dass sie so fit bleiben und Geld sparen. Die Stadt baut deshalb neue Radwege: Bis zum nächsten Sommer sollen es zwanzig Kilometer mehr sein. Aber es gibt auch ein Problem: An den Bahnhöfen gibt es zu wenige Parkplätze für Fahrräder.', [
      ['Wie viele Menschen fahren heute mit dem Rad zur Arbeit?', ['25 Prozent', '10 Prozent', '20 Prozent'], 'Today 25 percent (five years ago: 10).', 'Heute fünfundzwanzig Prozent.'],
      ['Was macht die Stadt?', ['Sie baut neue Radwege.', 'Sie verkauft Fahrräder.', 'Sie baut Parkhäuser für Autos.'], '"Die Stadt baut deshalb neue Radwege."', 'Neue Radwege.'],
      ['Was ist ein Problem?', ['Am Bahnhof gibt es zu wenige Fahrradparkplätze.', 'Die Radwege sind zu breit.', 'Fahrräder sind zu teuer.'], 'Too few bike parking spaces at the stations.', 'Zu wenige Parkplätze für Fahrräder.'],
    ]),
    group('21l1-b', 1, 'einkaufen', 'Zeitungsartikel', 'Ein Dorf hilft sich selbst\nIm kleinen Dorf Lindenau gab es seit drei Jahren keinen Laden mehr. Die Bewohner mussten zum Einkaufen zwölf Kilometer in die nächste Stadt fahren. Für ältere Menschen ohne Auto war das ein großes Problem. Deshalb haben die Bewohner zusammen einen Dorfladen gegründet. Dort arbeiten zehn Frauen und Männer ohne Bezahlung, jeweils einen halben Tag pro Woche. Der Laden verkauft Brot, Milch und Gemüse von Bauern aus der Region und hat auch ein kleines Café.', [
      ['Warum war das Einkaufen in Lindenau schwierig?', ['Es gab keinen Laden im Dorf.', 'Der Laden war zu teuer.', 'Der Laden hatte nur am Wochenende offen.'], 'There was no shop for three years.', 'Es gab keinen Laden mehr.'],
      ['Wer arbeitet im Dorfladen?', ['Bewohner ohne Bezahlung', 'Studenten aus der Stadt', 'Die Bauern aus der Region'], '"ohne Bezahlung" = unpaid volunteers.', 'Bewohner ohne Bezahlung.'],
      ['Was gibt es im Laden auch?', ['Ein kleines Café', 'Eine Post', 'Eine Apotheke'], '"hat auch ein kleines Café".', 'Ein kleines Café.'],
    ]),
    group('21l2-a', 2, 'einkaufen', 'Wegweiser im Kaufhaus', 'Kaufhaus Merkur\nUG: Lebensmittel, Getränke\nEG: Kosmetik, Schmuck, Zeitschriften, Information\n1. Stock: Damenmode, Schuhe\n2. Stock: Herrenmode, Sportbekleidung\n3. Stock: Spielwaren, Bücher, Schreibwaren\n4. Stock: Haushaltswaren, Elektrogeräte, Restaurant', [
      ['Sie möchten ein Geburtstagsgeschenk für ein Kind (6 Jahre) kaufen.', ['3. Stock', 'Erdgeschoss', '1. Stock'], 'Toys (Spielwaren) are on the 3rd floor.', 'Spielwaren: 3. Stock.'],
      ['Sie brauchen eine neue Kaffeemaschine.', ['4. Stock', 'Untergeschoss', '2. Stock'], 'Electrical appliances (Elektrogeräte): 4th floor.', 'Elektrogeräte: 4. Stock.'],
      ['Ihr Mann sucht eine Sporthose.', ['2. Stock', '1. Stock', '3. Stock'], 'Sportswear (Sportbekleidung): 2nd floor.', 'Sportbekleidung: 2. Stock.'],
      ['Sie möchten eine Zeitschrift kaufen.', ['Erdgeschoss', '3. Stock', '4. Stock'], 'Magazines: ground floor (EG).', 'Zeitschriften: Erdgeschoss.'],
    ]),
    group('21l3-a', 3, 'feste', 'E-Mail', 'Liebe Ana,\nvielen Dank für deine Einladung zum Grillfest am Samstag! Ich komme sehr gern, aber ich kann erst gegen sieben Uhr da sein, weil ich bis sechs arbeiten muss. Soll ich etwas mitbringen? Ich könnte einen Nudelsalat machen oder Getränke kaufen. Übrigens: Darf ich meinen Freund Tom mitbringen? Er ist neu in der Stadt und kennt noch niemanden.\nBis Samstag!\nKatrin', [
      ['Wann kommt Katrin zum Grillfest?', ['Gegen 19 Uhr', 'Um 18 Uhr', 'Am Nachmittag'], '"gegen sieben Uhr" = around 7 pm.', 'Gegen sieben Uhr.'],
      ['Was möchte Katrin mitbringen?', ['Nudelsalat oder Getränke', 'Einen Kuchen', 'Fleisch zum Grillen'], '"einen Nudelsalat … oder Getränke".', 'Nudelsalat oder Getränke.'],
      ['Warum möchte Katrin Tom mitbringen?', ['Er kennt noch niemanden in der Stadt.', 'Er hat Geburtstag.', 'Er kann gut grillen.'], '"Er ist neu in der Stadt und kennt noch niemanden."', 'Er kennt noch niemanden.'],
    ]),
    [
      { id: '21l4-01', part: 4, topic: 'freizeit', type: 'ad', q: 'Sie möchten in Ihrer Freizeit mit anderen Menschen Musik machen.',
        options: ['Chor „Frohe Stimmen“ sucht neue Sängerinnen und Sänger\nProbe jeden Dienstag, 19 Uhr', 'Konzertkarten für das Wochenende\njetzt online kaufen!'], answer: 0, ex: T('A choir (Chor) makes music together.', 'Im Chor macht man zusammen Musik.') },
      { id: '21l4-02', part: 4, topic: 'beruf', type: 'ad', q: 'Sie suchen eine Teilzeitstelle am Vormittag.',
        options: ['Bäckerei sucht Verkäufer/in\nMo–Fr 6–11 Uhr', 'Restaurant sucht Kellner/in\nfür Abend- und Wochenendschichten'], answer: 0, ex: T('6–11 Uhr is in the morning.', '6–11 Uhr = Vormittag.') },
      { id: '21l4-03', part: 4, topic: 'medien', type: 'ad', q: 'Ihr Laptop ist kaputt.',
        options: ['PC-Doktor\nReparatur von Computern und Handys – schnell und günstig', 'Computerkurs für Senioren\nInternet und E-Mail'], answer: 0, ex: T('Reparatur = repair.', 'Reparatur = etwas wieder ganz machen.') },
      { id: '21l4-04', part: 4, topic: 'wohnen', type: 'ad', q: 'Sie möchten Ihre Nachbarn kennenlernen.',
        options: ['Straßenfest in der Gartenstraße\nSamstag ab 14 Uhr – alle Nachbarn sind willkommen!', '3-Zimmer-Wohnung in der Gartenstraße\nzu vermieten'], answer: 0, ex: T('A street party for all neighbours.', 'Ein Straßenfest für alle Nachbarn.') },
      { id: '21l4-05', part: 4, topic: 'gesundheit', type: 'ad', q: 'Sie möchten lernen, gesünder zu kochen.',
        options: ['Kochkurs „Gesund und lecker“\nfrisches Gemüse, wenig Fett', 'Pizza-Service\nLieferung in 30 Minuten'], answer: 0, ex: T('A cooking course with healthy food.', 'Kochkurs mit gesundem Essen.') },
      { id: '21l4-06', part: 4, topic: 'schule', type: 'ad', q: 'Ihr Kind braucht Hilfe in Mathematik.',
        options: ['Nachhilfe für Schüler\nMathe, Deutsch, Englisch – Tel. 0176 5512340', 'Kinderturnen im Sportverein\nmittwochs 16 Uhr'], answer: 0, ex: T('Nachhilfe = private tutoring.', 'Nachhilfe = Hilfe beim Lernen.') },
    ],
  );

  A21.GRAMMAR = [
    ['g_nebensatz', 'Ich komme heute nicht, weil ich krank ___.', ['bin', 'ist', 'sein'], 'After weil the verb goes to the end: weil ich krank bin.', 'weil: Verb am Ende'],
    ['g_nebensatz', 'Ich glaube, dass der Zug Verspätung ___.', ['hat', 'haben', 'habe'], 'dass-clause: verb at the end, agreeing with "der Zug": hat.', 'dass: Verb am Ende'],
    ['g_nebensatz', 'Wenn das Wetter schön ist, ___ an den See.', ['fahren wir', 'wir fahren', 'fahren'], 'If the sentence starts with the wenn-clause, the main verb comes right after the comma: …, fahren wir.', 'Nebensatz zuerst → Verb direkt nach dem Komma'],
    ['g_nebensatz', 'Welcher Satz ist richtig?', ['Ich lerne Deutsch, weil ich in Deutschland arbeite.', 'Ich lerne Deutsch, weil ich arbeite in Deutschland.', 'Ich lerne Deutsch, weil arbeite ich in Deutschland.'], 'In a weil-clause the verb is at the end.', 'weil: Verb am Ende'],
    ['g_nebensatz', 'Ich weiß, ___ du recht hast.', ['dass', 'weil', 'wenn'], '"Ich weiß, dass …" = I know that …', 'wissen + dass'],
    ['g_nebensatz', 'Warum bist du so müde? – ___ ich schlecht geschlafen habe.', ['Weil', 'Dass', 'Wenn'], 'Answer to "warum?" with "weil".', 'Warum? → weil'],
    ['g_nebensatz', 'Ich hoffe, ___ das Wetter morgen gut ist.', ['dass', 'weil', 'wenn'], 'hoffen + dass.', 'hoffen + dass'],
    ['g_reflexiv', 'Ich freue ___ auf den Urlaub.', ['mich', 'mir', 'sich'], 'sich freuen: ich freue mich.', 'ich → mich'],
    ['g_reflexiv', 'Wir treffen ___ um acht Uhr.', ['uns', 'euch', 'sich'], 'wir → uns.', 'wir → uns'],
    ['g_reflexiv', 'Interessierst du ___ für Fußball?', ['dich', 'dir', 'sich'], 'du → dich.', 'du → dich'],
    ['g_reflexiv', 'Er wäscht ___ jeden Morgen kalt.', ['sich', 'ihn', 'ihm'], 'er/sie/es → sich.', 'er → sich'],
    ['g_reflexiv', 'Kinder, beeilt ___, der Bus kommt!', ['euch', 'dich', 'sich'], 'ihr → euch.', 'ihr → euch'],
    ['g_praeteritum', 'Gestern ___ ich lange arbeiten.', ['musste', 'muss', 'müsste'], 'Past of müssen: musste (no umlaut).', 'müssen → musste'],
    ['g_praeteritum', 'Als Kind ___ ich nicht gut schwimmen.', ['konnte', 'kann', 'könnte'], 'Past of können: konnte. (könnte = would be able to.)', 'können → konnte'],
    ['g_praeteritum', 'Wir ___ ins Kino gehen, aber es war schon zu spät.', ['wollten', 'wollen', 'wollte'], 'Past, wir: wollten.', 'wollen → wir wollten'],
    ['g_praeteritum', 'Früher ___ man im Zug rauchen.', ['durfte', 'darf', 'dürfte'], 'Past of dürfen: durfte.', 'dürfen → durfte'],
    ['g_praep_verb', 'Ich warte ___ den Bus.', ['auf', 'für', 'an'], 'warten auf + accusative.', 'warten auf'],
    ['g_praep_verb', 'Wir freuen uns schon ___ die Ferien.', ['auf', 'an', 'mit'], 'sich freuen auf = look forward to (future).', 'sich freuen auf (Zukunft)'],
    ['g_praep_verb', 'Ich interessiere mich ___ Kunst.', ['für', 'auf', 'über'], 'sich interessieren für.', 'sich interessieren für'],
    ['g_praep_verb', 'Denkst du noch ___ unseren Urlaub?', ['an', 'auf', 'für'], 'denken an.', 'denken an'],
    ['g_praep_verb', 'Er spricht gern ___ seine Arbeit.', ['über', 'an', 'auf'], 'sprechen über = talk about.', 'sprechen über'],
    ['g_praep_verb', 'Hast du Angst ___ Hunden?', ['vor', 'von', 'für'], 'Angst haben vor + dative.', 'Angst haben vor'],
    ['g_praep_verb', 'Ich habe mich sehr ___ dein Geschenk gefreut.', ['über', 'auf', 'für'], 'sich freuen über = be happy about (something that happened).', 'sich freuen über (schon passiert)'],
    ['g_adjektiv', 'Der ___ Mantel ist sehr schön.', ['neue', 'neuen', 'neuer'], 'der + adjective -e: der neue Mantel.', 'der neue Mantel'],
    ['g_adjektiv', 'Ich kaufe den ___ Mantel.', ['neuen', 'neue', 'neuer'], 'Accusative masculine: den neuen Mantel.', 'Akkusativ: den neuen'],
    ['g_adjektiv', 'Die ___ Wohnung ist zu teuer.', ['große', 'großen', 'großer'], 'die + -e: die große Wohnung.', 'die große'],
    ['g_adjektiv', 'Ich nehme das ___ Kleid.', ['rote', 'roten', 'roter'], 'das + -e: das rote Kleid.', 'das rote'],
    ['g_adjektiv', 'Wie findest du die ___ Schuhe?', ['schwarzen', 'schwarze', 'schwarzer'], 'Plural after die: -en.', 'Plural: die schwarzen'],
    ['g_konjunktiv', 'Können Sie das Fenster öffnen? (höflicher) → ___ Sie bitte das Fenster öffnen?', ['Könnten', 'Konnten', 'Kann'], 'More polite with Konjunktiv II: Könnten Sie …?', 'Höflich: Könnten Sie …?'],
    ['g_komparativ', 'Das ist das ___ Haus in unserer Straße.', ['größte', 'größer', 'groß'], 'Superlative before a noun: das größte Haus.', 'Superlativ: das größte'],
    ['g_komparativ', 'Im Sommer ist es am ___.', ['wärmsten', 'wärmer', 'warm'], 'Superlative with am: am wärmsten.', 'am wärmsten'],
    ['g_komparativ', 'Meine Wohnung ist nicht so groß ___ deine.', ['wie', 'als', 'dass'], '"so … wie" = as … as.', 'so … wie'],
    ['g_komparativ', 'Mein Bruder ist größer ___ ich.', ['als', 'wie', 'dann'], 'Comparative + als.', 'Komparativ + als'],
  ];
  A21.PHRASES = [
    ['freizeit', 'You agree with your friend.', 'Sie stimmen Ihrer Freundin zu.', ['Da hast du recht.', 'Da hast du richtig.', 'Da bist du recht.']],
    ['freizeit', 'You give your opinion.', 'Sie sagen Ihre Meinung.', ['Ich finde, dass das eine gute Idee ist.', 'Ich finde, dass das ist eine gute Idee.', 'Ich finde, das eine gute Idee ist.']],
    ['freizeit', 'You suggest Saturday.', 'Sie schlagen Samstag vor.', ['Wie wäre es mit Samstag?', 'Wie war es mit Samstag?', 'Wie ist mit Samstag?']],
    ['termine', 'Saturday does not suit you.', 'Samstag passt Ihnen nicht.', ['Samstag passt mir leider nicht.', 'Samstag passe ich leider nicht.', 'Samstag passt mich leider nicht.']],
    ['beruf', 'On the phone you want to speak to Frau Weber.', 'Am Telefon möchten Sie mit Frau Weber sprechen.', ['Kann ich bitte mit Frau Weber sprechen?', 'Kann ich bitte Frau Weber sprechen mit?', 'Kann ich bitte zu Frau Weber sprechen?']],
    ['wohnen', 'Your neighbours are too loud.', 'Ihre Nachbarn sind zu laut.', ['Könnten Sie bitte etwas leiser sein?', 'Könnten Sie bitte etwas lauter sein?', 'Konnten Sie bitte leise gewesen?']],
    ['alltag', 'You ask a friend for advice.', 'Sie fragen einen Freund um Rat.', ['Was würdest du mir empfehlen?', 'Was wurdest du mir empfehlen?', 'Was empfiehlst du mich?']],
    ['beruf', 'Your friend has a new job.', 'Ihre Freundin hat eine neue Stelle.', ['Herzlichen Glückwunsch zur neuen Stelle!', 'Gute Besserung zur neuen Stelle!', 'Guten Appetit zur neuen Stelle!']],
    ['termine', 'You arrive late for a meeting.', 'Sie kommen zu spät zu einem Termin.', ['Entschuldigung, dass ich zu spät komme.', 'Entschuldigung, dass ich komme zu spät.', 'Entschuldigung, weil ich zu spät.']],
  ];
  A21.SENTENCES = `
Ich lerne Deutsch, weil ich in Deutschland arbeite.|I learn German because I work in Germany.|beruf
Ich glaube, dass morgen die Sonne scheint.|I think the sun will shine tomorrow.|wetter
Wenn ich Zeit habe, gehe ich ins Kino.|When I have time, I go to the cinema.|freizeit
Ich freue mich schon auf das Wochenende.|I am already looking forward to the weekend.|freizeit
Wir haben uns im Deutschkurs kennengelernt.|We met in the German course.|freizeit
Gestern konnte ich nicht zur Arbeit gehen.|Yesterday I could not go to work.|beruf
Der neue Kollege ist sehr nett.|The new colleague is very nice.|beruf
Ich warte seit zwanzig Minuten auf den Bus.|I have been waiting for the bus for twenty minutes.|stadt
Am Wochenende musste ich lange arbeiten.|At the weekend I had to work for a long time.|beruf
Interessierst du dich für Fußball?|Are you interested in football?|freizeit
Er sagt, dass er keine Zeit hat.|He says that he has no time.|termine
Ich bleibe heute zu Hause, weil ich krank bin.|I am staying at home today because I am ill.|gesundheit
`.trim().split('\n').map((l) => { const [de, en, topic] = l.split('|'); return { de, en, topic }; });
  A21.FORMS = [];
  A21.MESSAGES = [
    { id: 's2-c01', part: 1, words: '20–30', topic: 'freizeit',
      situation: T('You are meeting your friend Paul, but your bus is late. Write him a text message.', 'Sie treffen Ihren Freund Paul, aber Ihr Bus hat Verspätung. Schreiben Sie ihm eine SMS.'),
      points: [
        { de: 'Entschuldigen Sie sich.', en: 'Apologise', kw: 'entschuldig|sorry|tut mir leid|leider' },
        { de: 'Warum kommen Sie später?', en: 'Why you are late', kw: 'bus|stau|zug|verspätung|verpasst' },
        { de: 'Wann sind Sie da? / Was soll Paul machen?', en: 'When you arrive / what Paul should do', kw: 'uhr|minuten|warte|bestell|später|gleich' },
      ],
      model: 'Hallo Paul, tut mir leid, mein Bus hat 20 Minuten Verspätung. Ich bin um halb acht da. Kannst du schon mal einen Tisch im Café nehmen? Bis gleich! Anna' },
    { id: 's2-c02', part: 2, words: '30–40', topic: 'beruf',
      situation: T('Your colleague Frau Lehmann has invited you to her farewell party. Write to her.', 'Ihre Kollegin Frau Lehmann hat Sie zu ihrer Abschiedsfeier eingeladen. Schreiben Sie ihr.'),
      points: [
        { de: 'Bedanken Sie sich und sagen Sie zu.', en: 'Thank her and accept', kw: 'danke|vielen dank|komme|gern' },
        { de: 'Fragen Sie, was Sie mitbringen sollen.', en: 'Ask what you should bring', kw: 'mitbringen|bringen|kuchen|salat|getränke' },
        { de: 'Fragen Sie, ob Sie jemanden mitbringen dürfen.', en: 'Ask if you may bring someone', kw: 'darf|mann|frau|partner|freund|freundin|kinder' },
      ],
      model: 'Liebe Frau Lehmann,\nvielen Dank für die Einladung! Ich komme sehr gern zu Ihrer Feier. Soll ich etwas mitbringen, vielleicht einen Kuchen? Und darf ich auch meinen Mann mitbringen?\nViele Grüße\nIrina Popescu' },
    { id: 's2-c03', part: 2, words: '30–40', topic: 'freizeit',
      situation: T('You want to join the sports club "TSV Grün-Weiß". Write an email.', 'Sie möchten Mitglied im Sportverein „TSV Grün-Weiß“ werden. Schreiben Sie eine E-Mail.'),
      points: [
        { de: 'Welchen Sport möchten Sie machen und warum?', en: 'Which sport and why', kw: 'sport|fußball|schwimm|tennis|yoga|gymnastik|weil|gesund|fit' },
        { de: 'Wann möchten Sie trainieren?', en: 'When you want to train', kw: 'wann|zeit|abend|wochenende|uhr|montag|dienstag|mittwoch|donnerstag|freitag|samstag' },
        { de: 'Fragen Sie nach dem Preis.', en: 'Ask about the price', kw: 'kostet|preis|beitrag|euro|monat' },
      ],
      model: 'Sehr geehrte Damen und Herren,\nich möchte gern im Verein schwimmen, weil ich etwas für meine Gesundheit tun möchte. Ich habe am Dienstag und Donnerstag abends Zeit. Wie viel kostet der Beitrag pro Monat?\nMit freundlichen Grüßen\nAhmet Kaya' },
    { id: 's2-c04', part: 1, words: '20–30', topic: 'schule',
      situation: T('You cannot go to your German course today. Write a text message to your classmate Sara.', 'Sie können heute nicht zum Deutschkurs gehen. Schreiben Sie Ihrer Kurskollegin Sara eine SMS.'),
      points: [
        { de: 'Sagen Sie, dass Sie nicht kommen.', en: 'Say you are not coming', kw: 'nicht|kann nicht|leider' },
        { de: 'Nennen Sie den Grund.', en: 'Give the reason', kw: 'weil|krank|arzt|arbeit|kind|termin' },
        { de: 'Bitten Sie Sara um etwas.', en: 'Ask Sara for something', kw: 'hausaufgabe|notizen|schick|sag|bitte|foto' },
      ],
      model: 'Hallo Sara, ich kann heute leider nicht zum Kurs kommen, weil mein Sohn krank ist. Kannst du mir bitte die Hausaufgaben schicken? Danke! Liebe Grüße, Elena' },
  ];
  A21.TOPIC_CARDS = [
    ['beruf', 'Arbeit', 'Kollegen', 'Wie sind deine Kollegen?', 'Meine Kollegen sind sehr nett. Wir essen oft zusammen.', 'kolleg'],
    ['gesundheit', 'Gesundheit', 'Sport', 'Wie oft machst du Sport?', 'Ich gehe zweimal pro Woche schwimmen.', 'sport'],
    ['medien', 'Medien', 'Handy', 'Wie lange benutzt du jeden Tag dein Handy?', 'Ungefähr zwei Stunden, meistens für Nachrichten.', 'handy'],
    ['wohnen', 'Wohnen', 'Nachbarn', 'Kennst du deine Nachbarn?', 'Ja, ich kenne meine Nachbarin gut. Sie hilft mir oft.', 'nachbar'],
    ['schule', 'Schule', 'Lieblingsfach', 'Was war dein Lieblingsfach in der Schule?', 'Mein Lieblingsfach war Mathematik.', 'fach|schule'],
    ['freizeit', 'Freizeit', 'Verein', 'Bist du in einem Verein?', 'Nein, aber ich möchte gern in einem Chor singen.', 'verein'],
  ];
  A21.REQUEST_CARDS = [];
  A21.MONOLOG = [
    ['wohnen', 'Wohnen', [['Wo wohnen Sie?', 'Where you live', 'wohne|in '], ['Wie groß ist Ihre Wohnung?', 'How big your home is', 'zimmer|groß|klein|quadratmeter'], ['Was gefällt Ihnen?', 'What you like', 'gefällt|mag|schön|gern'], ['Was möchten Sie ändern?', 'What you would change', 'möchte|würde|lieber|wunsch|balkon|garten']],
      'Ich wohne in einer Dreizimmerwohnung in Köln. Die Wohnung ist nicht sehr groß, aber hell. Mir gefällt besonders der Balkon, weil ich dort im Sommer frühstücke. Ich möchte gern eine größere Küche haben, weil ich gern koche.'],
    ['alltag', 'Mein Alltag', [['Wann stehen Sie auf?', 'When you get up', 'stehe|uhr|auf'], ['Wie kommen Sie zur Arbeit oder zum Kurs?', 'How you get to work or class', 'fahre|bus|bahn|auto|fahrrad|zu fuß|gehe'], ['Was machen Sie mittags?', 'What you do at lunchtime', 'mittag|esse|pause'], ['Was machen Sie am Abend?', 'What you do in the evening', 'abend|koche|fernsehen|lese|spazieren|familie']],
      'Ich stehe jeden Tag um sechs Uhr auf. Ich fahre mit dem Bus zur Arbeit. Mittags esse ich mit meinen Kollegen in der Kantine. Am Abend koche ich für meine Familie und danach lese ich oft noch ein Buch.'],
    ['freizeit', 'Freizeit', [['Was machen Sie gern?', 'What you like doing', 'gern|mag|hobby'], ['Mit wem?', 'Who with', 'mit|freund|familie|allein|mann|frau|kinder'], ['Wie oft?', 'How often', 'oft|jeden|einmal|zweimal|woche|wochenende|manchmal'], ['Was haben Sie letztes Wochenende gemacht?', 'What you did last weekend', 'habe|bin|gemacht|gegangen|gefahren|besucht']],
      'In meiner Freizeit gehe ich gern spazieren, am liebsten mit meiner Freundin. Wir gehen fast jedes Wochenende in den Park. Letztes Wochenende sind wir an den See gefahren und haben ein Picknick gemacht.'],
  ];
  A21.PLAN = [
    ['beruf', T('Your colleague is leaving the company. Together, buy a present. Find a time to go shopping.', 'Eine Kollegin verlässt die Firma. Sie möchten zusammen ein Geschenk kaufen. Finden Sie einen Termin.'),
      'Hast du am Dienstag Zeit? – Am Dienstag kann ich leider nicht, da habe ich einen Arzttermin. Wie wäre es mit Mittwoch nach der Arbeit? – Ja, gut. Um fünf Uhr? – Einverstanden. Was wollen wir kaufen? – Vielleicht Blumen und ein Buch?'],
    ['freizeit', T('You want to make a trip together on Sunday. Plan where to go, when to meet and what to bring.', 'Sie möchten am Sonntag zusammen einen Ausflug machen. Planen Sie: wohin, wann und was Sie mitnehmen.'),
      'Wollen wir am Sonntag an den See fahren? – Gute Idee! Wann treffen wir uns? – Um zehn Uhr am Bahnhof? – Das ist mir ein bisschen früh. Lieber um elf? – Okay. Ich bringe Brötchen mit. – Und ich mache einen Salat.'],
  ];

  // ================= A2.2 static content =================
  const A22 = {};
  A22.HOEREN = [
    { id: '22h1-01', part: 1, topic: 'freizeit', type: 'mc',
      audio: [['A', 'Gute Nachrichten für alle Leseratten: Die Stadtbibliothek hat ab nächster Woche auch sonntags geöffnet, von elf bis siebzehn Uhr. Außerdem kann man jetzt E-Books kostenlos ausleihen.']],
      q: 'Was ist neu in der Bibliothek?', options: ['Sie hat auch am Sonntag geöffnet.', 'Bücher kosten jetzt Geld.', 'Sie schließt am Sonntag früher.'], answer: 0,
      ex: T('"ab nächster Woche auch sonntags geöffnet" = also open on Sundays from next week.', 'Ab nächster Woche auch sonntags geöffnet.') },
    { id: '22h1-02', part: 1, topic: 'einkaufen', type: 'mc',
      audio: [['A', 'Guten Tag, hier ist der Kundenservice von Möbel-Profi. Leider können wir Ihr Regal nicht wie geplant am Freitag liefern. Die Lieferung kommt erst am Montag. Wir bitten um Entschuldigung.']],
      q: 'Wann kommt das Regal?', options: ['Am Montag', 'Am Freitag', 'Morgen'], answer: 0,
      ex: T('"erst am Montag" = not until Monday.', 'Die Lieferung kommt erst am Montag.') },
    { id: '22h1-03', part: 1, topic: 'medien', type: 'mc',
      audio: [['A', 'Sie möchten zwei Karten für das große Sommerkonzert im Stadtpark gewinnen? Dann rufen Sie jetzt bei uns im Studio an. Die ersten fünf Anrufer gewinnen!']],
      q: 'Was muss man machen, um Karten zu gewinnen?', options: ['Beim Radio anrufen', 'Eine E-Mail schreiben', 'In den Stadtpark gehen'], answer: 0,
      ex: T('"rufen Sie jetzt bei uns im Studio an" = call the radio station.', 'Man muss im Studio anrufen.') },
    { id: '22h1-04', part: 1, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Hallo Jonas, hier ist Mehmet. Ich wollte fragen, ob du mir am Samstag beim Umzug helfen könntest. Es wäre toll, wenn du um neun Uhr da sein könntest. Danach gibt es Pizza für alle!']],
      q: 'Was möchte Mehmet?', options: ['Hilfe beim Umzug', 'Zusammen Pizza essen gehen', 'Am Samstag arbeiten'], answer: 0,
      ex: T('"ob du mir beim Umzug helfen könntest" = whether you could help with the move.', 'Er braucht Hilfe beim Umzug.') },
    { id: '22h1-05', part: 1, topic: 'reisen', type: 'mc',
      audio: [['A', 'Wegen Bauarbeiten werden die Züge nach Bremen heute über Hannover umgeleitet. Die Fahrzeit verlängert sich um etwa vierzig Minuten.']],
      q: 'Was passiert mit den Zügen nach Bremen?', options: ['Sie brauchen etwa 40 Minuten länger.', 'Sie fallen aus.', 'Sie fahren früher ab.'], answer: 0,
      ex: T('"Die Fahrzeit verlängert sich um vierzig Minuten" = the journey takes 40 minutes longer.', 'Die Fahrt dauert vierzig Minuten länger.') },
    { id: '22h1-06', part: 1, topic: 'umwelt', type: 'mc',
      audio: [['A', 'Unser Umwelttipp der Woche: Nehmen Sie zum Einkaufen eine eigene Tasche mit. So vermeiden Sie Plastik. Und kaufen Sie Obst und Gemüse aus der Region.']],
      q: 'Was empfiehlt das Radio?', options: ['Eine eigene Einkaufstasche mitnehmen', 'Mehr Plastiktüten kaufen', 'Obst aus anderen Ländern kaufen'], answer: 0,
      ex: T('"Nehmen Sie eine eigene Tasche mit" = bring your own bag.', 'Eine eigene Tasche mitnehmen.') },
    { id: '22h1-07', part: 1, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Liebe Mieterinnen und Mieter, am Mittwoch wird das Treppenhaus gestrichen. Bitte stellen Sie bis Dienstagabend keine Schuhe oder Fahrräder in den Flur.']],
      q: 'Was sollen die Mieter machen?', options: ['Nichts in den Flur stellen', 'Am Mittwoch beim Streichen helfen', 'Ihre Wohnung streichen'], answer: 0,
      ex: T('"keine Schuhe oder Fahrräder in den Flur" = nothing in the hallway. Passive: "wird gestrichen" = is being painted.', 'Nichts in den Flur stellen.') },
    { id: '22h1-08', part: 1, topic: 'gesundheit', type: 'mc',
      audio: [['A', 'Guten Tag, Frau Petrović, hier ist die Zahnarztpraxis Doktor Krüger. Wir möchten Sie an Ihren Termin morgen um halb neun erinnern. Wenn Sie nicht kommen können, sagen Sie bitte bis heute achtzehn Uhr ab.']],
      q: 'Bis wann soll Frau Petrović absagen?', options: ['Heute bis 18 Uhr', 'Morgen um 8:30 Uhr', 'Morgen Abend'], answer: 0,
      ex: T('"bis heute achtzehn Uhr" = by 6 pm today.', 'Bis heute 18 Uhr.') },
    { id: '22h3-01', part: 3, topic: 'freizeit', type: 'mc',
      audio: [['A', 'Wenn ich mehr Zeit hätte, würde ich einen Tanzkurs machen.'], ['B', 'Warum machst du es nicht am Wochenende? Es gibt einen Kurs am Samstagvormittag.']],
      q: 'Was schlägt die Person vor?', options: ['Einen Kurs am Samstag', 'Weniger zu arbeiten', 'Einen Kurs am Abend'], answer: 0,
      ex: T('"Es gibt einen Kurs am Samstagvormittag."', 'Einen Kurs am Samstagvormittag.') },
    { id: '22h3-02', part: 3, topic: 'einkaufen', type: 'mc',
      audio: [['A', 'Weißt du, ob der Supermarkt am Feiertag geöffnet hat?'], ['B', 'Nein, der hat zu. Aber die Tankstelle an der Ecke hat immer offen.']],
      q: 'Wo kann man am Feiertag einkaufen?', options: ['An der Tankstelle', 'Im Supermarkt', 'Nirgends'], answer: 0,
      ex: T('The supermarket is closed; the petrol station is always open.', 'Die Tankstelle hat immer offen.') },
    { id: '22h3-03', part: 3, topic: 'einkaufen', type: 'mc',
      audio: [['A', 'Ich habe online Schuhe bestellt, aber sie passen nicht.'], ['B', 'Du kannst sie innerhalb von vierzehn Tagen kostenlos zurückschicken.']],
      q: 'Was kann man mit den Schuhen machen?', options: ['Sie kostenlos zurückschicken', 'Sie im Geschäft umtauschen', 'Nichts mehr'], answer: 0,
      ex: T('"innerhalb von vierzehn Tagen kostenlos zurückschicken" = send back free within 14 days.', 'Kostenlos zurückschicken.') },
    { id: '22h3-04', part: 3, topic: 'reisen', type: 'mc',
      audio: [['A', 'Was hast du gemacht, als du in Berlin warst?'], ['B', 'Ich habe viele Museen besucht, und am letzten Tag war ich im Theater. Das war das Beste!']],
      q: 'Was hat der Person am besten gefallen?', options: ['Das Theater', 'Die Museen', 'Das Essen'], answer: 0,
      ex: T('"im Theater. Das war das Beste!"', 'Das Theater war das Beste.') },
    { id: '22h3-05', part: 3, topic: 'wohnen', type: 'mc',
      audio: [['A', 'Hast du den Mann gesehen, der gestern neben uns eingezogen ist?'], ['B', 'Ja, er hat sich schon vorgestellt. Er ist Lehrer und kommt aus Hamburg.']],
      q: 'Woher kommt der neue Nachbar?', options: ['Aus Hamburg', 'Aus München', 'Aus Köln'], answer: 0,
      ex: T('"kommt aus Hamburg". Relative clause: "der Mann, der … eingezogen ist".', 'Er kommt aus Hamburg.') },
    { id: '22h3-06', part: 3, topic: 'beruf', type: 'mc',
      audio: [['A', 'Du siehst müde aus.'], ['B', 'Ja, ich habe diese Woche zehn Überstunden gemacht. Am Freitag nehme ich mir frei.']],
      q: 'Was macht die Person am Freitag?', options: ['Sie hat frei.', 'Sie macht Überstunden.', 'Sie geht zum Arzt.'], answer: 0,
      ex: T('"Am Freitag nehme ich mir frei" = I am taking Friday off.', 'Am Freitag hat sie frei.') },
    { id: '22h3-07', part: 3, topic: 'stadt', type: 'mc',
      audio: [['A', 'Könnten Sie mir sagen, wo hier eine Post ist?'], ['B', 'Gehen Sie über die Brücke und dann die erste Straße rechts. Die Post ist im Einkaufszentrum.']],
      q: 'Wo ist die Post?', options: ['Im Einkaufszentrum', 'Neben der Brücke', 'In der ersten Straße links'], answer: 0,
      ex: T('"Die Post ist im Einkaufszentrum."', 'Im Einkaufszentrum.') },
    { id: '22h3-08', part: 3, topic: 'feste', type: 'mc',
      audio: [['A', 'Wie war die Hochzeit von deiner Cousine?'], ['B', 'Wunderschön! Die Feier war in einem alten Schloss, und wir haben bis drei Uhr morgens getanzt.']],
      q: 'Wo war die Hochzeitsfeier?', options: ['In einem Schloss', 'In einem Restaurant', 'In einem Garten'], answer: 0,
      ex: T('"in einem alten Schloss" = in an old castle.', 'In einem alten Schloss.') },
  ];
  const INTERVIEW22 = [['A', 'Herr Becker, Sie arbeiten ehrenamtlich in einem Sprachcafé. Was ist das?'], ['B', 'Das ist ein Treffpunkt für Menschen, die Deutsch lernen. Jeden Donnerstag kommen etwa dreißig Leute in die Stadtbibliothek und sprechen zusammen Deutsch.'],
    ['A', 'Bekommen Sie Geld dafür?'], ['B', 'Nein, ich mache das in meiner Freizeit. Früher war ich Lehrer, jetzt bin ich Rentner und habe viel Zeit.'],
    ['A', 'Was gefällt Ihnen besonders?'], ['B', 'Ich lerne Menschen aus der ganzen Welt kennen. Letzte Woche hat mich eine Familie aus Syrien zum Essen eingeladen. Das war sehr schön.']];
  [['Das Sprachcafé ist jeden Donnerstag.', true, '"Jeden Donnerstag kommen etwa dreißig Leute".', 'Jeden Donnerstag.'],
    ['Herr Becker bekommt Geld für seine Arbeit.', false, 'ehrenamtlich = voluntary, unpaid.', 'Er arbeitet ehrenamtlich, ohne Geld.'],
    ['Herr Becker arbeitet noch als Lehrer.', false, 'He used to be a teacher; now he is retired (Rentner).', 'Früher Lehrer, jetzt Rentner.'],
    ['Im Sprachcafé sprechen die Leute Deutsch.', true, '"sprechen zusammen Deutsch".', 'Sie sprechen zusammen Deutsch.'],
    ['Eine Familie hat Herrn Becker zum Essen eingeladen.', true, '"hat mich eine Familie … zum Essen eingeladen".', 'Eine Familie aus Syrien hat ihn eingeladen.'],
  ].forEach(([q, answer, en, de], i) => A22.HOEREN.push({ id: `22h4-a-${i + 1}`, part: 4, group: '22h4-a', topic: 'freizeit', type: 'tf', audio: INTERVIEW22, q, answer, ex: T(en, de) }));

  A22.LESEN = [].concat(
    group('22l1-a', 1, 'umwelt', 'Zeitungsartikel', 'Weniger Plastik im Supermarkt\nSeit Januar gibt es im Supermarkt „Frischmarkt“ keine Plastiktüten mehr. Kunden können ihre eigenen Taschen mitbringen oder Papiertüten für zwanzig Cent kaufen. Obst und Gemüse werden ohne Verpackung verkauft. Am Anfang waren manche Kunden unzufrieden, aber inzwischen finden die meisten die Idee gut. Der Supermarkt hat so in einem Jahr fast zwei Tonnen Plastik gespart. Jetzt wollen auch andere Geschäfte in der Stadt mitmachen.', [
      ['Was gibt es im „Frischmarkt“ nicht mehr?', ['Plastiktüten', 'Papiertüten', 'Obst und Gemüse'], 'No more plastic bags since January.', 'Keine Plastiktüten mehr.'],
      ['Wie fanden die Kunden die Idee am Anfang?', ['Manche waren unzufrieden.', 'Alle waren begeistert.', 'Niemand hat es bemerkt.'], '"Am Anfang waren manche Kunden unzufrieden."', 'Manche waren unzufrieden.'],
      ['Was planen andere Geschäfte?', ['Sie wollen auch mitmachen.', 'Sie verkaufen mehr Plastiktüten.', 'Sie schließen im Januar.'], '"Jetzt wollen auch andere Geschäfte mitmachen."', 'Sie wollen mitmachen.'],
    ]),
    group('22l1-b', 1, 'beruf', 'Zeitungsartikel', 'Arbeiten von zu Hause\nSeit zwei Jahren arbeitet Martina Kraus, 42, drei Tage pro Woche im Homeoffice. Sie spart so jeden Tag eine Stunde Fahrzeit. „Ich kann morgens länger frühstücken und habe mehr Zeit für meine Kinder“, sagt sie. Aber es gibt auch Nachteile: Manchmal fehlen ihr die Gespräche mit den Kollegen. Deshalb geht sie am Montag und am Freitag ins Büro. Ihre Firma findet das Modell gut, weil die Mitarbeiter zufriedener sind.', [
      ['Wie oft arbeitet Frau Kraus zu Hause?', ['Drei Tage pro Woche', 'Jeden Tag', 'Nur am Freitag'], '"drei Tage pro Woche im Homeoffice".', 'Drei Tage pro Woche.'],
      ['Was ist für Frau Kraus ein Nachteil?', ['Sie hat weniger Kontakt mit Kollegen.', 'Sie muss länger fahren.', 'Sie verdient weniger Geld.'], '"Manchmal fehlen ihr die Gespräche mit den Kollegen."', 'Ihr fehlen die Gespräche mit Kollegen.'],
      ['Warum findet die Firma das Modell gut?', ['Die Mitarbeiter sind zufriedener.', 'Die Firma spart Geld für Büros.', 'Die Mitarbeiter arbeiten länger.'], '"weil die Mitarbeiter zufriedener sind".', 'Die Mitarbeiter sind zufriedener.'],
    ]),
    group('22l2-a', 2, 'schule', 'Volkshochschule – Raumplan', 'Volkshochschule – Programm Herbst\nRaum 101: Englisch für Anfänger\nRaum 102: Spanisch A2\nRaum 201: Computer: Fotos bearbeiten\nRaum 202: Bewerbungstraining\nRaum 301: Kochen: Italienische Küche\nRaum 302: Yoga und Entspannung\nSporthalle: Rückengymnastik', [
      ['Sie möchten lernen, wie man eine gute Bewerbung schreibt.', ['Raum 202', 'Raum 201', 'Raum 101'], 'Bewerbungstraining = training for job applications.', 'Bewerbungstraining: Raum 202.'],
      ['Sie haben oft Rückenschmerzen.', ['Sporthalle', 'Raum 302', 'Raum 301'], 'Rückengymnastik = exercises for your back.', 'Rückengymnastik: Sporthalle.'],
      ['Sie möchten Ihre Urlaubsbilder am Computer schöner machen.', ['Raum 201', 'Raum 202', 'Raum 102'], '"Fotos bearbeiten" = edit photos.', 'Fotos bearbeiten: Raum 201.'],
      ['Sie fahren nächstes Jahr nach Madrid und haben schon etwas Spanisch gelernt.', ['Raum 102', 'Raum 101', 'Raum 301'], 'Spanisch A2 is for people who already know some Spanish.', 'Spanisch A2: Raum 102.'],
    ]),
    group('22l3-a', 3, 'einkaufen', 'E-Mail', 'Sehr geehrte Damen und Herren,\nam 3. März habe ich bei Ihnen online eine Kaffeemaschine bestellt (Bestellnummer 48213). Leider ist das Paket bis heute nicht angekommen. Auf Ihrer Webseite steht, dass die Lieferung zwei bis drei Tage dauert. Könnten Sie mir bitte sagen, wo mein Paket ist? Wenn die Kaffeemaschine nicht bis Freitag kommt, möchte ich die Bestellung stornieren und mein Geld zurückbekommen.\nMit freundlichen Grüßen\nIgor Smirnov', [
      ['Warum schreibt Herr Smirnov?', ['Sein Paket ist nicht angekommen.', 'Die Kaffeemaschine ist kaputt.', 'Er möchte eine zweite Maschine bestellen.'], '"Leider ist das Paket bis heute nicht angekommen."', 'Das Paket ist nicht angekommen.'],
      ['Wie lange soll die Lieferung normalerweise dauern?', ['Zwei bis drei Tage', 'Eine Woche', 'Bis Freitag'], '"dass die Lieferung zwei bis drei Tage dauert".', 'Zwei bis drei Tage.'],
      ['Was möchte Herr Smirnov, wenn die Maschine nicht bis Freitag kommt?', ['Sein Geld zurück', 'Eine andere Maschine', 'Einen Gutschein'], '"mein Geld zurückbekommen".', 'Er möchte sein Geld zurück.'],
    ]),
    [
      { id: '22l4-01', part: 4, topic: 'wohnen', type: 'ad', q: 'Sie möchten Ihre alten Möbel verschenken.',
        options: ['Sozialkaufhaus\nnimmt gut erhaltene Möbel kostenlos an – wir holen ab!', 'Möbelhaus Krone\nNeue Küchen 20 % billiger'], answer: 0, ex: T('The second-hand charity shop takes furniture for free.', 'Das Sozialkaufhaus nimmt Möbel kostenlos an.') },
      { id: '22l4-02', part: 4, topic: 'reisen', type: 'ad', q: 'Sie suchen eine günstige Unterkunft für eine Klassenfahrt.',
        options: ['Jugendherberge am See\nMehrbettzimmer ab 25 € pro Nacht, Gruppenpreise', 'Wellnesshotel Sonne\nDoppelzimmer mit Spa ab 180 €'], answer: 0, ex: T('The youth hostel has cheap group prices.', 'Die Jugendherberge ist günstig für Gruppen.') },
      { id: '22l4-03', part: 4, topic: 'umwelt', type: 'ad', q: 'Sie möchten am Wochenende etwas für die Natur tun.',
        options: ['Naturschutzverein sucht Helferinnen und Helfer\nBäume pflanzen am Samstag', 'Gartencenter\nPflanzen im Angebot'], answer: 0, ex: T('Planting trees helps nature.', 'Bäume pflanzen hilft der Natur.') },
      { id: '22l4-04', part: 4, topic: 'einkaufen', type: 'ad', q: 'Ihre Waschmaschine ist kaputt. Sie haben noch Garantie.',
        options: ['Kundenservice Weißwasch\nGarantiefälle: Tel. 0800 334455', 'Gebrauchte Waschmaschinen\nab 99 €'], answer: 0, ex: T('With a guarantee, contact the manufacturer\'s customer service.', 'Bei Garantie: Kundenservice.') },
      { id: '22l4-05', part: 4, topic: 'reisen', type: 'ad', q: 'Sie möchten ein Buch über Wien lesen, bevor Sie dorthin reisen.',
        options: ['Buchhandlung Seitenweise\ngroße Auswahl an Reiseführern', 'Reisebüro Fernweh\nLast-Minute-Flüge nach Wien'], answer: 0, ex: T('Reiseführer = travel guidebook.', 'Ein Reiseführer ist ein Buch über eine Stadt oder ein Land.') },
      { id: '22l4-06', part: 4, topic: 'schule', type: 'ad', q: 'Sie wollen abends Deutsch sprechen üben, aber nicht viel Geld ausgeben.',
        options: ['Sprachcafé in der Stadtbibliothek\njeden Donnerstag 18 Uhr – kostenlos', 'Privatunterricht Deutsch\n45 € pro Stunde'], answer: 0, ex: T('kostenlos = free.', 'kostenlos = ohne Geld.') },
    ],
  );

  A22.GRAMMAR = [
    ['g_konjunktiv', 'Wenn ich reich ___, würde ich ein Haus kaufen.', ['wäre', 'war', 'bin'], 'Unreal condition: wenn … wäre, würde …', 'irreal: wäre'],
    ['g_konjunktiv', 'Ich ___ gern mehr Zeit für meine Familie.', ['hätte', 'hatte', 'habe'], 'Wish: ich hätte gern … (Konjunktiv II of haben).', 'Wunsch: ich hätte gern'],
    ['g_konjunktiv', 'An deiner Stelle ___ ich zum Arzt gehen.', ['würde', 'wurde', 'werde'], 'Advice: An deiner Stelle würde ich …', 'Rat: An deiner Stelle würde ich …'],
    ['g_konjunktiv', '___ Sie mir bitte sagen, wie spät es ist?', ['Könnten', 'Konnten', 'Kannst'], 'Polite request: Könnten Sie …?', 'höflich: Könnten Sie …?'],
    ['g_konjunktiv', 'Du ___ weniger arbeiten. (Ratschlag)', ['solltest', 'solltet', 'sollte'], 'Advice: du solltest …', 'Rat: du solltest'],
    ['g_konjunktiv', 'Es ___ schön, wenn du kommen könntest.', ['wäre', 'war', 'würde'], 'Konjunktiv II of sein: wäre.', 'sein → wäre'],
    ['g_relativ', 'Das ist der Mann, ___ neben mir wohnt.', ['der', 'den', 'dem'], 'The man is the subject of the relative clause → der.', 'Subjekt → der'],
    ['g_relativ', 'Das ist die Frau, ___ ich im Kurs kennengelernt habe.', ['die', 'der', 'den'], 'Accusative feminine relative pronoun: die.', 'Akkusativ feminin: die'],
    ['g_relativ', 'Das Buch, ___ du mir geschenkt hast, ist toll.', ['das', 'den', 'dem'], 'das Buch → das.', 'das Buch → das'],
    ['g_relativ', 'Wie heißt der Film, ___ wir gestern gesehen haben?', ['den', 'der', 'dem'], 'Accusative masculine: den (wir haben den Film gesehen).', 'Akkusativ maskulin: den'],
    ['g_relativ', 'Die Kinder, ___ im Garten spielen, sind laut.', ['die', 'den', 'der'], 'Plural subject: die.', 'Plural: die'],
    ['g_relativ', 'Das ist der Kollege, ___ ich oft helfe.', ['dem', 'den', 'der'], 'helfen + dative: dem.', 'helfen + Dativ → dem'],
    ['g_passiv', 'Das Paket ___ morgen geliefert.', ['wird', 'werden', 'ist'], 'Passive: werden + participle. das Paket → wird.', 'Passiv: wird + Partizip'],
    ['g_passiv', 'Die Briefe ___ jeden Tag abgeholt.', ['werden', 'wird', 'sind'], 'Plural → werden.', 'Plural: werden'],
    ['g_passiv', 'Hier ___ Deutsch gesprochen.', ['wird', 'werden', 'ist'], 'Fixed expression: Hier wird Deutsch gesprochen.', 'Hier wird … gesprochen'],
    ['g_nebensatz', 'Weißt du, ___ der Zug kommt? – Um acht Uhr.', ['wann', 'ob', 'dass'], 'Indirect question with a W-word: wann.', 'indirekte W-Frage'],
    ['g_nebensatz', 'Kommt er morgen? Ich weiß nicht, ___ er morgen kommt.', ['ob', 'dass', 'wenn'], 'Yes/no question → indirect with ob.', 'Ja/Nein-Frage → ob'],
    ['g_nebensatz', 'Können Sie mir sagen, ___?', ['wo der Bahnhof ist', 'wo ist der Bahnhof', 'wo der Bahnhof sein'], 'Indirect question: verb at the end.', 'indirekte Frage: Verb am Ende'],
    ['g_nebensatz', '___ ich ein Kind war, habe ich in Polen gewohnt.', ['Als', 'Wenn', 'Wann'], 'One time in the past → als.', 'einmal in der Vergangenheit → als'],
    ['g_nebensatz', '___ ich Zeit habe, gehe ich schwimmen.', ['Wenn', 'Als', 'Wann'], 'Repeated or present → wenn.', 'immer wieder / Gegenwart → wenn'],
    ['g_praeteritum', 'Gestern ___ ich früh ins Bett.', ['ging', 'gehte', 'gang'], 'gehen → ging (irregular).', 'gehen → ging'],
    ['g_praeteritum', 'Er ___ mir einen langen Brief.', ['schrieb', 'schreibte', 'schrieben'], 'schreiben → schrieb.', 'schreiben → schrieb'],
    ['g_praeteritum', 'Wir ___ zwei Wochen in Spanien.', ['blieben', 'bleibten', 'blieb'], 'bleiben → wir blieben.', 'bleiben → blieben'],
    ['g_praeteritum', 'Als Kind ___ sie gern Märchen.', ['las', 'leste', 'lies'], 'lesen → las.', 'lesen → las'],
    ['g_zu', 'Ich habe keine Lust, heute ___.', ['zu kochen', 'kochen', 'zu kocht'], 'Lust haben + zu + infinitive.', 'Lust haben, … zu + Infinitiv'],
    ['g_zu', 'Vergiss nicht, die Tür ___!', ['abzuschließen', 'zu abschließen', 'abschließen'], 'Separable verbs: zu goes in the middle: abzuschließen.', 'trennbar: ab-zu-schließen'],
    ['g_zu', 'Es ist wichtig, viel Wasser ___.', ['zu trinken', 'trinken', 'zu trinkt'], 'Es ist wichtig, … zu + infinitive.', 'Es ist wichtig, … zu …'],
  ];
  A22.PHRASES = [
    ['gesundheit', 'Your friend is always tired. Give advice.', 'Ihr Freund ist immer müde. Geben Sie einen Rat.', ['Du solltest früher ins Bett gehen.', 'Du musstest früher ins Bett gehen.', 'Du gehst früher ins Bett gegangen.']],
    ['reisen', 'Say a travel wish.', 'Sagen Sie einen Reisewunsch.', ['Ich würde gern einmal nach Japan reisen.', 'Ich wurde gern einmal nach Japan reisen.', 'Ich werde gern einmal nach Japan gereist.']],
    ['einkaufen', 'Your order has not arrived. You complain.', 'Ihre Bestellung ist nicht angekommen. Sie beschweren sich.', ['Ich möchte mich beschweren: Meine Bestellung ist nicht angekommen.', 'Ich möchte mich beschweren: Meine Bestellung ist nicht ankommen.', 'Ich beschwere: Meine Bestellung kommt nicht angekommen.']],
    ['freizeit', 'Your friend cannot come. You are disappointed.', 'Ihr Freund kann nicht kommen. Sie sind enttäuscht.', ['Schade, dass du nicht kommen kannst.', 'Schade, dass du kannst nicht kommen.', 'Schade, weil du nicht kommen.']],
    ['termine', 'You ask politely when the course starts.', 'Sie fragen höflich, wann der Kurs beginnt.', ['Könnten Sie mir sagen, wann der Kurs beginnt?', 'Könnten Sie mir sagen, wann beginnt der Kurs?', 'Könnten Sie mir sagen, wann der Kurs beginnen?']],
    ['termine', 'You agree to a plan.', 'Sie sind mit einem Plan einverstanden.', ['Einverstanden, dann treffen wir uns um acht.', 'Einverstanden, dann wir treffen uns um acht.', 'Einverstanden, dann treffen uns wir um acht.']],
    ['beruf', 'You give a reason why you cannot come.', 'Sie sagen, warum Sie nicht kommen können.', ['Ich kann nicht kommen, weil ich arbeiten muss.', 'Ich kann nicht kommen, weil ich muss arbeiten.', 'Ich kann nicht kommen, weil muss ich arbeiten.']],
    ['gesundheit', 'Your colleague is ill. You write a wish.', 'Ihre Kollegin ist krank. Sie schreiben einen Wunsch.', ['Ich hoffe, dass es dir bald besser geht.', 'Ich hoffe, dass es geht dir bald besser.', 'Ich hoffe, es dir bald besser geht.']],
  ];
  A22.SENTENCES = `
Wenn ich reich wäre, würde ich viel reisen.|If I were rich, I would travel a lot.|reisen
Das ist der Mann, der neben mir wohnt.|That is the man who lives next to me.|wohnen
Können Sie mir sagen, wann der Zug kommt?|Can you tell me when the train is coming?|reisen
Ich weiß nicht, ob er morgen kommt.|I don't know whether he is coming tomorrow.|termine
Als ich ein Kind war, wohnte ich in Polen.|When I was a child, I lived in Poland.|person
Das Paket wird morgen geliefert.|The parcel will be delivered tomorrow.|einkaufen
Du solltest mehr Wasser trinken.|You should drink more water.|gesundheit
Ich habe keine Lust, heute zu kochen.|I don't feel like cooking today.|essen
Hier wird Deutsch gesprochen.|German is spoken here.|alltag
Das Buch, das du mir geschenkt hast, ist spannend.|The book you gave me is exciting.|freizeit
Ich hätte gern einen Termin am Montag.|I would like an appointment on Monday.|termine
Es wäre schön, wenn du kommen könntest.|It would be nice if you could come.|feste
`.trim().split('\n').map((l) => { const [de, en, topic] = l.split('|'); return { de, en, topic }; });
  A22.FORMS = [];
  A22.MESSAGES = [
    { id: 's2-d01', part: 2, words: '30–40', topic: 'einkaufen',
      situation: T('You ordered a lamp online, but it arrived broken. Write to the shop.', 'Sie haben online eine Lampe bestellt, aber sie ist kaputt angekommen. Schreiben Sie an das Geschäft.'),
      points: [
        { de: 'Was haben Sie bestellt?', en: 'What you ordered', kw: 'bestellt|bestellung|gekauft|lampe' },
        { de: 'Was ist das Problem?', en: 'What the problem is', kw: 'kaputt|nicht angekommen|falsch|funktioniert nicht|beschädigt' },
        { de: 'Was möchten Sie jetzt?', en: 'What you want now', kw: 'geld zurück|umtausch|neue|zurückschicken|ersatz|reparatur' },
      ],
      model: 'Sehr geehrte Damen und Herren,\nam 10. Mai habe ich bei Ihnen eine Stehlampe bestellt. Leider ist die Lampe kaputt angekommen: Das Glas ist gebrochen. Könnten Sie mir bitte eine neue Lampe schicken? Sonst möchte ich mein Geld zurück.\nMit freundlichen Grüßen\nNadia Haddad' },
    { id: 's2-d02', part: 1, words: '20–30', topic: 'freizeit',
      situation: T('There is a concert on Saturday. Write a text message to your friend Lukas and suggest going together.', 'Am Samstag gibt es ein Konzert. Schreiben Sie Ihrem Freund Lukas eine SMS und schlagen Sie vor, zusammen hinzugehen.'),
      points: [
        { de: 'Machen Sie einen Vorschlag.', en: 'Make a suggestion', kw: 'hast du lust|würde|möchtest|wollen wir|konzert|kommst du' },
        { de: 'Wann und wo treffen Sie sich?', en: 'When and where you meet', kw: 'uhr|samstag|abend|vor dem|am |treffen' },
        { de: 'Wer kauft die Karten?', en: 'Who buys the tickets', kw: 'karte|ticket|kaufe|bezahl' },
      ],
      model: 'Hallo Lukas, am Samstag spielt eine tolle Band im Stadtpark. Hast du Lust mitzukommen? Wir könnten uns um 19 Uhr am Eingang treffen. Ich kaufe die Karten online. Gruß, Mira' },
    { id: 's2-d03', part: 2, words: '30–40', topic: 'wohnen',
      situation: T('You would like to have a dog. Write to your landlady, Frau Hartmann.', 'Sie möchten einen Hund haben. Schreiben Sie Ihrer Vermieterin, Frau Hartmann.'),
      points: [
        { de: 'Fragen Sie, ob Sie einen Hund haben dürfen.', en: 'Ask if you may have a dog', kw: 'darf|dürfte|erlaub|möchte|würde gern|hund' },
        { de: 'Warum möchten Sie einen Hund?', en: 'Why you want a dog', kw: 'weil|allein|kinder|spazieren|gesund|tiere' },
        { de: 'Was versprechen Sie?', en: 'What you promise', kw: 'klein|ruhig|leise|kümmer|sauber|kein problem|nicht laut' },
      ],
      model: 'Sehr geehrte Frau Hartmann,\nich würde gern einen kleinen Hund haben. Darf ich das? Ich lebe allein und ein Hund wäre eine schöne Gesellschaft. Der Hund ist ruhig und ich gehe dreimal am Tag mit ihm spazieren.\nMit freundlichen Grüßen\nGiulia Romano' },
    { id: 's2-d04', part: 2, words: '30–40', topic: 'freizeit',
      situation: T('Your friend Yusuf moved to a new city and feels lonely. Write to him and give advice.', 'Ihr Freund Yusuf ist in eine neue Stadt gezogen und fühlt sich allein. Schreiben Sie ihm einen Rat.'),
      points: [
        { de: 'Zeigen Sie Verständnis.', en: 'Show understanding', kw: 'verstehe|schade|tut mir leid|kenne das|normal' },
        { de: 'Geben Sie einen Rat.', en: 'Give advice', kw: 'solltest|könntest|würde|verein|kurs|sprachcafé|sport' },
        { de: 'Machen Sie ein Angebot.', en: 'Make an offer', kw: 'besuch|treffen|komm|zeig|helfe|telefon' },
      ],
      model: 'Lieber Yusuf,\nich verstehe dich gut, am Anfang ist eine neue Stadt schwer. Du könntest in einen Sportverein gehen, dort lernt man schnell Leute kennen. Ich besuche dich gern am nächsten Wochenende!\nLiebe Grüße\nTarek' },
  ];
  A22.TOPIC_CARDS = [
    ['umwelt', 'Umwelt', 'Müll', 'Trennst du deinen Müll?', 'Ja, ich trenne Papier, Plastik und Glas.', 'müll'],
    ['einkaufen', 'Einkaufen', 'online', 'Kaufst du oft online ein?', 'Nur manchmal, zum Beispiel Bücher.', 'online'],
    ['reisen', 'Reisen', 'Hotel', 'Wo übernachtest du im Urlaub am liebsten?', 'Am liebsten in einer kleinen Pension.', 'hotel|übernacht'],
    ['feste', 'Feste', 'Hochzeit', 'Wie feiert man in deinem Land Hochzeit?', 'Man feiert mit vielen Gästen und tanzt die ganze Nacht.', 'hochzeit'],
    ['beruf', 'Zukunft', 'Traumberuf', 'Was ist dein Traumberuf?', 'Ich würde gern als Köchin arbeiten.', 'traumberuf|beruf'],
    ['medien', 'Medien', 'Fernsehen', 'Was siehst du gern im Fernsehen?', 'Ich sehe gern Nachrichten und Kochsendungen.', 'fernseh'],
  ];
  A22.REQUEST_CARDS = [];
  A22.MONOLOG = [
    ['reisen', 'Reisen', [['Wohin reisen Sie gern?', 'Where you like to travel', 'reise|fahre|gern|meer|berge|stadt'], ['Wie reisen Sie?', 'How you travel', 'zug|auto|flugzeug|bus|fliege|fahre'], ['Ihre schönste Reise?', 'Your best trip', 'war|bin|habe|schönste|letzt'], ['Wohin würden Sie gern einmal reisen?', 'Where you would like to go one day', 'würde|möchte|gern einmal|traum']],
      'Ich reise sehr gern ans Meer. Meistens fahre ich mit dem Zug, weil das bequem ist. Meine schönste Reise war nach Portugal: Wir waren zwei Wochen in Lissabon. Ich würde gern einmal nach Kanada fliegen.'],
    ['essen', 'Essen', [['Was essen Sie gern?', 'What you like to eat', 'esse|gern|lieblings'], ['Kochen Sie selbst?', 'Whether you cook', 'koche|selbst|küche'], ['Was isst man in Ihrem Land?', 'Food in your country', 'land|heimat|typisch|isst man'], ['Was ist für Sie gesund?', 'What is healthy for you', 'gesund|gemüse|obst|wenig|viel']],
      'Ich esse sehr gern Reis mit Gemüse. Ich koche fast jeden Tag selbst, weil es billiger und gesünder ist. In meinem Land isst man viel Fisch. Für mich ist gesund: viel Obst, wenig Zucker.'],
    ['einkaufen', 'Einkaufen', [['Wo kaufen Sie ein?', 'Where you shop', 'supermarkt|markt|geschäft|kaufe'], ['Online oder im Geschäft?', 'Online or in shops', 'online|internet|geschäft|laden'], ['Was kaufen Sie gern?', 'What you like to buy', 'kaufe gern|kleidung|bücher|schuhe'], ['Was haben Sie zuletzt gekauft?', 'What you bought last', 'habe|gekauft|zuletzt|letzte']],
      'Lebensmittel kaufe ich im Supermarkt in meiner Straße. Kleidung kaufe ich lieber im Geschäft, weil ich sie anprobieren möchte. Ich kaufe gern Bücher. Zuletzt habe ich mir eine warme Jacke gekauft.'],
  ];
  A22.PLAN = [
    ['schule', T('Your German course is ending. Plan a small party together: when, where, and who brings what.', 'Ihr Deutschkurs ist bald zu Ende. Planen Sie zusammen eine kleine Feier: wann, wo und wer bringt was mit.'),
      'Wollen wir am letzten Kurstag feiern? – Gute Idee! Wo könnten wir feiern? – Vielleicht im Kursraum, das wäre am einfachsten. – Einverstanden. Ich könnte einen Kuchen backen. – Super, dann bringe ich Getränke mit.'],
    ['gesundheit', T('A friend is in hospital. Plan a visit together: when you go and what you take.', 'Ein Freund liegt im Krankenhaus. Planen Sie zusammen einen Besuch: wann Sie hingehen und was Sie mitbringen.'),
      'Wann wollen wir Paul besuchen? – Am Donnerstag würde es mir gut passen. – Donnerstag geht bei mir leider nicht. Wie wäre es mit Freitagnachmittag? – Gut, um drei Uhr? – Ja. Was bringen wir mit? – Vielleicht Obst und eine Zeitschrift.'],
  ];

  A1.A21 = A21;
  A1.A22 = A22;
})();
