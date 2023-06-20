import React, { useState } from 'react';

const TimerForm = ({ addTimer }) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!hours || !minutes || !seconds  ) {
      alert('Please enter values for all fields.');
      return;
    }
    if(hours>24 || minutes>60 || seconds>60){
      alert('Please enter valid data.');
      return;
    }

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      alert('Please enter numeric values for hours, minutes, and seconds.');
      return;
    }

    const paddedHours = hours.padStart(2, '0');
    const paddedMinutes = minutes.padStart(2, '0');
    const paddedSeconds = seconds.padStart(2, '0');

    addTimer(paddedHours, paddedMinutes, paddedSeconds);

    setHours('');
    setMinutes('');
    setSeconds('');
  };

  return (
    <form className='TimerForm' onSubmit={handleSubmit}>
      <input
        type='text'
        value={hours}
        className='timer-input'
        placeholder='HH'
        onChange={(e) => setHours(e.target.value)}
        maxLength='2'
      />
      <input
        type='text'
        value={minutes}
        className='timer-input'
        placeholder='MM'
        onChange={(e) => setMinutes(e.target.value)}
        maxLength='2'
      />
      <input
        type='text'
        value={seconds}
        className='timer-input'
        placeholder='SS'
        onChange={(e) => setSeconds(e.target.value)}
        maxLength='2'
      />
      <button type='submit' className='timer-btn'>
        Add Timer
      </button>
    </form>
  );
};

export default TimerForm;
