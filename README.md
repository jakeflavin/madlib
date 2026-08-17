# Fable

Fantasy mad libs, told as an illuminated storybook.

Six original tales — dragons, drowned cities, sky islands, a teahouse that only
appears one night a year — each around a five-to-seven minute read, each with
27–28 blanks woven through it. Answer the blanks, then read the whole ridiculous
thing aloud.

## What it does

- **Six long tales**, five chapters apiece, written for this app rather than
  padded out of a paragraph. Every tale defines its own prompts, so the blanks
  fit the story instead of a generic noun/verb/adjective list.
- **Two ways to fill them in** — one prompt at a time with a hint, tappable
  example words and a die to roll; or every blank at once in a single list.
- **Roll the rest** fills whatever's left from a hand-written suggestion bank.
- **A storybook reader** — parchment pages, illuminated drop caps, and every word
  you supplied lit in gold. Tap any gold word mid-story to change your mind
  about it; it updates everywhere it appears.
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
