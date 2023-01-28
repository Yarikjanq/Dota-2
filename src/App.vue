<template>
  <div class="cool">
      <input class="bg-red-900" type="text" v-model="searchQuery">
          <MySelect v-model="imageSort" :options="sortOption"/>

         <HeroList :post="imageSorted"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GetPosts } from "./hook/GetHeroes";
import HeroList from "./components/HeroList.vue";
import sortImage from "./hook/sortImage";
import MySelect from "./components/UI/MySelect.vue";
import sortAnd from "./hook/sortAnd"
import sortItem from "./hook/sortItem"
const {posts} = GetPosts()
const {searchQuery, sortingAndSearch} = sortImage(posts)
const {imageSort, imageSorted} = sortItem(sortingAndSearch)
const sortOption= ref([
           {value: 'str', name: 'Srtength'},
           {value: 'agi', name: 'Agility'},
           {value: 'int', name: 'Intellect'},

         ])

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
