<template>
  <div>
    <ModalWindow v-model:heroes="selectedHero" />
    <div class="grid grid-cols-4 w-full px-[30px] mx-auto">
      <div class="text-center w-[80%] mb-[50px]" @click="toggleModal(poo.id)" v-for="(poo, index) in post" :key="index">
        <div>      
          <img class="mx-auto valid scale w-full" :src="getImage(poo)" />   
        </div>
        <p class="block_text text-[20px]">{{ poo.localized_name }}</p>
      </div>
      <!-- <button @click="toggleModal(poo.id)" v-for="(poo, index) in post" :key="index">
        <div>      
          <img class="mx-auto valid scale" :src="getImage(poo)" />   
        </div>
        <div class="flex items-end justify-center">
       
        </div>
      </button> -->
    </div>
 
  </div>
</template>
<script setup lang="ts">
import { computed, ComputedRef, ref } from "vue";
import { useStore } from "vuex";
import type { IHero } from ".././types/herointerface";
import ModalWindow from "./UI/ModalWindow.vue";
const props = defineProps<{
  post?: IHero;
  trackCounter?: Array;
}>()
const store = useStore()
const trackCounter: ComputedRef<IHero[]> = computed(() => {
      return store.getters.getCounter
    })

const selectedHero = ref(0);

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
    transition: 0.2s; 
   }
   .scale:hover {
    transform: scale(1.1);
   }
   .container{
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
   }
</style>
