import { ref, computed } from "vue";

export default function useSorting(posts){
    const searchQuery = ref('')
    const sortingAndSearch = computed(() =>{
        return posts.value.filter(post => post.localized_name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })
    return{
        searchQuery,
        sortingAndSearch
    }
}