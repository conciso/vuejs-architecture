import * as fs from "node:fs/promises";
import cors from "cors";
import express from "express";
import { hotels, rooms } from "./data";

const packageJson = JSON.parse(await fs.readFile("./package.json", "utf-8"));

const APP_NAME = packageJson.name;
const PORT = 3000;

const app = express();
app.use(cors());

app.get("/hotels", (request, response) => {
  response.send(JSON.stringify(hotels));
});

app.get("/rooms/:hotelId", (request, response) => {
  response.send(JSON.stringify(rooms[+request.params.hotelId]));
});

app.listen(PORT, () => {
  console.info(`${APP_NAME} Listening on port ${PORT}...`);
});
