import { text } from 'stream/consumers'
import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IceCream UI",
  description: "A VitePress Site",
  vite:{
    resolve: {
    alias: {
      '@': fileURLToPath(new URL('../../src', import.meta.url))
    },
  },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text:'Basic基础组件',
        items:[
          {text:'Button',link:'/components/button'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
