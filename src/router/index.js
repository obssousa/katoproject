import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        top: 40,
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})
export default router
