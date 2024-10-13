import { useEffect, useRef } from "react";
import { useMemoryStore } from "../../store";
import "./timer.scss";
import { formatTime } from "../../utils/formatTime";

export const Timer = () => {
  const { time, isRunning, incrementTime } = useMemoryStore();
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

  return (
    <div className="timerContainer">
      <p> {formatTime(time)}</p>
    </div>
  );
};
