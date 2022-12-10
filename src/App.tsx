import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";

import { AppContext } from "./context/AppContext";

import CardLayout from "./layout/CardLayout";
import CountryList from "./components/CountryList/CountryList";
import LanguageSelector from "./components/LanguageSelector";
import Results from "./components/Results";
import SelectionCard from "./components/SelectionCard";

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
      {!bIsGameSelected && <LanguageSelector />}
      <CardLayout>
        {bIsGameFinished ? <Results /> : ComponentToShow()}
      </CardLayout>
    </div>
  );
}

export default App;
