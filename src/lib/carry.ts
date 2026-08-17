import type { Slot, Tale } from '../types'

/**
 * Moves answers from one tale to another when the reader switches stories.
 *
 * Slot ids are per-tale, so answers are matched by kind instead: the first noun
 * you gave becomes the new tale's first noun, and so on. Nothing is invented and
 * nothing is dropped silently — leftover answers simply have nowhere to go.
 */
export function carryWords(
  from: Tale,
  to: Tale,
  words: Record<string, string>,
): Record<string, string> {
  const byKind = new Map<Slot['kind'], string[]>()
  for (const slot of from.slots) {
    const answer = words[slot.id]?.trim()
    if (!answer) continue
    byKind.set(slot.kind, [...(byKind.get(slot.kind) ?? []), answer])
  }

  const carried: Record<string, string> = {}
  const taken = new Map<Slot['kind'], number>()
  for (const slot of to.slots) {
    const pool = byKind.get(slot.kind)
    if (!pool) continue

    const at = taken.get(slot.kind) ?? 0
    if (at >= pool.length) continue

    carried[slot.id] = pool[at]
    taken.set(slot.kind, at + 1)
  }

  return carried
}
