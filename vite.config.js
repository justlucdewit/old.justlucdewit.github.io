import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import url from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },

  plugins: [vue()],
  resolve: {
    alias: {
      "@": url.fileURLToPath(new URL("./src", import.meta.url)),
      "icon": "vue-material-design-icons"
    },
  },
})
