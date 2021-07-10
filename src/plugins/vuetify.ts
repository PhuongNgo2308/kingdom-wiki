import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import LRU from "lru-cache";

Vue.use(Vuetify);

const themeCache = new LRU<string | null, string | null>({
  max: 10,
  maxAge: 1000 * 60 * 60, // 1 hour
});
export default new Vuetify({
  theme: {
    options: {
      //   themeCache,
    },
  },
});
