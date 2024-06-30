import { setActivePinia, createPinia } from 'pinia'
import { useQuestionsStore } from '@/stores/questions.js'
import { describe, beforeEach, test, expect } from 'vitest'

describe('stores/game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('questions should be empty on app start', () => {
    const questionsStore = useQuestionsStore()

    expect(questionsStore.questions).toStrictEqual([])
  })
})
