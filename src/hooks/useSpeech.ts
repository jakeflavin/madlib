import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Read-aloud, via the browser's own voice.
 *
 * Two things decide how this sounds, and only one of them is ours.
 *
 * The one that is: *which* voice gets used. Browsers hand back a list and pick a
 * default that is usually the smallest, oldest, most robotic one installed — on iOS
 * a compact voice, on Linux Chrome eSpeak. Ranking the list and choosing deliberately
 * is the single biggest improvement available to us, and it costs nothing.
 *
 * The one that is not: the voices the device actually has. This app has no server by
 * design, so there is no cloud speech to fall back on. If a phone only carries compact
 * voices, compact is the ceiling — on iOS those live under Settings → Accessibility →
 * Spoken Content → Voices, and downloading an Enhanced or Premium one is picked up
 * here automatically.
 */

/** Names that are reliably the better voice on the platforms that ship them. */
const GOOD_NAMES =
  /\b(ava|allison|samantha|serena|siri|zoe|evan|nathan|joelle|tom|daniel|karen|moira|matilda|aria|jenny|guy|sonia|ryan|libby)\b/i

/** Vendor markers for the higher-quality variants of an otherwise identical voice. */
const GOOD_QUALITY = /(premium|enhanced|neural|natural|wavenet|studio)/i

function rank(voice: SpeechSynthesisVoice): number {
  const tag = `${voice.name} ${voice.voiceURI}`
  let score = 0

  if (GOOD_QUALITY.test(tag)) score += 100
  // Network voices (Google's, Microsoft's) beat the local fallbacks almost everywhere.
  if (!voice.localService) score += 40
  if (/^google/i.test(voice.name)) score += 30
  if (/^microsoft/i.test(voice.name)) score += 20
  if (GOOD_NAMES.test(voice.name)) score += 25
  // A story reads better in the reader's own English than in a foreign one.
  if (/^en[-_]/i.test(voice.lang)) score += 10
  if (voice.lang.replace('_', '-') === navigator.language) score += 15
  // Novelty voices are installed on plenty of Macs and are unusable for prose.
  if (
    /(bells|bubbles|cellos|organ|zarvox|trinoids|whisper|wobble|bahh|boing|jester)/i.test(
      voice.name,
    )
  ) {
    score -= 200
  }

  return score
}

export function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const english = voices.filter((voice) => /^en/i.test(voice.lang))
  const pool = english.length ? english : voices
  if (!pool.length) return null
  return pool.reduce((best, voice) => (rank(voice) > rank(best) ? voice : best))
}

/**
 * Speakable pieces: whole sentences, packed up to a cap, never crossing a paragraph.
 *
 * Two failure modes to sit between. One utterance holding a six-minute story is where
 * Safari gives up partway through, so there is a cap. But one utterance per sentence
 * is not the answer either — each one carries a small gap at its edges, and prose full
 * of short lines of dialogue turns into a stilted list. Packing sentences up to a cap
 * keeps the phrasing continuous and the utterances short enough to survive.
 *
 * Paragraphs are never joined, because the pause between them is real punctuation.
 */
const MAX_CHUNK = 200

export function toChunks(text: string): string[] {
  const chunks: string[] = []

  for (const paragraph of text.split(/\n+/)) {
    const trimmed = paragraph.trim()
    if (!trimmed) continue

    const sentences = trimmed.match(/[^.!?]+[.!?]*\s*/g) ?? [trimmed]
    let current = ''

    for (const sentence of sentences) {
      const piece = sentence.trim()
      if (!piece) continue

      if (!current) {
        current = piece
      } else if (current.length + 1 + piece.length <= MAX_CHUNK) {
        current += ` ${piece}`
      } else {
        chunks.push(current)
        current = piece
      }
    }

    if (current) chunks.push(current)
  }

  return chunks
}

export function useSpeech() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const [speaking, setSpeaking] = useState(false)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
  // Bumped on every stop, so a queue that is already running can tell it is stale.
  const runId = useRef(0)

  // The list arrives asynchronously in most browsers, and can change when the user
  // installs a voice, so it is watched rather than read once.
  useEffect(() => {
    if (!supported) return
    const load = () => setVoice(pickVoice(window.speechSynthesis.getVoices()))
    load()
    window.speechSynthesis.addEventListener('voiceschanged', load)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load)
  }, [supported])

  const stop = useCallback(() => {
    if (!supported) return
    runId.current += 1
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [supported])

  const speak = useCallback(
    (text: string) => {
      if (!supported) return
      window.speechSynthesis.cancel()

      const run = (runId.current += 1)
      const chunks = toChunks(text)
      if (!chunks.length) return

      setSpeaking(true)

      chunks.forEach((chunk, index) => {
        const utterance = new SpeechSynthesisUtterance(chunk)
        if (voice) utterance.voice = voice
        utterance.lang = voice?.lang ?? 'en-GB'
        // A shade under conversational: this is a bedtime story, not a notification.
        utterance.rate = 0.95
        utterance.pitch = 1.02

        if (index === chunks.length - 1) {
          utterance.onend = () => {
            if (runId.current === run) setSpeaking(false)
          }
        }
        utterance.onerror = () => {
          if (runId.current === run) setSpeaking(false)
        }

        window.speechSynthesis.speak(utterance)
      })
    },
    [supported, voice],
  )

  useEffect(() => stop, [stop])

  return { supported, speaking, speak, stop, voiceName: voice?.name ?? null }
}
