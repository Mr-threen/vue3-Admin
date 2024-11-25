import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path' // 引入 Node.js 的 path 模块

import WindiCSS from 'vite-plugin-windicss' // windiCss引入

export default defineConfig({
  plugins: [vue(), WindiCSS()], // windiCss使用
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Vite 配置路径别名
    },
  },
  server: {
    // hmr: true, 热更新（hmr）默认开启，如若未开启可设置
    open: true, // 启动开发服务器时自动打开浏览器
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
