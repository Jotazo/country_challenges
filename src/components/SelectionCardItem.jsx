import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { QuizzContext } from "../context/QuizzContext";

const SelectionCardItem = ({ sOption }) => {
  const { setGameSelected } = useContext(AppContext);
  const { getNewQuizz } = useContext(QuizzContext);
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
