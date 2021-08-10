import axios from "axios";
import React, { useState } from "react";

const RobotForm = (props) => {
  const [name, setName] = useState("");
  const [func, setFunc] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  // const changeFunc = (event) => {
  //   setFunc(event.target.value);
  // };

  const submitRobot = (event) => {
    event.preventDefault();
    axios
      .post(`${props.BASE_URL}/robots`, { name, func })
      .then((response) => {
        console.log(response.data);
        props.setRobots([...props.robots, response.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitRobot}>
      <div>
        <label>Name</label>
        <input name="name" onChange={changeName} />
      </div>
      <div>
        <label>Function</label>
        <input
          name="function"
          onChange={(event) => setFunc(event.target.value)}
        />
      </div>
      <input type="submit" value="Add Robot" />
    </form>
  );
};

export default RobotForm;
