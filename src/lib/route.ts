/**
 * Where you are, kept in the URL.
 *
 * The four views used to share one address, so the browser's Back button — the
 * control people reach for without thinking, and a system gesture on a phone —
 * walked straight out of the app and back to the directory. Now each view has an
 * address, Back moves between them, and a story you are part-way through is a link
 * you can send yourself.
 *
 * Two mechanisms coexist deliberately:
 *
 *   ?story=<id>[&at=read]   where you are, in the query
 *   #tale=<payload>         somebody else's finished story, in the hash
 *
 * A share link carries its whole story in the hash and no server is involved. Since
 * the hash says *what* you are reading and the query says *where you are looking at
 * it from*, the two compose: open a shared story, press "Edit words", and the hash
 * survives so a refresh still has the words.
 */

export type View = 'contents' | 'writer' | 'reader' | 'library'

export interface Route {
  view: View
  /** Set for the writer and the reader. */
  taleId?: string
  /** True when the words came from a share link rather than a draft. */
  shared: boolean
  /** A share link arrived but its payload was unreadable. */
  brokenShare: boolean
}

/** Recognises a share payload before we try to trust it, so we can tell the difference
 *  between "no share link" and "a share link that did not survive the trip". */
const HAS_SHARE = /[#&]tale=/

export function readRoute(
  url: { search: string; hash: string },
  shareWords: (hash: string) => { taleId: string } | null,
  known: (taleId: string) => boolean,
): Route {
  const params = new URLSearchParams(url.search)
  const at = params.get('at')

  const shared = shareWords(url.hash)
  if (shared && known(shared.taleId)) {
    return {
      view: at === 'write' ? 'writer' : 'reader',
      taleId: shared.taleId,
      shared: true,
      brokenShare: false,
    }
  }

  // A hash that looks like a share but did not resolve: the reader followed a link
  // that a chat client truncated, or that names a story this build doesn't have.
  if (HAS_SHARE.test(url.hash)) {
    return { view: 'contents', shared: false, brokenShare: true }
  }

  const taleId = params.get('story')
  if (taleId && known(taleId)) {
    return { view: at === 'read' ? 'reader' : 'writer', taleId, shared: false, brokenShare: false }
  }

  if (at === 'library') return { view: 'library', shared: false, brokenShare: false }

  return { view: 'contents', shared: false, brokenShare: false }
}

/** The address for a view. Keeps the share payload when there is one to keep. */
export function routeUrl(route: Pick<Route, 'view' | 'taleId' | 'shared'>, hash: string): string {
  const params = new URLSearchParams()

  if (route.view === 'library') params.set('at', 'library')

  if (route.view === 'writer' || route.view === 'reader') {
    // A shared story is named by its payload; repeating the id in the query would
    // only be a second, staler copy of the same fact.
    if (!route.shared && route.taleId) params.set('story', route.taleId)
    if (route.shared && route.view === 'writer') params.set('at', 'write')
    if (!route.shared && route.view === 'reader') params.set('at', 'read')
  }

  const query = params.toString()
  const keptHash = route.shared ? hash : ''
  return window.location.pathname + (query ? `?${query}` : '') + keptHash
}
