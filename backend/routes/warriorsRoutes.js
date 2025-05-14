const express = require("express");
const router = express.Router();
const warriorsControllers = require("../controllers/warriorsControllers");

router.route("/").get(warriorsControllers.getWarriors);

module.exports = router;
