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

import Core from "../../core/src/lib.js";
import "../../core/src/assets/main.scss";
registerModule("hotel-management-frontend-core", Core);

import Luggage from "../../luggage/src/lib.js";
import "../../luggage/src/assets/main.scss";
registerModule("hotel-management-frontend-luggage", Luggage);

import Rooms from "../../rooms/src/lib.js";
import "../../rooms/src/assets/main.scss";
registerModule("hotel-management-frontend-rooms", Rooms);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const store = createPinia();

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
