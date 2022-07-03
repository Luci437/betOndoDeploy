import React, { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../Constants/commonConstants";
import { CommonContext } from "../../Context/CommonContext";
import { GiTurban } from "react-icons/gi";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Football from "./Football";
import { textConstants } from "../../Constants/textConstants";
import messi from "../../Images/messi.webp";
import { IoInformationCircle } from "react-icons/io5";
import MatchWinPercent from "./MatchWinPercent";
import { putZeroBeforeNumber } from "../../Utils/ZeroBeforeNumber";
import flag from "../../Images/argentinaTeamLogo.webp";

function GoalCount() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  const { dispatchUserEvent } = useContext(CommonContext);
  const modalRef = useRef();
  const [selectedGoalCount, setSelectedGoalCount] = useState(0);
  const [goals, setGoals] = useState([]);
  const tempArray = useRef([]);
  const [dataSaved, setDataSaved] = useState(false);

  //*For closing them modal when we click outside
  useEffect(() => {
    window.addEventListener("mousedown", handleModel);

    return () => {
      window.removeEventListener("mousedown", handleModel);
    };
  }, []);

  //*For closing modal
  const handleModel = (e) => {
    if (modalRef?.current?.contains(e.target)) {
      return true;
    }
    dispatchUserEvent("HIDE SHOW GOAL COUNT");
  };

  //* For handling goal changes
  const handleGoalChanges = (type) => {
    if (type === textConstants.INCREMENT) {
      if (selectedGoalCount <= siteConstant.MAX_GOAL_COUNT - 1) {
        setSelectedGoalCount((prev) => {
          return prev + 1;
        });
      }
    } else {
      if (selectedGoalCount > 0) {
        setSelectedGoalCount((prev) => {
          return prev - 1;
        });
      }
    }

    //* For Updating Goal Array
    if (selectedGoalCount < siteConstant.MAX_GOAL_COUNT) {
      setGoals([]);
      for (let i = 0; i <= 0; i++) tempArray.current.push(i);
      setGoals(tempArray.current);
    }
  };

  return (
    <div className="goal-count-main-container">
      <div
        className={
          inView ? "animateFadeIn goal-count-container" : "goal-count-container"
        }
        ref={modalRef}
      >
        <span className="subHeading" ref={ref}>
          <p>Choose Goals</p>
          <span className="totalParticipantsCount">
            <p className="currentNumber">
              {putZeroBeforeNumber(selectedGoalCount)}
            </p>
            <p className="totalNumber">
              {putZeroBeforeNumber(siteConstant.MAX_GOAL_COUNT)}
            </p>
          </span>
        </span>
        <div className="football-court">
          <div className="football-court-goal-post-top"></div>
          <div className="football-court-middle-line"></div>
          <div className="football-court-middle-circle"></div>
          <div className="football-court-middle-circle-fill"></div>
          <div className="football-court-goal-post-bottom"></div>
          <div className="football-court-grass-img"></div>
          <div className="football-court-players-container"></div>

          <div className="football-court-dig-ground">
            <img alt="flag" src={flag} className="football-court-team-flag" />
            <img
              className="football-court-selectedTeamImage"
              src={messi}
              alt="selectedTeamImage"
            />
            <p className="football-court-dig-selectedTeamName">ARGENTINA</p>
            <MatchWinPercent />
            <h3 className="football-court-dig-instruction-text">
              <IoInformationCircle className="toastIcon" />
              Now you need to select how many goal will they take in this match.
            </h3>

            <div className="football-court-dig-team-info-container">
              <div className="football-court-dig-team-info-data">
                <h4 className="football-court-dig-team-info-title">MATCHES</h4>
                <h2 className="football-court-dig-team-info-title-data">
                  {putZeroBeforeNumber(9)}
                </h2>
              </div>
              <div className="football-court-dig-team-info-data">
                <h4 className="football-court-dig-team-info-title">WON</h4>
                <h2 className="football-court-dig-team-info-title-data">
                  {putZeroBeforeNumber(211)}
                </h2>
              </div>
              <div className="football-court-dig-team-info-data">
                <h4 className="football-court-dig-team-info-title">LOSS</h4>
                <h2 className="football-court-dig-team-info-title-data">
                  {putZeroBeforeNumber(4)}
                </h2>
              </div>
              <div className="football-court-dig-team-info-data">
                <h4 className="football-court-dig-team-info-title">DRAW</h4>
                <h2 className="football-court-dig-team-info-title-data">
                  {putZeroBeforeNumber(10)}
                </h2>
              </div>
            </div>
          </div>

          {goals?.map((_, index) => {
            return <Football key={index} ind={index} dataSaved={dataSaved} />;
          })}

          <div className={"football-court-goal-selecting-container"}>
            <div className="football-court-goal-selecting-container-sub-1">
              <div className="football-court-goal-selecting-container-sub-2">
                <button
                  className="football-court-goal-state-change-buttons"
                  onClick={() => handleGoalChanges(textConstants.DECREMENT)}
                >
                  <TiArrowLeftThick className="football-court-goal-button-icon" />
                </button>
                <h1 className="football-court-goal-text">
                  {putZeroBeforeNumber(selectedGoalCount)}
                </h1>
                <button
                  className="football-court-goal-state-change-buttons"
                  onClick={() => handleGoalChanges(textConstants.INCREMENT)}
                >
                  <TiArrowRightThick className="football-court-goal-button-icon" />
                </button>
              </div>
              <div className="football-court-goal-selecting-container-sub-3">
                <button
                  className="football-court-goal-trigger-button"
                  onClick={() => {
                    setDataSaved(true);
                    setTimeout(() => {
                      dispatchUserEvent("HIDE SHOW GOAL COUNT");
                    }, 800);
                  }}
                >
                  <GiTurban className="football-court-goal-trigger-button-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCount;
