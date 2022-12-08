import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";

import { AppContext } from "./context/AppContext";

import CountryCardLayout from "./components/CountryCardLayout";
import CountryList from "./components/CountryList/CountryList";
import SelectionCard from "./components/SelectionCard";
import Results from "./components/Results";

import "./App.css";

function App() {
  const { appState, gameSelected } = useContext(AppContext)!;

  const ComponentToShow = () => {
    return (
      <AnimatePresence mode="wait">
        {gameSelected === "" ? <SelectionCard /> : <CountryList />}
      </AnimatePresence>
    );
  };

  const bIsGameFinished = appState.isFinished && gameSelected === "";
  return (
    <div className="App">
      <CountryCardLayout isFinished={bIsGameFinished}>
        <AnimatePresence mode="wait">
          {bIsGameFinished ? <Results /> : ComponentToShow()}
        </AnimatePresence>
      </CountryCardLayout>
    </div>
  );
}

export default App;
