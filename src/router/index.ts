import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

export const ROUTES_CONFIG: any = Object.freeze({
  HOME: [
    "/",
    "Posts",
    () => import(/* webpackChunkName: "posts" */ "@/views/Posts.vue"),
  ], // 0: path, 1: Name; 2: Component
  LOGIN: [
    "/login",
    "Login",
    () => import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  ],
  // REGISTER: [
  //   "/reg",
  //   "Register",
  //   () => import(/* webpackChunkName: "reg" */ "@/views/Register.vue"),
  // ],
  NEW_POST: [
    "/new-post",
    "NewPost",
    () => import(/* webpackChunkName: "newpost" */ "@/views/NewPost.vue"),
    { props: true, meta: { requiresAuth: true } },
  ],
  VIEW_POST: [
    "/view-post/:pid",
    "ViewPost",
    () => import(/* webpackChunkName: "viewpost" */ "@/views/ViewPost.vue"),
    { props: true, meta: {} },
  ],
  NOT_FOUND: [
    "*",
    "NotFound",
    () => import(/* webpackChunkName: "notfound" */ "@/views/NotFound.vue"),
  ],
});

const routes: Array<RouteConfig> = [];
for (const [_, value] of Object.entries(ROUTES_CONFIG)) {
  const _v = value as [string, string, any, any?];

  routes.push({
    path: _v[0],
    name: _v[1],
    component: _v[2],
    props: _v[3]?.props || false,
    meta: _v[3]?.meta || {},
  });
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { uid = null } = { ...store.getters.uif };

  // next-line: check if route ("to" object) needs authenticated
  if (to.matched.some((record) => record.meta.requiresAuth) && !uid) {
    if ("/login" != from.path) {
      store.dispatch("setPageLoading", true);
      next({ name: "Login", query: { redirect: to.path } });
    }
  } else if (uid) {
    store.dispatch("setPageLoading", true);
    switch (to.name) {
      case "Login" || "Register" || "ResetPassword":
        next({ path: "/" });
        break;
      default:
        next();
        break;
    }
  } else {
    store.dispatch("setPageLoading", true);
    next();
  }
});
router.afterEach(() => {
  store.dispatch("setPageLoading", false);
});

export default router;
