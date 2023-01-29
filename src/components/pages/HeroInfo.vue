<template>
    <div class="cool">
        <div class="">
        asdsda = 
       <HeroList :post="posts"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { GetPosts } from '@/hook/GetHeroes';
import HeroList from '../HeroList.vue';

const {posts} = GetPosts()
</script>
<style scoped>

</style>