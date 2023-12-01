<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
div {
  --width: 42rem;
  --padding-lr: calc((100% - var(--width)) / 2);

  width: var(--width);
  padding: 1rem var(--padding-lr);
  overflow-y: auto;
}

@media screen and (max-width: 42rem) {
  div {
    width: 99%;
    padding: 1rem 0.5%;
  }
}
</style>
