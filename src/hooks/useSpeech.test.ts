import { describe, expect, it } from 'vitest'
import { pickVoice, toChunks } from './useSpeech'

/**
 * The chunker stands between a six-minute story and the two ways speech synthesis
 * fails on one: Safari giving up partway through a long utterance, and a sentence-at-a-
 * time queue turning dialogue into a stilted list of separate announcements.
 */
describe('toChunks', () => {
  it('keeps neighbouring sentences together while they fit', () => {
    expect(toChunks('The dragon slept. The village did not. Nobody said why.')).toEqual([
      'The dragon slept. The village did not. Nobody said why.',
    ])
  })

  it('never joins across a paragraph, because that pause is punctuation', () => {
    expect(toChunks('The dragon slept.\n\nThe village did not.')).toEqual([
      'The dragon slept.',
      'The village did not.',
    ])
  })

  it('breaks a long paragraph at sentence boundaries', () => {
    const sentence = 'The dragon considered the whole miserable business once again. '
    const chunks = toChunks(sentence.repeat(8))
    expect(chunks.length).toBeGreaterThan(1)
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(200)
      expect(chunk).toMatch(/[.!?]$/)
    }
  })

  it('keeps the terminator, so the voice hears a question as a question', () => {
    expect(toChunks('Who goes there?')).toEqual(['Who goes there?'])
  })

  it('handles prose with no terminator at all', () => {
    expect(toChunks('a title with no full stop')).toEqual(['a title with no full stop'])
  })

  it('returns nothing for nothing', () => {
    expect(toChunks('   \n  ')).toEqual([])
  })

  it('never loses a word', () => {
    const text =
      'The village of Cloudmere clung to a cliff.\n\nIt was small! Was it? Yes. ' +
      'Old Marrow tapped her cane and said nothing at all for a very long time.'
    const words = (value: string) => value.split(/\s+/).filter(Boolean).length
    expect(toChunks(text).reduce((n, chunk) => n + words(chunk), 0)).toBe(words(text))
  })
})

/**
 * Voice choice is the only part of how this sounds that the app controls. Browsers
 * default to whatever is first in the list, which on most platforms is the oldest and
 * most robotic thing installed.
 */
describe('pickVoice', () => {
  const voice = (name: string, lang = 'en-GB', localService = true) =>
    ({ name, lang, localService, voiceURI: name, default: false }) as SpeechSynthesisVoice

  it('prefers an enhanced variant over the compact one of the same voice', () => {
    // What an iOS device looks like once somebody downloads a better voice.
    const picked = pickVoice([voice('Daniel (Compact)'), voice('Daniel (Enhanced)')])
    expect(picked?.name).toBe('Daniel (Enhanced)')
  })

  it('prefers a network voice over a local fallback', () => {
    const picked = pickVoice([
      voice('English (eSpeak)'),
      voice('Google UK English', 'en-GB', false),
    ])
    expect(picked?.name).toBe('Google UK English')
  })

  it('refuses the novelty voices macOS ships', () => {
    // "Bells" will happily read a bedtime story as a xylophone.
    const picked = pickVoice([voice('Bells'), voice('Zarvox'), voice('Samantha')])
    expect(picked?.name).toBe('Samantha')
  })

  it('stays in English when the list is full of other languages', () => {
    const picked = pickVoice([voice('Amélie', 'fr-FR'), voice('Karen', 'en-AU')])
    expect(picked?.name).toBe('Karen')
  })

  it('still returns something when nothing English is installed', () => {
    expect(pickVoice([voice('Amélie', 'fr-FR')])?.name).toBe('Amélie')
  })

  it('returns nothing when the browser has no voices at all', () => {
    // Headless browsers, and Safari before the list has loaded.
    expect(pickVoice([])).toBeNull()
  })
})
