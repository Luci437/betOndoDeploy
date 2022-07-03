import React from "react";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../Constants/commonConstants";

function GoalsSelected() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  return (
    <div
      ref={ref}
      className={
        inView ? "animateFadeIn participantsContainer" : "participantsContainer"
      }
    >
      <div className="participantsTable glowTopBorder">
        <div className="eachParticipantsBox">
          <div className="participantsInfoBox">
            <span>
              <p className="participantName">{"Goals Predicted"}</p>
              <p className="participantChosenCountry">
                <span className="participantResultPool participantWinPool">
                  AGN
                </span>{" "}
                
              </p>
            </span>
          </div>
          <p className="predictedValue">04</p>
        </div>
      </div>
    </div>
  );
}

export default GoalsSelected;
