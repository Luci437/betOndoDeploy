import React, { useRef, useEffect } from "react";
import { TeamFlag } from "../../Images/Assets";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../Constants/commonConstants";
import { useContext } from "react";
import { CommonContext } from "../../Context/CommonContext";

const Voting = () => {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  const voteARef = useRef();
  const voteBRef = useRef();
  const voteDrawRef = useRef();

  const { dispatchUserEvent } = useContext(CommonContext);

  const casteVote = (ref) => {
    localStorage.setItem("vote", ref.current.value);
    dispatchUserEvent("ADD SHOW GOAL COUNT");
    //setToastMessage(textConstants.TEAM_SELECTED);
  };

  useEffect(() => {
    const voted = localStorage.getItem("vote")
      ? localStorage.getItem("vote")
      : false;
    switch (voted) {
      case voteARef.current.value:
        voteARef.current.checked = true;
        break;
      case voteBRef.current.value:
        voteBRef.current.checked = true;
        break;
      case voteDrawRef.current.value:
        voteDrawRef.current.checked = true;
        break;
      default:
        console.log("Not Voted");
        break;
    }
  }, []);

  return (
    <div
      ref={ref}
      className={inView ? "animateFadeIn votingContainer" : "votingContainer"}
    >
      <input
        type="radio"
        name="voteButton"
        id="groupAVoteButton"
        ref={voteARef}
        value="groupA"
      />
      <label
        className="votingButtonBox groupAVotingBox"
        id="groupALabel"
        onClick={() => casteVote(voteARef)}
        htmlFor="groupAVoteButton"
      >
        <div className="votingButton">
          <p className="votingTeamText">Argentina</p>
          <div className="BubbleImageATeam">
            <img
              loading="lazy"
              src={TeamFlag.argenTeam}
              alt="team flag agr"
              className="teamFlag teamFlagA"
            />
          </div>
        </div>
      </label>

      <input
        type="radio"
        name="voteButton"
        ref={voteDrawRef}
        id="drawVoteButton"
        value="draw"
      />
      <label
        className="drawButton"
        id="drawLabel"
        onClick={() => casteVote(voteDrawRef)}
        htmlFor="drawVoteButton"
      >
        <p>DRAW</p>
      </label>

      <input
        type="radio"
        name="voteButton"
        id="groupBVoteButton"
        ref={voteBRef}
        value="groupB"
      />
      <label
        className="votingButtonBox groupBVotingBox"
        id="groupBLabel"
        onClick={() => casteVote(voteBRef)}
        htmlFor="groupBVoteButton"
      >
        <div className="votingButton">
          <div className="BubbleImageBTeam">
            <img
              loading="lazy"
              src={TeamFlag.portuTeam}
              alt="team flag port"
              className="teamFlag teamFlagB"
            />
          </div>
          <p className="votingTeamText groupBVotingName">Portugal</p>
        </div>
      </label>
    </div>
  );
};

export default Voting;
