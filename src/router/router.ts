import MainPage from "@/components/pages/MainPage.vue"
import HeroesPage from "@/components/pages/HeroesPage.vue"
import { createRouter, createWebHistory } from "vue-router";
import HeroInfo from "@/components/pages/HeroInfo.vue";
import MyProfile from '@/components/pages/MyProfile.vue'
const routes = [
{
    path: '/',
    component: HeroesPage
},
{
    path: '/history',
    component: HeroInfo
},
{
    path:'/id',
    component: MyProfile
}




]
console.log(routes);
const router = createRouter({
    routes,
    history: createWebHistory(process.env.NODE_ENV)
})
export default router;