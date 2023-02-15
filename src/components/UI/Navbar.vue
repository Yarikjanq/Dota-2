<template>
  <div class="flex justify-between items-center fixed w-full z-[3]">
    <div
      class="container flex justify-between items-center navv sm:pr-[80px!important]"
    >
      <div class="">
        <img
          class="h-[90px] w-[90px] bg-black"
          src="../img/Dota_2.png"
          alt=""
        />
      </div>
      <div class="hidden sm:flex w-[315px] w-full">
        <div class="w-full flex justify-between gap-[10px]">
          <button
            class="text-[20px] text-[#cf6300] hover:text-[#f3e5ab]"
            @click="$router.push('/')"
          >
            Heroes
          </button>
          <button
            class="text-[20px] text-[#cf6300] hover:text-[#f3e5ab] relative px-[30px]"
            @click="$router.push('/history')"
          >
            <div class="flex justify-end absolute right-0 bottom-0">
              <div
                class="static flex items-center justify-center bg-zinc-300 w-[25px] h-[25px] top-[33px] rounded-[50%]"
                v-if="trackCounter.length > 0"
              >
                {{ trackCounter.length }}
              </div>
            </div>
            History
          </button>
          <button
            class="text-[20px] text-[#cf6300] hover:text-[#f3e5ab]"
            @click="$router.push(`/${post_id.account_id}`)"
          >
            My
          </button>
        </div>
      </div>
      <div
        @click="test1"
        class="inline-block sm:hidden p-3 space-y-2 rounded shadow"
      >
        <span class="block w-8 h-0.5 animate-pulse bg-[#cf6300]"></span>
        <span class="block w-8 h-0.5 animate-pulse bg-[#cf6300]"></span>
        <span class="block w-8 h-0.5 animate-pulse bg-[#cf6300]"></span>
      </div>
      <transition name="translateX">
        <div
          class="bg-black absolute top-0 left-0 right-0 bottom-0 h-[900px] opacity-[0.9] show-block"
        >
          <div class="text-white text-end text-[20px] p-[20px] last-click">
            <span class="block w-[20px] ml-auto" @click="test2">X</span>
          </div>
          <div
            class="flex flex-col items-center p-[30px] h-[500px] justify-center"
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
  </div>
</template>
<script setup lang="ts">
import { GetId } from "@/hook/GetId";
import type { IHero } from "@/types/herointerface";
import { computed, ref, type ComputedRef } from "vue";
import store from "../store/store";
const { post_id } = GetId();
const trackCounter: ComputedRef<IHero[]> = computed(() => {
  return store.getters.getCounter;
});
const dialog = ref(false);
function test1() {
  const showBlock = document.querySelector(".show-block");
  showBlock.classList.add("active");
}
function test2() {
  const showBlock = document.querySelector(".show-block");
  showBlock.classList.remove("active");
}
</script>

<style scoped>
.show-block {
  position: fixed;
  left: -100%;
  top: 0;
  transition: all 0.5s ease-in;
}
.show-block {
  width: 100%;
  height: 100%;
}
.show-block.active {
  left: 0;
  transition: all 0.5s ease-in;
}
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
  padding: 10px;
}
.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transition: all 1.2s;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
