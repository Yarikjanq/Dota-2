<template>
  <div>
    <CompDia v-model:heroes="selectedHero" />
    <div class="grid grid-cols-12 w-[70%] mx-auto">
      <button @mouseenter="hover=index" @mouseleave="hover=false" @click="toggleModal(poo.id)" v-for="(poo, index) in post" :key="index">
      <!-- <div v-if="hover == index">  {{ poo.localized_name }}</div> -->

        <div>      
          <img class="mx-auto valid scale" :src="getImage(poo)" />   
        </div>
        <div class="flex items-end justify-center">
       
        </div>
      </button>
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
const hover = ref(false)
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
.scale {
    transition: 0.5s; /* Время эффекта */
   }
   .scale:hover {
    transform: scale(1.5); /* Увеличиваем масштаб */
   }
</style>
