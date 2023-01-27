<script setup lang="ts">
const props = defineProps<{
  hotels: string[];
}>();
</script>

<template>
  <ul>
    <li v-for="hotel of props.hotels" :key="hotel">{{ hotel }}</li>
  </ul>
</template>
