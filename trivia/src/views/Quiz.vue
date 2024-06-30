<script setup>
import { useQuestionsStore } from '@/stores/questions.js'

const questionsStore = useQuestionsStore()
</script>

<template>
  <div>{{ questionsStore.questions }}</div>
</template>
