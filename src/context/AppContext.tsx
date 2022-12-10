import React, { createContext, useState } from "react";

import { IAppContext, IAppState } from "./interfaces";

import { APP_CONFIG } from "../constants";

export const AppContext = createContext<IAppContext | null>(null);

const initialAppState: IAppState = {
  isFinished: false,
  isSuccess: false,
  score: 0,
  lifes: APP_CONFIG.initialLifes,
  timerKey: 0,
  languageSelected: APP_CONFIG.initialLanguage,
};

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [gameSelected, setGameSelected] = useState("");

  const [appState, setAppState] = useState<IAppState>(initialAppState);

  const setAnswer = (bisCorrectAnswer: boolean) => {
    setAppState({
      ...appState,
      isFinished: true,
      isSuccess: bisCorrectAnswer,
      score: bisCorrectAnswer ? (appState.score += 1) : appState.score,
      lifes: bisCorrectAnswer ? appState.lifes : (appState.lifes -= 1),
    });
  };

  const setNext = () => {
    setAppState({
      ...appState,
      isFinished: false,
      isSuccess: false,
      timerKey: appState.timerKey === 0 ? 1 : 0,
    });
  };

  const setFinished = () => {
    setAppState({
      ...appState,
      isFinished: true,
      isSuccess: false,
    });
  };

  const restartGame = () => {
    setAppState({
      ...initialAppState,
      score: 0,
      lifes: APP_CONFIG.initialLifes,
    });
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setAnswer,
        setNext,
        setFinished,
        restartGame,
        gameSelected,
        setGameSelected: (sGameSelected: string) =>
          setGameSelected(sGameSelected),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
