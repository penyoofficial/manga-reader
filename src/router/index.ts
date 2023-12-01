import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Reader.vue"),
    },
    {
      path: "/packer",
      component: () => import("@/views/Packer.vue"),
    },
    {
      path: "/transformer",
      component: () => import("@/views/Transformer.vue"),
    },
  ],
});

export default router;
