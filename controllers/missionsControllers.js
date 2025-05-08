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
