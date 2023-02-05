import { onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
export function GetId() {
  const posts_id = ref([]);

  const GetId = async () => {
    try {
      const response = await axios.get(
        "https://api.opendota.com/api/players/194665951",
        {}
      );
      posts_id.value = response.data.profile;

      
    } catch (e) {
      alert("error");
    }
  };

  onMounted(GetId);
  return {
    posts_id,
  };
}
export function GetWl() {
    const wl = ref([]);
  
    const GetWl = async () => {
      try {
        const response = await axios.get(
          "https://api.opendota.com/api/players/194665951/wl",
          {}
        );
        wl.value = response.data;
        console.log(response);
      } catch (e) {
        alert("error");
      }
    };
  
    onMounted(GetWl);
    return {
      wl
    };
  }
