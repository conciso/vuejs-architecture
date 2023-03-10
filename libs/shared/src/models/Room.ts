import { Hotel } from "./Hotel";

export type Room = {
  hotelId: Hotel["id"];
  id: number;
  name: string;
};
