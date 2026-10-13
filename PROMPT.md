# Prompt: German A1.1 exam trainer

Copy everything below the line into Claude Code, Lovable, or any AI app builder.
Before you send it, fill in the three `[...]` placeholders at the top.

---

Build me a web app that helps my mother prepare for her **German A1.1 exam**.

**About the learner**
- Native language: **[e.g. Polish / Turkish / English]**. All instructions, hints and explanations go in this language. Exercise content stays in German.
- She is a beginner who isn't confident with technology. Keep the app simple, calm and encouraging.
- Exam: **[e.g. A1.1 course final test at the Volkshochschule / Goethe "Start Deutsch 1" / telc A1]**. Exam date: **[date]**.

## 1. Core idea: fresh questions every time
- Store a **large question bank** in JSON files, at least **400 questions** spread over all topics and skills below, so she doesn't keep seeing the same items.
- Each session draws questions at random. Put this on the start screen: a big **"Neue Fragen / New questions"** button that reshuffles and loads a new set at any time.
- **No repeats until exhausted:** remember which questions she has already seen (localStorage) and prefer unseen ones. Once she has seen them all, start the cycle again.
- **Variation:** shuffle the answer options, and build some items from templates so they are effectively endless. Examples: random numbers or prices to write or understand, random clock times ("Es ist Viertel nach drei"), random dates, verb + person pairs to conjugate.
- **Optional AI mode (make it easy to switch off):** a "Generate more questions" button that calls the Claude API with a strict JSON schema and a prompt asking for A1.1-level items on a chosen topic. Validate the generated items and add them to the local bank. The app must still work fully without an API key.

## 2. Content: what A1.1 covers
**Topics (Themen):**
- greeting and saying goodbye
- introducing yourself (name, country, language, address, phone, age)
- family
- numbers 0 to 1000, prices and money
- the alphabet and spelling your name
- time and clock times, days, months, dates
- daily routine
- food and drink, shopping, in a café or restaurant
- living (rooms, furniture)
- hobbies and free time
- jobs
- the city and directions
- appointments
- weather
- body and health (going to the doctor)
- simple forms (Formulare)

**Grammar:**
- personal pronouns
- present tense of regular verbs, plus sein, haben, möchten
- W-questions and yes/no questions
- word order: verb in position 2
- definite and indefinite articles (der/die/das, ein/eine)
- kein vs. nicht
- the accusative (einen/eine/ein)
- possessive articles mein/dein
- plural forms
- separable verbs (aufstehen, einkaufen)
- modal verbs können and müssen
- prepositions of time (am, um, im)

Use the vocabulary of the official Goethe A1 word list as a reference. Keep sentences short and realistic. **Every question needs a short explanation** in her native language that appears after she answers.

## 3. Question types, mirroring the exam
1. **Hören (listening):** short dialogues and announcements read aloud with the browser's built-in German voice (Web Speech API, `de-DE`). Add a replay button and a "slower" option. Then ask a multiple-choice or richtig/falsch question.
2. **Lesen (reading):** short notes, signs, ads, emails or SMS messages, then richtig/falsch or a choice between a and b.
3. **Schreiben (writing):**
   - Fill in a form, for example a hotel or registration form, from a short text.
   - Write a short message of about 30 words covering 3 given points. Show a model answer and a checklist so she can compare her text herself.
4. **Wortschatz and Grammatik:** multiple choice, fill-in-the-gap (with a word bank as an easier option), matching word to picture or emoji, and putting words in the right order to make a sentence.
5. **Sprechen (speaking practice):** show a prompt card, for example "Stellen Sie sich vor: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby" or a topic card such as "Essen – Frühstück?". She answers out loud. If the browser supports it, use speech recognition. Otherwise she presses "show example answer" and rates herself.

## 4. Modes
- **Quick practice:** 10 random mixed questions (the default, one tap from the start screen).
- **Practice by topic or skill:** choose for example "Zahlen" or "Hören".
- **Mistake review:** questions she answered wrong come back more often, using a simple spaced-repetition box system.
- **Mock exam (Probeprüfung):** a timed simulation with the sections Hören → Lesen → Schreiben → Sprechen. Show a score per section and pass or fail, with 60% as the pass mark. Every mock exam is generated fresh from the bank.
- **Flashcards:** vocabulary by topic, German ↔ native language, with audio.

## 5. Progress
- Show a simple progress page: questions done, % correct per topic and skill, weakest topics ("Üb heute: Uhrzeit"), a streak counter, and a countdown to the exam date.
- Save everything in localStorage. No login.
- Add an **export/import progress** button (a JSON file) so she can move to another device.

## 6. Design and accessibility (important)
- Large text (at least 20px), large buttons, high contrast, and one question per screen.
- Mobile-first: she will mostly use a phone or tablet.
- Give clear feedback right away: green ✓ or red ✗, the correct answer, and the explanation. Never show harsh error messages.
- Include a German **umlaut and ß helper keyboard** (ä ö ü ß) for typing answers.
- Accept small spelling mistakes in typed answers. If the answer is close, say so ("Fast richtig!") and show the correct spelling.
- Allow a pause at any time. If she closes the app, the session resumes.
- Make it installable as a PWA so it works offline and can be opened from the home screen.

## 7. Tech
- React + Vite + TypeScript + Tailwind, with no backend. Deployable to GitHub Pages or Netlify.
- Question data goes in `/src/data/*.json` with one shared schema, for example:
  `{ id, skill, topic, type, prompt, audioText?, options?, answer, explanation, difficulty }`.
- Write a validation script that checks every question against the schema and flags duplicates.
- Write a README that explains how to add new questions by editing the JSON.

## 8. Quality check before you finish
- Have a native-level check pass over all German content: correct articles, umlauts, natural phrasing, and A1.1 level (nothing harder).
- Test the full flow on a phone-sized screen: start → quick practice → new questions → mock exam → progress page.
