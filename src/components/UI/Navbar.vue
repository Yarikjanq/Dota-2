<template>
    <div class="navv flex justify-between h-[60px] items-center">
    <div class="text-[30px]">Dota 2</div>
    <div class="w-[80%] mx-auto text-end">
    <button class="text-[20px] mr-[100px]" @click="$router.push('/')">Home</button>
    <button class="text-[20px]" @click="$router.push('/heroes')">Heroes</button>
  </div>
</div>
</template>
<script setup lang="ts" >

</script>

<style scoped>
.navv{
   background-color: rgba(19, 111, 149, 0.37)
}
</style>