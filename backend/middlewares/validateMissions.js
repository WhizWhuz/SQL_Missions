function validateMission(req, res, next) {
  const { warrior_id, title, difficulty, reward } = req.body;

  if (!warrior_id || typeof warrior_id !== "number") {
    return res.status(400).send("Invalid or missing Warrior");
  }
  if (!title || typeof title !== "string") {
    return res.status(400).send("Invalid or missing title!");
  }

  if (difficulty !== undefined && typeof difficulty !== "number") {
    return res.status(400).send("Invalid difficulty");
  }
  if (reward !== undefined && typeof reward !== "string") {
    return res.status(400).send("Invalid reward!");
  }

  next();
}

module.exports = validateMission;
