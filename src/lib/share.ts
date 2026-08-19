/**
 * A finished tale travels in the URL hash so a link is the whole share mechanism —
 * no server, no storage, nothing to expire.
 */

export interface SharedTale {
  taleId: string
  words: Record<string, string>
}

/** Base64url, so the payload survives a paste into a chat window. */
function encode(value: string): string {
  const bytes = new TextEncoder().encode(value)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function decode(value: string): string {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/')
  const binary = atob(padded + '='.repeat((4 - (padded.length % 4)) % 4))
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

export function toShareHash(shared: SharedTale): string {
  return `#tale=${encode(JSON.stringify([shared.taleId, shared.words]))}`
}

export function fromShareHash(hash: string): SharedTale | null {
  const match = /[#&]tale=([^&]+)/.exec(hash)
  if (!match) return null

  try {
    const payload = match[1]
    if (!payload) return null
    const [taleId, words] = JSON.parse(decode(payload))
    if (typeof taleId !== 'string' || typeof words !== 'object' || words === null) return null
    return { taleId, words }
  } catch {
    return null
  }
}

export function shareUrl(shared: SharedTale, base = window.location.href): string {
  return base.split('#')[0] + toShareHash(shared)
}
