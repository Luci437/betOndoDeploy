import React from 'react'
import sachin from '../../Images/sachin.png';
import aby from '../../Images/aby.png';
import reniz from '../../Images/reniz.png';
import {useInView} from 'react-intersection-observer'
import { siteConstant } from '../../Constants/commonConstants';

const LeaderBoard = () => {

    const {ref, inView} = useInView({threshold: siteConstant.THRESHOLD});

    return (
        <div ref={ref} className={inView ? "animateFadeIn leaderBoardContainer" : "leaderBoardContainer"}>
            <p className="winnersTitle">WINNERS</p>
            <div className="winnersBox">
                <div className="winners win2">
                    <img loading="lazy" src={aby} alt="winner2" />
                    <p className="winnersName">Aby</p>
                </div>
                <div className="winners win1">
                    <img loading="lazy" src={sachin} alt="winner1" />
                    <p className="winnersName">Sachin</p>
                </div>
                <div className="winners win3">
                    <img loading="lazy" src={reniz} alt="winner3" />
                    <p className="winnersName">Reniz</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard
