/** The kind of word a blank asks for. Drives the label, the suggestion bank and the die. */
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

/** What a tale is about. Readers filter the contents page by these. */
export type Tag =
  | 'dragons'
  | 'royalty'
  | 'magic'
  | 'sea'
  | 'winter'
  | 'sky'
  | 'spirits'
  | 'friendship'
  | 'family'
  | 'adventure'

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

/** The cartoon character that fronts a story, in place of a Mad Libs face. */
export type Character =
  | 'dragon'
  | 'crown'
  | 'tree'
  | 'mermaid'
  | 'castle'
  | 'fairy'
  | 'knight'
  | 'witch'
  | 'unicorn'
  | 'troll'
  | 'book'
  | 'phoenix'

export interface Tale {
  id: string
  title: string
  /** The small line above the title, e.g. "A dragon's tale". */
  kicker: string
  blurb: string
  tags: Tag[]
  /** Rough reading time in minutes, shown on the contents page. */
  minutes: number
  /** The story's crayon fill. A background colour only — never used as text. */
  accent: string
  character: Character
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
