import React from "react";
import { GameOptions } from "../types";
import SelectionCardItem from "./SelectionCardItem";

const SelectionCard = () => {
  const OPTIONS: GameOptions[] = ["Capitales", "Banderas", "Mixto"];

  return (
    <>
      <h1 className="game-title">Selecciona el tipo de juego</h1>
      <ul className="list">
        {OPTIONS.map((opt: GameOptions, index) => (
          <SelectionCardItem key={index} sOption={opt} />
        ))}
      </ul>
    </>
  );
};

export default SelectionCard;
