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

          return response.data[3].primary_attr;
        })
        .catch((error) => console.error(error));
    },
    
    getInt: () => {
      return axios
        .get(import.meta.env.VITE_URL + "heroStats", {
 
        })
        
        .then((response) => {

          return response.data[20].primary_attr;
        })
        .catch((error) => console.error(error));
    },
    getStr: () => {
      return axios
        .get(import.meta.env.VITE_URL + "heroStats", {
 
        })
        
        .then((response) => {

          return response.data[1].primary_attr;
        })
        .catch((error) => console.error(error));
    },
    
  };
};
