import { createRouter, createWebHistory } from "vue-router";
import PostComponent from "@/views/PostComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PostComponent,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: PostComponent,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
