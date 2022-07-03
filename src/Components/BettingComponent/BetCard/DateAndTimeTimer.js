// to display the timer components

import React, { useEffect, useState, useContext } from 'react';
import { IoTimerSharp } from "react-icons/io5";
import {textConstants} from '../../../Constants/textConstants'
import {TimerContext} from '../../../Context/TimerContext'


function DateAndTimeTimer() {

    // these 4 variables are used to display values to HTML
    const [day ,setDay] = useState('00');
    const [hours, setHours] = useState('00');
    const [min, setMin] = useState('00');
    const [sec, setSec] = useState('00');
    // variable to indicate that timer had gone off
    const {dispatchTimerEvent} = useContext(TimerContext)
    // this variable will be used for time interval in setInterval inside timerFunction()
    const clockSpeed = 1000;
    // this variable is used to store setInterval
    let timeInterval = setInterval;
    // this variable store the deadLine or betting ending time
    const deadLine = 1659525780000;
    // this variable store current days time and date
    let today = new Date().getTime();
    // this variable store time difference between deadLine and today
    let timeDifference = deadLine - today;
    // useEffect will be triggered first when we run the program
    useEffect(() => {
        // just checking weather the betting time is over or not
        // if over then timer will not be shown and a message
        // Betting ended will shown
        if(timeDifference < 0) {
            // to make arrangements when betting is over
            timerIsOff()
        }else {
            // if betting is not over then timer will be shown using this function
            timer();
        }
        return () => {
            // to clear setInterval when we exit from the page
            clearInterval(timeInterval)
        }
    }, [])

    // this function will the responsible for doing timing function
    const timer = () => {
        // the value from props. Upto this time timer will go.
        timeInterval = setInterval(() => {
            // todays time
            today = new Date().getTime();
            // the difference between today and deadLine
            timeDifference = deadLine - today;

            // all calculations (taken from W3Schools)
            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // displaying values to frontend
            if(days < 10){
                // to display a additional 0 in front of the time 
                // like 09 08 07 06 05 04 03 02 01 00 
                setDay(`0${days}`)
            }else {
                setDay(days);
            }
            if (hours < 10) {
                // to display a additional 0 in front of the time 
                setHours(`0${hours}`)
            } else {
                setHours(hours);
            }
            if (minutes < 10) {
                // to display a additional 0 in front of the time 
                setMin(`0${minutes}`)
            } else {
                setMin(minutes);
            }
            if (seconds < 10) {
                // to display a additional 0 in front of the time 
                setSec(`0${seconds}`)
            } else {
                setSec(seconds);
            }

            switch(days) {
                case 0:
                    dispatchTimerEvent("ADD TODAY GAME", {
                      value: textConstants.TODAYS_MATCH,
                    });
                    break;
                case 1:
                     dispatchTimerEvent("ADD TODAY GAME", {
                       value: textConstants.TOMORROW,
                     });
                    break;
                default:
                     dispatchTimerEvent("ADD TODAY GAME", {
                       value: textConstants.GAME_ENDED,
                     });
                    break;
            }

            // to stop timer and clear fields
            if (timeDifference < 0) {
                // clearing time interval when the betting time is over
                clearInterval(timeInterval);
                // used setTimeout so that the time does not disappeare suddenly 
                // when the time ends
                const element = document.getElementsByClassName("times");
                for(let i=0; i<element.length; i++) {
                    element[i].classList.add("animateTextOpacity");
                }
                setTimeout(()=>timerIsOff(),3000)
                // these are just to clear the values to 00 if incase the default values are
                // not shown. actually when the time ends all the values will be 00
                // to be on the safe side we just added this.
                setDay('00');
                setHours('00');
                setMin('00');
                setSec('00');
            }

        }, clockSpeed);
    }
    // this function will be called when the time end
    // it uses a function of state variable from context
    // when the value of expired changes the blue bar at the 
    // bottom of the screen will be changes to red. Its a small
    // indication that the betting time ended, and also the 
    // text the shows "Betting ends in" changes to "Betting ended"
    // using the values of Expired.
    const timerIsOff = () => {
        dispatchTimerEvent("ADD EXPIRE", {
            value: true
        })
    }

    return (
        // this is the main container that holds all the elements needed for timer
        <div className="timerContainer">
            
            {/* this will print text "Betting ends in" and "Betting ended" */}
            <p className="hostName" ><IoTimerSharp className="smallIcons" />{textConstants.BETTING_ENDS}</p>
            {/* this section will only be rendered when the value of expired is false */}
                <div className="clockContainer">
                    <div className="dayBox">
                        {/* to display the day of date */}
                        <p className="times dayText">{day}</p>
                    </div>
                    <div className="hourBox">
                        {/* to display the hours of date */}
                        <p className="times hrText">{hours}</p>
                    </div>
                    <div className="minBox">
                        {/* to display the minutes of date */}
                        <p className="times minText">{min}</p>
                    </div>
                    <div className="secBox">
                        {/* to display the seconds of date */}
                        <p className="times secText">{sec}</p>
                    </div>
                </div>
        </div>
        )
}

export default DateAndTimeTimer
