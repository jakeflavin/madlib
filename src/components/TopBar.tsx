import type { ReactNode } from 'react'
import { ThemeButton } from './ThemeButton'
import { useTheme } from '../hooks/useTheme'

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
    <header className="masthead" style={{ '--read': `${progress ?? 0}%` } as React.CSSProperties}>
      <div className="masthead-inner">
        <button type="button" className="wordmark" onClick={onHome}>
          Fable
        </button>
        <div className="masthead-actions">
          {children}
          <ThemeButton theme={theme} onChange={setTheme} />
        </div>
      </div>
    </header>
  )
}
