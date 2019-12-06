import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    components: { default: Home, con: About }
  },
  {
    path: "/test",
    components: { default: Home, con: test }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
