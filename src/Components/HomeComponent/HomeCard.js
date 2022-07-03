import React from 'react'
import groupA from '../../Images/team/argentina.svg'
import groupB from '../../Images/team/portugal.svg'
import { IoIosFootball } from "react-icons/io";
import { useInView } from 'react-intersection-observer';
import {siteConstant} from '../../Constants/commonConstants'

function HomeCard() {

    const {ref, inView} = useInView({threshold : siteConstant.THRESHOLD})

    return (
        <div ref={ref} className={inView ? "animateFadeIn matchCard" : "matchCard"}>
            <div className="topLayer">
                <p className="matchNumber">12 May 2021</p>
            </div>
            <div className="matchTeamBox">
                <span>
                    <p className="matchTeamName">ARN</p>
                    <img loading="lazy" src={groupA} alt="" className="matchGroupTeamImage animateBackgroundSkeleton" />
                </span>
                <p>vs</p>
                <span>
                    <img loading="lazy" src={groupB} alt="" className="matchGroupTeamImage animateBackgroundSkeleton" />
                    <p className="matchTeamName">PRT</p>
                </span>
            </div>
            <p className="gameTitle dimmedTextColor"><IoIosFootball className="smallIcons" /> UEFA European Championship</p>
        </div>
    )
}

export default HomeCard
