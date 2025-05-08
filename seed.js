const pool = require("./config/db");

async function seed() {
  try {
    await pool.query("DELETE FROM missions");
    await pool.query("DELETE FROM warriors");

    const warriorResult =
      await pool.query(`INSERT INTO warriors (name, clan, rank) VALUES 
        ('Jesper the Bold', 'ShadowFox', 5),
        ('Aiko the Swift', 'SilentLotus', 3),
        ('Hikaru of Flame', 'Blazefang', 4)
        RETURNING *;
    `);

    const warriors = warriorResult.rows;
    console.log("Inserted warriors:", warriors);

    const missionPromises = [];

    for (const warrior of warriors) {
      missionPromises.push(
        pool.query(
          "INSERT INTO missions (warrior_id, title, difficulty, reward) VALUES ($1, $2, $3, $4)",
          [warrior.id, "Defend the village", 3, "100 gold"]
        )
      );
      missionPromises.push(
        pool.query(
          "INSERT INTO missions (warrior_id, title, difficulty, reward) VALUES ($1, $2, $3, $4)",
          [warrior.id, "Retrieve the lost scroll", 4, "200 gold"]
        )
      );
    }

    await Promise.all(missionPromises);
    console.log("Inserted missions!");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
    console.log("Seed completed, pool closed!");
  }
}

seed();
