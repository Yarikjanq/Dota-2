<template>
  <div>
    <div class="mx-auto flex justify-around h-[100px] items-center">
      <select
        @change="changeLang"
        v-model="postList"
        type="search"
        class="cool1 w-[10%]"

      >
   <option > {{ agis }} </option>
   <option> {{ int }} </option>
   <option> {{ str }} </option>
      
        
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
        class="text-center mt-[50px] border-[2px] h-[200px] mx-[10px]"
        v-for="post in searchedHero"
        :key="post"
      >
        <div>{{ post.localized_name }}</div>
        <div>
          <img class="w-[40%] mx-auto mt-[10px]" :src="getImage(post)" alt="" />
        </div>
       
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, watch } from "vue";
import { computed } from "vue";
import { httpService } from "../../api/request";
const posts = ref([]);
const searchQuery = ref("");
const int = ref([])
const agis = ref([])
const str = ref([])
const postList = ref("");
const getAgi = async () => {
  agis.value = await httpService().getAgi();

};
const getInt = async () => {
  int.value = await httpService().getInt();

};
const getStr = async () => {
  str.value = await httpService().getStr();
 
};
getInt();
getAgi();
getStr();
const getPosts = async () => {
  posts.value = await httpService().getPosts();
  
  console.log(posts.value);
};
getPosts();
const searchedHero = computed(() => {
  return posts.value.filter((post) => {
    return (
     post.localized_name
        .toLowerCase()
        .indexOf(searchQuery.value.toLowerCase()) != -1
    );
  });
});

const changeLang = (event) =>{
  console.log(postList.value)
}


const getImage = (post: any) => {
  return "https://api.opendota.com" + post.img;
};

// watch(searchQuery, () =>{

//     posts.value = posts.value.filter(post => post.localized_name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
// })


watch(postList, () =>{
  posts.value = posts.value.filter(post => post.primary_attr.toLowerCase().includes(postList.value.toLowerCase()))

})

</script>
<style scoped>
.cool1 {
  background-color: rgba(19, 111, 149, 0.37);
}
</style>

