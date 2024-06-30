<script setup>
import Button from '@/components/lib/Button.vue'
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.welcome">
      <div>title here</div>
      <div>welcome message here</div>
    </div>
    <div :class="$style.settings">
      <Button text="Game on!" type="green" />
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
