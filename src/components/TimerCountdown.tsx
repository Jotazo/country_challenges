import { motion } from "framer-motion";
import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { AppContext } from "../context/AppContext";

import "./TimerCountdown.css";

const TimerCountdown = () => {
  const { appState, setFinished, setAnswer } = useContext(AppContext)!;

  const { isFinished, timerKey } = appState;

  return (
    <CountdownCircleTimer
      key={timerKey}
      isPlaying={!isFinished}
      duration={10}
      colors={["#4CBB17", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      size={50}
      strokeWidth={7}
      rotation="counterclockwise"
      onComplete={() => {
        setFinished();
        setAnswer(false);
      }}
    >
      {({ remainingTime }) => (
        <motion.span className="timer">{remainingTime}</motion.span>
      )}
    </CountdownCircleTimer>
  );
};

export default TimerCountdown;
