import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.details",
    component: () => import("@/views/DestinationDetails.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const slug = route.params.slug;
      return { id, slug };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
