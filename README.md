# Deutsch-Trainer A1–A2 (A1.1, A1.2, A2.1, A2.2)

A practice app for German levels A1.1, A1.2, A2.1 and A2.2. It runs in any browser on a computer, with no install and no account.

The exam parts follow the Goethe-Institut **"Start Deutsch 1"** (A1) format: **Hören, Lesen, Schreiben, Sprechen**.

## What's inside

- **Choose your levels.** Tap one level, or several to mix them:
  - **A1.1**: basics, present tense, accusative, numbers, time, directions.
  - **A1.2**: Perfekt, war/hatte, dative, wo?/wohin?, dürfen/sollen/wollen, du/ihr commands, comparatives. Topics include health, home, travel, clothes, celebrations and offices.
  - **A2.1**: weil/dass/wenn, reflexive verbs, verbs with prepositions, modal verbs in the past, adjective endings. Topics include work and job applications, media, school and clubs.
  - **A2.2**: Konjunktiv II (hätte, wäre, würde, sollte), relative clauses, indirect questions, als/wenn, Präteritum, passive, zu + infinitive. Topics include the environment, online shopping and complaints.

  Everything follows the chosen levels: practice rounds, mistake review, word cards and topics. The mock exam uses the **Start Deutsch 1** format for A1 and the **Goethe-Zertifikat A2** format as soon as an A2 level is selected.
- **Course-book style exercises:**
  - Typed fill-in-the-gap ("Ergänzen Sie in der richtigen Form")
  - "Was passt?" dialogue pairs
  - Imperative from a situation ("Ich bin müde. → Dann geh ins Bett!")
  - Directions with a town map ("Wie komme ich zum …?")
  - Transport pictures ("Sie fahren drei Stationen mit der U-Bahn")
  - Emails and text messages to write

- **10 new questions.** One click gives a fresh mixed round. The app shows questions she hasn't seen yet first, brings back weak topics more often, and repeats earlier mistakes.
- **Mock exam (Probeprüfung).** A timed simulation of all four parts:
  - Hören: 15 tasks. Each recording plays at most twice.
  - Lesen: 15 tasks.
  - Schreiben: a form and a message of about 30 words.
  - Sprechen: introduce yourself, a topic card and a request card.

  It shows a score per part and pass or fail. You need 60 % to pass. Every mock exam is put together fresh from the question bank.
- **Practice by skill or by topic.** Six skills, 16 everyday topics and 14 grammar points.
- **Mistake review.** Wrong answers come back until she gets them right twice.
- **Word cards.** Vocabulary by topic, with German audio.
- **Progress page.** Results per skill and topic (weakest first), mock-exam history, a day streak and a countdown to the exam date.
- **English / German switch.** The button is always in the top bar. Instructions and explanations switch language; the exercises stay in German.
- **Listening** uses the browser's German voice, so no audio files are needed. **Speaking** uses the microphone through speech recognition. It works best in Chrome or Edge.

### Where the 3,500+ questions come from

- About 300 are written by hand: listening dialogues, announcements and phone messages; reading emails, ads and signs; grammar gaps; set phrases; forms; writing tasks and speaking cards.
- The rest are built from templates over the vocabulary list: der/die/das, plurals, meanings, typing words, accusative, er/sie/es, mein/dein/Ihr and verb forms.
- Some templates make new values every time: numbers, prices, phone numbers, clock times, dates and spelling. Those never run out.

## Opening the app

**Option 1 – GitHub Pages (recommended; the microphone works here)**

1. On GitHub open **Settings → Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**. Select the branch with this code and the folder **/ (root)**, then click **Save**.
3. After a minute the app is at `https://<user>.github.io/A1.1/`. Bookmark it, or install it from the browser's address bar.

**On an Android phone**

1. Open the GitHub Pages link in **Chrome**.
2. Tap **⋮ → Install app** (on some phones it says **Add to Home screen → Install**).
3. The app appears in the app drawer with its own icon. It opens full screen, works offline, and the phone's Back button returns to the start screen.

The phone keeps its own progress. To copy progress between laptop and phone, use **Progress & settings → Copy code**, then **Load code** on the other device.

**Option 2 – Locally**

Run `python3 -m http.server` in this folder, then open http://localhost:8000.

Progress is saved in the browser on that computer. To move it to another computer, use **Progress & settings → Save or move your progress**.

## Adding questions

All content is in plain JavaScript files in `js/data/`:

| File | Content |
|---|---|
| `vocab.js` | Nouns (with article and plural), verbs, adjectives, days and months |
| `hoeren.js` | Listening tasks (`audio` lines are read aloud) |
| `lesen.js` | Reading texts, ads and signs |
| `grammatik.js` | Grammar gaps, set phrases and word-order sentences (the first option is the right one) |
| `schreiben.js` | Forms and writing tasks |
| `sprechen.js` | Speaking cards |
| `a12.js` | All A1.2 content (vocabulary, Perfekt list, listening, reading, grammar, writing, speaking) |
| `a2.js` | All A2.1 and A2.2 content, including A2 speaking cards (talk about yourself, plan together) |
| `uebungen.js` | Course-book style exercises for every level: typed gaps, "Was passt?" pairs, more emails |

After editing, run the check:

```
node tools/validate.js
```

It builds every question several times. It reports duplicate ids, missing answers and broken options.
