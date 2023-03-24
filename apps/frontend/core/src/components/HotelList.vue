<script setup lang="ts">
import type { Hotel } from "hotel-management-shared";

const props = defineProps<{
  hotels: Hotel[];
}>();
</script>

<template>
  <ul>
    <li v-for="hotel of props.hotels" :key="hotel.id">
      <slot name="hotel" :hotel="hotel">
        <h3>{{ hotel.name }}</h3>
      </slot>
    </li>
  </ul>
</template>
