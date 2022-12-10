import React, { useContext } from "react";
import { motion } from "framer-motion";
import { withTranslation } from "react-i18next";

import logo from "../assets/winner_icon.svg";
import { TranslatedComponentProps } from "../types";
import { AppContext } from "../context/AppContext";

import { resultsContainer } from "../framerStyles";

import "./Results.css";

const Results = ({ t }: TranslatedComponentProps) => {
  const { appState, restartGame } = useContext(AppContext)!;

  return (
    <motion.div key={3} className="results-container" {...resultsContainer}>
      <img src={logo} alt="icon" />
      <section className="text-content">
        <h1 className="results-title">{t!("resultsTitle")}</h1>
        <p
          className="results-text"
          dangerouslySetInnerHTML={{
            __html: t!("resultsText", {
              score: appState.score,
            }),
          }}
        />
      </section>
      <button onClick={() => restartGame()} className="btn-underline">
        {t!("btnBack")}
      </button>
    </motion.div>
  );
};

export default withTranslation()(Results);
