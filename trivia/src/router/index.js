import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: () => import('../views/Quiz.vue')
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/Start.vue')
    }
  ]
})

export default router
