exports.getWarriors = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM warriors");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching warriors");
  }
};
