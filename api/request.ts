import axios from "axios";
export const httpService = () => {
  return {
    getPosts: () => {
      return axios
        .get(import.meta.env.VITE_URL + "heroStats", {
 
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => console.error(error));
    },
    getAgi: () => {
      return axios
        .get(import.meta.env.VITE_URL + "heroStats", {
 
        })
        
        .then((response) => {

          return response.data;
        })
        .catch((error) => console.error(error));
    },

  };
};
