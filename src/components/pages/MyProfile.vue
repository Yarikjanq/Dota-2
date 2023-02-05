<template>
    <div class="cool">
        <IdList :post_id="posts_id"
        :wl="wl" />
        <MyIdHero :hero_inf="hero_info"/>
       
    </div>
</template>

<script setup lang="ts">
import IdList from '../IdList.vue';
import { GetId } from '@/hook/GetId';
import {GetWl} from '@/hook/GetId'
import { MyInfo } from '@/hook/GetIdHeroes';
import MyIdHero from '../MyIdHero.vue';
import SortGames from '@/hook/SortGames';
const {posts_id} = GetId()
const {wl} = GetWl()
const {hero_info} = MyInfo()
</script>