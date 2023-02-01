<template>
  <div>
    <CompDia v-model:heroes="selectedHero" />
    <div class="grid grid-cols-7 w-[100%] mx-auto">
      <div class="m-3 bg-slate-900" v-for="poo in post" :key="poo">
        <div class="text-center text-[17px] text-cyan-600">
          {{ poo.localized_name }}
        </div>
        <div>
          <img class="w-[40%] mx-auto" :src="getImage(poo)" />
        </div>
        <div class="flex h-[100px] items-end justify-center">
          <button
            @click="toggleModal(poo.id)"
            class="rounded-[3px] border-[2px] px-[20px] mb-[20px]"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ComputedRef, ref } from "vue";
import { useStore } from "vuex";
import type { IHero } from ".././types/herointerface";
import CompDia from "./UI/CompDia.vue";
const props = defineProps<{
  post?: IHero;
  trackCounter?: Array;
}>()

const store = useStore()
const increase = () => {
  store.dispatch('increment', 1)
}
const trackCounter: ComputedRef<IHero[]> = computed(() => {
      return store.getters.getCounter
    })
const showHeros =() =>{
  if(trackCounter.value.length >= 0){
    shows.value = false
  }
}
const shows = ref(false)
const showHero = () =>{
  shows.value = true
}
const selectedHero = ref(0);
const dialogVisi = ref(false);
const viewId = ref(0);
const showDialog = (id: number) => {
  dialogVisi.value = true;
  viewId.value = id;
  console.log(viewId.value);
};

const isShowModal = ref(false);

const toggleModal = (id: number) => {
  selectedHero.value = props.post?.find((post: any) => post.id === id);
  console.log(selectedHero.value);
  store.dispatch('addHeroToHistory', selectedHero.value)
  console.log(trackCounter.value);
  
  isShowModal.value = true;

};
const getImage = (poo: any) => {
  return "https://api.opendota.com" + poo.img;
};
</script>
<style scoped>
.text1 {
}
</style>
