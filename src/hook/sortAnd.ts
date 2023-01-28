import { ref, computed } from "vue";

export default function useSorted(posts){
    const selectedSort = ref('')
    const selectedSorts = computed(() =>{
        return[...posts.value].sort((post1, post2) => post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]))
    })
    return{
        selectedSort,
        selectedSorts
    }
}