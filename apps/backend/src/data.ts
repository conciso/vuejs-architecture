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
    { hotelId: 1, id: 1, name: "Left", isAvailable: false, updateCount: 0 },
    { hotelId: 1, id: 2, name: "Middle", isAvailable: true, updateCount: 0 },
    { hotelId: 1, id: 3, name: "Center", isAvailable: true, updateCount: 0 },
  ],
  2: [
    { hotelId: 2, id: 1, name: "Party", isAvailable: true, updateCount: 0 },
    { hotelId: 2, id: 2, name: "Press", isAvailable: false, updateCount: 0 },
    { hotelId: 2, id: 3, name: "Wedding", isAvailable: true, updateCount: 0 },
  ],
  3: [
    { hotelId: 3, id: 1, name: "California", isAvailable: true, updateCount: 0 },
    { hotelId: 3, id: 2, name: "Oregon", isAvailable: true, updateCount: 0 },
    { hotelId: 3, id: 3, name: "Washington", isAvailable: false, updateCount: 0 },
  ],
};
