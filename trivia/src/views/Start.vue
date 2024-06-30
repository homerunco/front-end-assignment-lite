<script setup>
//TODO: implement loading state
import Button from '@/components/lib/Button.vue'
import DifficultyPicker from '@/components/DifficultyPicker.vue'
import { ref, computed } from 'vue'
import { useQuestionsStore } from '@/stores/questions.js'
import { useGameStore } from '@/stores/game.js'
import { useRouter } from 'vue-router'

const questionsStore = useQuestionsStore()
const gameStore = useGameStore()
const router = useRouter()

const difficulty = ref()
const startGameButtonDisabled = computed(() => !difficulty.value)

async function handleGameStart() {
  await questionsStore.fetchQuestions({ difficulty: difficulty.value })

  gameStore.inProgress = true

  router.push({ name: 'quiz' })
}
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.welcome">
      <div>title here</div>
      <div>welcome message here</div>
    </div>
    <div :class="$style.settings">
      <DifficultyPicker v-model="difficulty" />
      <Button
        text="Game on!"
        color="green"
        :disabled="startGameButtonDisabled"
        @click="handleGameStart"
      />
    </div>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.welcome,
.settings {
  flex: 1;
}
</style>
