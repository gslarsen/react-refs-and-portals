import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef(null);
  const startTime = useRef(null);
  const timeElapsed = useRef(null);
  const dialog = useRef(null);

  const handleStart = () => {
    setTimerStarted(true);
    startTime.current = Date.now();

    timer.current = setTimeout(() => {
      setTimerStarted(false);
      timeElapsed.current = (Date.now() - startTime.current) / 1000;
      dialog.current.showModal();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    timeElapsed.current = (Date.now() - startTime.current) / 1000;
    setTimerStarted(false);
    clearTimeout(timer.current);
    startTime.current = 0;
    dialog.current.showModal();
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeElapsed={timeElapsed.current}
        result={timeElapsed.current > targetTime ? "lost" : "won"}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? "" : "s"}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
