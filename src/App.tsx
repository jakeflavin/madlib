import { useEffect, useState } from 'react'
import { Forge } from './components/Forge'
import { Library } from './components/Library'
import { Motes } from './components/Motes'
import { Reader } from './components/Reader'
import { Shelf } from './components/Shelf'
import { loadDrafts, loadLibrary, saveDraft, saveLibrary } from './lib/library'
import { fromShareHash } from './lib/share'
import { TALES, findTale } from './tales'
import type { SavedTale, Tale } from './types'

type View = 'shelf' | 'forge' | 'reader' | 'library'

export default function App() {
  const [view, setView] = useState<View>('shelf')
  const [tale, setTale] = useState<Tale | null>(null)
  const [words, setWords] = useState<Record<string, string>>({})
  const [drafts, setDrafts] = useState(loadDrafts)
  const [library, setLibrary] = useState(loadLibrary)
  const [savedId, setSavedId] = useState<string | null>(null)

  // A shared link opens straight into the reader with somebody else's words.
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

  const openTale = (next: Tale) => {
    setTale(next)
    setWords(drafts[next.id] ?? {})
    setSavedId(null)
    setView('forge')
  }

  const writeWord = (slotId: string, value: string) => {
    if (!tale) return
    setWords((current) => {
      const next = { ...current, [slotId]: value }
      saveDraft(tale.id, next)
      setDrafts((all) => ({ ...all, [tale.id]: next }))
      return next
    })
  }

  const fillAll = (next: Record<string, string>) => {
    if (!tale) return
    setWords(next)
    saveDraft(tale.id, next)
    setDrafts((all) => ({ ...all, [tale.id]: next }))
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

  const goShelf = () => {
    if (window.location.hash) history.replaceState(null, '', window.location.pathname)
    setView('shelf')
  }

  return (
    <div className="app">
      <Motes />

      {view === 'shelf' && (
        <Shelf
          tales={TALES}
          drafts={drafts}
          library={library}
          onOpen={openTale}
          onOpenLibrary={() => setView('library')}
        />
      )}

      {view === 'forge' && tale && (
        <Forge
          tale={tale}
          words={words}
          onChange={writeWord}
          onFillAll={fillAll}
          onFinish={() => setView('reader')}
          onBack={goShelf}
        />
      )}

      {view === 'reader' && tale && (
        <Reader
          tale={tale}
          words={words}
          onEditWord={writeWord}
          onSave={saveToLibrary}
          saved={savedId !== null}
          onBack={goShelf}
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
          onBack={goShelf}
        />
      )}
    </div>
  )
}
