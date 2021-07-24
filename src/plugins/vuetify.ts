import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { VuetifyThemeVariant } from "vuetify/types/services/theme";
// import LRU from "lru-cache";

Vue.use(Vuetify);

// const themeCache = new LRU<string | null, string | null>({
//   max: 10,
//   maxAge: 1000 * 60 * 60, // 1 hour
// });

const light: Partial<VuetifyThemeVariant> = {
  primary: "#3f51b5",
  secondary: "#2196f3",
  accent: "#03a9f4",
  error: "#f44336",
  warning: "#ff9800",
  info: "#607d8b",
  success: "#4caf50",
};

export default new Vuetify({
  theme: {
    themes: { light },
    options: {},
  },
  icons: {
    iconfont: "mdi",
  },
});
