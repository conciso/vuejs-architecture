<script setup lang="ts">
import { ref } from "vue";
import HotelList from "../components/HotelList.vue";
import { useHotelsStore } from '../stores/hotels.js';

const { fetchHotels } = useHotelsStore();
const hotels = ref(await fetchHotels());
</script>

<template>
  <main>
    <HotelList :hotels="hotels" />
  </main>
</template>
