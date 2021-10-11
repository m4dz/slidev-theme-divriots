import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [svgLoader()],
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(require('markdown-it-mark'))
        md.use(require('markdown-it-smartarrows'))
      }
    }
  }
})
