import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { Hotel } from "hotel-management-shared";

export const useHotelsStore = defineStore("hotels", () => {
  const hotels = ref<Hotel[]>([]);
  const isLoading = ref(false);

  const load = async (): Promise<void> => {
    isLoading.value = true;
    hotels.value.length = 0;
    hotels.value.push(...(await (await fetch("http://localhost:3000/hotels")).json()));
    isLoading.value = false;
  };

  return { load, isLoading, hotels };
});
