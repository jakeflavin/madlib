/** The kind of word a blank asks for. Drives the label, the icon and the suggestion bank. */
export type SlotKind =
  | 'name'
  | 'noun'
  | 'plural-noun'
  | 'adjective'
  | 'verb'
  | 'verb-ing'
  | 'verb-past'
  | 'adverb'
  | 'animal'
  | 'place'
  | 'food'
  | 'number'
  | 'color'
  | 'occupation'
  | 'body-part'
  | 'exclamation'
  | 'sound'
  | 'magic-word'

/** One blank in a tale. The same slot may appear many times in the prose. */
export interface Slot {
  id: string
  kind: SlotKind
  /** Overrides the kind's default label, e.g. "Your hero's name". */
  label?: string
  /** A nudge shown under the prompt — the flavour that makes the answer funnier. */
  hint?: string
}

export interface Chapter {
  title: string
  /** Prose with `[[slotId]]` markers wherever a filled word belongs. */
  body: string
}

export interface Tale {
  id: string
  title: string
  /** The small line above the title on the card, e.g. "A dragon's tale". */
  kicker: string
  blurb: string
  /** Single emoji used as the tale's sigil on its card and cover. */
  sigil: string
  /** Rough reading time in minutes, shown on the card. */
  minutes: number
  /** Two colours that tint this tale's cover and reading page. */
  hues: [string, string]
  slots: Slot[]
  chapters: Chapter[]
}

/** A finished tale, kept in the reader's library. */
export interface SavedTale {
  id: string
  taleId: string
  /** The reader's title for it — defaults to the tale's own title. */
  title: string
  words: Record<string, string>
  savedAt: number
}
