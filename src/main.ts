import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// 引入 ant-design-vue
import Antd from 'ant-design-vue'

// 引入windiCss
import 'virtual:windi.css'

// 引入less变量
import '@/assets/styles/variables.less'

// 引入svg图标
import 'virtual:svg-icons-register'
// 引入svg图标组件
import { SvgIconPlugin } from './components/SvgIcon'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(SvgIconPlugin)
app.mount('#app')
