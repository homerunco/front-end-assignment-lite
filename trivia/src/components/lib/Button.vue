<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['green', 'red', 'default'].includes(value)
    }
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button :class="[$style[props.type], $style.button]">
    {{ props.text }}
  </button>
</template>

<style module>
.button {
  padding: 0.25rem;
  appearance: none;
}

.button:hover {
  color: var(--vt-c-white-soft);
}

.button:hover.default {
  background: var(--vt-c-black-soft);
}

.button:hover.green {
  background: var(--green-500);
}

.button:hover.red {
  background: var(--red-500);
}
</style>
