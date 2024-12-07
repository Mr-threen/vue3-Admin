import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'

import 'virtual:windi.css'

const app = createApp(App)
app.use(Antd)
app.mount('#app')
