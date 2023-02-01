<template>
  <div class="cool">
    <HeroList :trackCounter="trackCounter" />
    <div class="flex justify-around">
     
      <div  class="text-center" v-if="trackCounter.length !==0">
        Name:
        <div class="text-left" v-for="track in trackCounter" :key="track">
          <div>{{ track.localized_name }}</div>
        </div>
      </div>
      <div class="text-center" v-if="trackCounter.length !==0">
        Attack:
        <div class="text-left" v-for="track in trackCounter" :key="track">
          <div>{{ track.attack_type }}</div>
        </div>
      </div>
      <div class="text-center" v-if="trackCounter.length !==0">
        Attack:
        <div class="text-center" v-for="track in trackCounter" :key="track">
          <div>{{ track.attack_range }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IHero } from "@/types/herointerface";
import { computed, type ComputedRef } from "vue";
import store from "../store/store";
import HeroList from "../HeroList.vue";

const trackCounter: ComputedRef<IHero[]> = computed(() => {
  return store.getters.getCounter;
});
</script>
<style scoped></style>
