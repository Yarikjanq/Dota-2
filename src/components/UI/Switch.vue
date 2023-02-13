<template>
    <div>
        <label class="relative inline-flex items-center cursor-pointer">
  <input @click="change" type="checkbox" value="" class="sr-only peer">
  <div checked class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-[15px]">Stats</span>
</label>


    </div>
</template>
<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["remove"]);
const change = () => {
  emit("remove");
};

</script>