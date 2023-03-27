<script setup lang="ts">
import HotelList from "../components/HotelList.vue";
import { useHotelsStore } from "../stores/HotelsStore.js";

const { load, isLoading, hotels } = useHotelsStore();
await load();
</script>

<template>
  <main>
    <HotelList :aria-busy="isLoading" :hotels="hotels" />
  </main>
</template>
