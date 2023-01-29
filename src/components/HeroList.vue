<template>
    <div class="grid grid-cols-4">
        <div class="m-3 bg-slate-900" v-for="poo in post" :key="poo">
         <div class="text-center text-[20px] text-cyan-600"> {{ poo.localized_name}} </div>
            <div> 
                <img class="w-[40%] mx-auto" :src="getImage(poo)">
            </div>
                
            <div class="border-t-[3px] border-indigo-500"></div>
                <div class="flex justify-between mx-[20px]">
                    <div>
                   Move speed: 
                   </div>
                    <div>
                    {{ poo.move_speed }}
                    </div>             
                </div>
                <div class="border-t-[3px] border-indigo-500"></div>
                <div class="flex justify-between mx-[20px]">
                    <div>
                    Attacke range:
                    </div>
                    <div>
                     {{ poo.attack_range }}
                     </div>
                </div>
                <div class="border-t-[3px] border-indigo-500"></div>
            <div class="flex h-[100px] items-end justify-center">
               <button @click="$router.push('/hero_info/' + poo.id)" class="text-[20px] m-0 rounded-[3px] border-[2px] px-[20px] mb-[20px]">Learn More</button> 
            
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
const props = defineProps(['post'])


const getImage = (poo: any) => {
  return "https://api.opendota.com" + poo.img;
};
</script>
<style scoped>
.text1{


}
</style>