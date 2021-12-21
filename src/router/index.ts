import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tabs from "../views/Tabs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/tab1"
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/home"
      },
      {
        path: "tab1",
        component: () => import("@/views/home.vue")
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue")
      },
      {
        path: "tab3",
        component: () => import("@/views/account.vue")
      },
      {
        path: "tab4",
        component: () => import("@/views/tab4.vue")
      },
      {
        path: "register",
        component: () => import("@/views/register.vue")
      },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
