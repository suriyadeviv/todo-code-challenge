import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Board from "@/pages/Board.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "join",
      component: Home,
    },
    {
      path: "/board",
      name: "board",
      component: Board,
    },
  ],
});

export default router;
