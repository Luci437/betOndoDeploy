import React, {useState, useEffect, useContext} from 'react';
import { IoInformationCircle } from "react-icons/io5";

const Toast = (props) => {

    const [duration, setDuration] = useState(0);
    const [durationId, setDurationId] = useState(null);
    const [end, setEnd] = useState(false);

    const startTimer = () => {
      const timer = setInterval(() => {
        setDuration((prev) => {
          if (prev < 100) {
            return prev + 0.5;
          }
          clearInterval(timer);
          return prev;
        });
        setDurationId(timer);
      }, 20);
    };

    const pauseTimer = () => {
      clearInterval(durationId);
    };

    const closeNotification = () => {
      pauseTimer();
      setEnd(true);
      setTimeout(() => {
        props.dispatch({
          type: "REMOVE_NOTIFICATION",
          id: props.id,
        });
      }, 1000);
    };

    useEffect(() => {
      if (duration === 100) {
        closeNotification();
      }
    }, [duration]);

    useEffect(() => {
      startTimer();
    }, []);

    return (
        <div className="toastContainer">
            <p><IoInformationCircle className="toastIcon" /> {props?.message}</p>
        </div>
    )
}

export default Toast
