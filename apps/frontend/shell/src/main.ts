import { createApp } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/main.scss";

const routes: RouteRecordRaw[] = [];

import { routes as coreRoutes } from "hotel-management-frontend-core";
routes.push(...coreRoutes);

import { routes as luggageRoutes } from "hotel-management-frontend-luggage";
routes.push(...luggageRoutes);

import { routes as roomsRoutes } from "hotel-management-frontend-rooms";
routes.push(...roomsRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const store = createPinia();

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
