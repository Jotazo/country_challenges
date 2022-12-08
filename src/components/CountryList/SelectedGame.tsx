import React from "react";
import { GAME_OPTIONS } from "../../constants";
import { ICountryWithSuccess } from "../../interfaces/oCountry";

type Props = {
  oCountry: ICountryWithSuccess;
  gameSelected?: string;
};

const CapitalGame = ({ oCountry }: Props) => {
  return <h3 className="game-title">{oCountry.capital} es la capital de</h3>;
};

const FlagGame = ({ oCountry }: Props) => {
  return (
    <>
      <img className="flag-img" src={oCountry.flag} alt="bandera" />
      <h3 className="game-title">Esta es la bandera de</h3>
    </>
  );
};

const SelectedGame = React.memo(({ oCountry, gameSelected }: Props) => {
  if (gameSelected === GAME_OPTIONS.capitales)
    return <CapitalGame oCountry={oCountry} />;

  if (gameSelected === GAME_OPTIONS.banderas)
    return <FlagGame oCountry={oCountry} />;

  // Si seleccionamos mixto retornará en funcion del valor aleatorio
  return Math.random() > 0.5 ? (
    <CapitalGame oCountry={oCountry} />
  ) : (
    <FlagGame oCountry={oCountry} />
  );
});

export default SelectedGame;
