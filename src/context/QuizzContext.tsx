import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import { ICountryWithSuccess } from "../interfaces/oCountry";
import { IQuizzContext } from "./interfaces";

import useCountries from "../hooks/useCountries";
import getRandomCountries from "../utils/getRandomCountries";

export const QuizzContext = createContext<IQuizzContext | null>(null);

const QuizContextProvider = ({ children }: PropsWithChildren) => {
  const { countries } = useCountries([]);
  const [randomQuiz, setRandomQuiz] = useState<ICountryWithSuccess[]>([]);

  const [oCountrySuccess, setoCountrySuccess] = useState<ICountryWithSuccess>();

  useEffect(() => {
    setRandomQuiz(getRandomCountries(countries));
  }, [countries]);

  useEffect(() => {
    const oCountrySuccess = randomQuiz.find((oCountry) => oCountry.selected)!;
    setoCountrySuccess(oCountrySuccess);
  }, [randomQuiz]);

  const getNewQuizz = () => {
    setRandomQuiz(getRandomCountries(countries));
  };

  return (
    <QuizzContext.Provider
      value={{
        randomQuiz,
        oCountrySuccess: oCountrySuccess!,
        getNewQuizz,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};

export default QuizContextProvider;
