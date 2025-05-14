import { useEffect, useState } from "react";
import styles from "../styles/MissionList.module.scss";

function MissionList() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const res = await fetch("http://localhost:3000/missions");
        const data = await res.json();
        setMissions(data);
      } catch (error) {
        console.error("Could not fetch missions: ", error);
      }
    };

    fetchMissions();
  }, []);

  return (
    <div className={styles.missonsWrapper}>
      <h1>Missions Scroll</h1>
      {missions.map((mission) => {
        <div key={mission.id} className={styles.card}>
          <h2 className={styles.title}>{mission.title}</h2>
          <p>Reward: {mission.reward}</p>
          <p>Difficulty: {mission.difficulty}</p>
          <p className={styles.warrior}>Assigned to: {mission.name}</p>
        </div>;
      })}
    </div>
  );
}

export default MissionList;
