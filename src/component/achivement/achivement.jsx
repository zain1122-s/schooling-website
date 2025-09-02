import React from "react";
import "./achivement.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achivement = () => {
    const { ref, inView } = useInView({ triggerOnce: true }); 


  const box = [
    {
      number: "5000",
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
    <div className="achivement-main" ref={ref}>
      {box.map((item, index) => (
        <div className="box1" key={index}>
           <h1>
            {inView ? (
              <CountUp end={item.number} duration={2} separator="," />
            ) : (
              "0"
            )}
          </h1>
          <h2>{item.position}</h2>
        </div>
      ))}
    </div>
  );
};

export default Achivement;
