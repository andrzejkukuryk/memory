import React, { useState, useEffect, useRef } from "react";
import { useMemoryStore } from "../../store";
import "./timer.scss";

export const Timer = () => {
  const {
    time,
    isRunning,
    incrementTime,
    startStopTime: startStop,
  } = useMemoryStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        incrementTime();
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (time: number) => {
    const getMinutes = `0${Math.floor((time / 60) % 60)}`.slice(-2);
    const getSeconds = `0${time % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="timerContainer">
      <div className="timeDisplay">Time: {formatTime(time)}</div>
    </div>
  );
};
