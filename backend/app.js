const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler.js");
const missionRoutes = require("./routes/missionRoutes.js");
const warriorsRoutes = require("./routes/warriorsRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/warriors", warriorsRoutes);
app.use("/missions", missionRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Ninja Mission Tracker!");
});

app.use(errorHandler);

module.exports = app;
