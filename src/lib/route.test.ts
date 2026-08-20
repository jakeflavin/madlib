import { describe, expect, it } from 'vitest'
import { readRoute, routeUrl } from './route'

const known = (id: string) => id === 'ember-fell' || id === 'cinder-crown'
const shareOf = (hash: string) =>
  hash.includes('tale=good')
    ? { taleId: 'ember-fell' }
    : hash.includes('tale=missing')
      ? { taleId: 'no-such' }
      : null

const at = (search: string, hash = '') => readRoute({ search, hash }, shareOf, known)

describe('readRoute', () => {
  it('lands on the contents page with no query', () => {
    expect(at('')).toMatchObject({ view: 'contents', brokenShare: false })
  })

  it('opens a story on its fill sheet', () => {
    expect(at('?story=ember-fell')).toMatchObject({
      view: 'writer',
      taleId: 'ember-fell',
      shared: false,
    })
  })

  it('opens the reader when the query says so', () => {
    expect(at('?story=ember-fell&at=read')).toMatchObject({ view: 'reader', taleId: 'ember-fell' })
  })

  it('opens the library', () => {
    expect(at('?at=library')).toMatchObject({ view: 'library' })
  })

  it('ignores a story this build does not have', () => {
    expect(at('?story=nonsense')).toMatchObject({ view: 'contents' })
  })

  it('opens a share link straight into the story', () => {
    expect(at('', '#tale=good')).toMatchObject({
      view: 'reader',
      taleId: 'ember-fell',
      shared: true,
    })
  })

  it('lets a shared story be edited without losing its words', () => {
    // The hash still carries the words; the query only says which screen to show.
    expect(at('?at=write', '#tale=good')).toMatchObject({ view: 'writer', shared: true })
  })

  it('reports a share link it could not read, rather than failing silently', () => {
    expect(at('', '#tale=truncated')).toMatchObject({ view: 'contents', brokenShare: true })
  })

  it('reports a share link naming a story that no longer exists', () => {
    expect(at('', '#tale=missing')).toMatchObject({ view: 'contents', brokenShare: true })
  })
})

describe('routeUrl', () => {
  const path = window.location.pathname

  it('gives the contents page a bare address', () => {
    expect(routeUrl({ view: 'contents', shared: false }, '')).toBe(path)
  })

  it('names the story on the fill sheet', () => {
    expect(routeUrl({ view: 'writer', taleId: 'ember-fell', shared: false }, '')).toBe(
      `${path}?story=ember-fell`,
    )
  })

  it('marks the reader so Back can tell the two apart', () => {
    expect(routeUrl({ view: 'reader', taleId: 'ember-fell', shared: false }, '')).toBe(
      `${path}?story=ember-fell&at=read`,
    )
  })

  it('keeps a share payload when moving to the fill sheet', () => {
    expect(routeUrl({ view: 'writer', taleId: 'ember-fell', shared: true }, '#tale=good')).toBe(
      `${path}?at=write#tale=good`,
    )
  })

  it('does not repeat the story id alongside a share payload that already names it', () => {
    expect(routeUrl({ view: 'reader', taleId: 'ember-fell', shared: true }, '#tale=good')).toBe(
      `${path}#tale=good`,
    )
  })

  it('drops the share payload on the way back to the shelf', () => {
    expect(routeUrl({ view: 'contents', shared: false }, '#tale=good')).toBe(path)
  })
})
