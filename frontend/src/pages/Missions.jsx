import MissionList from "../components/MissionList";
import NewMissionForm from "../components/NewMissionForm";

function Missions() {
  return (
    <div>
      <NewMissionForm />
      <MissionList />
    </div>
  );
}

export default Missions;
