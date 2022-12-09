import React from "react";
import { motion } from "framer-motion";
import { GameOptions } from "../types";
import { GAME_OPTIONS } from "../constants";

import SelectionCardItem from "./SelectionCardItem";

const SelectionCard = () => {
  const OPTIONS: GameOptions[] = Object.values(GAME_OPTIONS).map(
    (el: GameOptions) => el
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
    >
      <h1 className="game-title">Selecciona el tipo de juego</h1>
      <ul className="list">
        {OPTIONS.map((opt: GameOptions, index) => (
          <SelectionCardItem key={index} sOption={opt} />
        ))}
      </ul>
    </motion.div>
  );
};

export default SelectionCard;
