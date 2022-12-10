import React, { useContext } from "react";
import { withTranslation } from "react-i18next";

import { TranslatedComponentProps } from "../types";
import { AppContext } from "../context/AppContext";

import "./Score.css";

const Score = ({ t }: TranslatedComponentProps) => {
  const { appState, gameSelected } = useContext(AppContext)!;
  if (gameSelected === "") return null;
  return (
    <span className="score-element">
      {t!("hits")} <span>{appState.score}</span>
    </span>
  );
};

export default withTranslation()(Score);
