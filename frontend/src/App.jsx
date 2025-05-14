import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Missions from "./pages/Missions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
