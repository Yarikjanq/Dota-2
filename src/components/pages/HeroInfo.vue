<template>
    <div class="cool">
        <div class="">
   
           <div>{{ $route.params.id }}</div>
           <div>{{ $route.params.localized_name }}</div>
     
           
        </div>
    </div>
</template>
<script setup lang="ts">
import { GetPosts } from '@/hook/GetHeroes';


const {posts} = GetPosts()
</script>
<style scoped>

</style>