import { motion } from "framer-motion";
import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

import "./TimerCountdown.css";

const TimerCountdown = () => {
  const { appState, setCountdownTimer, setFinished, setAnswer } =
    useContext(AppContext)!;

  const { timeLeft, isFinished } = appState;

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (timeLeft !== 0) {
      interval = setInterval(() => {
        setCountdownTimer();
      }, 1000);
    }

    if (timeLeft === 0 && !isFinished) {
      setFinished();
      setAnswer(false);
    }

    return () => clearInterval(interval);
  }, [isFinished, setAnswer, setCountdownTimer, setFinished, timeLeft]);

  return <motion.span className="timer">{appState.timeLeft}</motion.span>;
};

export default TimerCountdown;
