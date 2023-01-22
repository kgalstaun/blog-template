import { createRouter, createWebHistory } from "vue-router";
import ContentComponent from "@/components/ContentComponent.vue";

const routes = [
  {
    path: "/",
    name: "werk",
    component: ContentComponent,
  },
  {
    path: "/werk/:id",
    name: "werkItem",
    component: ContentComponent,
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
