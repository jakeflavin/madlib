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
  PageTitle,
  Picker,
  PickerLabel,
  Sheet,
  SheetCharacter,
  SheetHead,
  SheetHeadBody,
  SheetTitle,
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

  const fillEmpty = () => {
    const filledIn = { ...words }
    for (const slot of tale.slots) {
      if (!filledIn[slot.id]?.trim()) filledIn[slot.id] = suggestWord(slot.kind)
    }
    onReplaceAll(filledIn)
  }

  return (
    <div style={{ '--fill': tale.accent } as React.CSSProperties}>
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
            <QuietButton
              type="button"
              onClick={() => onReplaceAll({})}
              disabled={filled === 0}
            >
              Clear
            </QuietButton>
            <SecondaryButton type="button" onClick={fillEmpty} disabled={complete}>
              Suggest the rest
            </SecondaryButton>
            <PrimaryButton type="button" onClick={onRead} disabled={!complete}>
              {complete ? 'Read it out loud' : `${tale.slots.length - filled} to go`}
            </PrimaryButton>
          </ActionButtons>
        </ActionBarInner>
      </ActionBar>
    </div>
  )
}
