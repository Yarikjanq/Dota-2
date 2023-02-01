import type { IHero } from "@/types/herointerface";
import { createStore } from "vuex";

const store = createStore({
  state: () =>
    ({
      heroHistory: [],
    } as {
      heroHistory: IHero[];
    }),
  

  getters: {
    getCounter(state) {
      return state.heroHistory;
    },
  },
  mutations: {
    addHeroToHistory(state, payload: IHero) {
      state.heroHistory.push(payload);
    },
  },
  actions: {
    addHeroToHistory({ commit }, selectedHero: IHero) {
      commit("addHeroToHistory", {...selectedHero, date: Date.now()});
    }
  },
});

export default store;
