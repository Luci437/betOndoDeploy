
import React, {useState, useContext} from 'react';
import { TimerContext } from '../../Context/TimerContext';
import { useToast } from '../Toast/ToastProvider';

const JoinButton = () => {

    const [joinLoading, setJoinLoading] = useState(false);
    const { joined, dispatchTimerEvent } = useContext(TimerContext);
    const toast = useToast();

    const joinContest = () => {
        setJoinLoading(!joinLoading)
        dispatchTimerEvent("ADD JOINED", {
            value: !joined
        })
        // toast({
        //     message: "JOINED"
        // })
    }

    return (
        <div className="joinButtonContainer">
                <span>
                    <p>Join Now</p>
                    <p>You can't exit if you join this contest.</p>
                </span>
            <button disabled={joinLoading} className={joinLoading ? "disabledButton joinButton" : "joinButton" } onClick={joinContest}>JOIN <span> 50</span></button>
        </div>
    )
}

export default JoinButton
