import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path' // 引入 Node.js 的 path 模块

import WindiCSS from 'vite-plugin-windicss' // windiCss引入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 引入svg图标

export default defineConfig({
  server: {
    // hmr: true, 热更新（hmr）默认开启，如若未开启可设置
    open: true, // 启动开发服务器时自动打开浏览器
  },
  plugins: [
    vue(),
    WindiCSS(),
    // 引入svg图标
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
      customDomId: '__svg__icons__dom__', // 自定义 ID
    }),
  ], // windiCss使用
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Vite 配置路径别名
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/variables.less')}";`,
      },
    },
  },
})
