import HeroesPage from "@/components/pages/HeroesPage.vue"
import { createRouter, createWebHistory } from "vue-router";
import HeroInfo from "@/components/pages/HeroInfo.vue";
import MyId from "@/components/pages/MyId.vue";
import Example from "@/components/pages/Example.vue";
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
},
{
    path: '/example',
    component: Example
}
]
console.log(routes);
const router = createRouter({
    routes,
    history: createWebHistory(process.env.NODE_ENV)
})
export default router;