<script setup lang="ts">
// import type { Hotel } from "hotel-management-shared";

import type { Hotel } from "hotel-management-shared";

const props = defineProps<{
  hotels: Hotel[];
}>();
</script>

<template>
  <ul>
    <li v-for="hotel of props.hotels" :key="hotel.id">{{ hotel.name }}</li>
  </ul>
</template>
