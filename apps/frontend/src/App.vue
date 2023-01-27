<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container-fluid">
    <nav>
      <ul>
        <li><strong>Hotel Manager 1000</strong></li>
        <li><RouterLink to="/">Home</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main class="container-fluid">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>

<style scoped></style>
