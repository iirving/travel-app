import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

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
    beforeEnter: (to) => {
      const exists = sourceData.destinations.find(
        (destination) =>
          destination.id === Number(to.params.id) &&
          destination.slug === to.params.slug
      );
      if (!exists) {
        return {
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split("/") },
          query: to.query,
          hash: to.hash,
        };
      }
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
