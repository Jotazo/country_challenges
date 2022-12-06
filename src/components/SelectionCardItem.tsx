import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { QuizzContext } from "../context/QuizzContext";

type Props = {
  sOption: string;
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
