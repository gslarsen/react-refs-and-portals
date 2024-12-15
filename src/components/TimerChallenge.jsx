import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStart, setTimerStart] = useState(0);
  const timer = useRef(null);
  const timeElapsed = useRef(null);
  const modalInterface = useRef(null);

  const handleStart = () => {
    setTimerStart(Date.now());

    timer.current = setTimeout(() => {
      timeElapsed.current = (Date.now() - timerStart) / 1000;
      setTimerStart(0);
      modalInterface.current.openModal();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    timeElapsed.current = (Date.now() - timerStart) / 1000;
    setTimerStart(0);
    clearTimeout(timer.current);
    modalInterface.current.openModal();
  };

  return (
    <>
      <ResultModal
        ref={modalInterface}
        targetTime={targetTime}
        timeElapsed={timeElapsed.current}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? "" : "s"}
        </p>
        <p>
          <button onClick={timerStart ? handleStop : handleStart}>
            {timerStart ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStart ? "active" : ""}>
          {timerStart ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
