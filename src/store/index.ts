import Vue from "vue";
import { compile } from "vue/types/umd";
import Vuex from "vuex";

Vue.use(Vuex);

export interface UserInfoModel {
  uid: string | undefined;
  uname?: string | undefined | null;
  role?: string | undefined;
  email: string | undefined | null;
}

export default new Vuex.Store({
  state: {
    isPageLoading: true,
    uif: null as any,
  },
  getters: {
    isPageLoading(state): boolean {
      return state.isPageLoading;
    },
    isLoggedIn(state): boolean {
      return !!state.uif?.uid;
    },
    uif(state): string {
      return state.uif;
    },
    uname(state): string {
      return state.uif?.uid;
    },
  },
  actions: {
    setPageLoading({ commit }, isLoading) {
      commit("SET_PAGE_LOADING", { isLoading });
    },
    setUser({ commit }, uif) {
      commit("SET_USER", uif);
    },
    // fetchUser({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     Vue.http
    //       .get("https://jsonplaceholder.typicode.com/users")
    //       .then((response) => {
    //         commit("FETCH_USERS", response.body);
    //         resolve();
    //       })
    //       .catch((error) => {
    //         console.log(error.statusText);
    //       });
    //   });
    // },
  },
  mutations: {
    SET_PAGE_LOADING(state, { isLoading }) {
      state.isPageLoading = isLoading;
    },
    SET_USER(state, { uid, uname, role }) {
      state.uif = {
        uid,
        uname,
        role,
      };
    },
  },

  modules: {},
});
