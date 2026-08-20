import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// The tests are plain node ones over src/lib and src/tales, which is vitest's default.
export default defineConfig({
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // Served from a sub-path of the portfolio's Hosting site. The path is the app's
  // name: it used to be /madlib/, which is what this was called before it was Fable,
  // and the address is the part people paste to each other.
  base: '/fable/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },

})
