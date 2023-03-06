import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }, 
  },
  plugins: [vue()],
  build: {
      outDir: 'dist'
    },
    base: '/bugloos-dynamic-form-generator/', 
  test: {
      globals: true,
            environment: 'jsdom'
      },
  server: {
    port: 3000
  },
})
