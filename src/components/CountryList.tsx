import React, { useContext } from "react";
import { GAME_OPTIONS } from "../constants";

import { AppContext } from "../context/AppContext";
import { QuizzContext } from "../context/QuizzContext";
import { ICountryWithSuccess } from "../interfaces/oCountry";

import CountryListItem from "./CountryListItem";

type Props = {
  oCountry: ICountryWithSuccess;
  gameSelected?: string;
};

const CapitalGame = ({ oCountry }: Props) => {
  return <h3 className="game-title">{oCountry.capital} es la capital de</h3>;
};

const FlagGame = ({ oCountry }: Props) => {
  return (
    <>
      <img className="flag-img" src={oCountry.flag} alt="bandera" />
      <h3 className="game-title">Esta es la bandera de</h3>
    </>
  );
};

const SelectedGame = React.memo(({ oCountry, gameSelected }: Props) => {
  if (gameSelected === GAME_OPTIONS.capitales)
    return <CapitalGame oCountry={oCountry} />;

  if (gameSelected === GAME_OPTIONS.banderas)
    return <FlagGame oCountry={oCountry} />;

  // Si seleccionamos mixto retornará en funcion del valor aleatorio
  return Math.random() > 0.5 ? (
    <CapitalGame oCountry={oCountry} />
  ) : (
    <FlagGame oCountry={oCountry} />
  );
});

const CountryList = () => {
  const { appState, setNext, setFinished, setGameSelected, gameSelected } =
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
      <SelectedGame oCountry={oCountrySuccess} gameSelected={gameSelected} />
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
