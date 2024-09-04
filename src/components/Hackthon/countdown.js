import React, { useState, useEffect } from "react";
import calculateTimeRemaining from "../../utils/calTimeRemaining";
import formatEndDate from "../../utils/formatEndDate";
import { Button, Container } from "@mui/material";
import MyButton from "./MyButton";

const CountdownTimer = ({ item }) => {
  const currentDate = new Date();
  const startDate = new Date(item.start_date);
  const endDate = new Date(item.end_date);

  const isBeforeStart = currentDate < startDate;
  const isBetweenStartAndEnd =
    currentDate >= startDate && currentDate < endDate;
  const isAfterEnd = currentDate >= endDate;

  const [timeRemaining, setTimeRemaining] = useState(
    isBeforeStart
      ? calculateTimeRemaining(startDate)
      : calculateTimeRemaining(endDate)
  );
  const [timerEnded, setTimerEnded] = useState(isAfterEnd);

  useEffect(() => {
    if (isBeforeStart || isBetweenStartAndEnd) {
      const intervalId = setInterval(() => {
        const time = isBeforeStart
          ? calculateTimeRemaining(startDate)
          : calculateTimeRemaining(endDate);
        setTimeRemaining(time);
        if (time.total <= 0) {
          setTimerEnded(true);
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [startDate, endDate, isBeforeStart, isBetweenStartAndEnd]);

  const backgroundColor = isBeforeStart === 'upcoming'
    ? 'pink'
    : isAfterEnd === 'past'
      ? 'yellow'
      : isBetweenStartAndEnd === 'active'
        ? 'black'
        : 'rgba(200, 200, 200, 0.2)';

  return (
    <>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '10px'
        }}
      >
        <MyButton
          isBeforeStart={isBeforeStart}
          isBetweenStartAndEnd={isBetweenStartAndEnd}
          isAfterEnd={isAfterEnd}
        />
      </Container>
      <Container sx={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {item.title} <br /> {item.subTitle}
        </p>
      </Container>

      {timerEnded ? (
        <Container sx={{ textAlign: "center", marginTop: "-10px" }}>
          <p style={{ fontSize: "14px" }}>Ended On</p>
          <p style={{ fontSize: "18px" }}>{formatEndDate(endDate)}</p>
        </Container>
      ) : isBeforeStart ? (
        <>
          <Container sx={{ textAlign: "center", marginTop: "-10px" }}>
            <p style={{ fontSize: "14px" }}>Starts in</p>
          </Container>
          <Container sx={{ textAlign: "center", marginTop: "-25px" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {`${timeRemaining.days}`} &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
              {`${timeRemaining.hours}`} &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
              {`${timeRemaining.minutes}`}
            </p>
          </Container>
          <Container sx={{ textAlign: "center", marginTop: "-25px" }}>
            <p style={{ fontSize: "10px" }}>
              Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mins&nbsp;&nbsp;
            </p>
          </Container>
        </>
      ) : isBetweenStartAndEnd ? (
        <>
          <Container sx={{ textAlign: "center", marginTop: "-10px" }}>
            <p style={{ fontSize: "14px" }}>End in</p>
          </Container>
          <Container sx={{ textAlign: "center", marginTop: "-25px" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {`${timeRemaining.days}`} &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
              {`${timeRemaining.hours}`} &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
              {`${timeRemaining.minutes}`}
            </p>
            </Container>
            <Container sx={{ textAlign: "center", marginTop: "-25px" }}>
            <p style={{ fontSize: "10px" }}>
              Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mins&nbsp;&nbsp;
            </p>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default CountdownTimer;
