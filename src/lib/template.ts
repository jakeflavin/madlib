import type { Chapter, Slot, Tale } from '@/types'

/**
 * A run of prose, or a slot's filled-in word. `emphasis` carries the `*italic*`
 * and `**bold**` markup from the prose, which may wrap a blank as well as text.
 */
export type Segment = { emphasis?: 'em' | 'strong' } & (
  { kind: 'text'; text: string } | { kind: 'word'; slotId: string; text: string }
)

const MARKER = /\[\[([a-z0-9-]+)\]\]/gi
const EMPHASIS = /(\*\*[\s\S]+?\*\*|\*[^*]+?\*)/g

/**
 * Splits a chapter body into prose and filled words. Unfilled slots come back as
 * their label in brackets so a half-finished tale still reads as a tale.
 */
export function renderBody(body: string, words: Record<string, string>, slots: Slot[]): Segment[] {
  const byId = new Map(slots.map((slot) => [slot.id, slot]))
  const segments: Segment[] = []

  for (const run of body.split(EMPHASIS)) {
    if (!run) continue

    let text = run
    let emphasis: Segment['emphasis']
    if (run.startsWith('**') && run.endsWith('**') && run.length > 4) {
      text = run.slice(2, -2)
      emphasis = 'strong'
    } else if (run.startsWith('*') && run.endsWith('*') && run.length > 2) {
      text = run.slice(1, -1)
      emphasis = 'em'
    }

    let cursor = 0
    for (const match of text.matchAll(MARKER)) {
      const at = match.index
      if (at > cursor) segments.push({ kind: 'text', text: text.slice(cursor, at), emphasis })

      const slotId = match[1]
      // The pattern cannot match without this group, but nothing proves that to the
      // compiler, and a marker with no id is not a slot worth rendering.
      if (!slotId) continue
      const slot = byId.get(slotId)
      segments.push({
        kind: 'word',
        slotId,
        text: words[slotId]?.trim() || `[${slot ? slotLabel(slot) : slotId}]`,
        emphasis,
      })
      cursor = at + match[0].length
    }

    if (cursor < text.length) segments.push({ kind: 'text', text: text.slice(cursor), emphasis })
  }

  return segments
}

/** Plain text for copying, sharing and reading aloud. */
export function renderPlainText(tale: Tale, words: Record<string, string>): string {
  const parts = [tale.title, '']
  for (const chapter of tale.chapters) {
    parts.push(chapter.title, '')
    parts.push(
      renderBody(chapter.body, words, tale.slots)
        .map((segment) => segment.text)
        .join(''),
    )
    parts.push('')
  }
  return parts.join('\n').trim()
}

/** How many times each slot shows up — surfaced so readers know which words carry weight. */
export function countUses(chapters: Chapter[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const chapter of chapters) {
    for (const match of chapter.body.matchAll(MARKER)) {
      const slotId = match[1]
      if (!slotId) continue
      counts[slotId] = (counts[slotId] ?? 0) + 1
    }
  }
  return counts
}

const KIND_LABELS: Record<Slot['kind'], string> = {
  name: 'Name',
  noun: 'Noun',
  'plural-noun': 'Plural noun',
  adjective: 'Adjective',
  verb: 'Verb',
  'verb-ing': 'Verb ending in -ing',
  'verb-past': 'Past-tense verb',
  adverb: 'Adverb',
  animal: 'Animal',
  place: 'Place',
  food: 'Food',
  number: 'Number',
  color: 'Colour',
  occupation: 'Occupation',
  'body-part': 'Body part',
  exclamation: 'Exclamation',
  sound: 'Sound',
  'magic-word': 'Magic word',
}

export function slotLabel(slot: Slot): string {
  return slot.label ?? KIND_LABELS[slot.kind]
}

export function kindLabel(kind: Slot['kind']): string {
  return KIND_LABELS[kind]
}

/** Word count of the finished tale, used for the reading-time estimate. */
export function wordCount(tale: Tale, words: Record<string, string>): number {
  return renderPlainText(tale, words).split(/\s+/).filter(Boolean).length
}
