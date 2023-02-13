<template>
  <div class="cool">
    <div class="container">
      <div class="flex justify-around py-[70px]">
        <input
          class="bg-black h-[30px] p-[20px]"
          type="text"
          v-model="searchQuery"
          placeholder="Filter Heroes"
        />
        <div class="flex w-[300px] justify-between">
          <MySelect v-model="imageSort" :options="sortOption" />
        </div>
      </div>
      <HeroList :post="imageSorted" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GetPosts } from "@/hook/GetHeroes";
import sortImage from "@/hook/sortImage";
import sortItem from "@/hook/sortItem";
import MySelect from "../UI/MySelect.vue";
import HeroList from "../HeroList.vue";
const { posts } = GetPosts();
const { searchQuery, sortingAndSearch } = sortImage(posts);
const { imageSort, imageSorted } = sortItem(sortingAndSearch);
const sortOption = ref([
  { value: "str", name: "Srtength" },
  { value: "agi", name: "Agility" },
  { value: "int", name: "Intellect" },
  { value: "", name: "All heroes" },
]);
GetPosts();
</script>
<style>
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
.container {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
