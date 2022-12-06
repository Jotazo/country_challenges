import React from "react";
import SelectionCardItem from "./SelectionCardItem";

const SelectionCard = () => {
  const OPTIONS = ["Solo Capitales"];
  // const OPTIONS = ["Only Capitals", "Only Flags", "Mixed Game"];

  return (
    <>
      <h1 className="game-title">Selecciona el tipo de juego</h1>
      <ul className="list">
        {OPTIONS.map((opt, index) => (
          <SelectionCardItem key={index} sOption={opt} />
        ))}
      </ul>
    </>
  );
};

export default SelectionCard;
