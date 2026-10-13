# A1.1 Deutsch-Trainer

A practice app for the German A1.1 exam. It runs in any browser on a computer, with no install and no account.

The exam parts follow the Goethe-Institut **"Start Deutsch 1"** (A1) format: **Hören, Lesen, Schreiben, Sprechen**.

## What's inside

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

### Where the 1,600+ questions come from

- About 300 are written by hand: listening dialogues, announcements and phone messages; reading emails, ads and signs; grammar gaps; set phrases; forms; writing tasks and speaking cards.
- The rest are built from templates over the vocabulary list: der/die/das, plurals, meanings, typing words, accusative, er/sie/es, mein/dein/Ihr and verb forms.
- Some templates make new values every time: numbers, prices, phone numbers, clock times, dates and spelling. Those never run out.

## Opening the app

**Option 1 – GitHub Pages (recommended; the microphone works here)**

1. On GitHub open **Settings → Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**. Select the branch with this code and the folder **/ (root)**, then click **Save**.
3. After a minute the app is at `https://<user>.github.io/A1.1/`. Bookmark it, or install it from the browser's address bar.

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

After editing, run the check:

```
node tools/validate.js
```

It builds every question several times. It reports duplicate ids, missing answers and broken options.
