import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  const inProgress = ref(false)

  return { inProgress }
})
