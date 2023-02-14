<template>
  <div>
    <Switch @remove="showw = !showw" />
    <ModalWindow v-model:heroes="selectedHero" />
    <div
      class="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-[30px] mx-auto gap-[40px]"
    >
      <div
        class="text-center w-full border-[5px]"
        :class="{
          'border-red-700': poo.primary_attr === 'str',

          'border-green-700': poo.primary_attr === 'agi',
          'border-blue-700': poo.primary_attr === 'int',
          'bg-blue-700': poo.primary_attr === 'int',
          'bg-red-700': poo.primary_attr === 'str',
          'bg-green-700': poo.primary_attr === 'agi',
        }"
        @click="toggleModal(poo.id)"
        v-for="(poo, index) in post"
        :key="index"
      >
        <div>
          <img class="mx-auto valid scale w-full" :src="getImage(poo)" />
        </div>
        <p class="block_text text-[20px]">{{ poo.localized_name }}</p>
        <div v-show="showw">
          <div class="py-[10px]">
            <div class="flex justify-between border-b-[2px]">
              <div>Attack range</div>
              <div>
                {{ poo.attack_range }}
                <div></div>
              </div>
            </div>
          </div>
          <div class="py-[10px]">
            <div class="flex justify-between border-b-[2px]">
              <div>Attack type</div>
              <div>
                {{ poo.attack_type }}
              </div>
            </div>
          </div>
          <div class="py-[10px]">
            <div class="flex justify-between border-b-[2px]">
              <div>Base health</div>
              <div>
                {{ poo.base_health }}
              </div>
            </div>
          </div>
          <div class="py-[10px]">
            <div class="flex justify-between border-b-[2px]">
              <div>Base int</div>
              <div>
                {{ poo.base_int }}
              </div>
            </div>
          </div>
          <div class="py-[10px]">
            <div class="flex justify-between border-b-[2px]">
              <div>Base health regen</div>
              <div>
                {{ poo.base_health_regen }}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ComputedRef, ref } from "vue";
import { useStore } from "vuex";
import type { IHero } from ".././types/herointerface";
import ModalWindow from "./UI/ModalWindow.vue";
import { GetPosts } from "@/hook/GetHeroes";
import Switch from "./UI/Switch.vue";
const props = defineProps<{
  post?: IHero;
  trackCounter?: Array;
  sortOption?: Array;
}>();
const { posts } = GetPosts();
const store = useStore();
const trackCounter: ComputedRef<IHero[]> = computed(() => {
  return store.getters.getCounter;
});
const selectedHero = ref(0);
const showw = ref(false);
const toggleModal = (id: number) => {
  selectedHero.value = props.post?.find((post: any) => post.id === id);
  console.log(selectedHero.value);
  store.dispatch("addHeroToHistory", selectedHero.value);
  console.log(trackCounter.value);
};
const getImage = (poo: any) => {
  return "https://api.opendota.com" + poo.img;
};
</script>
<style scoped>
.scale {
  transition: 0.2s;
}
.scale:hover {
  transform: scale(1.1);
}
.container {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
