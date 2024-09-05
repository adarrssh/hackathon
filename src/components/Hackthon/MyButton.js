import React from 'react';
import { Button } from '@mui/material';

const MyButton = ({ isBeforeStart, isAfterEnd, isBetweenStartAndEnd }) => {

  let backgroundColor;

  if (isBeforeStart) {
    backgroundColor = 'rgba(242, 201, 76, 0.25)';
  } else if (isAfterEnd) {
    backgroundColor = 'rgba(255, 60, 0, 0.1701)';
  } else if (isBetweenStartAndEnd) {
    backgroundColor = 'rgba(68, 146, 76, 0.24)';
  } else {
    backgroundColor = 'rgba(68, 146, 76, 0.24)'; 
  }

  return (
    <Button
      sx={{
        backgroundColor,
        color: isBetweenStartAndEnd ? '#44924C' : 'black',
        textTransform: 'none',
        height: '20px',
        fontSize: '12px',
        fontWeight:'light'
      }}
    >
                {
            isBeforeStart ? (
              "Upcoming"
            ) : isBetweenStartAndEnd ? (
                "Active"
            ) : (
              "Past"
            )
          }
    </Button>
  );
};

export default MyButton;
