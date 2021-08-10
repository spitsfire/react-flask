import React from "react";

const Robot = (props) => {
  const { robot, key } = props;

  return (
    <section
      style={{
        backgroundColor: "dodgeblue",
        borderRadius: "7px",
        margin: "10px",
      }}
    >
      <h3>
        {robot.name} #{robot.id}
      </h3>
      <p>{robot.function}</p>
    </section>
  );
};

export default Robot;
