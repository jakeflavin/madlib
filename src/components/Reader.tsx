import { BookMarked, Check, Copy, LayoutGrid, PencilLine, Printer, Share2 } from 'lucide-react'
import { QuietButton } from './buttons.styled'
import { Kicker } from './Writer.styled'
import { MoreMenu, type MenuAction } from './MoreMenu'
import {
  AlwaysLabel,
  Byline,
  ButtonLabel,
  Chapter,
  ChapterTitle,
  Flash,
  Story,
  StoryCharacter,
  StoryHead,
  StoryTitle,
  Word,
  WordEdit,
} from './Reader.styled'
import { useEffect, useRef, useState } from 'react'
import { TopBar } from './TopBar'
import { useReadingProgress } from '@/hooks/useReadingProgress'
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
  const [flash, setFlash] = useState<string | null>(null)
  const flashTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const progress = useReadingProgress()

  useEffect(() => () => clearTimeout(flashTimer.current), [])

  /*
   * Copying used to say so by swapping an icon to a tick for a moment — visible only
   * if you were looking at the button you had just pressed, and silent to a screen
   * reader. Now the app says what happened, in words, where the eye already is.
   */
  const say = (message: string) => {
    setFlash(message)
    clearTimeout(flashTimer.current)
    flashTimer.current = setTimeout(() => setFlash(null), 2400)
  }

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(renderPlainText(tale, words))
      say('Story copied')
    } catch {
      say("Couldn't copy — your browser blocked it")
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl({ taleId: tale.id, words }))
      say('Link copied')
    } catch {
      say("Couldn't copy — your browser blocked it")
    }
  }

  const actions: MenuAction[] = [
    {
      id: 'copy-link',
      label: 'Copy a share link',
      icon: <Share2 size={17} aria-hidden="true" />,
      onSelect: copyLink,
    },
    {
      id: 'copy-text',
      label: 'Copy the story',
      icon: <Copy size={17} aria-hidden="true" />,
      onSelect: copyText,
    },
    {
      id: 'save',
      label: saved ? 'Saved to your library' : 'Save to your library',
      icon: <BookMarked size={17} aria-hidden="true" fill={saved ? 'currentColor' : 'none'} />,
      onSelect: onSave,
      pressed: saved,
    },
    {
      id: 'print',
      label: 'Print',
      icon: <Printer size={17} aria-hidden="true" />,
      onSelect: () => window.print(),
    },
  ]

  return (
    <div style={{ '--fill': tale.accent } as React.CSSProperties}>
      <TopBar onHome={onHome} progress={progress}>
        {/* The reader was the only screen with no way back to the shelf — and the one a
            shared link drops a stranger into, with eleven other stories they cannot see. */}
        <QuietButton type="button" onClick={onHome}>
          <LayoutGrid size={15} aria-hidden="true" />
          <ButtonLabel>All stories</ButtonLabel>
        </QuietButton>

        {/* The one thing a reader is most likely to want from this bar, so it keeps
            its words at every width. */}
        <QuietButton type="button" onClick={onEditWords}>
          <PencilLine size={15} aria-hidden="true" />
          <AlwaysLabel>Edit words</AlwaysLabel>
        </QuietButton>

        <MoreMenu actions={actions} label="Share, save and print" />
      </TopBar>

      {flash && (
        <Flash role="status">
          <Check size={16} aria-hidden="true" />
          {flash}
        </Flash>
      )}

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
                      <Word type="button" onClick={() => setEditing(key)} title="Change this word">
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
