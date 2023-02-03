import * as fs from "node:fs/promises";
import cors from "cors";
import express from "express";
import { type Hotel } from "hotel-management-shared";

const packageJson = JSON.parse(await fs.readFile("./package.json", "utf-8"));

const APP_NAME = packageJson.name;
const PORT = 3000;

const app = express();
app.use(cors());

export type BackendHotel = Hotel & {
  updateCount: number;
};

const hotels: BackendHotel[] = [
  { id: 1, name: "City Centre", updateCount: 0 },
  { id: 2, name: "Messe", updateCount: 0 },
  { id: 3, name: "Westend", updateCount: 0 },
];

app.get("/hotels", (request, response) => {
  response.send(JSON.stringify(hotels));
});

app.listen(PORT, () => {
  console.info(`${APP_NAME} Listening on port ${PORT}...`);
});
