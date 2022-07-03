import React, {useContext} from 'react';
import { IoIosFootball } from "react-icons/io";
import { TeamImages } from '../../../Images/Assets';
import { PlayerImages } from '../../../Images/Assets';
import HostedBy from './HostedBy';
import DateAndTimeTimer from './DateAndTimeTimer';
import {TimerContext} from '../../../Context/TimerContext';

function BetCard() {
    const {expired, todaysGame} = useContext(TimerContext)

    return (
        <div className="betCardContainer">
            <p className="gameTitle"><IoIosFootball className="smallIcons" /> UEFA European Championship</p>
            <p className="smallTitle">{todaysGame}</p>

            <div className="teamDetailBox">
                <div className="teamBox">
                    <img loading="lazy" src={TeamImages.argentinaTeamLogo}  className="teamImage teamALogo" alt="team" />
                    <img loading="lazy" className="playerImage" alt="player" src={PlayerImages.messi} />
                </div>
                <div className="teamBox">
                    <img loading="lazy" src={TeamImages.portugalTeamLogo} className="teamImage teamBLogo" alt="team" />
                    <img loading="lazy" className="playerImage" alt="player" src={PlayerImages.ronaldo} />
                </div>
            </div>
            <div className="teamNames">
                <div className="teamANameBox">
                    <p className="teamName teamAName">Argentina</p>
                </div>
                <div className="vsText">
                    <h1 className="vsText">VS</h1>
                </div>
                <div className="teamBNameBox">
                    <p className="teamName teamBName">Portugal</p>
                </div>
            </div>
            {!expired && (<DateAndTimeTimer />) }
            <HostedBy />
            <div className={expired ? "redBar barDesign" : "blueBar barDesign"}></div>
        </div>
    )
}

export default BetCard