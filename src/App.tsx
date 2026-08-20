import { useCallback, useEffect, useRef, useState } from 'react'
import { Library } from './components/Library'
import { Reader } from './components/Reader'
import { Shelf } from './components/Shelf'
import { Writer } from './components/Writer'
import { carryWords } from './lib/carry'
import { loadDrafts, loadLibrary, saveDraft, saveLibrary } from './lib/library'
import { readRoute, routeUrl, type View } from './lib/route'
import { fromShareHash } from './lib/share'
import { TALES, findTale } from './tales'
import type { SavedTale, Tag, Tale } from './types'

const known = (taleId: string) => Boolean(findTale(taleId))

/** Where the current URL says we are. Read on load and again on every Back/Forward. */
const routeNow = () => readRoute(window.location, fromShareHash, known)

export default function App() {
  const [drafts, setDrafts] = useState(loadDrafts)
  const [library, setLibrary] = useState(loadLibrary)
  const [tag, setTag] = useState<Tag | null>(null)
  const [savedId, setSavedId] = useState<string | null>(null)

  // The view, the story and its words all come from the URL on first paint, so a
  // shared link, a refresh mid-fill and a bookmark all land in the same place.
  const [state, setState] = useState(() => {
    const route = routeNow()
    const shared = fromShareHash(window.location.hash)
    const tale = route.taleId ? (findTale(route.taleId) ?? null) : null
    return {
      view: route.view,
      tale,
      words: (route.shared ? shared?.words : tale ? drafts[tale.id] : undefined) ?? {},
      shared: route.shared,
    }
  })
  const { view, tale, words } = state

  const [brokenShare, setBrokenShare] = useState(() => routeNow().brokenShare)

  // The current view, readable without closing over it. `go` needs to know where it is
  // in order to work out where it is going, and it has to do that outside the state
  // updater: pushing history from inside one would fire twice under StrictMode and put
  // a duplicate entry between every pair of screens.
  const stateRef = useRef(state)
  stateRef.current = state

  /** Moves to a view and gives it an address, so Back comes back here. */
  const go = useCallback(
    (
      next: { view: View; tale?: Tale | null; words?: Record<string, string>; shared?: boolean },
      replace = false,
    ) => {
      const prev = stateRef.current
      const changingTale = next.tale !== undefined && next.tale?.id !== prev.tale?.id
      const resolved = {
        view: next.view,
        tale: next.tale === undefined ? prev.tale : next.tale,
        words: next.words ?? (changingTale ? {} : prev.words),
        shared: next.shared ?? (changingTale ? false : prev.shared),
      }

      const url = routeUrl(
        { view: resolved.view, taleId: resolved.tale?.id, shared: resolved.shared },
        window.location.hash,
      )
      const here = window.location.pathname + window.location.search + window.location.hash
      if (replace) history.replaceState(null, '', url)
      else if (url !== here) history.pushState(null, '', url)

      stateRef.current = resolved
      setState(resolved)
      setBrokenShare(false)
    },
    [],
  )

  // Back and Forward rebuild the view from whatever address they land on. Drafts are
  // read fresh rather than closed over, so stepping back into a sheet shows the words
  // that are actually saved for it.
  const draftsRef = useRef(drafts)
  draftsRef.current = drafts
  useEffect(() => {
    const onPop = () => {
      const route = routeNow()
      const sharedTale = fromShareHash(window.location.hash)
      const found = route.taleId ? (findTale(route.taleId) ?? null) : null
      const landed = {
        view: route.view,
        tale: found,
        words:
          (route.shared ? sharedTale?.words : found ? draftsRef.current[found.id] : undefined) ??
          {},
        shared: route.shared,
      }
      stateRef.current = landed
      setState(landed)
      setBrokenShare(route.brokenShare)
      setSavedId(null)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const remember = (taleId: string, next: Record<string, string>) => {
    setState((prev) => ({ ...prev, words: next }))
    saveDraft(taleId, next)
    setDrafts((all) => ({ ...all, [taleId]: next }))
  }

  const openTale = (next: Tale) => {
    setSavedId(null)
    go({ view: 'writer', tale: next, words: drafts[next.id] ?? {}, shared: false })
  }

  /** Switching stories mid-fill keeps the answers that fit the new tale. */
  const switchTale = (next: Tale) => {
    if (!tale) return openTale(next)

    const carried = { ...(drafts[next.id] ?? {}), ...carryWords(tale, next, words) }
    setSavedId(null)
    saveDraft(next.id, carried)
    setDrafts((all) => ({ ...all, [next.id]: carried }))
    go({ view: 'writer', tale: next, words: carried, shared: false }, true)
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

  const goContents = () => go({ view: 'contents', tale: null, words: {}, shared: false })

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
          onOpenLibrary={() => go({ view: 'library' })}
          brokenShare={brokenShare}
          onDismissBrokenShare={() => setBrokenShare(false)}
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
            go({ view: 'reader' })
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
            go({ view: 'writer' })
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
            setSavedId(saved.id)
            go({ view: 'reader', tale: found, words: saved.words, shared: false })
          }}
          onDelete={(id) => commitLibrary(library.filter((entry) => entry.id !== id))}
          onRestore={(entry, index) =>
            commitLibrary([...library.slice(0, index), entry, ...library.slice(index)])
          }
          onBack={goContents}
        />
      )}
    </div>
  )
}
