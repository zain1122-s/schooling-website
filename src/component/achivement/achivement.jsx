import React from "react";
import "./achivement.css";
const Achivement = () => {
  const box = [
    {
      number: "5K",
      position: "Sudent",
    },
    {
      number: "150",
      position: "Teacher",
    },
    {
      number: "45",
      position: "winners",
    },
    {
      number: "250",
      position: "Awards",
    },
  ];

  return (
    <div className="achivement-main">
      {box.map((item, index) => (
        <div className="box1" key={index}>
          <h1>{item.number}</h1>
          <h2>{item.position}</h2>
        </div>
      ))}
    </div>
  );
};

export default Achivement;
