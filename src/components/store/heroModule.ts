import axios from "axios";

export const heroModule = {
  state: () => ({
    selectedHero: 10,
    dialogVisi: false,
    posts: [],
    viewId: 0,
    imageSort: "",
    isShowModal: false,
    searchQuery: "",
    sortOption: [
      { value: "str", name: "Srtength" },
      { value: "agi", name: "Agility" },
      { value: "int", name: "Intellect" },
    ],
  }),
  getters: {
    sortingAndSearch(state) {
      return state.posts.filter((post) =>
        post.localized_name
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())
      );
    },
    imageSorted(state, getters) {
      return getters.filter((post) =>
        post.primary_attr.toLowerCase().includes(state.imageSort.toLowerCase())
      );
    },
  },
  mutantions: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setHero(state, selectedHero) {
      state.selectedHero = selectedHero;
    },
    setOption(state, sortOption) {
      state.sortOption = sortOption;
    },
  },

  actions: {
    async GetPost({ state, commit }) {
      try {
        const response = await axios.get(
          "https://api.opendota.com/api/heroStats",
          {}
        );
        commit("setPosts", response.data);
        console.log(response);
      } catch (e) {
        alert("error");
      }
    },
  },
};
