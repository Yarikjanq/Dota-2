<template>
  <div>
    <div
      @click="dialog = !dialog"
      class="inline-block sm:hidden p-3 space-y-2 rounded shadow"
    >
      <span class="block w-8 h-0.5 animate-pulse bg-[#cf6300]"></span>
      <span class="block w-8 h-0.5 animate-pulse bg-[#cf6300]"></span>
      <span class="block w-8 h-0.5 animate-pulse bg-[#cf6300]"></span>
    </div>
    <transition name="slide-fade">
      <div
        v-if="dialog"
        class="bg-black absolute top-0 left-0 right-0 bottom-0 h-[900px] opacity-[0.9]"
      >
        <div
          class="text-white text-end text-[20px] p-[20px] pt-[40px] pr-[35px]"
        >
          <span class="block w-[20px] ml-auto" @click="dialog = !dialog">X</span
          >
        </div>
        <div
          class="flex flex-col items-center p-[30px] h-[450px] justify-center"
        >
          <div class="">
            <button
              class="text-[20px] text-white"
              @click="$router.push('/'), (dialog = !dialog)"
            >
              Heroes
            </button>
          </div>
          <div class="p-[50px]">
            <button
              class="text-[20px] text-white relative px-[30px]"
              @click="$router.push('/history'), (dialog = !dialog)"
            >
              <div class="flex justify-end absolute right-0 bottom-0">
                <div
                  class="static flex items-center justify-center bg-zinc-300 w-[25px] h-[25px] rounded-[50%]"
                  v-if="trackCounter.length > 0"
                >
                  {{ trackCounter.length }}
                </div>
              </div>
              History
            </button>
          </div>
          <div>
            <button
              class="text-[20px] text-white"
              @click="
                $router.push(`/${post_id.account_id}`), (dialog = !dialog)
              "
            >
              My
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { GetId } from '@/hook/GetId';
import type { IHero } from '@/types/herointerface';
import { computed, ComputedRef, ref } from 'vue';
import store from "../store/store"
const trackCounter: ComputedRef<IHero[]> = computed(() => {
  return store.getters.getCounter;
});


const dialog = ref(false)
const { post_id } = GetId();
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
