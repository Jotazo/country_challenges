import React, { createContext, PropsWithChildren, useState } from "react";
import { GameOptions } from "../types";
import { IAppContext, IAppState } from "./interfaces";

export const AppContext = createContext<IAppContext | null>(null);

const initialAppState: IAppState = {
  isFinished: false,
  isSuccess: false,
  score: 0,
  lifes: 3,
};

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [gameSelected, setGameSelected] = useState<GameOptions | "">("");

  const [appState, setAppState] = useState(initialAppState);

  const setAnswer = (bisCorrectAnswer: boolean) => {
    setAppState({
      isFinished: true,
      isSuccess: bisCorrectAnswer,
      score: bisCorrectAnswer ? (appState.score += 1) : appState.score,
      lifes: bisCorrectAnswer ? appState.lifes : (appState.lifes -= 1),
    });
  };

  const setNext = () => {
    setAppState({ ...appState, isFinished: false, isSuccess: false });
  };

  const setFinished = () => {
    setAppState({ ...appState, isFinished: true, isSuccess: false });
  };

  const restartGame = () => {
    setAppState({ ...initialAppState, lifes: 3 });
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
        setGameSelected: (sGameSelected: GameOptions) =>
          setGameSelected(sGameSelected),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
