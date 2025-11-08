import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  base: '/VisionGalDoc/',

  lang: 'zh-CN',
  title: 'VisionGal 引擎',
  description: ' ',

  theme: defaultTheme({
    logo: '/icons/vg.png',
    navbar: ['/', '/get-started', '/api-documentation'],
    // , '/galgamelua-api-documentation', '/gamelua-api-documentation'
    //sidebarDepth: 3,   确保显示四级标题
  }),

  bundler: webpackBundler(),
})
