import { describe, expect, it } from 'vitest'
import type { Tale } from '../types'
import { carryWords } from './carry'

const tale = (id: string, slots: Tale['slots']): Tale => ({
  id,
  title: id,
  kicker: '',
  blurb: '',
  tags: [],
  minutes: 5,
  accent: '#000',
  emblem: 'flame',
  slots,
  chapters: [],
})

describe('carryWords', () => {
  const from = tale('a', [
    { id: 'hero', kind: 'name' },
    { id: 'thing', kind: 'noun' },
    { id: 'other', kind: 'noun' },
    { id: 'adj', kind: 'adjective' },
  ])

  it('matches answers to the new tale by kind, in order', () => {
    const to = tale('b', [
      { id: 'who', kind: 'name' },
      { id: 'first-noun', kind: 'noun' },
      { id: 'second-noun', kind: 'noun' },
    ])

    expect(
      carryWords(from, to, { hero: 'Wren', thing: 'teapot', other: 'wig', adj: 'soggy' }),
    ).toEqual({
      who: 'Wren',
      'first-noun': 'teapot',
      'second-noun': 'wig',
    })
  })

  it('leaves blanks the old tale cannot fill', () => {
    const to = tale('b', [
      { id: 'who', kind: 'name' },
      { id: 'beast', kind: 'animal' },
    ])

    expect(carryWords(from, to, { hero: 'Wren' })).toEqual({ who: 'Wren' })
  })

  it('ignores answers that were never given', () => {
    const to = tale('b', [{ id: 'who', kind: 'name' }])
    expect(carryWords(from, to, { hero: '   ' })).toEqual({})
  })
})
