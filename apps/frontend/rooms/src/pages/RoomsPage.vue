<script setup lang="ts">
import { ref } from "vue";
import { HotelList, useHotelsStore } from "hotel-management-frontend-core";
import { useRoomsStore } from "../stores/RoomsStore.js";
import RoomList from "../components/RoomList.vue";

const loading = ref(true);

const { load: loadHotels, hotels } = useHotelsStore();
await loadHotels();

const { loadRoomsForHotel, rooms } = useRoomsStore();

for (const hotel of hotels) {
  await loadRoomsForHotel(hotel.id);
}

loading.value = false;
</script>

<template>
  <div class="rooms" :aria-busy="loading">
    <HotelList :hotels="hotels">
      <template #hotel="{ hotel }">
        <li class="hotel">
          <h3 class="hotel-name">{{ hotel.name }}</h3>
          <RoomList :rooms="rooms[hotel.id]" />
        </li>
      </template>
    </HotelList>
  </div>
</template>
