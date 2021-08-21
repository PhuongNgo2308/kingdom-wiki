import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPageLoading: true,
  },
  getters: {
    isPageLoading(state): boolean {
      return state.isPageLoading;
    },
  },
  actions: {
    setPageLoading({ commit, state }, isLoading) {
      console.log("ACTION setPageLoading dispatched!!!");
      commit("setPageLoading", { isLoading });
    },
  },
  mutations: {
    setPageLoading(state, { isLoading }) {
      state.isPageLoading = isLoading;
    },
  },

  modules: {},
});
