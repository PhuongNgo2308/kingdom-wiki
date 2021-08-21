import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const ROUTES_CONFIG: any = Object.freeze({
  HOME: ["/", "Posts", () => import("@/views/Posts.vue")], // 0: path, 1: Name; 2: Component
  // LOGIN: ["/login", "Login", () => import("@/views/Login.vue")],
  // REGISTER: ["/reg", "Register", () => import("@/views/Register.vue")],
  // NEW_POST: ["/new-post", "NewPost", () => import("@/views/NewPost.vue")],
  VIEW_POST: [
    "/view-post/:pid",
    "ViewPost",
    () => import("@/views/ViewPost.vue"),
    { props: true, meta: {} },
  ],
  NOT_FOUND: ["*", "NotFound", () => import("@/views/NotFound.vue")],
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

// router.beforeEach((to, from, next) => {
//   next();
// });

// router.afterEach(() => {});

export default router;
