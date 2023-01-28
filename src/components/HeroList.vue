<template>
    <div class="grid grid-cols-4">
        <div v-for="poo in post" :key="poo">
         <div class="text-center"> {{ poo.localized_name}} </div>
            <div> 
                <img class="w-[40%] mx-auto" :src="getImage(poo)">
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