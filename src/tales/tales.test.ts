import { describe, expect, it } from 'vitest'
import { countUses, renderBody, renderPlainText } from '../lib/template'
import { TALES } from './index'

/**
 * The tales are hand-written prose, so the risk isn't logic — it's a typo in a
 * marker leaving a blank nobody can fill, or a prompt nobody's story ever uses.
 */
describe('tales', () => {
  it('have unique ids', () => {
    const ids = TALES.map((tale) => tale.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  for (const tale of TALES) {
    describe(tale.title, () => {
      const uses = countUses(tale.chapters)
      const slotIds = new Set(tale.slots.map((slot) => slot.id))

      it('declares every slot its prose uses', () => {
        expect(Object.keys(uses).filter((id) => !slotIds.has(id))).toEqual([])
      })

      it('uses every slot it declares', () => {
        expect(tale.slots.filter((slot) => !uses[slot.id]).map((slot) => slot.id)).toEqual([])
      })

      it('has no duplicate slot ids', () => {
        expect(slotIds.size).toBe(tale.slots.length)
      })

      it('reads as roughly a five minute story', () => {
        const words = renderPlainText(tale, {}).split(/\s+/).filter(Boolean).length
        expect(words).toBeGreaterThan(800)
      })

      it('leaves no unfilled markers once every blank is answered', () => {
        const words = Object.fromEntries(tale.slots.map((slot) => [slot.id, 'x']))
        expect(renderPlainText(tale, words)).not.toMatch(/\[\[|\]\]/)
      })
    })
  }
})

describe('renderBody', () => {
  const slots = [{ id: 'a', kind: 'noun' as const }]

  it('splits prose around a filled word', () => {
    expect(renderBody('one [[a]] two', { a: 'hat' }, slots)).toEqual([
      { kind: 'text', text: 'one ' },
      { kind: 'word', slotId: 'a', text: 'hat' },
      { kind: 'text', text: ' two' },
    ])
  })

  it('falls back to the prompt label when a blank is empty', () => {
    expect(renderBody('[[a]]', { a: '  ' }, slots)).toEqual([
      { kind: 'word', slotId: 'a', text: '[Noun]' },
    ])
  })
})
