import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

import logo from "../assets/icon.svg";
import "./CountryCardLayout.css";

type Props = {
  children: JSX.Element;
  isFinished: boolean;
};

const Score = () => {
  const { appState, gameSelected } = useContext(AppContext)!;
  if (gameSelected === "") return null;
  return (
    <span className="score-element">
      Aciertos: <span>{appState.score}</span>
    </span>
  );
};

const CountryCardLayout = ({ children, isFinished }: Props) => {
  return (
    <motion.div
      initial={{ y: -600 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="container"
    >
      <Score />
      <h1 className="title">Country Quiz</h1>
      {!isFinished && <img src={logo} alt="icon" className="logo" />}
      <section className="section">{children}</section>
    </motion.div>
  );
};

export default CountryCardLayout;
