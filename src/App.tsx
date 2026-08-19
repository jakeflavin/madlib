import { useEffect, useState } from 'react'
import { Library } from './components/Library'
import { Reader } from './components/Reader'
import { Shelf } from './components/Shelf'
import { Writer } from './components/Writer'
import { carryWords } from './lib/carry'
import { loadDrafts, loadLibrary, saveDraft, saveLibrary } from './lib/library'
import { fromShareHash } from './lib/share'
import { TALES, findTale } from './tales'
import type { SavedTale, Tag, Tale } from './types'

type View = 'contents' | 'writer' | 'reader' | 'library'

export default function App() {
  const [view, setView] = useState<View>('contents')
  const [tale, setTale] = useState<Tale | null>(null)
  const [words, setWords] = useState<Record<string, string>>({})
  const [tag, setTag] = useState<Tag | null>(null)
  const [drafts, setDrafts] = useState(loadDrafts)
  const [library, setLibrary] = useState(loadLibrary)
  const [savedId, setSavedId] = useState<string | null>(null)

  // A shared link opens straight into the story with somebody else's words.
  useEffect(() => {
    const shared = fromShareHash(window.location.hash)
    if (!shared) return

    const found = findTale(shared.taleId)
    if (!found) return

    setTale(found)
    setWords(shared.words)
    setSavedId(null)
    setView('reader')
  }, [])

  const remember = (taleId: string, next: Record<string, string>) => {
    setWords(next)
    saveDraft(taleId, next)
    setDrafts((all) => ({ ...all, [taleId]: next }))
  }

  const openTale = (next: Tale) => {
    setTale(next)
    setWords(drafts[next.id] ?? {})
    setSavedId(null)
    setView('writer')
  }

  /** Switching stories mid-fill keeps the answers that fit the new tale. */
  const switchTale = (next: Tale) => {
    if (!tale) return openTale(next)

    const carried = { ...(drafts[next.id] ?? {}), ...carryWords(tale, next, words) }
    setTale(next)
    setSavedId(null)
    remember(next.id, carried)
  }

  const writeWord = (slotId: string, value: string) => {
    if (!tale) return
    remember(tale.id, { ...words, [slotId]: value })
  }

  const commitLibrary = (next: SavedTale[]) => {
    setLibrary(next)
    saveLibrary(next)
  }

  const saveToLibrary = () => {
    if (!tale) return

    if (savedId) {
      commitLibrary(library.filter((entry) => entry.id !== savedId))
      setSavedId(null)
      return
    }

    const entry: SavedTale = {
      id: `${tale.id}-${Date.now()}`,
      taleId: tale.id,
      title: tale.title,
      words,
      savedAt: Date.now(),
    }
    commitLibrary([entry, ...library])
    setSavedId(entry.id)
  }

  const goContents = () => {
    if (window.location.hash) history.replaceState(null, '', window.location.pathname)
    setView('contents')
  }

  return (
    <div>
      {view === 'contents' && (
        <Shelf
          tales={TALES}
          drafts={drafts}
          library={library}
          tag={tag}
          onTag={setTag}
          onOpen={openTale}
          onOpenLibrary={() => setView('library')}
        />
      )}

      {view === 'writer' && tale && (
        <Writer
          tale={tale}
          tales={TALES}
          words={words}
          onChange={writeWord}
          onReplaceAll={(next) => remember(tale.id, next)}
          onSwitchTale={switchTale}
          onRead={() => {
            window.scrollTo({ top: 0 })
            setView('reader')
          }}
          onBack={goContents}
        />
      )}

      {view === 'reader' && tale && (
        <Reader
          tale={tale}
          words={words}
          onEditWord={writeWord}
          onEditWords={() => {
            window.scrollTo({ top: 0 })
            setView('writer')
          }}
          onSave={saveToLibrary}
          onHome={goContents}
          saved={savedId !== null}
        />
      )}

      {view === 'library' && (
        <Library
          tales={library}
          onRead={(saved) => {
            const found = findTale(saved.taleId)
            if (!found) return
            setTale(found)
            setWords(saved.words)
            setSavedId(saved.id)
            setView('reader')
          }}
          onDelete={(id) => commitLibrary(library.filter((entry) => entry.id !== id))}
          onBack={goContents}
        />
      )}
    </div>
  )
}
