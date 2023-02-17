import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import Rooms from "hotel-management-frontend-rooms";

import App from "./App.vue";
import { routes } from "./routes.js";

import "./assets/main.scss";

const libs = { "hotel-management-frontend-rooms": Rooms };

for (const [libName, lib] of Object.entries(libs)) {
  routes.push(...lib.routes);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
