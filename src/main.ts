import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// 引入 ant-design-vue
import Antd from 'ant-design-vue'
import 'virtual:windi.css'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')
