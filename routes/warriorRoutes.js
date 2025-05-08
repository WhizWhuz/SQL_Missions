const express = require("express");
const router = express.Router();
const warriorController = require("../controllers/warriorControllers");

router.route("/").get(warriorController.getWarriors);

module.exports = router;
