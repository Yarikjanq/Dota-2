<template>
  <div class="navv flex justify-between h-[90px] items-center">
    <div class="">
    <img class="ml-[30px] h-[90px] bg-black" src="../img/Dota_2.png" alt="">
    </div>
    <div class="w-[80%] mx-auto text-end">
      <button class="text-[20px] mr-[100px]" @click="$router.push('/')">
        Heroes
      </button>
      <button class="text-[20px] w-[20%] lg:w-[10%]" @click="$router.push('/history')">
        <div  class="flex justify-end">
        <div class="absolute bg-zinc-300 w-[30px] h-[30px] top-[23px] rounded-[50%]" v-if="trackCounter.length > 0">{{ trackCounter.length }}</div>
        </div>
        History
      </button>
    </div>
   
  </div>
</template>
<script setup lang="ts">
import type { IHero } from '@/types/herointerface';
import { computed, ref, type ComputedRef } from '@vue/runtime-dom';
import store from '../store/store';
const trackCounter: ComputedRef<IHero[]> = computed(() => {
  return store.getters.getCounter;
});
</script>

<style scoped>
.navv {
  background-color: rgba(19, 111, 149, 0.37);
}
.current{
  border: 3px solid blue;
}
</style>
