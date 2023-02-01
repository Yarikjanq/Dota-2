<template>
    <div class="cool">
        <div  class="">
    <HeroList :trackCounter="trackCounter"/>
    <div class=""  v-for="track in trackCounter" :key="track">
     <div> {{ track.localized_name }}</div>
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IHero } from '@/types/herointerface';
import { computed, type ComputedRef } from 'vue';
import store from '../store/store';
import HeroList from '../HeroList.vue';

const trackCounter: ComputedRef<IHero[]> = computed(() => {
      return store.getters.getCounter
    })



</script>
<style scoped>

</style>