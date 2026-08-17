# Fable — design guide

Fable takes its **chrome** from Disney+ — near-black navy, pill buttons, rounded
plates in scrolling rows, restrained motion — and its **interior** from a Disney
storybook: flat printed surfaces, gold rules, drawn emblems, illuminated
openings and a display serif for the stories themselves.

The two halves have one rule between them. The interface is sans and cyan; the
stories are serif and gold. Nothing is lit by a gradient.

This document is the source of truth. If a change to the app contradicts it,
either the change is wrong or this file needs updating first.

## Where these values come from

Measured directly from `disneyplus.com` (August 2026) via computed styles, not
guessed. The numbers below in **bold** are observed values.

| Thing           | Observed                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Page background | **`rgb(4, 7, 20)`** — `#040714`                                                                                                     |
| Body copy       | **`rgb(192, 192, 192)`** at **18px**                                                                                                |
| Headings        | **`rgb(249, 249, 249)`**, weight **700**, line-height **1.1–1.2**, tracking **-0.005em**                                            |
| Primary CTA     | **`rgb(51, 221, 255)`** — `#33DDFF`, radius **1000px**, height **48px**                                                             |
| Secondary CTA   | transparent on **`2px solid rgb(111, 113, 123)`**, radius **1000px**                                                                |
| Button labels   | **14px**, **uppercase**, tracking **0.35px**                                                                                        |
| Cards / tiles   | **`#1E1F24`** and **`#02172A`**, radius **12px**                                                                                    |
| Deep brand blue | **`#0040E5`** (found in stylesheets)                                                                                                |
| Hairlines       | **`rgba(255, 255, 255, 0.1)`**                                                                                                      |
| Scrims          | **`rgba(0, 0, 0, 0.5)`**                                                                                                            |
| Motion          | **0.15s / 0.2s / 0.3s / 0.375s**, `cubic-bezier(0.4, 0, 0.2, 1)`; cards use `cubic-bezier(0, 0, 0.2, 1)` on `transform, box-shadow` |
| Typeface        | **Inspire** (proprietary to Disney)                                                                                                 |

## What we do not take

This is a personal project that borrows a _design language_ — colour, spacing,
type behaviour, motion. It is not a Disney product and must never suggest it is:

- **No Disney marks or assets.** No Disney/Disney+ logo, no character art, no
  film stills, no "+" lockup, no Mickey silhouette.
- **No Inspire.** It is licensed to Disney. We use **Figtree** (Google Fonts) —
  a geometric-humanist sans with a tall x-height and friendly, closed apertures,
  which is the closest free face in feel and holds up at heavy display weights.
- Artwork for story tiles is generated from each story's own accent colour, so
  the app never needs stock or licensed imagery.

## Tokens

### Colour

```
--bg            #040714   page, everywhere
--surface       #12141C   raised panels, form fields
--surface-2     #1E1F24   tiles, cards          (observed)
--surface-blue  #02172A   tinted tiles          (observed)
--line          rgba(255,255,255,.1)            (observed)
--line-strong   rgba(255,255,255,.25)
--scrim         rgba(0,0,0,.5)                  (observed)

--text          #F9F9F9   headings, tile titles (observed)
--text-body     #C0C0C0   body copy             (observed)
--text-dim      #8A8D98   meta, captions
--grey-border   #6F717B   secondary button border (observed)

--cyan          #33DDFF   primary action        (observed)
--cyan-hot      #7BE9FF   primary hover
--blue          #0040E5   deep brand blue       (observed)
--accent        per story; set on a container as a CSS variable
```

```
--gold          #E3C08A   rules, frames, the wordmark on hover
--gold-dim      rgba(227,192,138,.42)  every hairline that isn't chrome
```

**Gradients are all but banned.** An earlier pass lit every surface with
radial washes and the app read as a slop of blur. Colour now arrives as flat
fills, 1px rules and line art. The only gradients left in the stylesheet draw
the chevron inside the story `<select>`, because a triangle has to come from
somewhere.

Where a surface used to glow it now carries a **drawn emblem** instead: the
story's mark, in its accent, at 14% on a hero or full strength on a plate.

### Type

Two families, split by job. **Figtree** (400/600/700/800) is the interface:
buttons, labels, meta, body copy. **Playfair Display** (700/800, italic 500) is
the book: story titles, the wordmark, chapter headings, tile titles and the
byline. If a piece of text belongs to a story, it is set in Playfair; if it
belongs to the app, it is set in Figtree.

| Role         | Size                     | Weight | Tracking | Notes                                          |
| ------------ | ------------------------ | ------ | -------- | ---------------------------------------------- |
| Hero title   | `clamp(40px, 7vw, 76px)` | 800    | -0.03em  | line-height 1.02                               |
| Page title   | `clamp(28px, 4vw, 44px)` | 800    | -0.02em  |                                                |
| Row heading  | 20px                     | 700    | -0.01em  | the "carousel label"                           |
| Tile title   | 17px                     | 700    | -0.01em  |                                                |
| Body / prose | 19–20px                  | 400    | normal   | line-height 1.75, `--text-body`                |
| Meta         | 13px                     | 600    | normal   | `--text-dim`                                   |
| Button       | 14px                     | 700    | 0.35px   | **uppercase** — the one place caps are allowed |

Uppercase belongs on buttons and nowhere else. Everything else is sentence case.

### Space, radius, elevation

```
Spacing scale: 4 8 12 16 24 32 48 64 96
Radius:  pill 1000px · tile 12px · panel 16px · field 8px
Shadow:  tile rest    0 4px 16px rgba(0,0,0,.4)
         tile hover   0 12px 40px rgba(0,0,0,.6)
         glow         0 0 40px -8px <accent>
```

### Motion

Durations **150 / 200 / 300 / 375ms**. Standard easing
`cubic-bezier(0.4, 0, 0.2, 1)`; tiles use the decelerating
`cubic-bezier(0, 0, 0.2, 1)` on `transform, box-shadow`.

Everything must be disabled under `prefers-reduced-motion: reduce`.

## Components

### Top bar

Sticky, full width, `--bg` at 0 scroll → same colour with a hairline bottom
border once scrolled. Wordmark left at 700/-0.02em; actions right as pills.
Height 64px. On the reader it also carries the reading-progress line.

### Buttons

- **Primary** — `--cyan` fill, `#04121A` text, pill, 48px tall, 14px uppercase
  700, tracking 0.35px. Hover: `--cyan-hot`, no movement.
- **Secondary** — transparent, `2px solid --grey-border`, `--text` label, pill.
  Hover: border `--text`, background `rgba(255,255,255,.08)`.
- **Ghost** — no border, `--text-dim` label, hover `--text`. For back links.
- **Icon** — 40px circle, transparent, `--text-dim`; hover
  `rgba(255,255,255,.08)` fill and `--text` icon.
- Disabled: 40% opacity, no hover.

### Story plate

The unit the browse page is built from — a book plate, not a film poster. 2:3
portrait, radius 12px, flat `--surface-blue`, a `--gold-dim` rule inset 7px as a
printed frame, the story's emblem drawn large in its accent, a short gold rule,
then the title in Playfair and its status beneath.

```
rest    transform: none;  border: 2px solid transparent
hover   transform: scale(1.05);  border-color: rgba(255,255,255,.85);
        box-shadow: tile-hover, glow(accent)
        transition: transform, box-shadow 300ms cubic-bezier(0,0,.2,1)
focus   same as hover, plus a 2px cyan outline offset 4px
```

Never move the tile's neighbours — the scale must overlap, so rows need
`overflow: visible` vertically and padding to accommodate the growth.

### Row (carousel)

A heading at 20px/700 and a horizontally scrollable track of tiles, snap-aligned,
gap 16px, scrollbar hidden, `scroll-padding-inline-start` matching the page
gutter. Rows are how the browse page is organised — "Continue where you left
off", "All stories", one per theme.

### Chip

Pill, 14px, `rgba(255,255,255,.08)` fill, `--text-body` label. Selected: `--text`
fill with `--bg` label. Used for theme filters.

### Field

`--surface` fill, radius 8px, 1px `--line` border, 16px label above in
`--text-dim`. Focus: border `--cyan` plus `0 0 0 3px rgba(51,221,255,.2)`.

### Prose surface

Long reading is the one place Disney+ has no precedent, so this is where the
storybook leads: a `--surface` panel with a `--gold-dim` rule, radius 16px,
centred, 68ch measure, 19px/1.75 body in `--text-body`. Chapter headings are
Playfair with a short gold rule beneath. The first paragraph opens with an
illuminated capital in the story's accent. Words the reader supplied are set in
the accent at 600 with a soft underline — they are the interactive element in
the text.

## Applying it to Fable's four screens

**Browse** — top bar, a hero for a featured story (its emblem drawn large in the
margin, title, blurb, primary CTA), theme chips, then rows of plates. Drafts get
their own first row.

**Fill** — page title under the story's emblem and kicker, story switcher as a
select styled like a secondary button, fields in a two-column grid, a sticky
bottom action bar carrying progress and the primary CTA.

**Read** — hero header with emblem, title and italic byline, prose surface
below, toolbar of icon buttons in the top bar, reading progress along its lower
edge.

**Library** — a grid of saved plates, same plate component.

## Accessibility

- Body copy is `--text-body` on `--bg`: 11.8:1. Never set prose in `--text-dim`.
- Each story's accent must clear 4.5:1 on `--bg` — accents are chosen bright for
  this reason, and are _not_ the same values used on the old light theme.
- Focus is always visible: 2px `--cyan` outline, 4px offset, never removed.
- Hover-only affordances need a focus equivalent; tiles get both.
- All motion is gated on `prefers-reduced-motion`.
