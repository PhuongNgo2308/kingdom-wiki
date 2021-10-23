import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import authService from "@/services/authService";
import { UserInfoModel } from "@/store";

Vue.config.productionTip = false;

authService.onAuthStateChanged((user) => {
  const { uid, displayName: uname, email } = { ...user };
  const uif: UserInfoModel = { uid, uname, email };
  store.dispatch("setUser", uif);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
