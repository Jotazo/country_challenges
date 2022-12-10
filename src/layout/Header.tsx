import React, { useContext } from "react";
import logo from "../assets/icon.svg";
import { withTranslation } from "react-i18next";

import { TranslatedComponentProps } from "../types";
import { AppContext } from "../context/AppContext";

import Lifes from "./Lifes";
import TimerCountdown from "../components/TimerCountdown";
import Score from "./Score";

import "./Header.css";

const TopElements = () => {
  return (
    <>
      <Lifes />
      <TimerCountdown />
      <Score />
    </>
  );
};

const Header = ({ t }: TranslatedComponentProps) => {
  const { appState, gameSelected } = useContext(AppContext)!;

  const bIsFinished = appState.isFinished && gameSelected === "";
  return (
    <header className="layout-header">
      <section className="layout-section">
        {gameSelected !== "" && <TopElements />}
      </section>
      <h1 className="layout-title">{t!("appTitle")}</h1>
      {!bIsFinished && <img src={logo} alt="icon" className="layout-logo" />}
    </header>
  );
};

export default withTranslation()(Header);
