import React, { useEffect, useState } from "react";
import { IoMdFootball } from "react-icons/io";

function Football(props) {
  const [animationNames] = useState([
    "football-ani1",
    "football-ani2",
    "football-ani3",
    "football-ani4",
  ]);
  let ballClearInterval;
  const { ind, dataSaved } = props;

  //*For getting a random Animation
  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * animationNames.length);
    setSelectedAnimation(animationNames[randomIndex]);
    clearBall();
    return () => {
      clearInterval(ballClearInterval);
    };
  }, []);

  //* for clearing ball from ground
  const clearBall = () => {
    //* For Removing Football DOM From body

    ballClearInterval = setTimeout(() => {
      let element = document.getElementById(ind);
      element?.remove();
    }, 3200);
  };

  const [selectedAnimation, setSelectedAnimation] = useState();

  return (
    <div
      className={`football-court-football-container ${selectedAnimation}`}
      id={ind}
    >
      <IoMdFootball className={dataSaved ? "blink1" : "football-court-football"} />
    </div>
  );
}

export default Football;
