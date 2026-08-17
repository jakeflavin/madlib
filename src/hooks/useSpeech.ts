import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Read-aloud, via the browser's own voice. Bedtime-story mode: a shade slower
 * than default, and it always stops when the reader leaves the page.
 */
export function useSpeech() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const [speaking, setSpeaking] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const stop = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [supported])

  const speak = useCallback(
    (text: string) => {
      if (!supported) return
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.92
      utterance.pitch = 1
      utterance.onend = () => setSpeaking(false)
      utterance.onerror = () => setSpeaking(false)
      utteranceRef.current = utterance

      window.speechSynthesis.speak(utterance)
      setSpeaking(true)
    },
    [supported],
  )

  useEffect(() => stop, [stop])

  return { supported, speaking, speak, stop }
}
