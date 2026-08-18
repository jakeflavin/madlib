# Fable — design guide

Fable looks like a **printed Mad Libs booklet**, because that is what it is: a
word game you fill in and then read out loud. Cream paper, fat black outlines,
flat crayon-box colour, a chunky cartoon logotype, and — the thing the whole
format hangs on — **a write-on line with the part of speech printed underneath
it**.

The one departure: where the books put their cartoon faces, we put fantasy
characters — dragons, crowns, castles, fairies — drawn in the same style.

This document is the source of truth. If a change to the app contradicts it,
either the change is wrong or this file needs updating first.

## Where this comes from

- The cover reference supplied by the owner: a navy banner strip, a white
  logotype panel, a script tagline, and a field of thick-outlined characters in
  flat pastel fills over a lavender ground.
- `madlibs.com` (August 2026), measured: the brand runs black `#000` on white
  `#FFF` with an off-white `#F7F1F4`, brand blues `#1F3F95` and `#024985`, and a
  black masthead carrying the logotype.
- The format itself, which every printed edition and every teacher's printable
  shares: a numbered list of ruled blanks, each labelled beneath the line with
  its part of speech, then the story with the same ruled blanks set inline.
- For the characters, `game-icons.net` — 4,170 fantasy icons under CC BY 3.0 by
  Lorc, Delapouite and contributors. Nothing is traced from it: their icons are
  solid silhouettes and ours are outlined and filled. What it teaches is
  _composition_, and that is what we took (see Characters, below).

## What we do not take

Mad Libs is a registered trademark of Penguin Random House. This is a personal
project that borrows a **format and a visual idiom**, not an identity:

- No Mad Libs logotype, no smiley-face "O", no "World's Greatest Word Game", no
  cover trade dress copied outright.
- Our own wordmark is "Fable", set in a different display face.
- Every character illustration is drawn for this project.

## Tokens

### Colour

Ink and paper first; colour arrives in flat blocks behind black text, never as
text on white.

```
--paper      #FFFDF6   the page
--paper-2    #F5F0E3   sunk panels, the fill sheet
--ink        #16130F   every outline, every word
--ink-soft   #5D564C   labels, meta

--navy       #262A47   the masthead band
--red        #E24B33   primary buttons
--yellow     #F7C948   focus wash, highlights
```

**Crayon box** — the flat fills a story cover can take, one per story. Each is
chosen so black text sits on it comfortably:

```
orange  #F0813F     blue        #8FC7E8     periwinkle  #9AA9E8
yellow  #F7C948     green       #86C99A     teal        #6FC5C0
pink    #F2A0BE     purple      #B9A7DC     lilac       #DCA9E8
lime    #C6D870     tan         #D7A96B     red         #EE6B5E
```

Rules:

- Black text on colour. Never colour text on white — these are fills.
- No gradients anywhere. No soft shadows. Depth is a **hard offset shadow**:
  `4px 4px 0 var(--ink)`.
- Outlines are `3px solid var(--ink)`; corners `6px` or square. Nothing is a
  pill except the small kind-labels.

### Type

Four faces, each with a job it alone does:

| Face              | Job                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Luckiest Guy**  | Wordmark, story titles, cover blocks. Fat, cartoon, caps.                                                        |
| **Bitter** (slab) | Story prose and blurbs — the booklet's printed body text.                                                        |
| **Nunito Sans**   | Interface: buttons, meta, part-of-speech labels.                                                                 |
| **Caveat**        | **The player's handwriting.** Every word the player supplies is set in it, on the line, as though they wrote it. |

That last one is the point of the whole design. A filled-in Mad Lib is somebody's
handwriting on a printed page; the app should read the same way.

| Role            | Face            | Size                      | Notes                    |
| --------------- | --------------- | ------------------------- | ------------------------ |
| Wordmark        | Luckiest Guy    | 30px                      | white on the navy band   |
| Cover title     | Luckiest Guy    | 22–30px                   | black on the crayon fill |
| Story title     | Luckiest Guy    | `clamp(34px, 6vw, 60px)`  | line-height 1.05         |
| Chapter heading | Luckiest Guy    | 22px                      |                          |
| Prose           | Bitter          | 19px / 1.8                | `--ink`                  |
| Player's word   | Caveat 600      | 1.15em of its context     | sits on a 2px ink rule   |
| Part of speech  | Nunito Sans 700 | 11px, uppercase, `0.08em` | **under** the line       |
| Button          | Nunito Sans 800 | 15px, uppercase           |                          |

### The write-on line

The single most important component. Everywhere a player supplies a word:

```
   Bramblewick              ← Caveat, ink, sitting ON the line
   ────────────────────     ← 2px solid ink
   NOUN                     ← Nunito 700, 11px, caps, ink-soft
```

- The line is ink, 2px, the full width of its field.
- The label sits **beneath** the line. Never above it, never beside it.
- Focus thickens the rule to 3px and washes the field with `--yellow`.
- In the story, the same treatment runs inline: handwriting on a 2px rule.

### Motion

Minimal and mechanical — this is paper. 120ms `ease-out` on colour, and a press
effect on buttons and covers: translate 2px toward the shadow and shrink the
shadow to match. Nothing fades, nothing scales, nothing glows.

All of it is disabled under `prefers-reduced-motion: reduce`.

## Components

**Masthead** — navy band, full width, wordmark left in Luckiest Guy white,
actions right, sitting on a 3px ink rule.

**Cover** — the browse unit. A crayon fill, 3px ink outline, hard shadow, the
story's character drawn large, title in Luckiest Guy, meta in Nunito. Pressing
it moves it into its shadow.

**Buttons** — `--red` fill, white uppercase Nunito 800, 3px ink outline, hard
shadow. Secondary is paper fill with the same outline. Both press into the
shadow.

**Fill sheet** — a `--paper-2` panel with an ink outline holding a numbered
two-column list of write-on lines. Numbered, because the printed books number
them.

**Story page** — paper, prose in Bitter, supplied words in handwriting on rules,
a title block up top with the character and a heavy rule beneath.

## Characters

Twelve, one per story, drawn as flat cartoons: 3px ink outline, flat crayon
fill, no gradients, no shading, on a 64×64 grid.

### What the reference taught us

Looking at how game-icons.net draws fantasy at small sizes, three rules carried
over — and they are the difference between a mark that reads and a mark that
doesn't:

1. **Creatures are front-facing heads or busts, not full bodies.** A whole
   dragon at 96px is a smudge; a dragon's face is a dragon.
2. **Build from three or four chunky shapes, symmetrically.** Interior detail
   disappears first, so there should be almost none.
3. **When a creature won't reduce, draw its emblem instead.** Their armoury is
   full of helms and shields standing in for knights. Ours does the same.
4. **Front-facing is not always right.** A front-facing round head with two
   pointed shapes on top is a cat, whatever you meant; add big round eyes and
   it is an owl. Animals with long faces — dragons, horses — only read in
   profile, where the snout does the work. Six drafts of a front-facing dragon
   produced a cat, an owl and a fish before the profile settled it.

Each creature leans on the one feature that can only belong to it: the dragon
its snout and teeth, the unicorn a horn taller than everything else on the grid,
the troll its underbite, the phoenix its flame tail, the mermaid a fluke wide
enough to see.

`npm run characters` renders the whole cast onto one sheet, on both a crayon
cover and paper, which is the only sane way to judge them.

What we did _not_ take is their silhouette technique — solid white shapes on
black, read through negative space. Ours are positive shapes with an ink
outline and a crayon fill, because that is what the booklet style is.

### The cast

| Story                                 | Character | Note                           |
| ------------------------------------- | --------- | ------------------------------ |
| The Dragon of Ember Fell              | dragon    | horned face, front on          |
| The Cinder Crown                      | crown     |                                |
| The Frostwood Pact                    | tree      | snow-capped                    |
| The Lantern Below the Sea             | mermaid   | bust and tail                  |
| The Cartographer of Clouds            | castle    |                                |
| The Wandering Teahouse                | fairy     | four wings                     |
| The Knight Who Was Afraid of Anything | knight    | a shield — the helm never read |
| The Witch of Tumbledown Lane          | witch     | the hat, not a face            |
| The Last Unicorn Delivery             | unicorn   | front-facing, horn centred     |
| The Troll Under the Toll Bridge       | troll     | wide skull, tusks up           |
| The Library at the End of the Road    | book      | open, with a ribbon            |
| The Phoenix and the Lighthouse Keeper | phoenix   | wings up                       |

They live in one file (`src/components/Character.tsx`) so any of them can be
redrawn without touching anything else.

## Accessibility

- All text is `--ink` on paper or on a crayon fill; both clear 4.5:1 by a wide
  margin. Crayon colours are never used as text colour.
- Focus is a 3px `--navy` outline at 2px offset, and is never removed.
- The part-of-speech label is a real `<label>` tied to its input, so the visual
  convention and the accessible name agree.
- Handwriting is styling applied to real text, never an image.
