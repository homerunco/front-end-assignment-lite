<script setup>
import { computed } from 'vue'

const props = defineProps({
  clickable: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['click'])

const classClickable = computed(() => (props.clickable ? 'clickable' : undefined))
const classActive = computed(() => (props.active ? 'active' : undefined))

function handleClick() {
  if (props.clickable) {
    emits('click')
  }
}
</script>

<template>
  <div :class="[$style.card, $style[classClickable], $style[classActive]]" @click="handleClick">
    <slot />
  </div>
</template>

<style module>
.card {
  border: 1px solid black;
  text-align: center;
  padding: 0.5rem 1rem;
}

.clickable {
  cursor: pointer;
}

.active {
  background: black;
  color: white;
}
</style>
