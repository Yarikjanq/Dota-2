import { ref, computed } from "vue";

export default function useSorting(sortingAndSearch){
    const imageSort = ref('')
    const imageSorted = computed(() =>{
        return sortingAndSearch.value.filter(post => post.primary_attr.toLowerCase().includes(imageSort.value.toLowerCase()))
    })
    return{
        imageSort,
        imageSorted
    }
}




