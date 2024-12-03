import { useState, useRef } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef(null);

  const handleStart = () => {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
    }, targetTime * 1000);
  };

  const handleStop = () => {
    setTimerStarted(false);
    setTimerExpired(false);
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && !timerStarted && <p>You lost!</p>}
      <p className="challeng-time">
        {targetTime} second{targetTime === 1 ? "" : "s"}
      </p>
      <p>
        <button
          onClick={(e) => {
            e.target.textContent === "Stop Challenge"
              ? handleStop()
              : handleStart();
          }}
        >
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : ""}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
