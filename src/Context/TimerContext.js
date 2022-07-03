import React, { createContext, useEffect, useState } from "react";
import { textConstants } from "../Constants/textConstants";

export const TimerContext = createContext();

export function TimerProvider(props) {
  const [expired, setExpired] = useState(false);
  const [todaysGame, setTodaysGame] = useState(textConstants.TODAYS_MATCH);
  const [gameEnded, setGameEnded] = useState(false);
  const [joined, setJoined] = useState(false);
  const [showNav, setShowNav] = useState(false);

  //*For Adding Default values
  useEffect(() => {
    if (localStorage.getItem("vote")) {
      setJoined(true);
    }
  }, [])

  const dispatchTimerEvent = (type, payload) => {
    switch (type) {
      case "ADD EXPIRE":
        setExpired(payload.value);
        break;
      case "REMOVE EXPIRE":
        setExpired(payload.value);
        break;
      case "ADD TODAY GAME":
        setTodaysGame(payload.value);
        break;
      case "REMOVE TODAY GAME":
        setTodaysGame(payload.value);
        break;
      case "ADD GAME ENDED":
        setGameEnded(payload.value);
        break;
      case "REMOVE GAME ENDED":
        setTodaysGame(payload.value);
        break;
      case "ADD JOINED":
        setJoined(payload.value);
        break;
      case "REMOVE JOINED":
        setJoined(payload.value);
        break;
      case "ADD NAV":
        setShowNav(payload.value);
        break;
      case "REMOVE NAV":
        setShowNav(payload.value);
        break;
      default:
        break;
    }
  };

  return (
    <TimerContext.Provider
      value={{
        expired,
        todaysGame,
        gameEnded,
        joined,
        showNav,
        dispatchTimerEvent,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
}
