import type { RouteRecordRaw } from "vue-router";
import RoomsPage from "./pages/RoomsPage.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/rooms",
    name: "rooms",
    component: RoomsPage,
  },
];
