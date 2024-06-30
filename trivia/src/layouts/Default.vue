<template>
  <main :class="$style.layout">
    <slot />
  </main>
</template>

<style module>
.layout {
  max-width: 500px;
  width: 100%;
  height: 90vh;
  background: white;
  border-radius: var(--border-radius);
}
</style>
