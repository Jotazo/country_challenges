import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";

import { AppContext } from "./context/AppContext";

import CardLayout from "./layout/CardLayout";
import CountryList from "./components/CountryList/CountryList";
import Results from "./components/Results";
import SelectionCard from "./components/SelectionCard";
import TimerCountdown from "./components/TimerCountdown";

import "./App.css";

function App() {
  const { appState, gameSelected } = useContext(AppContext)!;

  const bIsGameFinished: boolean = appState.isFinished && gameSelected === "";
  const bIsGameSelected: boolean = gameSelected !== "";

  const ComponentToShow = () => {
    return (
      <AnimatePresence mode="wait">
        {!bIsGameSelected ? <SelectionCard /> : <CountryList />}
      </AnimatePresence>
    );
  };

  return (
    <div className="App">
      <CardLayout>
        {bIsGameFinished ? <Results /> : ComponentToShow()}
      </CardLayout>
      {bIsGameSelected && <TimerCountdown />}
    </div>
  );
}

export default App;
