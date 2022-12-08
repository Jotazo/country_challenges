import { motion } from "framer-motion";
import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import { QuizzContext } from "../../context/QuizzContext";

import CountryListItem from "./CountryListItem";
import Lifes from "./Lifes";
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
      key={2}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Lifes />
      <SelectedGame oCountry={oCountrySuccess} gameSelected={gameSelected} />
      <ul className="list">
        {randomQuiz.map((oCountry) => (
          <CountryListItem key={oCountry.letter} country={oCountry} />
        ))}
      </ul>
      {appState.isFinished && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="btn orange ml-auto d-block"
        >
          Siguiente
        </motion.button>
      )}
    </motion.div>
  );
};

export default CountryList;
