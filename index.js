const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dojo_of_jesper",
  password: "Gooddamn.4991",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Welcome to the Ninja Mission Tracker!");
});

app.get("/warriors", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM warriors");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching warriors");
  }
});

app.get("/missions", async (req, res) => {
  const { warrior_id, title, difficulty } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO missions (warrior_id, title, difficulty) VALUES ($1)($2)($3) RETURNING * ",
      [warrior_id, title, difficulty]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding mission");
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
