import { useContext, useEffect, useState } from "react";
import circleCross from "../assets/close-circle-outline.png";
import circleCheck from "../assets/check-circle-outline.png";

import "./CountryListItem.css";
import { AppContext } from "../context/AppContext";

const CountryListItem = ({ country }) => {
  const { appState, setAnswer } = useContext(AppContext);
  const [oCountry, setOcountry] = useState(country);

  useEffect(() => {
    setOcountry(country);
  }, [country]);

  const handleSelectedOption = () => {
    if (appState.isFinished) return;
    setOcountry({ ...oCountry, isClicked: true });
    setAnswer(oCountry.selected);
  };

  const sSuccessStyles = "selected success";
  const sErrorStyles = "selected error";

  const isSuccess = () =>
    (oCountry.isClicked && oCountry.selected) ||
    (appState.isFinished && oCountry.selected);
  const isError = () => oCountry.isClicked && !oCountry.selected;

  const setStylesClicked = () =>
    isSuccess() ? sSuccessStyles : isError() ? sErrorStyles : "";

  const iconSelected = isSuccess()
    ? circleCheck
    : isError()
    ? circleCross
    : null;

  return (
    <li
      onClick={handleSelectedOption}
      key={country.letter}
      className={`list-item ${setStylesClicked()}`}
    >
      <span>{country.letter}</span> {country.name}{" "}
      {iconSelected && <img src={iconSelected} alt="icon" />}
    </li>
  );
};

export default CountryListItem;
