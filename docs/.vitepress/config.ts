import { text } from 'stream/consumers'
import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default defineConfig({
  base: '/IceCream/',
  title: "IceCream UI",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    ['link', { rel: 'icon', href: '/Icecream.png' }]
  ],
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
    logo: '/Icecream.png',
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
