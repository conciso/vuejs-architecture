import { createApp } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/main.scss";

const routes: RouteRecordRaw[] = [];

function registerModule(module: { routes?: RouteRecordRaw[] }): void {
  if (module.routes) {
    routes.push(...module.routes);
  }
}

import Core from "../../core/src/lib.js";
registerModule(Core);

import Luggage from "../../luggage/src/lib.js";
registerModule(Luggage);

import Rooms from "../../rooms/src/lib.js";
registerModule(Rooms);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const store = createPinia();

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
