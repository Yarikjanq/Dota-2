import HeroesPage from "@/components/pages/HeroesPage.vue"
import { createRouter, createWebHistory } from "vue-router";
import HeroInfo from "@/components/pages/HeroInfo.vue";
import MyId from "@/components/pages/MyId.vue";
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
    path: '/:id',
    component: MyId
}
]
console.log(routes);
const router = createRouter({
    routes,
    history: createWebHistory(process.env.NODE_ENV)
})
export default router;