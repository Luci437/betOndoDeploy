import React from 'react';
import { IoIosFootball } from "react-icons/io";
import groupA from '../../Images/team/argentina.svg'
import groupB from '../../Images/team/portugal.svg';
import { useInView } from 'react-intersection-observer';
import {siteConstant} from '../../Constants/commonConstants';

const MatchResult = () => {
    const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD})
    return (
        <div ref={ref} className={inView ? "animateFadeIn matchResultContainer" : "matchResultContainer"}>
            <p className="gameTitle"><IoIosFootball className="smallIcons" /> UEFA European Championship</p>
            <p className="centerText">MATCH RESULT</p>
            <div className="resultBoxGoals">
                <p className="resultBoxGoalTeamNameAndFlag"><img src={groupA} alt="flag" className="resultBoxGoalTeamFlag animateBackgroundSkeleton" /> AGN</p>
                <span className="goalResultBox">
                    <p>1</p>
                    <p>:</p>
                    <p>3</p>
                </span>
                <p className="resultBoxGoalTeamNameAndFlag">PRT <img src={groupB} alt="flag" className="resultBoxGoalTeamFlag animateBackgroundSkeleton" /></p>
            </div>
            <p className="resultText teamWon">Draw Match</p>
        </div>

    )
}

export default MatchResult
