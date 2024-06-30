<script setup>
import Card from '@/components/lib/Card.vue'
import { difficulties } from '@/utils/constant.js'

const difficulty = defineModel()

function isCardActive(value) {
  return difficulty.value === value
}

function handleDifficultyChosen(value) {
  difficulty.value = value
}
</script>

<template>
  <div id="difficulty-picker" :class="$style['difficulty-picker']">
    <Card
      v-for="difficulty in difficulties"
      :key="difficulty.label"
      :active="isCardActive(difficulty.apiValue)"
      @click="handleDifficultyChosen(difficulty.apiValue)"
      data-testid="difficulty-card"
      clickable
    >
      {{ difficulty.label }}
    </Card>
  </div>
</template>

<style module>
.difficulty-picker {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
