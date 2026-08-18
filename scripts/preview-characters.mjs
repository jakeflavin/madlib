/**
 * Renders every character out of Character.tsx onto one sheet — large, on both
 * a crayon cover and paper — so they can be judged side by side rather than by
 * hunting them one at a time in the app.
 *
 * `npm run characters`, then open http://localhost:5178/_characters.html with
 * the dev server running. The output is gitignored: it is a work surface, not
 * part of the app.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const src = readFileSync(new URL('../src/components/Character.tsx', import.meta.url), 'utf8')

const FILLS = {
  dragon: '#F0813F', crown: '#F7C948', tree: '#8FC7E8', mermaid: '#86C99A',
  castle: '#B9A7DC', fairy: '#F2A0BE', knight: '#9AA9E8', witch: '#6FC5C0',
  unicorn: '#DCA9E8', troll: '#C6D870', book: '#D7A96B', phoenix: '#EE6B5E',
}

const body = src.slice(src.indexOf('const DRAWINGS'), src.indexOf('export function Character'))
const entries = [...body.matchAll(/^ {2}(\w+): \(\n([\s\S]*?)\n {2}\),$/gm)]

const tiles = entries.map(([, name, jsx]) => {
  const shapes = jsx
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<\/?>/g, '')
    .replace(/fill=\{FILL\}/g, `fill="${FILLS[name] ?? '#ccc'}"`)
    .replace(/\{'\s*'\}/g, '')
  return `<figure>
    <div class="tile" style="background:${FILLS[name]}">
      <svg viewBox="0 0 64 64" fill="none" stroke="#16130f" stroke-width="3"
           stroke-linejoin="round" stroke-linecap="round"
           style="--ink:#16130f">${shapes.replace(new RegExp(`fill="${FILLS[name]}"`, 'g'), 'fill="#FFFDF6"')}</svg>
    </div>
    <div class="tile paper">
      <svg viewBox="0 0 64 64" fill="none" stroke="#16130f" stroke-width="3"
           stroke-linejoin="round" stroke-linecap="round"
           style="--ink:#16130f">${shapes}</svg>
    </div>
    <figcaption>${name}</figcaption>
  </figure>`
}).join('\n')

writeFileSync(new URL('../public/_characters.html', import.meta.url), `<!doctype html>
<meta charset="utf-8"><title>characters</title>
<style>
 body{margin:0;padding:28px;background:#FFFDF6;font:600 13px/1.3 system-ui;color:#16130f}
 .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
 figure{margin:0;display:grid;grid-template-columns:1fr 1fr;gap:8px}
 .tile{border:3px solid #16130f;border-radius:8px;display:grid;place-items:center;padding:12px}
 .tile.paper{background:#FFFDF6}
 svg{width:100%;height:auto;display:block}
 figcaption{grid-column:1/-1;text-transform:uppercase;letter-spacing:.06em;color:#5d564c}
</style>
<div class="grid">${tiles}</div>
`)
console.log('wrote', entries.length, 'characters')
