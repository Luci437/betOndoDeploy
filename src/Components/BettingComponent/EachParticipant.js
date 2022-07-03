import React from 'react';
import { GoPrimitiveDot } from "react-icons/go";

function EachParticipant(props) {
    return (
        <div className="eachParticipantsBox">
            <div className="participantsInfoBox">
                <img loading="lazy" src={props.image} alt="participantDp" className="participantsImage animateBackgroundSkeleton" />
                <span>
                    <p className="participantName">{props.name}</p>
                    <p className="participantChosenCountry"><span className="participantResultPool participantWinPool">W.P</span> {props.team ? (<> <GoPrimitiveDot /> {props.team} </>) : "PENDING"}</p>
                </span>
            </div>
            <p className="participantPoint">100</p>
        </div>
    )
}

export default EachParticipant
