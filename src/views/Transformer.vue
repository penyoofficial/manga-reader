<script setup lang="ts">
import { ref } from "vue";

const isRed = ref(true);

setInterval(() => {
  isRed.value = !isRed.value;
}, 500);
</script>

<template>
  <div>
    <p :class="isRed ? 'red' : ''">
      You shouldn't be there unless you want to break the law.
    </p>
    <!-- An API can be here to transform raw data from other websites into the data fitting the Reader. -->
  </div>
</template>

<style scoped>
p {
  background: #000;
  color: #fff;
  text-align: center;
  user-select: none;
  &.red {
    background: #ff0000;
  }
}
</style>
