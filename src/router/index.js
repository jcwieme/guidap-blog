import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "../views/Admin.vue";
import Login from "../views/Login.vue";

import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    // Route Guardif logged or not
    beforeEnter(to, from, next) {
      if (store.state.tokenId) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
