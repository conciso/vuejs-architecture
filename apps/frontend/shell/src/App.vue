<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container-fluid">
    <nav>
      <ul>
        <li><strong>Hotel Manager 1000</strong></li>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/rooms">Rooms</RouterLink></li>
        <li><RouterLink to="/luggage">Luggage</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main class="container-fluid">
    <Suspense>
      <RouterView />

      <template #fallback>
        <div aria-busy="true">Loading...</div>
      </template>
    </Suspense>
  </main>
</template>

<style scoped></style>
