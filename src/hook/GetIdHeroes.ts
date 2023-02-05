import axios from "axios";
import { onMounted, ref } from "vue";

export function MyInfo(){
const hero_info = ref([])

const MyInfo = async() =>{
    try {
        const response = await axios.get(
          "https://api.opendota.com/api/players/194665951/heroes",
          {

          }
        );
        hero_info.value = response.data;
        console.log(response);
      } catch (e) {
        alert("error");
      }
    };
  
    onMounted(MyInfo);
    return {
      hero_info
    };
  }