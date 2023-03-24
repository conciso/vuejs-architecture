import type { Hotel, Room } from "hotel-management-shared";
import { defineStore } from "pinia";

export const useRoomsStore = defineStore("rooms", () => {
  const fetchRoomsForHotel = async (hotelId: Hotel["id"]): Promise<Room> => {
    return await (await fetch(`http://localhost:3000/rooms/${hotelId}`)).json();
  };

  return { fetchRoomsForHotel };
});
