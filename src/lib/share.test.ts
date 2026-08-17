import { describe, expect, it } from 'vitest'
import { fromShareHash, toShareHash } from './share'

describe('share links', () => {
  it('round-trips a finished tale', () => {
    const tale = { taleId: 'ember-fell', words: { hero: 'Podge', adj1: 'soggy & bold' } }
    expect(fromShareHash(toShareHash(tale))).toEqual(tale)
  })

  it('survives words with unicode and punctuation', () => {
    const tale = { taleId: 'x', words: { a: 'ünïcøde — "quoted" 🐉' } }
    expect(fromShareHash(toShareHash(tale))).toEqual(tale)
  })

  it('returns null for a hash that is not a tale', () => {
    expect(fromShareHash('#something-else')).toBeNull()
    expect(fromShareHash('')).toBeNull()
  })

  it('returns null rather than throwing on a corrupted payload', () => {
    expect(fromShareHash('#tale=not-valid-base64!!')).toBeNull()
  })
})
