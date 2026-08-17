import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The tests are plain node ones over src/lib and src/tales, which is vitest's default.
export default defineConfig({
  plugins: [react()],
})
