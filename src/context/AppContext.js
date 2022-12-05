import { createContext, useState } from "react";

export const AppContext = createContext(null);

const initialState = {
  isFinished: false,
  isSuccess: false,
  score: 0,
};

const AppContextProvider = ({ children }) => {
  const [gameSelected, setGameSelected] = useState("");

  const [appState, setAppState] = useState(initialState);

  const setAnswer = (bisCorrectAnswer) => {
    setAppState({
      isFinished: true,
      isSuccess: bisCorrectAnswer,
      score: bisCorrectAnswer ? (appState.score += 1) : appState.score,
    });
  };

  const setNext = () => {
    setAppState({ ...appState, isFinished: false, isSuccess: false });
  };

  const setFinished = () => {
    setAppState({ ...appState, isFinished: true, isSuccess: false });
  };

  const restartGame = () => {
    setAppState({ ...initialState, score: 0 });
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
        setGameSelected: (sGameSelected) => setGameSelected(sGameSelected),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
