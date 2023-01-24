<template>
  <div class="cool">
    <sort-image />
    <image-but />
  </div>
</template>

<script setup lang="ts">
import SortImage from "./components/sortImage.vue";
import ImageBut from "./components/ImageBut.vue";
import { ref } from "vue";

const agis = ref([]);
</script>
<style scoped>
.cool {
  background-color: rgb(25, 32, 35);
  background-image: linear-gradient(to right, rgb(26, 43, 62), rgb(20, 30, 48));
  color: rgba(255, 255, 255, 0.87);
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
.cool1 {
  background-color: rgba(19, 111, 149, 0.37);
}
</style>
