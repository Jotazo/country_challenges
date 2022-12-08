import { motion } from "framer-motion";
import React from "react";

import { GameOptions } from "../types";
import SelectionCardItem from "./SelectionCardItem";

const SelectionCard = () => {
  const OPTIONS: GameOptions[] = ["Capitales", "Banderas", "Mixto"];

  return (
    <motion.div
      layout
      key={1}
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
