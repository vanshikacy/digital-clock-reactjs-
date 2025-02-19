import React, {useState, useEffect} from 'react';

function DigitalClock(){
const [time, setTime]= useState(new Date());

useEffect(()=>{
    const intervalId=setInterval(()=>{
        setTime(new Date());
    }, 1000) /*mount the component*/

    return()=>{
        clearInterval(intervalId);
     } /*unmount the component*/

}, [])

function formatTime(){
    let hours=time.getHours();
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    const meridiem=hours >= 12 ? "PM": "AM";

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
}

function padZero(number){
    return (number <10? "0": "")+number;
}

return(
    <>
    <p className="header">loading the future </p>
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>

        </div>
    </div>
    </>)
}

export default DigitalClock;