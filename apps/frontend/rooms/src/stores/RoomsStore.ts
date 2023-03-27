import type { Hotel, Room } from "hotel-management-shared";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useRoomsStore = defineStore("rooms", () => {
  const rooms = reactive<Record<Hotel["id"], Room[]>>({});
  const isLoading = ref(false);

  const loadRoomsForHotel = async (hotelId: Hotel["id"]): Promise<void> => {
    isLoading.value = true;
    rooms[hotelId] = [] as Room[];
    rooms[hotelId] = await (await fetch(`http://localhost:3000/rooms/${hotelId}`)).json();
    isLoading.value = false;
  };

  return { loadRoomsForHotel, isLoading, rooms };
});
