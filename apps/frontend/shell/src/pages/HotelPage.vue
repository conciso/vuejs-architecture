<script setup lang="ts">
import HotelList from "../components/HotelList.vue";

const hotels = await (await fetch("http://localhost:3000/hotels")).json();
</script>

<template>
  <main>
    <HotelList :hotels="hotels" />
  </main>
</template>
