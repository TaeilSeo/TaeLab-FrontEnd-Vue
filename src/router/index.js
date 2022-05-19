import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BootstrapView from "@/views/BootstrapView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/stock",
    name: "stock",
    component: () => import("@/views/StockView.vue"),
  },
  {
    path: "/global",
    name: "global",
    component: () => import("@/views/GlobalView.vue"),
    redirect: "/global/main",
    children: [
      {
        path: "main",
        name: "globalMainContent",
        component: () => import("@/components/global/GlobalMainContent.vue"),
      },
      {
        path: "news",
        name: "globalNews",
        component: () => import("@/components/global/GlobalNews.vue"),
      },
    ],
  },
  {
    path: "/bootstrap",
    name: "bootstrap",
    component: BootstrapView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
