import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";
import { QuizzContext } from "../context/QuizzContext";

import CountryListItem from "./CountryListItem";

const CountryList = () => {
  const { appState, setNext, setFinished, setGameSelected } =
    useContext(AppContext)!;
  const { randomQuiz, oCountrySuccess, getNewQuizz } =
    useContext(QuizzContext)!;

  const handleNext = () => {
    const bNextQuestion = appState.isSuccess;
    setNext();
    if (bNextQuestion) {
      getNewQuizz();
    } else {
      setFinished();
      setGameSelected("");
    }
  };

  return (
    <>
      <h3 className="game-title">{oCountrySuccess.capital} es la capital de</h3>
      <ul className="list">
        {randomQuiz.map((oCountry) => (
          <CountryListItem key={oCountry.letter} country={oCountry} />
        ))}
      </ul>
      {appState.isFinished && (
        <button onClick={handleNext} className="btn orange ml-auto d-block">
          Siguiente
        </button>
      )}
    </>
  );
};

export default CountryList;
