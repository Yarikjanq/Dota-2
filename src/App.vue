

<template>
  <div>
    <div class="mx-auto">
        <select @change="changeLang" v-model="selectqw" type="search"
          class="">
          <option :value="posts.primary_attr" > {{ posts.primary_attr }} </option>
          <option selected value="asc">sd</option> 
          <option value="desc">gfdgfd</option>
        </select>
      </div>
      <div class="text-center">
      <input v-model="searchQuery" type="search" class="bg-slate-800 text-sky-300 p-[4px]" placeholder="input hero name">
      </div>
  <div class="grid grid-cols-5">
 <div class="text-center mt-[50px]" v-for="post in searchedHero" :key="post">
  <div> {{ post.localized_name }}</div>
    <div>
    <img class="w-[30%] mx-auto mt-[10px]" :src="getImage(post)" alt="">
  </div>
 </div>
</div>
  </div>
</template>



<script setup lang="ts">
import { computed } from '@vue/reactivity';
import {ref} from 'vue'
import {httpService} from '../api/request'
const posts = ref([]);
const searchQuery = ref("")
const getPosts = async ()=> {
  posts.value = await httpService().getPosts()
console.log(posts.value);
}
const getImage = (post:any)=>{
  return 'https://api.opendota.com' + post.img
}
getPosts()

const selectqw = ref(null)
const changeLang = () => {
      console.log("Called>>>>", selectqw.value);
    }
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

</style>
