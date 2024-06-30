<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value, props) {
      return ['green', 'red', 'default'].includes(value)
    }
  }
})
</script>

<template>
  <button :class="$style[props.type]" />
</template>

<style module>
.default {
  background: var(--vt-c-black-soft);
}

.greeen {
  background: var(--green-500);
}

.red {
  background: var(--red-500);
}
</style>
