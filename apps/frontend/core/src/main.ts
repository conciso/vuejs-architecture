import { createApp } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import { routes } from "./routes.js";
import "./assets/main.scss";

function registerModule(name: string, module: { routes?: RouteRecordRaw[] }): void {
  if (module.routes) {
    routes.push(...module.routes);
  }
}

import Rooms from "../../rooms/src/lib.js";
import "../../rooms/src/assets/main.scss";
registerModule("hotel-management-frontend-rooms", Rooms);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
