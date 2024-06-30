import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from '@/stores/game.js'
import { describe, beforeEach, test, expect } from 'vitest'

describe('stores/game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('game should not be inProgress when app starts', () => {
    const gameStore = useGameStore()

    expect(gameStore.inProgress).toBe(false)
  })
})
