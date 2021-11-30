import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vant } from '@/config/vant.config.js'
import 'vant/lib/index.css'

const app = createApp(App)
vant(app)
app.use(store).use(router).mount('#app')
