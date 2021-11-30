import { createRouter, createWebHashHistory } from 'vue-router'
import News from '../views/news/index.vue'

const routes = [
  {
    path: '/',
    name: 'News',
    component: News
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
