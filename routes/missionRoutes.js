const express = require("express");
const router = express.Router();
const missionController = require("../controllers/missionsControllers");
const validateMission = require("../middlewares/validateMissions");

router.use(validateMission);

router
  .route("/")
  .get(missionController.getMissions)
  .post(missionController.createMission);

module.exports = router;
