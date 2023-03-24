import type { Hotel } from "hotel-management-shared";
import { defineStore } from "pinia";

export const useRoomsStore = defineStore("rooms", () => {
  const fetchRoomsForHotel = async (hotelId: Hotel["id"]) => {
    return await (await fetch(`http://localhost:3000/rooms/${hotelId}`)).json();
  };

  return { fetchRoomsForHotel };
});
