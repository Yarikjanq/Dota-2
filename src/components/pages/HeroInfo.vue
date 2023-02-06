<template>
  <div class="cool">
    <HeroList :trackCounter="trackCounter" />
    <div>      
      <TransitionGroup name="list" tag="ul" class="text-center">
        <div class="text-[30px]" v-if="trackCounter.length === 0"> No History Yet!!</div>
        <li class="flex justify-around items-center bg-[#2F4F4F] mt-[50px] w-[70%] mx-auto" v-for="(track, index) in trackCounter" :key="index">
          <div> {{ index + 1}} </div>
          <div class="w-[10%]">
          <img
          class="w-full"
        :src="'https://api.opendota.com' + track.img"
                  />
                  </div>
                
          <div>{{ track.localized_name }}</div>
          <div>{{ new Date(track.date).toLocaleString() }}</div>
          <button @click="remove(index)">X</button>  
                </li>        
              </TransitionGroup>
  </div>
  </div>
</template>
<script setup lang="ts">
import type { IHero } from "@/types/herointerface";
import { computed, type ComputedRef } from "vue";
import store from "../store/store";
import HeroList from "../HeroList.vue";

const remove = (index: number) =>{
  store.dispatch('removeProduct', index)
  console.log(index);
  
}
const trackCounter: ComputedRef<IHero[]> = computed(() => {
  return store.getters.getCounter;
});
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
