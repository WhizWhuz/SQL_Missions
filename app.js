const express = require("express");

const errorHandler = require("./middlewares/errorHandler.js");
const missionRoutes = require("./routes/missionRoutes.js");
const warriorRoutes = require("./routes/warriorRoutes.js");

const app = express();
app.use(express.json());

app.use("/warrior", warriorRoutes);
app.use("/missions", missionRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Ninja Mission Tracker!");
});

app.use(errorHandler);

module.exports = app;
