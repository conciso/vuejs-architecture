import { Hotel, Room } from "hotel-management-shared";

export type BackendHotel = Hotel & {
  updateCount: number;
};

export const hotels: BackendHotel[] = [
  { id: 1, name: "City Centre", updateCount: 0 },
  { id: 2, name: "Messe", updateCount: 0 },
  { id: 3, name: "Westend", updateCount: 0 },
];

export type BackendRoom = Room & {
  updateCount: number;
};

export const rooms: Record<Hotel["id"], BackendRoom[]> = {
  1: [
    { hotelId: 1, id: 1, name: "Left", updateCount: 0 },
    { hotelId: 1, id: 2, name: "Middle", updateCount: 0 },
    { hotelId: 1, id: 3, name: "Center", updateCount: 0 },
  ],
  2: [
    { hotelId: 2, id: 1, name: "Party", updateCount: 0 },
    { hotelId: 2, id: 2, name: "Press", updateCount: 0 },
    { hotelId: 2, id: 3, name: "Wedding", updateCount: 0 },
  ],
  3: [
    { hotelId: 3, id: 1, name: "California", updateCount: 0 },
    { hotelId: 3, id: 2, name: "Oregon", updateCount: 0 },
    { hotelId: 3, id: 3, name: "Washington", updateCount: 0 },
  ],
};
