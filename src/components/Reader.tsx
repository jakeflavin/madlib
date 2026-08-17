import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  Check,
  Copy,
  Home,
  Link2,
  Pause,
  Printer,
  Volume2,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'
import { shareUrl } from '../lib/share'
import { renderBody, renderPlainText, slotLabel } from '../lib/template'
import type { Tale } from '../types'

interface ReaderProps {
  tale: Tale
  words: Record<string, string>
  onEditWord: (slotId: string, value: string) => void
  onSave: () => void
  saved: boolean
  onBack: () => void
}

export function Reader({ tale, words, onEditWord, onSave, saved, onBack }: ReaderProps) {
  // Page 0 is the cover; the chapters follow.
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const [editing, setEditing] = useState<string | null>(null)
  const [copied, setCopied] = useState<'text' | 'link' | null>(null)
  const speech = useSpeech()

  const chapter = page > 0 ? tale.chapters[page - 1] : null
  const pages = tale.chapters.length + 1
  const slotsById = useMemo(() => new Map(tale.slots.map((slot) => [slot.id, slot])), [tale])

  const turn = (delta: number) => {
    setDirection(delta)
    setEditing(null)
    speech.stop()
    setPage((current) => Math.min(pages - 1, Math.max(0, current + delta)))
    // A new page starts at the top, the same way a real one does.
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement) return
      if (event.key === 'ArrowRight') turn(1)
      if (event.key === 'ArrowLeft') turn(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const flash = (kind: 'text' | 'link') => {
    setCopied(kind)
    setTimeout(() => setCopied(null), 1600)
  }

  const copyText = async () => {
    await navigator.clipboard.writeText(renderPlainText(tale, words))
    flash('text')
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl({ taleId: tale.id, words }))
    flash('link')
  }

  const readAloud = () => {
    if (speech.speaking) return speech.stop()
    speech.speak(
      chapter
        ? `${chapter.title}. ${renderBody(chapter.body, words, tale.slots)
            .map((segment) => segment.text)
            .join('')}`
        : tale.title,
    )
  }

  return (
    <div
      className="reader"
      style={
        {
          '--hue-a': tale.hues[0],
          '--hue-b': tale.hues[1],
        } as React.CSSProperties
      }
    >
      <header className="reader-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back to the shelf">
          <Home size={18} aria-hidden="true" />
        </button>
        <span className="reader-title">{tale.title}</span>
        <div className="reader-tools">
          {speech.supported && (
            <button
              type="button"
              className="icon-btn"
              onClick={readAloud}
              aria-label={speech.speaking ? 'Stop reading aloud' : 'Read this page aloud'}
            >
              {speech.speaking ? (
                <Pause size={18} aria-hidden="true" />
              ) : (
                <Volume2 size={18} aria-hidden="true" />
              )}
            </button>
          )}
          <button
            type="button"
            className="icon-btn"
            onClick={copyText}
            aria-label="Copy the whole tale"
          >
            {copied === 'text' ? (
              <Check size={18} aria-hidden="true" />
            ) : (
              <Copy size={18} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={copyLink}
            aria-label="Copy a share link"
          >
            {copied === 'link' ? (
              <Check size={18} aria-hidden="true" />
            ) : (
              <Link2 size={18} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => window.print()}
            aria-label="Print"
          >
            <Printer size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onSave}
            aria-label={saved ? 'Saved to your library' : 'Save to your library'}
            aria-pressed={saved}
          >
            <BookMarked size={18} aria-hidden="true" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </header>

      <div className="page-stage">
        {/* Keyed rather than wrapped in AnimatePresence: an exit animation that has to
            finish before the next page mounts leaves the reader staring at nothing if
            the tab is hidden mid-turn, and a page turn is quick enough not to need one. */}
        <motion.article
          key={page}
          className="page"
          initial={{
            opacity: 0,
            rotateY: direction > 0 ? 12 : -12,
            x: direction > 0 ? 40 : -40,
          }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {chapter ? (
            <>
              <h2 className="chapter-title">{chapter.title}</h2>
              <div className="prose">
                {chapter.body.split('\n\n').map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className={paragraphIndex === 0 ? 'drop-cap' : undefined}>
                    {renderBody(paragraph, words, tale.slots).map((segment, segmentIndex) => {
                      const key = `${page}:${paragraphIndex}:${segmentIndex}`
                      const inner =
                        segment.kind === 'text' ? (
                          segment.text
                        ) : editing === key ? (
                          <input
                            className="word-edit"
                            autoFocus
                            value={words[segment.slotId] ?? ''}
                            onChange={(event) => onEditWord(segment.slotId, event.target.value)}
                            onBlur={() => setEditing(null)}
                            onKeyDown={(event) => event.key === 'Enter' && setEditing(null)}
                            aria-label={`Change ${slotLabel(slotsById.get(segment.slotId)!)}`}
                            size={Math.max(4, (words[segment.slotId] ?? '').length)}
                          />
                        ) : (
                          <button
                            type="button"
                            className="word"
                            onClick={() => setEditing(key)}
                            title="Tap to change this word"
                          >
                            {segment.text}
                          </button>
                        )

                      if (segment.emphasis === 'strong') return <strong key={key}>{inner}</strong>
                      if (segment.emphasis === 'em') return <em key={key}>{inner}</em>
                      return <span key={key}>{inner}</span>
                    })}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <div className="cover">
              <span className="cover-sigil" aria-hidden="true">
                {tale.sigil}
              </span>
              <p className="eyebrow">{tale.kicker}</p>
              <h1 className="cover-title">{tale.title}</h1>
              <p className="cover-byline">
                as told with the words of
                <br />
                <strong>{words[tale.slots[0].id] || 'an anonymous soul'}</strong>
              </p>
              <p className="cover-note">
                Tap any golden word while you read to change your mind about it.
              </p>
            </div>
          )}
        </motion.article>
      </div>

      <footer className="reader-foot">
        <button
          type="button"
          className="icon-btn"
          onClick={() => turn(-1)}
          disabled={page === 0}
          aria-label="Previous page"
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <span className="page-count">
          {page === 0 ? 'Cover' : `Page ${page} of ${tale.chapters.length}`}
        </span>
        <button
          type="button"
          className="icon-btn"
          onClick={() => turn(1)}
          disabled={page === pages - 1}
          aria-label="Next page"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </footer>
    </div>
  )
}
