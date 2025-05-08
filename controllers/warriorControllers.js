exports.getWarriors = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM warriors");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching warriors");
  }
};

exports.warriorOneMission = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM missions WHERE warrior_id = $1",
      [id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to find a mission.");
  }
};
