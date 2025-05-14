import React, { useState } from "react";
import styles from "./NewMissionForm.module.scss"; // assuming you're using SASS modules

function NewMissionForm() {
  const [form, setForm] = useState({
    title: "",
    reward: "",
    difficulty: "",
    warrior_id: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/missions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert("Mission added!");
      console.log(data);
    } catch (err) {
      console.error("Error posting mission:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add New Mission</h2>
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        name="reward"
        placeholder="Reward (e.g. 200 gold)"
        onChange={handleChange}
        required
      />
      <input
        name="difficulty"
        type="number"
        placeholder="Difficulty (1–5)"
        onChange={handleChange}
        required
      />
      <input
        name="warrior_id"
        type="number"
        placeholder="Warrior ID"
        onChange={handleChange}
        required
      />
      <button type="submit">Add Mission</button>
    </form>
  );
}

export default NewMissionForm;
