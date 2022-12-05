import { createContext, useEffect, useState } from "react";
import useCountries from "../hooks/useCountries";
import getRandomCountries from "../utils/getRandomCountries";

export const QuizzContext = createContext(null);

const QuizContextProvider = ({ children }) => {
  const { countries } = useCountries([]);
  const [randomQuiz, setRandomQuiz] = useState([]);

  const [oCountrySuccess, setoCountrySuccess] = useState({});

  useEffect(() => {
    setRandomQuiz(getRandomCountries(countries));
  }, [countries]);

  useEffect(() => {
    const oCountrySuccess = randomQuiz.find((oCountry) => oCountry.selected);
    setoCountrySuccess(oCountrySuccess);
  }, [randomQuiz]);

  const getNewQuizz = () => {
    setRandomQuiz(getRandomCountries(countries));
  };

  return (
    <QuizzContext.Provider
      value={{
        randomQuiz,
        oCountrySuccess,
        getNewQuizz,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};

export default QuizContextProvider;
