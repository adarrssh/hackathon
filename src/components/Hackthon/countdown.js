import React, { useState, useEffect } from 'react';
import calculateTimeRemaining from '../../utils/calTimeRemaining'
import formatEndDate from '../../utils/formatEndDate'
import { Container } from '@mui/material';

const CountdownTimer = () => {

  const targetDate = new Date('September 6, 2024 12:10:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = calculateTimeRemaining(targetDate);
      setTimeRemaining(time);
      if (time.total <= 0) {
        setTimerEnded(true);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  if (timerEnded) {
    return <div>{formatEndDate(targetDate)}</div>;
  }

  return (

    <Container
      sx={{ textAlign: 'center', marginTop: '-25px' }}
    >
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
      {`${timeRemaining.days}`} &nbsp;&nbsp;:&nbsp;&nbsp; {`${timeRemaining.hours}`} &nbsp;&nbsp;:&nbsp;&nbsp; {`${timeRemaining.minutes}`}

      </p>
    </Container>

  );
};



export default CountdownTimer;
