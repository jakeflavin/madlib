import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { IconButton } from './buttons.styled'
import { MenuItem, MenuPanel, MenuWrap } from './MoreMenu.styled'

export interface MenuAction {
  id: string
  label: string
  icon: ReactNode
  onSelect: () => void
  /** Drawn pressed, for a toggle like saving to the library. */
  pressed?: boolean
}

/**
 * The document actions a story offers, behind one labelled control.
 *
 * They used to sit in the masthead as a row of bare glyphs — seven of them on a
 * phone, two of which (copy the text, copy a link) were near-identical rectangles,
 * with the theme toggle mixed in among them at the same size and weight. Every one
 * had a correct aria-label, so a screen reader did better than an eye did, which is
 * the wrong way round. In here they get the thing they were missing: words.
 */
export function MoreMenu({ actions, label = 'More' }: { actions: MenuAction[]; label?: string }) {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    const onPointer = (event: PointerEvent) => {
      if (!wrap.current?.contains(event.target as Node)) setOpen(false)
    }
    // Escape closes and hands focus back, so the keyboard never ends up stranded
    // inside a panel that is no longer on screen.
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      button.current?.focus()
    }

    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <MenuWrap ref={wrap}>
      <IconButton
        ref={button}
        type="button"
        onClick={() => setOpen((was) => !was)}
        aria-label={label}
        title={label}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? panelId : undefined}
      >
        <MoreHorizontal size={19} aria-hidden="true" />
      </IconButton>

      {open && (
        <MenuPanel id={panelId} role="menu">
          {actions.map((action) => (
            <MenuItem
              key={action.id}
              type="button"
              role="menuitem"
              aria-pressed={action.pressed}
              onClick={() => {
                action.onSelect()
                setOpen(false)
              }}
            >
              {action.icon}
              <span>{action.label}</span>
            </MenuItem>
          ))}
        </MenuPanel>
      )}
    </MenuWrap>
  )
}
