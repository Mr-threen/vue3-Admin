import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss' // windiCss引入

export default defineConfig({
  plugins: [vue(), WindiCSS()], // windiCss使用Ï
  server: {
    // hmr: true, 热更新（hmr）默认开启，如若未开启可设置
    open: true, // 启动开发服务器时自动打开浏览器
  },
})
