import React, { useState,  useCallback } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const TimerWrapper = () => {
  const [timers, setTimers] = useState([]);
  const [nextTimerId, setNextTimerId] = useState(1);
  //usecallback function reference will not change avoid re rendering optimization
  const addTimer = useCallback((hours, minutes, seconds) => {
    
    setTimers((prevTimers) => [
      ...prevTimers,
      { id: nextTimerId, hours, minutes, seconds },
      
    ]);
    setNextTimerId((prevId) => prevId + 1);
  }, [nextTimerId]);

 

  const deleteTimer = useCallback((id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  }, []);



 

  return (
    <div className="TimerWrapper">
      <h1>Set Timer!</h1>
      <TimerForm addTimer={addTimer} />
      {timers.map((timer) =>
         
          <Timer
            time={timer}
            key={timer.id}
            deleteTimer={deleteTimer}
           
          />
        
      )}
    </div>
  );
};

export default TimerWrapper
