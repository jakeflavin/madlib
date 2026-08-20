import type { ReactNode } from 'react'
import { ThemeButton } from './ThemeButton'
import { useTheme } from '@/hooks/useTheme'
import { Actions, Divider, Inner, Masthead, Wordmark } from './TopBar.styled'

interface TopBarProps {
  onHome: () => void
  /** Buttons for the right-hand side. */
  children?: ReactNode
  /** 0–100. Draws the reading line along the band's lower edge. */
  progress?: number
}

/**
 * The masthead band, as a booklet cover has: solid navy, the wordmark knocked
 * out in white, sitting on a heavy ink rule.
 */
export function TopBar({ onHome, children, progress }: TopBarProps) {
  const { theme, setTheme } = useTheme()

  return (
    <Masthead style={{ '--read': `${progress ?? 0}%` } as React.CSSProperties}>
      <Inner>
        <Wordmark type="button" onClick={onHome}>
          Fable
        </Wordmark>
        <Actions>
          {children}
          {children ? <Divider aria-hidden="true" /> : null}
          <ThemeButton theme={theme} onChange={setTheme} />
        </Actions>
      </Inner>
    </Masthead>
  )
}
