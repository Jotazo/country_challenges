import React, { useContext } from "react";
import circleCross from "../../assets/close-circle-outline.png";
import circleCheck from "../../assets/check-circle-outline.png";

import { ICountryWithSuccess } from "../../interfaces/oCountry";
import { IAppState } from "../../context/interfaces";

import { AppContext } from "../../context/AppContext";

import useOcountry from "../../hooks/useOcountry";
import { LANGUAGES } from "../../constants";
import "./CountryListItem.css";

const clickStyles = (oCountry: ICountryWithSuccess, appState: IAppState) => {
  const sSuccessStyles = "selected success";
  const sErrorStyles = "selected error";

  const isSuccess: boolean =
    (oCountry.isClicked && oCountry.selected) ||
    (appState.isFinished && oCountry.selected);
  const isError: boolean = oCountry.isClicked && !oCountry.selected;

  const clickedStyles: string = isSuccess
    ? sSuccessStyles
    : isError
    ? sErrorStyles
    : "";

  const iconSelected: string | null = isSuccess
    ? circleCheck
    : isError
    ? circleCross
    : null;

  return { clickedStyles, iconSelected };
};

const CountryListItem = ({ country }: { country: ICountryWithSuccess }) => {
  const { appState, setAnswer } = useContext(AppContext)!;
  const { oCountry, setOcountryClicked } = useOcountry(country);

  const langSelected = LANGUAGES[appState.languageSelected]

  const handleSelectedOption = () => {
    if (appState.isFinished) return;
    setOcountryClicked();
    setAnswer(oCountry.selected);
  };

  const { clickedStyles, iconSelected } = clickStyles(oCountry, appState);

  return (
    <li onClick={handleSelectedOption} className={`list-item ${clickedStyles}`}>
      <span>{country.letter}</span> {country.name[langSelected]}{" "}
      {iconSelected && <img src={iconSelected} alt="icon" />}
    </li>
  );
};

export default CountryListItem;
