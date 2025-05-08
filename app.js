const express = require("express");
const { Pool } = require("pg");

const missionRoutes = "./routes/missionRoutes.js";
const warriorRoutes = "./routes/warriorRoutes.js";

const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dojo_of_jesper",
  password: "Gooddamn.4991",
  port: 5432,
});

app.use("/warrior", warriorRoutes);
app.use("/missions", missionsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Ninja Mission Tracker!");
});

module.exports = app;
