import React, { useContext } from "react";
import { motion } from "framer-motion";

import { AppContext } from "../../context/AppContext";
import { QuizzContext } from "../../context/QuizzContext";

import CountryListItem from "./CountryListItem";
import SelectedGame from "./SelectedGame";

const CountryList = () => {
  const { appState, setNext, setFinished, setGameSelected, gameSelected } =
    useContext(AppContext)!;
  const { randomQuiz, oCountrySuccess, getNewQuizz } =
    useContext(QuizzContext)!;

  const handleNext = () => {
    const bNextQuestion = appState.isSuccess;
    const bHaveLifes = appState.lifes !== 0;
    setNext();
    if (bNextQuestion || bHaveLifes) {
      getNewQuizz();
    } else {
      setFinished();
      setGameSelected("");
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      }}
      exit={{
        opacity: 0,
      }}
      style={{ display: "flex", flexDirection: "column" }}
    >
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
        Siguiente
      </motion.button>
    </motion.div>
  );
};

export default CountryList;
