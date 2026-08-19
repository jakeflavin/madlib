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
import { lerp, clamp01, writeIcons } from './icon-png.mjs'

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

  return pixels
}

// 180 is what iOS asks for; 192 and 512 are what a manifest wants.
for (const size of writeIcons(OUT, [180, 192, 512], render)) {
  console.log(`wrote public/icon-${size}.png`)
}
