import * as fs from "node:fs/promises";
import express from "express";

const packageJson = JSON.parse(await fs.readFile("./package.json", "utf-8"));

const APP_NAME = packageJson.name;
const PORT = 3000;

const app = express();

const hotels = ["City Centre", "Messe", "Westend"];

app.get("/hotels", (request, response) => {
  response.send(JSON.stringify(hotels));
});

app.listen(PORT, () => {
  console.info(`${APP_NAME} Listening on port ${PORT}...`);
});
