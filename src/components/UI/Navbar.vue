<template>
  <div class="flex justify-between h-[90px] items-center">
    <div class="container flex justify-between items-center fixed navv z-[1]">
      <div class="">
        <img
          class="ml-[30px] h-[90px] bg-black"
          src="../img/Dota_2.png"
          alt=""
        />
      </div>
      <div>
      <div class="">
        <button
          class="text-[20px] border-[1px] bg-[#A9A9A9] px-[15px] py-[4px] hover:bg-slate-500 mr-[50px]"
          @click="$router.push('/')"
        >
          Heroes
        </button>
        <button
          class="text-[20px] border-[1px] bg-[#A9A9A9] px-[15px] py-[4px] hover:bg-slate-500 mr-[50px]"
          @click="$router.push('/history')"
        >
          <div class="flex justify-end">
            <div
              class="absolute flex items-center justify-center bg-zinc-300 w-[25px] h-[25px] top-[23px] rounded-[50%]"
              v-if="trackCounter.length > 0"
            >
              {{ trackCounter.length }}
            </div>
          </div>
          History
        </button>
        <button
          class="text-[20px] border-[1px] bg-[#A9A9A9] px-[15px] py-[4px] hover:bg-slate-500 mr-[50px]" 
          @click="$router.push(`/${post_id.account_id}`)"
        >
          My
        </button>
      </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GetId } from "@/hook/GetId";
import type { IHero } from "@/types/herointerface";
import { computed, ref, type ComputedRef } from "@vue/runtime-dom";
import store from "../store/store";
const { post_id } = GetId();
const trackCounter: ComputedRef<IHero[]> = computed(() => {
  return store.getters.getCounter;
});
</script>

<style scoped>
.navv {
  background-image: url(../img/380528.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
}
.current {
  border: 3px solid blue;
}
.container {
  max-width: 1960px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
