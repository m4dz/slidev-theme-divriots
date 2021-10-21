import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(require('markdown-it-mark'))
        md.use(require('markdown-it-smartarrows'))
      }
    }
  }
})
