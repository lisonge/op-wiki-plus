<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const x = ref(0);
let task: number | undefined = undefined;
onMounted(() => {
  task = window.setInterval(() => {
    x.value++;
  }, 1000);
});
onUnmounted(() => {
  window.clearInterval(task);
});
</script>

<template>
  <div class="root-1fdb449b">{{ x }}</div>
</template>

<style scoped lang="scss">
.root-1fdb449b {
  color: blue;
}
</style>
