import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";

import { AppContext } from "../context/AppContext";
import LifeItem from "./LifeItem";

import "./Lifes.css";

const life = "🏴‍☠️";

const Lifes = () => {
  const { appState } = useContext(AppContext)!;

  const asLifes: string[] = new Array(appState.lifes).fill(life);

  return (
    <span className="lifes-element">
      Vidas:{" "}
      <AnimatePresence>
        {asLifes.map((life, index) => (
          <LifeItem life={life} key={index} />
        ))}
      </AnimatePresence>
    </span>
  );
};

export default Lifes;
