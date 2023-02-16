<template>
  <div class="cool pt-[110px]">
    <div class="flex gap-[24px] items-center p-[30px] boo2 sm:flex-row flex-col">
      <div class="max-w-[150px] h-[150px]">
        <img
          class="rounded-[50%] boo w-full h-full"
          :src="post_id.avatarfull"
        />
      </div>
      <div>
        <div class="text-[28px]">
          {{ post_id.personaname }}
        </div>
        <div class="flex">
          <div class="mr-[25px] mt-[10px]">
            <div class="text-[14px] boo1">WINS</div>
            <div class="text-[24px] text-green-500">
              {{ post_wl.win }}
            </div>
          </div>
          <div class="mr-[25px] mt-[10px]">
            <div class="text-[14px] boo1">LOSSES</div>
            <div class="text-[24px] text-red-500">
              {{ post_wl.lose }}
            </div>
          </div>
          <div>
            <div class="text-[14px] mt-[10px] boo1">WINRATE</div>
            <div class="text-[24px]">{{ Sum() }}%</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="sm:p-[40px] sm:grid max-w-[1000px] justify-center w-full mx-auto pt-[100px] text-center"
    >
      <div
        class="hidden sm:inline-block sm:grid grid-cols-[233px_repeat(7,_minmax(0,_1fr))] boo3 text-center items-center p-[10px]"
      >
        <div class="text-left">PLAYER</div>
        <button
          @click="sortBy"
          class="text-[14px] mx-auto testClick"
          :class="{ active: isActive }"
        >
          MP
        </button>
        <div class="text-[14px] mx-auto">WITH</div>
        <div class="text-[14px] mx-auto">WITH %</div>
        <div class="text-[14px] mx-auto">AGAINST</div>
        <div class="text-[14px] mx-auto">WITH AGAINST</div>
        <div class="text-[14px] mx-auto">GPM WITH</div>
        <div class="text-[14px] mx-auto">XPM WITH</div>
      </div>
      <div
        class="sm:grid grid-cols-[233px_repeat(7,_minmax(0,_1fr))] text-center p-[10px] border-b-[1px] items-center"
        v-for="peer in post_peer"
        :key="peer"
      >
        <div
        class="flex gap-3 flex-col sm:flex-row items-center">
          <img 
          @click="toggleModal(peer.account_id), image_show = !image_show"
          class="max-w-[65%] w-full sm:max-w-[20%]" :src="peer.avatarfull" />
          <div
            class="text-[40px] sm:text-[18px] text-ellipsis overflow-hidden sm:text-left w-[80%] whitespace-nowrap text-cyan-400"
          >
            {{ peer.personaname }}  
          </div>
        </div>
     <div v-if="image_show" class="sm:contents"
     >
        <button
          @click="sortBy"
          class="text-[14px] inline-block sm:hidden mx-auto testClick"
          :class="{ active: isActive }"
        >
          MP
        </button>
        <div
        >
          {{ peer.games }}
          <div>
            <progress
            
              :value="peer.games"
              :max="15"
              class="w-[80%] h-[10px]"
            ></progress>
          </div>
        </div>
        <div class="text-[14px] mx-auto inline-block sm:hidden">WITH</div>
        
        <div>
          {{ peer.win }}
          <div>
            <progress
              :value="peer.win"
              max="12"
              class="w-[80%] h-[10px]"
            ></progress>
          </div>
        </div>
        <div class="text-[14px] mx-auto inline-block sm:hidden">WITH %</div>
     
        <div>
          {{ peer.with_win }}
          <div>
            <progress
              :value="peer.with_win"
              max="12"
              class="w-[80%] h-[10px]"
            ></progress>
          </div>
        </div>
        <div class="text-[14px] mx-auto inline-block sm:hidden">AGAINST</div>
     
        <div>
          {{ peer.against_win }}
          <div>
            <progress
              :value="peer.against_win"
              max="12"
              class="w-[80%] h-[10px]"
            ></progress>
          </div>
        </div>
        <div class="text-[14px] mx-auto inline-block sm:hidden">WITH AGAINST</div>
        <div>
          {{ peer.against_games }}
          <div>
            <progress
              :value="peer.against_games"
              max="12"
              class="w-[80%] h-[10px]"
            ></progress>
          </div>
        </div>
        <div class="text-[14px] mx-auto inline-block sm:hidden">GPM WITH</div>
        <div>
          {{ peer.with_gpm_sum }}
          <div>
            <progress
              :value="peer.with_gpm_sum"
              max="6548"
              class="w-[80%] h-[10px]"
            ></progress>
          </div>
        </div>
        <div class="text-[14px] mx-auto inline-block sm:hidden">XPM WITH</div>
        <div>
          {{ peer.with_xpm_sum }}
          <div>
            <progress
              :value="peer.with_xpm_sum"
              max="8878"
              class="w-[80%] h-[10px]"
            ></progress>
          </div>
        </div>
   </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GetPosts } from "@/hook/GetHeroes";
import { GetId, GetNum, GetWl } from "@/hook/GetId";
import { computed, ref } from "vue";

const { post_id } = GetId();
const { post_wl } = GetWl();
const { post_peer } = GetNum();
const { posts } = GetPosts();
const isActive = ref(false);
const image_show = ref(false)
const sortBy = () => {
  let testToggle = document.querySelector(".testClick");

  testToggle.classList.toggle("active");

  let activeTest = document.querySelector(".testClick.active");
  if (activeTest) {
    return post_peer.value.sort((a, b) => a.games - b.games);
  } else {
    return post_peer.value.sort((a, b) => b.games - a.games);
  }
};
// const sortBy = () => {
//   isActive.value = !isActive;
//   if (!isActive.value) {
//     return post_peer.value.sort((a, b) => a.games - b.games);
//   }
//   isActive.value = !isActive.value;
// };
const Sum = () => {
  return Math.round(
    (post_wl.value.win / (post_wl.value.win + post_wl.value.lose)) * 100
  );
};
const selectedHero =ref('')
const toggleModal = (account_id: number) => {
  selectedHero.value = post_peer.value.find((post_peer: any) => post_peer.account_id === account_id);
  console.log(selectedHero.value);
};
</script>
<!-- <script>

export default defineComponent({
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    testingClick() {
      this.isActive = !this.isActive;
      if(!isActive){
         return post_peer.value.sort((a, b) => b.games - a.games);
      }
    },
  },

}
</script> -->

<style scoped>
.boo {
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 15px 2px;
}
.boo1 {
  color: rgba(255, 255, 255, 0.54);
}
.boo2 {
  background-color: rgba(14, 84, 113, 0.37);
}
.boo3 {
  background: linear-gradient(
    90deg,
    rgba(20, 255, 212, 0.09) 2%,
    rgba(46, 160, 214, 0.26) 27%,
    rgba(5, 181, 249, 0.04) 80%
  );
}
</style>
