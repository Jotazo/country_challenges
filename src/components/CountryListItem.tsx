import React, { useContext } from "react";
import circleCross from "../assets/close-circle-outline.png";
import circleCheck from "../assets/check-circle-outline.png";

import { ICountryWithSuccess } from "../interfaces/oCountry";
import { IAppState } from "../context/interfaces";

import { AppContext } from "../context/AppContext";
import useOcountry from "../hooks/useOcountry";
import "./CountryListItem.css";

const styles = (oCountry: ICountryWithSuccess, appState: IAppState) => {
  const sSuccessStyles = "selected success";
  const sErrorStyles = "selected error";

  const isSuccess = (): boolean =>
    (oCountry.isClicked && oCountry.selected) ||
    (appState.isFinished && oCountry.selected);
  const isError = (): boolean => oCountry.isClicked && !oCountry.selected;

  const setStylesClicked = (): string =>
    isSuccess() ? sSuccessStyles : isError() ? sErrorStyles : "";

  const iconSelected: string | null = isSuccess()
    ? circleCheck
    : isError()
    ? circleCross
    : null;

  return { setStylesClicked, iconSelected };
};

type Props = {
  country: ICountryWithSuccess;
};

const CountryListItem = ({ country }: Props) => {
  const { appState, setAnswer } = useContext(AppContext)!;
  const { oCountry, setOcountryClicked } = useOcountry(country);

  const handleSelectedOption = () => {
    if (appState.isFinished) return;
    setOcountryClicked();
    setAnswer(oCountry.selected);
  };

  const { setStylesClicked, iconSelected } = styles(oCountry, appState);

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
