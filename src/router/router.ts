import MainPage from "@/components/pages/MainPage.vue"
import HeroesPage from "@/components/pages/HeroesPage.vue"
import { createRouter, createWebHistory } from "vue-router";
import HeroInfo from "@/components/pages/HeroInfo.vue";
import ExamPa from '@/components/pages/ExamPa.vue'
const routes = [{
    path: '/',
    component: MainPage
},
{
    path: '/heroes',
    component: HeroesPage
},
{
    path: '/hero_info/:id/:localized_name',
    component: HeroInfo
},
{
    path: '/exa',
    component: ExamPa
},


]
console.log(routes);
const router = createRouter({
    routes,
    history: createWebHistory(process.env.NODE_ENV)
})
export default router;