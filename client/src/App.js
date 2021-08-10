import React, { useEffect, useState } from "react";
import "./App.css";
import RobotList from "./components/RobotList";
import RobotForm from "./components/RobotForm";
import axios from "axios";

function App() {
  const BASE_URL = "http://localhost:5000";
  const [allRobots, setRobots] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/robots`)
      .then((response) => setRobots(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Claire's Robot Friends!</h1>
      </header>
      <main>
        <RobotForm
          robots={allRobots}
          setRobots={setRobots}
          BASE_URL={BASE_URL}
        />
        <RobotList robots={allRobots} />
      </main>
    </div>
  );
}

export default App;
