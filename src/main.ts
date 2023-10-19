import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 註冊 ant Design
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
