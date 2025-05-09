
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    // Genera source maps per una migliore gestione degli errori
    sourcemap: true,
    // Aggiungi questo per rendere i percorsi relativi funzionanti in GitHub Pages
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
