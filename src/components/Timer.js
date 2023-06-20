import {faTrash, faPlay, faStop,  faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState, useEffect} from 'react'
const Timer = ({ time,  deleteTimer }) => {
  //Even if parents re-render child maintains its state
const [hours, setHours]=useState(time.hours)
const [minutes, setMinutes]=useState(time.minutes)
const [seconds, setSeconds]=useState(time.seconds)
const [isRunning, setIsRunning]=useState(null)


useEffect(() => {
  let interval;
  if (isRunning) {
    interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinutes((prevMinutes) => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              setHours((prevHours) => {
                if (prevHours > 0) {
                  return prevHours - 1;
                } else {
                  setIsRunning(false);
                  return 0;
                }
              });
              return 59;
            }
          });
          return 59;
        }
      });
    }, 1000);
  }

  return () => {
    
    clearInterval(interval);
  };
}, [isRunning]);

//start pause and reset functions

function startTimer(){
  if(hours!==0 || minutes !==0 || seconds !==0){
   setIsRunning(true)
  } 
}

function pauseTimer(){
  setIsRunning(false)
}

function resetTimer(){
  setIsRunning(false)
  setHours(time.hours)
  setMinutes(time.minutes)
  setSeconds(time.seconds)
}

  return (
    <div className='Timer'>
      <p>



        <span  className='time-box'>{String(hours).padStart(2, '0')}</span>
        <span >:</span>
        <span  className='time-box'>{String(minutes).padStart(2, '0')}</span>
        <span>:</span>
        <span  className='time-box'>{String(seconds).padStart(2, '0')}</span>

      </p>
      <div>
        {!isRunning && <FontAwesomeIcon icon={faPlay} onClick={startTimer} />}
        {isRunning && <FontAwesomeIcon className = 'icon-margin' icon={faStop} onClick={pauseTimer} /> }
         <FontAwesomeIcon className = 'icon-margin' icon={faRefresh} onClick={resetTimer} />
       
        <FontAwesomeIcon className = 'icon-margin' icon={faTrash} onClick={() => {
          deleteTimer(time.id)
        }}

        />
      </div>

    </div>
  )
}
//render only for edited object in the array of objects
export default React.memo(Timer)
