

<template>
 <div>
  <h1>asdasd</h1>
 </div>
</template>



<script setup lang="ts">
import { ref} from 'vue'
import {httpService} from '../api/request'
const posts = ref([]);
const getPosts = async ()=> {
  posts.value = await httpService().getPosts()
console.log(posts.value);
}
getPosts()
</script>
<style scoped>

</style>
