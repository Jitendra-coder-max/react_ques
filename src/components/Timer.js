import React,{useEffect, useState} from 'react';


const Timer = () => {

const [startTime, setStartTime] = useState(new Date())

useEffect(() => {
      const timer =    setInterval(() => {
               setStartTime(new Date())
         },1000)

         return () => clearInterval(timer)

},[])


const formatTime = (time) => {
    // return time.toLocaleTimeString()

    return time.toLocaleTimeString('en-US',{
        hour12: true,
        hour: '2-digit',
        minute:'2-digit',
        second: '2-digit'
    });
}
return(
    <div>
        {/* <h1>{startTime.getHours()}:{startTime.getMinutes()}:{startTime.getSeconds()}</h1> */}

        <h1>Start time: {formatTime(startTime)}</h1>
    </div>
)

}

export default Timer;