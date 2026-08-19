import { Monitor, Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useAppliedTheme'

type ThemeButtonProps = {
  theme: Theme
  onChange: (theme: Theme) => void
}

/*
 * Three states behind one button. The app has no settings screen to put a proper
 * segmented control in, and adding one for a single choice would be the larger
 * intrusion — so the button shows the state it is in and cycles to the next.
 */
const order: Theme[] = ['system', 'light', 'dark']
const icons = { system: Monitor, light: Sun, dark: Moon }
const labels = { system: 'Theme: following the device', light: 'Theme: light', dark: 'Theme: dark' }

export function ThemeButton({ theme, onChange }: ThemeButtonProps) {
  const Icon = icons[theme]
  const next = order[(order.indexOf(theme) + 1) % order.length] ?? 'system'

  return (
    <button
      type="button"
      className="btn-quiet btn-icon"
      onClick={() => onChange(next)}
      aria-label={labels[theme]}
      title={labels[theme]}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  )
}
