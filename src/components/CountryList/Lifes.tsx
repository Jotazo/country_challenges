import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Lifes.css";

import { AppContext } from "../../context/AppContext";

const life = "💙";

const LifeItem = ({ life }: { life: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {life}
    </motion.span>
  );
};

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
