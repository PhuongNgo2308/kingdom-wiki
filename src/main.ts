import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import authService from "@/services/authService";

Vue.config.productionTip = false;

authService.onAuthStateChanged((user) => {
  console.log(user);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
