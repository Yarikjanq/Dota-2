import type { IHero } from "@/types/herointerface";
import { createStore } from "vuex";

const store = createStore({
  state: () =>
    ({
      heroHistory: [],
      heroHistory1: []
    }),
  

  getters: {
    getCounter(state) {
      return state.heroHistory;
    },
    getCouterHero(state){
      return state.heroHistory1
    }
  },
  mutations: {
    addHeroToHistory(state, payload: IHero) {
      state.heroHistory.push(payload);
    },
    addHero(state, payload: IHero) {
      state.heroHistory1.push(payload);
    },
    removeProduct(state, index){
      state.heroHistory.splice(index, 1);
    }
  },
  actions: {
    addHeroToHistory({ commit }, selectedHero: IHero) {
      commit("addHeroToHistory", {...selectedHero, date: Date.now()});
    },
    addHero({ commit }, selectedHeros: IHero) {
      commit("addHero", {...selectedHeros, date: Date.now()});
    },
    removeProduct({commit}, index ){
      commit("removeProduct", index)
    }
  },
});

export default store;
