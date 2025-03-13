import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueMacros from 'unplugin-vue-macros'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins:{
        vue:vue(),
        vueJsx:vueJsx()
      }
    }),
    ,vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
