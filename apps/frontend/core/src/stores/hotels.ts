import { defineStore } from "pinia";

export const useHotelsStore = defineStore("hotels", () => {
  const fetchHotels = async () => {
    return await (await fetch("http://localhost:3000/hotels")).json();
  };

  return { fetchHotels };
});
