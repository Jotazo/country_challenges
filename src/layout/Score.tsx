import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

import "./Score.css";

const Score = () => {
  const { appState, gameSelected } = useContext(AppContext)!;
  if (gameSelected === "") return null;
  return (
    <span className="score-element">
      Aciertos: <span>{appState.score}</span>
    </span>
  );
};

export default Score;
