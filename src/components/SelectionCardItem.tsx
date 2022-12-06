import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { QuizzContext } from "../context/QuizzContext";
import { GameOptions } from "../types";

type Props = {
  sOption: GameOptions;
};

const SelectionCardItem = ({ sOption }: Props) => {
  const { setGameSelected } = useContext(AppContext)!;
  const { getNewQuizz } = useContext(QuizzContext)!;
  const handleClick = () => {
    setGameSelected(sOption);
    getNewQuizz();
  };
  return (
    <li onClick={handleClick} className="list-item">
      {sOption}
    </li>
  );
};

export default SelectionCardItem;
