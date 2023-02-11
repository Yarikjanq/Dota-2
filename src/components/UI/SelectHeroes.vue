<template>
    <div>
        <select
        v-model="selected"
      @change="vsis"
          class="bg-blue-600 p-[10px] w-[120px]">
          <option disabled class="text-black" value=""><strong>Chose hero</strong> </option>
            <option v-for="info in her" 
            :value="{health_regen: info.base_health_regen, name: info.base_int, health: info.base_health, image: info.img,
               mana: info.base_mana, legs: info.legs, attr: info.primary_attr}"
            > {{ info.localized_name }} </option>
        </select>
        <div v-if="selected.length !==0" v-show="visi" class="fixed top-0 bottom-0 left-0 right-0 max-w-[300px] z-[2] mx-auto mt-[150px]">
        <div class=" bg-slate-500 h-[300px]">
          <div class="mx-auto w-[30%]">
           <img 
           :src="'https://api.opendota.com' + selected.image">
            </div>
          <div class="flex justify-between mt-[20px] mx-[20px]"
          :class="{'bg-red-500' :selected.attr === 'str', 'bg-green-500':selected.attr === 'agi', 'bg-blue-500':selected.attr === 'int'}">
               <div class="">Health regen: </div>
            <div>{{ selected.health_regen }}</div>
            </div>
            <div class="flex justify-between mt-[10px]  mx-[20px]"
            :class="{'bg-red-500' :selected.attr === 'str', 'bg-green-500':selected.attr === 'agi', 'bg-blue-500':selected.attr === 'int'}">
                <div> Base int: </div>  
            <div>{{ selected.name }} </div>
            </div>
            <div class="flex justify-between mt-[10px]  mx-[20px]"
            :class="{'bg-red-500' :selected.attr === 'str', 'bg-green-500':selected.attr === 'agi', 'bg-blue-500':selected.attr === 'int'}">
                <div>Base health:</div>
            <div>{{ selected.health }}</div>
            </div>
            <div class="flex justify-between mt-[10px]  mx-[20px]"
            :class="{'bg-red-500' :selected.attr === 'str', 'bg-green-500':selected.attr === 'agi', 'bg-blue-500':selected.attr === 'int'}">
                <div>Base mana:</div>
            <div>{{ selected.mana }}</div>
            </div>
            <div class="flex justify-between mt-[10px]  mx-[20px]"
            :class="{'bg-red-500' :selected.attr === 'str', 'bg-green-500':selected.attr === 'agi', 'bg-blue-500':selected.attr === 'int'}">
                <div>Legs:</div>
            <div>{{ selected.legs }}</div>
            </div>
            <div class="flex items-end justify-center h-[20%]">
            <button @click.stop="vsis1" class="px-[20px]" 
            :class="{'bg-red-500' :selected.attr === 'str', 'hover:bg-red-800':selected.attr === 'str',
         'bg-green-500' :selected.attr === 'agi','hover:bg-green-800':selected.attr === 'agi',
          'bg-blue-500' :selected.attr === 'int','hover:bg-blue-800':selected.attr === 'int',
          }">Close</button>
            </div>
  </div>
  </div>
    </div>
  
</template>
<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emit = defineEmits(["rem"]);
   const optionss =() => {
  
    
      emit("rem", false);
};
const close1 = () =>{
 selected.value = false
}
// const close2 = () =>{
//  selected.value = false
// }
const vsis = () =>{
visi.value = true
}
const vsis1 = () =>{
visi.value = false
}
const visi = ref(false)
const selected = ref('')
const props = defineProps<{
  her?: IHero;
}>()
</script>
<style scoped>

</style>