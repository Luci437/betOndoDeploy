import React from 'react'
import participantImage from '../../Images/participantImage.jpg';
import sachin from '../../Images/sachin.png';
import reniz from '../../Images/reniz.png';
import christo from '../../Images/christo.png';
import aby from '../../Images/aby.png';
import { useInView } from 'react-intersection-observer';
import { siteConstant } from '../../Constants/commonConstants';
import EachParticipant from './EachParticipant';

const ParticipantsTable = () => {

    const {ref, inView} = useInView({threshold: siteConstant.THRESHOLD})

    return (
        <div ref={ref}  className={inView ? "animateFadeIn participantsContainer" : "participantsContainer" }>
            <span className="subHeading"><p>Participants</p>
                <span className="totalParticipantsCount">
                    <p className="currentNumber">05</p>
                    <p className="totalNumber">50</p>
                </span>
            </span>
            <div className="participantsTable">
                <EachParticipant image={aby} name={"Aby Thomas"} />
                <EachParticipant image={reniz} name={"Reniz"} team={"PRT"} />
                <EachParticipant image={sachin} name={"Sachin"} />
                <EachParticipant image={christo} name={"Christo"} team={"PRT"} />
                <EachParticipant image={participantImage} name={"Don"} team={"PRT"} />
            </div>
        </div>
    )
}

export default ParticipantsTable
