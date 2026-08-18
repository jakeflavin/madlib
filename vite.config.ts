import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The tests are plain node ones over src/lib and src/tales, which is vitest's default.
export default defineConfig({
  // Served from a sub-path of the portfolio's Hosting site.
  base: '/madlib/',
  plugins: [react()],
})
