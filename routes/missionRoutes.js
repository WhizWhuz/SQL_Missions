const express = require("express");
const router = express.Router();
const missionController = require("../controllers/missionsControllers");

router
  .route("/")
  .get(missionController.getMissions)
  .post(missionController.createMission);

module.exports = router;
