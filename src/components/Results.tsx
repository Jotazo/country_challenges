import React, { useContext } from "react";
import { motion } from "framer-motion";

import logo from "../assets/winner_icon.svg";
import { AppContext } from "../context/AppContext";

import "./Results.css";

const Results = () => {
  const { appState, restartGame } = useContext(AppContext)!;

  return (
    <motion.div
      layout
      key={3}
      initial={{ opacity: 0, animationDelay: ".5" }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="results-container"
    >
      <img src={logo} alt="icon" />
      <section className="text-content">
        <h1 className="results-title">Resultados</h1>
        <p className="results-text">
          Has obtenido <span>{appState.score}</span> aciertos
        </p>
      </section>
      <button onClick={() => restartGame()} className="btn-underline">
        Volver al inicio
      </button>
    </motion.div>
  );
};

export default Results;
