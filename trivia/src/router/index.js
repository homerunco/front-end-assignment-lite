import { createRouter, createWebHistory } from 'vue-router'
import { useGameStore } from '@/stores/game.js'

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

router.beforeEach((to, from) => {
  const gameStore = useGameStore()

  if (!gameStore.inProgress && to.name !== 'start') return { name: 'start' }
})

export default router
