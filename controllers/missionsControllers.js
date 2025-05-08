exports.getMissions = async (req, res) => {
  try {
    const result = await pool.query(`
        SELECT m.id, m.title, m.difficulty, w.name AS warrior 
        FROM missions m
        JOIN warriors w ON m.warrior_id = w.id
        `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("error fetching missions");
  }
};

exports.createMission = async (req, res) => {
  const { warrior_id, title, difficulty, reward } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO missions (warrior_id, title, difficulty, reward) VALUES ($1, $2, $3, $4) RETURNING * ",
      [warrior_id, title, difficulty, reward]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding mission");
  }
};

exports.getOneMission = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM missions WHERE id = $1");
    if (results.row.length === 0) {
      return res.status(404).send("Mission not found!");
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching mission!");
  }
};

exports.updateMission = async (req, res) => {
  const { id } = req.params;
  const { warrior_id, title, difficulty, reward } = req.body;
  try {
    const result = await pool.query(
      "UPDATE missions SET warrior_id = $1, title = $2, difficulty = $3, reward = $4"[
        (warrior_id, title, difficulty, reward)
      ]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Mission not found!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed updating missions!");
  }
};

exports.deleteMission = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM missions WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Could not find mission.");
    }
    res.send("Mission deleted!");
  } catch (err) {
    res.status(500).send("Failed to delete mission!");
  }
};
