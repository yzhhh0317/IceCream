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
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text:'Basic 基础组件',
        items:[
          {text:'Button 按钮',link:'/components/button'},
          {text:'Icon 图标',link:'/components/icon'},
        ]
      },
      {
        text:'Form 表单组件',
        items:[
          {text:'Input',link:'/components/input'}
        ]
      },
      {
        text:'Data 数据展示',
        items:[
          {text:'Collapse',link:'/components/collapse'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
