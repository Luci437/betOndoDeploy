import React, { createContext, useEffect, useState } from "react";

export const CommonContext = createContext();

export function CommonProvider(props) {
  const [showGoalCount, setShowGoalCount] = useState(false);
  const [auth, setAuth] = useState(null);
  const [profile, setProfile] = useState(null);

  //*For Adding Default values
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setAuth(true);
    }
    if (localStorage.getItem("profile")) {
      let tempObj = JSON.parse(localStorage.getItem("profile"));
      setProfile(tempObj);
    }
    return () => {
      clearAllValue();
    };
  }, []);

  //*For Clearing values
  const clearAllValue = () => {
    setAuth(null);
    setShowGoalCount(null);
    setProfile(null);
  };

  const dispatchUserEvent = (name, payload) => {
    switch (name) {
      case "ADD SHOW GOAL COUNT":
        setShowGoalCount(true);
        break;
      case "HIDE SHOW GOAL COUNT":
        setShowGoalCount(false);
        break;
      case "ADD AUTH":
        setAuth(payload.value);
        break;
      case "REMOVE AUTH":
        setAuth(null);
        break;
      case "ADD PROFILE":
        setProfile(payload.value);
        break;
      default:
        break;
    }
  };

  return (
    <CommonContext.Provider
      value={{ showGoalCount, dispatchUserEvent, auth, profile }}
    >
      {props.children}
    </CommonContext.Provider>
  );
}
