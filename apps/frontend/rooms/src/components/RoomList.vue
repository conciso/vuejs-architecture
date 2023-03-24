<script setup lang="ts">
import type { Room } from "hotel-management-shared";

const props = defineProps<{
  rooms: Room[];
}>();

const isAvailableDisplay = (room: Room): string => (room.isAvailable ? "✔️" : "❌");
</script>

<template>
  <ul>
    <li v-for="room of props.rooms" :key="room.id" class="room">
      <slot name="room" :room="room">
        <h4>
          {{ isAvailableDisplay(room) }}
          {{ room.name }}
        </h4>
      </slot>
    </li>
  </ul>
</template>
