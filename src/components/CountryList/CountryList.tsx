import React, { useContext } from "react";
import { motion } from "framer-motion";
import { withTranslation } from "react-i18next";

import { AppContext } from "../../context/AppContext";
import { QuizzContext } from "../../context/QuizzContext";
import { TranslatedComponentProps } from "../../types";

import CountryListItem from "./CountryListItem";
import SelectedGame from "./SelectedGame";

import { countryList } from "../../framerStyles";

const CountryList = ({ t }: TranslatedComponentProps) => {
  const { appState, setNext, setFinished, setGameSelected, gameSelected } =
    useContext(AppContext)!;
  const { randomQuiz, oCountrySuccess, getNewQuizz } =
    useContext(QuizzContext)!;

  const handleNext = () => {
    const bNextQuestion = appState.isSuccess;
    const bHaveLifes = appState.lifes !== 0;
    setNext();
    if (!bNextQuestion && !bHaveLifes) {
      setFinished();
      setGameSelected("");
    }
    getNewQuizz();
  };

  return (
    <motion.div {...countryList}>
      <SelectedGame oCountry={oCountrySuccess} gameSelected={gameSelected} />
      <ul className="list">
        {randomQuiz.map((oCountry) => (
          <CountryListItem key={oCountry.letter} country={oCountry} />
        ))}
      </ul>
      <motion.button
        disabled={!appState.isFinished}
        onClick={handleNext}
        className="btn orange ml-auto d-block"
      >
        {t!("btnNext")}
      </motion.button>
    </motion.div>
  );
};

export default withTranslation()(CountryList);
