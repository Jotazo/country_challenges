import React, { createContext, useState } from "react";

import { IAppContext, IAppState } from "./interfaces";
import { GameOptions } from "../types";

import { APP_CONFIG } from "../constants";

export const AppContext = createContext<IAppContext | null>(null);

const initialAppState: IAppState = {
  isFinished: false,
  isSuccess: false,
  timeLeft: APP_CONFIG.timerLength,
  score: 0,
  lifes: APP_CONFIG.initialLifes,
};

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [gameSelected, setGameSelected] = useState<GameOptions | "">("");

  const [appState, setAppState] = useState<IAppState>(initialAppState);

  const setAnswer = (bisCorrectAnswer: boolean) => {
    setAppState({
      isFinished: true,
      isSuccess: bisCorrectAnswer,
      timeLeft: 0,
      score: bisCorrectAnswer ? (appState.score += 1) : appState.score,
      lifes: bisCorrectAnswer ? appState.lifes : (appState.lifes -= 1),
    });
  };

  const setNext = () => {
    setAppState({
      ...appState,
      isFinished: false,
      isSuccess: false,
      timeLeft: APP_CONFIG.timerLength,
    });
  };

  const setFinished = () => {
    setAppState({
      ...appState,
      isFinished: true,
      isSuccess: false,
    });
  };

  const setCountdownTimer = () => {
    setAppState({
      ...appState,
      timeLeft: (appState.timeLeft -= 1),
    });
  };

  const restartGame = () => {
    setAppState({
      ...initialAppState,
      score: 0,
      lifes: APP_CONFIG.initialLifes,
      timeLeft: APP_CONFIG.timerLength,
    });
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setAnswer,
        setNext,
        setFinished,
        setCountdownTimer,
        restartGame,
        gameSelected,
        setGameSelected: (sGameSelected: GameOptions) =>
          setGameSelected(sGameSelected),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
