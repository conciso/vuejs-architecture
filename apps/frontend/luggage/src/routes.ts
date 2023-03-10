import type { RouteRecordRaw } from "vue-router";
import LuggagePage from "./pages/LuggagePage.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/luggage",
    name: "luggage",
    component: LuggagePage,
  },
];
