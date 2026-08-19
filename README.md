# Fable

Fantasy Mad Libs, set like the printed booklets: cream paper, fat black
outlines, crayon-box covers, and write-on lines with the part of speech printed
underneath.

Six original tales — dragons, drowned cities, sky islands, a teahouse that only
appears one night a year — each around a five-to-seven minute read, each with
27–28 blanks woven through it. Answer the blanks, then read the whole ridiculous
thing aloud.

## What it does

- **Twelve long stories**, five chapters apiece, written for this app rather than
  padded out of a paragraph. Every tale defines its own prompts, so the blanks
  fit the story instead of a generic noun/verb/adjective list.
- **Browse by what you fancy** — the contents page filters on tags like dragons,
  winter, sea or spirits.
- **Fill in every blank on one page**, each with its own hint and a die to roll a
  suggestion. **Switch stories from the same page** and your answers come with
  you, matched across by kind.
- **Roll the empty ones** fills whatever's left from a hand-written word bank.
- **Then read it** as one continuous story — no pagination — with every word you
  supplied set in handwriting on its own ruled line, exactly as a filled-in
  booklet reads. Tap one mid-story to change your mind; it updates everywhere it
  appears. The masthead tracks how far through you are.
- **Read aloud** via the browser's own voice, **print**, **copy**, and a **share
  link** that carries the whole finished tale in the URL — no server involved.
- **A library** of the tales you've bound, plus drafts that survive a refresh.

## Running it

```bash
npm install
npm run dev
```

| Script              | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Vite dev server                       |
| `npm run build`     | Typecheck and build to `dist/`        |
| `npm test`          | Vitest — story integrity, share links |
| `npm run typecheck` | `tsc -b --noEmit`                     |
| `npm run lint`      | oxlint                                |
| `npm run icons`     | Regenerate the PNG app icons          |

## Design

[DESIGN.md](DESIGN.md) is the source of truth for the look: colour, type,
components, the write-on line, and the six characters. It also records what the
design deliberately does not take from the trademark it is inspired by. Change
the guide before changing the app.

## Adding a tale

Drop a file in `src/tales/` exporting a `Tale`, and add it to the array in
`src/tales/index.ts`. A tale is prose with `[[slotId]]` markers plus the list of
slots those markers refer to; `*italics*` and `**bold**` work in the prose and
may wrap a marker.

The test suite holds the tales honest: it fails if the prose references a slot
that isn't declared, if a declared slot is never used, or if a tale comes in
under 800 words.

## Deploying

Firebase Hosting, on push to `main` (`.github/workflows/deploy.yml`). The
workflow needs `FIREBASE_SERVICE_ACCOUNT` as a secret and `FIREBASE_PROJECT_ID`
as a repository variable.

## Standards

Code in this repo follows the [shared standards](https://github.com/jakeflavin/portfolio/blob/main/docs/STANDARDS.md) and [layout](https://github.com/jakeflavin/portfolio/blob/main/docs/LAYOUT.md) used across the directory.
