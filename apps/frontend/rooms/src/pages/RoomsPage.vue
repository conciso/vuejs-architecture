<script setup lang="ts">
import { ref } from "vue";
import type { Hotel, Room } from "hotel-management-shared";
import { HotelList, useHotelsStore } from "hotel-management-frontend-core";
import { useRoomsStore } from "../stores/rooms.js";
import RoomList from "../components/RoomList.vue";

const loading = ref(true);

const hotelsStore = useHotelsStore();
const hotels = await hotelsStore.fetchHotels();

const roomsStore = useRoomsStore();
const rooms: Record<Hotel["id"], Room[]> = {};

for (const hotel of hotels) {
  rooms[hotel.id] = await roomsStore.fetchRoomsForHotel(hotel.id);
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
