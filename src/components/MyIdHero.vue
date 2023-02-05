<template>
    <div>
      
        <div v-for="info in hero_inf" :key="info">
   
       
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    hero_inf?: Array;

}>()



</script>