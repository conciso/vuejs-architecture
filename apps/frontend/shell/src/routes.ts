import type { RouteRecordRaw } from "vue-router";
import HotelPage from "./pages/HotelPage.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "hotels",
    component: HotelPage,
  },
];
