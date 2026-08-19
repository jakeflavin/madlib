import type { SavedTale } from '@/types'

const KEY = 'fable.library.v1'

export function loadLibrary(): SavedTale[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as SavedTale[]) : []
  } catch {
    return []
  }
}

export function saveLibrary(tales: SavedTale[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(tales))
  } catch {
    // A full or blocked storage quota shouldn't take the reader out of the story.
  }
}

/** Drafts survive a refresh mid-fill, keyed per tale so several can be in progress. */
const DRAFT_KEY = 'fable.drafts.v1'

export function loadDrafts(): Record<string, Record<string, string>> {
  try {
    return JSON.parse(localStorage.getItem(DRAFT_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export function saveDraft(taleId: string, words: Record<string, string>): void {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify({ ...loadDrafts(), [taleId]: words }))
  } catch {
    // Best effort only.
  }
}
