import React, { useContext } from "react";
import "./App.css";

import { AppContext } from "./context/AppContext";

import CountryCardLayout from "./components/CountryCardLayout";
import CountryList from "./components/CountryList";
import SelectionCard from "./components/SelectionCard";
import Results from "./components/Results";

function App() {
  const { appState, gameSelected } = useContext(AppContext)!;

  const ComponentToShow =
    gameSelected === "" ? <SelectionCard /> : <CountryList />;

  const bIsGameFinished = appState.isFinished && gameSelected === "";
  return (
    <div className="App">
      <CountryCardLayout isFinished={bIsGameFinished}>
        {bIsGameFinished ? <Results /> : ComponentToShow}
      </CountryCardLayout>
    </div>
  );
}

export default App;
