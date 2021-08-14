import { ROUTES_CONFIG } from "@/router";

export default {
  ROUTES_CFG: {},
  created(): void {
    this.ROUTES_CFG = ROUTES_CONFIG;
  },
};
