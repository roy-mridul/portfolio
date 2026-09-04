import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // Bind to all interfaces so this is reachable through devcontainer/Codespaces
    // port forwarding — Vite's default (localhost-only) rejects those connections.
    host: true,
  },
  preview: {
    host: true,
  },
})
