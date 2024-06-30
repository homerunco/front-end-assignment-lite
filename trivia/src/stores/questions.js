import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import { generateFetchUrl } from '@/utils/url.js'

export const useQuestionsStore = defineStore('questions', () => {
  const isFetching = ref(false)
  const questions = ref([])

  async function fetchQuestions(options) {
    const url = generateFetchUrl(options)

    const response = await useFetch(url)

    isFetching.value = response.isFetching
    questions.value = JSON.parse(response.data.value).results
  }

  return { questions, fetchQuestions }
})
