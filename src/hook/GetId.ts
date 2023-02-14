import { onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
export function GetId() {
  const post_id = ref([]);

  const GetId = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL}` + "players/" + 194665951,
        {}
      );
      post_id.value = response.data.profile;
      console.log(response.data.profile);
    } catch (e) {
      console.log(e);
    }
  };

  onMounted(GetId);
  return {
    post_id,
  };
}
export function GetWl() {
  const post_wl = ref([]);

  const GetWl = async () => {
    try {
      const response = await axios.get(
      `${import.meta.env.VITE_URL}` + "players/" + 194665951 + "/wl",
        {}
      );
      post_wl.value = response.data;
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  onMounted(GetWl);
  return {
    post_wl,
  };
}
export function GetNum() {
  const post_peer = ref([]);

  const GetNum = async () => {
    try {
      const response = await axios.get(
      `${import.meta.env.VITE_URL}` + "players/" + 194665951 + "/peers",
        {}
      );
      post_peer.value = response.data;
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  onMounted(GetNum);
  return {
    post_peer,
  };
}
