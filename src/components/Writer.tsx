import { useRef, useState } from 'react'
import { PrimaryButton, QuietButton, SecondaryButton } from './buttons.styled'
import {
  ActionBar,
  ActionBarInner,
  ActionButtons,
  Blank,
  BlankBody,
  BlankHint,
  BlankKind,
  BlankNumber,
  Blanks,
  Kicker,
  Page,
  PageTitle,
  Picker,
  PickerLabel,
  Sheet,
  SheetCharacter,
  SheetHead,
  SheetHeadBody,
  SheetTitle,
  SheetTools,
  Suggest,
  Tally,
  WriteOn,
} from './Writer.styled'
import { TopBar } from './TopBar'
import { kindLabel } from '@/lib/template'
import { suggestWord } from '@/lib/suggestions'
import type { Slot, Tale } from '@/types'

interface WriterProps {
  tale: Tale
  tales: Tale[]
  words: Record<string, string>
  onChange: (slotId: string, value: string) => void
  onReplaceAll: (words: Record<string, string>) => void
  onSwitchTale: (tale: Tale) => void
  onRead: () => void
  onBack: () => void
}

/**
 * What gets printed under a write-on line. The part of speech always shows,
 * because that is what the player is answering; a custom prompt or hint rides
 * along beneath it when the story has one.
 */
function prompt(slot: Slot): { kind: string; hint: string | null } {
  const kind = kindLabel(slot.kind)
  const hint = slot.label ?? slot.hint ?? null
  return { kind, hint: hint === kind ? null : hint }
}

export function Writer({
  tale,
  tales,
  words,
  onChange,
  onReplaceAll,
  onSwitchTale,
  onRead,
  onBack,
}: WriterProps) {
  const filled = tale.slots.filter((slot) => words[slot.id]?.trim()).length
  const complete = filled === tale.slots.length

  /*
   * Clear used to empty twenty-eight answers with no confirmation and no way back,
   * overwriting the saved draft in the same motion. A confirmation for something this
   * cheap to undo would be a nag; keeping the answers to hand for a few seconds and
   * offering them back is the better trade.
   */
  const [cleared, setCleared] = useState<Record<string, string> | null>(null)
  const undoTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const clearAll = () => {
    setCleared(words)
    onReplaceAll({})
    clearTimeout(undoTimer.current)
    undoTimer.current = setTimeout(() => setCleared(null), 10000)
  }

  const undoClear = () => {
    if (!cleared) return
    onReplaceAll(cleared)
    setCleared(null)
    clearTimeout(undoTimer.current)
  }

  const fillEmpty = () => {
    const filledIn = { ...words }
    for (const slot of tale.slots) {
      if (!filledIn[slot.id]?.trim()) filledIn[slot.id] = suggestWord(slot.kind)
    }
    onReplaceAll(filledIn)
  }

  return (
    <Page style={{ '--fill': tale.accent } as React.CSSProperties}>
      <TopBar onHome={onBack}>
        <QuietButton type="button" onClick={onBack}>
          All stories
        </QuietButton>
      </TopBar>

      <SheetHead>
        <SheetCharacter name={tale.character} />
        <SheetHeadBody>
          <Kicker>{tale.kicker}</Kicker>
          <PageTitle>{tale.title}</PageTitle>
          <Picker as="label">
            <PickerLabel>Playing</PickerLabel>
            <select
              value={tale.id}
              onChange={(event) => {
                const next = tales.find((item) => item.id === event.target.value)
                if (next) onSwitchTale(next)
              }}
            >
              {tales.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </Picker>
        </SheetHeadBody>
      </SheetHead>

      <Sheet>
        <SheetTitle>Fill in the blanks</SheetTitle>

        {/* These two act on the sheet, so they sit on it rather than riding along in
            the bar — which on a phone is the difference between three visible blanks
            and eight. */}
        <SheetTools>
          {cleared ? (
            /* "Undo", not "Undo clear": the two labels swap in place, and a wider one
               reflowed the row from one line to two the instant you pressed Clear. The
               accessible name stays specific. */
            <SecondaryButton type="button" onClick={undoClear} aria-label="Undo clear">
              Undo
            </SecondaryButton>
          ) : (
            <SecondaryButton type="button" onClick={clearAll} disabled={filled === 0}>
              Clear
            </SecondaryButton>
          )}
          <SecondaryButton type="button" onClick={fillEmpty} disabled={complete}>
            Suggest the rest
          </SecondaryButton>
        </SheetTools>

        <Blanks>
          {tale.slots.map((slot, index) => {
            const { kind, hint } = prompt(slot)

            return (
              <Blank key={slot.id}>
                <BlankNumber>{index + 1}</BlankNumber>
                <BlankBody as="label">
                  {/* The line, then the part of speech under it — the format's
                      one non-negotiable. */}
                  <WriteOn>
                    <input
                      value={words[slot.id] ?? ''}
                      onChange={(event) => onChange(slot.id, event.target.value)}
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <Suggest
                      type="button"
                      onClick={() => onChange(slot.id, suggestWord(slot.kind, words[slot.id]))}
                      aria-label={`Suggest a ${kind.toLowerCase()}`}
                    >
                      Suggest
                    </Suggest>
                  </WriteOn>
                  <BlankKind>{kind}</BlankKind>
                  {hint && <BlankHint>{hint}</BlankHint>}
                </BlankBody>
              </Blank>
            )
          })}
        </Blanks>
      </Sheet>

      {/* The action bar rides with you: on a 28-blank sheet the button that
          matters should never be a scroll away. */}
      <ActionBar>
        <ActionBarInner>
          <Tally>
            <strong>{filled}</strong> of {tale.slots.length} filled in
          </Tally>

          <ActionButtons>
            {/* The label says what the button does, not how far off it is — the tally
                beside it already counts, and a control that only names its purpose once
                you no longer need telling is no help to a first-time player. */}
            <PrimaryButton type="button" onClick={onRead} disabled={!complete}>
              Read it out loud
            </PrimaryButton>
          </ActionButtons>
        </ActionBarInner>
      </ActionBar>
    </Page>
  )
}
