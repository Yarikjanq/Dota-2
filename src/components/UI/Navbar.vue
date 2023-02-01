<template>
  <div class="navv flex justify-between h-[90px] items-center">
    <img class="h-[80px] ml-[30px] fixed" src="../img/Dota_2.png" alt="">
    <div class="w-[80%] mx-auto text-end">
      <button class="text-[20px] mr-[100px]" @click="$router.push('/')">
        Home
      </button>
      <button class="text-[20px] mr-[100px]" @click="$router.push('/heroes')">
        Heroes
      </button>
      <button class="text-[20px]" @click="$router.push('/history')">
        History
      </button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.navv {
  background-color: rgba(19, 111, 149, 0.37);
}
</style>
