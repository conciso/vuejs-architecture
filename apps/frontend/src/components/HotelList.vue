<script setup lang="ts">
// import type { Hotel } from "hotel-management-shared";

import type { BackendHotel } from "../../../backend/dist/main.js";

const props = defineProps<{
  hotels: BackendHotel[];
}>();
</script>

<template>
  <ul>
    <li v-for="hotel of props.hotels" :key="hotel.id">{{ hotel.name }}</li>
  </ul>
</template>
