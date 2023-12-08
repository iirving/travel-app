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
    children: [
      {
        path: ":experienceSlug",
        name: "experience.details",
        component: () => import("@/views/ExperienceDetails.vue"),
        props: (route) => {
          const id = parseInt(route.params.id);
          const slug = route.params.slug;
          const experienceSlug = route.params.experienceSlug;
          return { ...route.params, id, slug, experienceSlug };
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
