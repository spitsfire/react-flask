import React from "react";
import Robot from "./Robot";

const RobotList = (props) => {
  const { robots } = props;
  return (
    <section>
      {robots.map((robot) => (
        <Robot robot={robot} key={robot.id} />
      ))}
    </section>
  );
};

export default RobotList;
