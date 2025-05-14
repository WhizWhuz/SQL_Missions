const express = require("express");
const router = express.Router();
const missionController = require("../controllers/missionsControllers");
const validateMission = require("../middlewares/validateMissions");

router
  .route("/")
  .get(missionController.getMissions)
  .post(validateMission, missionController.createMission);

router
  .route("/:id")
  .get(missionController.getOneMission)
  .put(validateMission, missionController.updateMission)
  .delete(missionController.deleteMission);

module.exports = router;
