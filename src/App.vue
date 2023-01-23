<template>
  <div class="cool">
    <div class="mx-auto flex justify-around h-[100px] items-center">
      <select
        @change="changeLang"
        v-model="selectqw"
        type="search"
        class="cool1 w-[10%]"
        v-for="n in 3"
        :key="n"
      >
        <option>интелект</option>
        <option>интелект</option>
        <!-- <option>{{ n.primary_attr }}</option>
        <option>{{ n.primary_attr }}</option> -->
        <!-- <div v-if="post.primary_attr.value == 'agi'"> -->
        <div>
          <div v-for="agi of agis"></div>
        </div>
      </select>
    </div>
    <div class="text-center">
      <input
        v-model="searchQuery"
        type="search"
        class="bg-slate-800 text-sky-300 p-[4px] cool1"
        placeholder="input hero name"
      />
    </div>

    <div class="grid grid-cols-5">
      <div
        class="text-center mt-[50px]"
        v-for="post in searchedHero"
        :key="post"
      >
        <div>{{ post.localized_name }}</div>
        <div>
          <img class="w-[30%] mx-auto mt-[10px]" :src="getImage(post)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";
import { httpService } from "../api/request";
const posts = ref([]);
const agis = ref([]);
const intelligence = ref([]);
const dexterity = ref([]);
const searchQuery = ref("");
const getPosts = async () => {
  posts.value = await httpService().getPosts();
  console.log(posts.value);
};

const getImage = (post: any) => {
  return "https://api.opendota.com" + post.img;
};
getPosts();

const selectqw = ref(null);
const changeLang = () => {
  console.log("Called>>>>", selectqw.value);
};
const searchedHero = computed(() => {
  return posts.value.filter((post) => {
    return (
      post.localized_name
        .toLowerCase()
        .indexOf(searchQuery.value.toLowerCase()) != -1
    );
  });
});
</script>
<style scoped>
.cool {
  background-color: rgb(25, 32, 35);
  background-image: linear-gradient(to right, rgb(26, 43, 62), rgb(20, 30, 48));
  color: rgba(255, 255, 255, 0.87);
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
.cool1 {
  background-color: rgba(19, 111, 149, 0.37);
}
</style>
