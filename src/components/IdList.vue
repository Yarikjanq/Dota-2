<template>
    <div>
        <div class="flex items-start mt-[40px]">
             <div class="">
                 <img class="rounded-[50%] sg" :src="post_id.avatarfull">
            </div>
        <div class="ml-[30px]">     
           <div class="text-[28px]"> {{ post_id.personaname }}</div>  
                 <div class="flex items-center h-[100px]">
             <div class="flex flex-col">
                <div>Wins</div>
                 <div
                 :class="'text-green-600'"
                 class="text-[20px]">  {{ wl.win }} </div>
             </div>
                <div class="flex flex-col ml-[30px]">
                     <div>Losses</div>
                    <div 
                    :class="'text-red-500'"
                    class="text-[20px]">    {{ wl.lose }} </div>
                    </div>
                  <div class="flex flex-col ml-[30px]">
                <div>Winrate</div>
                <div class="text-[20px]">   {{ summ() }} %</div>
                 </div>
             </div>
            </div>
            </div>
      
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    post_id?: Array;
    wl?: Array;
}>()

const sum = ref([])
const  summ = () =>{
   return (Math.floor(props.wl.win/(props.wl.win + props.wl.lose)*100))
}



</script>
<style scoped>
.sg{
  box-shadow:   rgb(0 0 0 / 40%) 0px 0px 15px 2px;
}
</style>