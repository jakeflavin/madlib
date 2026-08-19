import { BookMarked, Check, Copy, Link2, Pause, PencilLine, Printer, Volume2 } from 'lucide-react'
import { IconButton, QuietButton } from './buttons.styled'
import { Kicker } from './Writer.styled'
import {
  Byline,
  ButtonLabel,
  Chapter,
  ChapterTitle,
  Story,
  StoryCharacter,
  StoryHead,
  StoryTitle,
  Word,
  WordEdit,
} from './Reader.styled'
import { useState } from 'react'
import { TopBar } from './TopBar'
import { useReadingProgress } from '@/hooks/useReadingProgress'
import { useSpeech } from '@/hooks/useSpeech'
import { shareUrl } from '@/lib/share'
import { renderBody, renderPlainText, slotLabel } from '@/lib/template'
import type { Tale } from '@/types'

interface ReaderProps {
  tale: Tale
  words: Record<string, string>
  onEditWord: (slotId: string, value: string) => void
  onEditWords: () => void
  onSave: () => void
  onHome: () => void
  saved: boolean
}

export function Reader({
  tale,
  words,
  onEditWord,
  onEditWords,
  onSave,
  onHome,
  saved,
}: ReaderProps) {
  const [editing, setEditing] = useState<string | null>(null)
  const [copied, setCopied] = useState<'text' | 'link' | null>(null)
  const speech = useSpeech()
  const progress = useReadingProgress()

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
    speech.speak(renderPlainText(tale, words))
  }

  return (
    <div style={{ '--fill': tale.accent } as React.CSSProperties}>
      <TopBar onHome={onHome} progress={progress}>
        <QuietButton type="button" onClick={onEditWords}>
          <PencilLine size={15} aria-hidden="true" />
          <ButtonLabel>Edit words</ButtonLabel>
        </QuietButton>
        {speech.supported && (
          <IconButton
            type="button"
            onClick={readAloud}
            aria-label={speech.speaking ? 'Stop reading aloud' : 'Read aloud'}
            title={speech.speaking ? 'Stop reading aloud' : 'Read aloud'}
          >
            {speech.speaking ? (
              <Pause size={17} aria-hidden="true" />
            ) : (
              <Volume2 size={17} aria-hidden="true" />
            )}
          </IconButton>
        )}
        <IconButton
          type="button"
          onClick={copyText}
          aria-label="Copy the story"
          title="Copy the story"
        >
          {copied === 'text' ? (
            <Check size={17} aria-hidden="true" />
          ) : (
            <Copy size={17} aria-hidden="true" />
          )}
        </IconButton>
        <IconButton
          type="button"
          onClick={copyLink}
          aria-label="Copy a share link"
          title="Copy a share link"
        >
          {copied === 'link' ? (
            <Check size={17} aria-hidden="true" />
          ) : (
            <Link2 size={17} aria-hidden="true" />
          )}
        </IconButton>
        <IconButton
          type="button"
          onClick={() => window.print()}
          aria-label="Print"
          title="Print"
        >
          <Printer size={17} aria-hidden="true" />
        </IconButton>
        <IconButton
          type="button"
          onClick={onSave}
          aria-label={saved ? 'Remove from your library' : 'Save to your library'}
          title={saved ? 'Saved' : 'Save to your library'}
          aria-pressed={saved}
        >
          <BookMarked size={17} aria-hidden="true" fill={saved ? 'currentColor' : 'none'} />
        </IconButton>
      </TopBar>

      <Story>
        <StoryHead>
          <StoryCharacter name={tale.character} />
          <Kicker>{tale.kicker}</Kicker>
          <StoryTitle>{tale.title}</StoryTitle>
          <Byline>
            as told by <strong>{(tale.slots[0] && words[tale.slots[0].id]) || 'somebody'}</strong>
          </Byline>
        </StoryHead>

        {tale.chapters.map((chapter, chapterIndex) => (
          <Chapter key={chapter.title}>
            <ChapterTitle>{chapter.title}</ChapterTitle>
            {chapter.body.split('\n\n').map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {renderBody(paragraph, words, tale.slots).map((segment, segmentIndex) => {
                  const key = `${chapterIndex}:${paragraphIndex}:${segmentIndex}`
                  const inner =
                    segment.kind === 'text' ? (
                      segment.text
                    ) : editing === key ? (
                      <WordEdit
                        autoFocus
                        value={words[segment.slotId] ?? ''}
                        onChange={(event) => onEditWord(segment.slotId, event.target.value)}
                        onBlur={() => setEditing(null)}
                        onKeyDown={(event) => event.key === 'Enter' && setEditing(null)}
                        aria-label={`Change ${slotLabel(tale.slots.find((slot) => slot.id === segment.slotId)!)}`}
                        size={Math.max(4, (words[segment.slotId] ?? '').length)}
                      />
                    ) : (
                      /* The player's word, in their hand, on the line they
                         wrote it on. */
                      <Word
                        type="button"
                        onClick={() => setEditing(key)}
                        title="Tap to change this word"
                      >
                        {segment.text}
                      </Word>
                    )

                  if (segment.emphasis === 'strong') return <strong key={key}>{inner}</strong>
                  if (segment.emphasis === 'em') return <em key={key}>{inner}</em>
                  return <span key={key}>{inner}</span>
                })}
              </p>
            ))}
          </Chapter>
        ))}
      </Story>
    </div>
  )
}
