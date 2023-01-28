
import { onMounted } from "@vue/runtime-core"
import axios from "axios"
import { ref } from "vue"
export function GetPosts(){
    const posts = ref([])
    
    const GetPOst = async() =>{
        try{
            const response = await axios.get('https://api.opendota.com/api/heroStats', {
            })
            posts.value = response.data
            console.log(response);
            
          } catch(e){
            alert('error')
          }
    }

      onMounted(GetPOst)
      return{
        posts,
      }
}