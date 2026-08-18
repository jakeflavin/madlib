/**
 * Writes the app icons as PNGs.
 *
 * Home-screen icons have to be PNG — iOS ignores an SVG apple-touch-icon — so they are
 * generated here rather than hand-drawn, and committed. Run `npm run icons` after
 * changing the mark. The PNG is written directly rather than pulling in an image
 * library for three small files.
 *
 * The mark matches public/favicon.svg: the write-on line itself — a yellow
 * field with an ink rule across it (see DESIGN.md).
 */
import { deflateSync } from 'node:zlib'
import { writeFileSync } from 'node:fs'

const OUT = new URL('../public/', import.meta.url)

/** Paper, very slightly warmer at the top. */
const BACKDROP = [
  { stop: 0, rgb: [255, 253, 246] },
  { stop: 1, rgb: [250, 245, 232] },
]

const GLOWS = []

const INK = [22, 19, 15]
const YELLOW = [247, 201, 72]

/** The highlighted field, and the rule you write on. */
const FIELD = { x: 0.5, y: 0.5, hw: 0.32, hh: 0.24, r: 0.05 }
const RULE = { x: 0.5, y: 0.63, hw: 0.26, hh: 0.035, r: 0.02 }
const FRAME = { x: 0.5, y: 0.5, hw: 0.32, hh: 0.24, r: 0.05 }
const FRAME_INNER = { x: 0.5, y: 0.5, hw: 0.288, hh: 0.208, r: 0.035 }

/** Signed distance to a rounded rectangle: negative inside, positive outside. */
function roundRect(u, v, box) {
  const dx = Math.abs(u - box.x) - (box.hw - box.r)
  const dy = Math.abs(v - box.y) - (box.hh - box.r)
  const outside = Math.hypot(Math.max(dx, 0), Math.max(dy, 0))
  return outside + Math.min(Math.max(dx, dy), 0) - box.r
}

const lerp = (a, b, t) => a + (b - a) * t
const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n)

function crc32(buf) {
  const table = []
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c >>> 0
  }
  let crc = 0xffffffff
  for (const byte of buf) crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([length, body, crc])
}

function png(size, pixels) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 2 // truecolour, no alpha: an icon is opaque
  // Each scanline carries a leading filter byte; 0 means "store as is".
  const raw = Buffer.alloc(size * (size * 3 + 1))
  let at = 0
  for (let y = 0; y < size; y++) {
    raw[at++] = 0
    for (let x = 0; x < size; x++) {
      const [r, g, b] = pixels[y * size + x]
      raw[at++] = r
      raw[at++] = g
      raw[at++] = b
    }
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function render(size) {
  const pixels = new Array(size * size)
  const edge = 1.2 / size

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / (size - 1)
      const v = y / (size - 1)

      let rgb = BACKDROP[0].rgb.map((c, i) => lerp(c, BACKDROP[1].rgb[i], v))
      for (const glow of GLOWS) {
        const strength = clamp01(1 - Math.hypot(u - glow.x, v - glow.y) / glow.r) ** 2
        rgb = rgb.map((c, i) => lerp(c, glow.rgb[i], strength))
      }

      // Flat shapes, stacked back to front: yellow field, ink frame, ink rule.
      const paint = (d, colour) => {
        const cover = clamp01(-d / edge)
        if (cover > 0) rgb = rgb.map((c, i) => lerp(c, colour[i], cover))
      }

      paint(roundRect(u, v, FIELD), YELLOW)
      paint(Math.max(roundRect(u, v, FRAME), -roundRect(u, v, FRAME_INNER)), INK)
      paint(roundRect(u, v, RULE), INK)

      pixels[y * size + x] = rgb.map((c) => Math.round(clamp01(c / 255) * 255))
    }
  }

  return png(size, pixels)
}

// 180 is what iOS asks for; 192 and 512 are what a manifest wants.
for (const size of [180, 192, 512]) {
  writeFileSync(new URL(`icon-${size}.png`, OUT), render(size))
  console.log(`wrote public/icon-${size}.png`)
}
