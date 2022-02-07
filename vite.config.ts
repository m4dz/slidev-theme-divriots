import { defineConfig } from 'vite'
import markdownItMark from 'markdown-it-mark'
import markdownItSmartarrows from 'markdown-it-smartarrows'

export const config = {
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(markdownItMark)
        md.use(markdownItSmartarrows)
      }
    }
  }
}

export default defineConfig(config)
