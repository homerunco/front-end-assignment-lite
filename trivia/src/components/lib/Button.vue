<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'default',
    validator(value) {
      return ['green', 'red', 'default'].includes(value)
    }
  },
  text: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['click'])
</script>

<template>
  <button
    :class="[$style[props.color], $style.button]"
    :disabled="props.disabled"
    @click="emits('click')"
  >
    {{ props.text }}
  </button>
</template>

<style module>
.button {
  padding: 0.25rem;
}

.button:hover:enabled {
  color: var(--vt-c-white-soft);
}

.button:hover:enabled.default {
  background: var(--vt-c-black-soft);
}

.button:hover:enabled.green {
  background: var(--green-500);
}

.button:hover:enabled.red {
  background: var(--red-500);
}
</style>
