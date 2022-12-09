import React, { useContext } from "react";
import logo from "../assets/icon.svg";

import { AppContext } from "../context/AppContext";

import Lifes from "./Lifes";
import Score from "./Score";

import "./Header.css";

const Header = () => {
  const { appState, gameSelected } = useContext(AppContext)!;

  const bIsFinished = appState.isFinished && gameSelected === "";
  return (
    <header className="layout-header">
      <section className="layout-section">
        {gameSelected !== "" && (
          <>
            <Lifes />
            <Score />
          </>
        )}
      </section>
      <h1 className="layout-title">Country Quiz</h1>
      {!bIsFinished && <img src={logo} alt="icon" className="layout-logo" />}
    </header>
  );
};

export default Header;
