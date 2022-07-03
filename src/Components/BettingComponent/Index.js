import React, { Fragment, useContext } from "react";
import BetCard from "./BetCard/BetCard";
import Voting from "./Voting";
import LeaderBoard from "./LeaderBoard";
import ParticipantsTable from "./ParticipantsTable";
import { HiLockClosed } from "react-icons/hi";
import { TimerContext } from "../../Context/TimerContext";
import { textConstants } from "../../Constants/textConstants";
import JoinButton from "./JoinButton";
import MatchResult from "./MatchResult";
import GoalCount2 from "./GoalCount2";
import { CommonContext } from "../../Context/CommonContext";
import GoalsSelected from "./GoalsSelected";

function Index() {
  const { expired, dispatchTimerEvent, gameEnded, joined } =
    useContext(TimerContext);

  const { showGoalCount } = useContext(CommonContext);

  if (gameEnded) {
    dispatchTimerEvent("ADD JOINED", {
      value: textConstants.GAME_ENDED,
    });
  }
  return (
    <Fragment>
      {!gameEnded && (
        <>
          <BetCard />
          <p
            className={
              expired
                ? "dimmedTextColor smallTitle whoWillWinText"
                : "smallTitle whoWillWinText"
            }
          >
            {!expired ? (
              textConstants.WHO_WILL_WIN
            ) : (
              <>
                <HiLockClosed className="smallIcons" />{" "}
                {textConstants.BETTING_ENDED}
              </>
            )}
          </p>
        </>
      )}
      {gameEnded && <MatchResult />}
      {!expired && joined && <Voting />}
      {!expired && joined && <GoalsSelected />}
      {gameEnded && <LeaderBoard />}
      <ParticipantsTable />
      {!gameEnded && !expired && !joined && <JoinButton />}
      {showGoalCount && <GoalCount2 />}
    </Fragment>
  );
}

export default Index;
