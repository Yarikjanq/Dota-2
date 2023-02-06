import { onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
export function GetPosts() {
  const posts = ref([]);

  const GetPOst = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL}` + 'heroStats',
        {}
      );
      posts.value = response.data;
      console.log(response);
    } catch (e) {
    console.log(e);
    ;
    }
  };

  onMounted(GetPOst);
  return {
    posts,
  };
}
