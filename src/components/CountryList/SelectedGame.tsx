import React from "react";
import { ICountryWithSuccess } from "../../interfaces/oCountry";
import { withTranslation } from "react-i18next";
import { TranslatedComponentProps } from "../../types";

type Props = {
  oCountry: ICountryWithSuccess;
  gameSelected?: string;
} & TranslatedComponentProps;

const CapitalGame = ({ t, oCountry }: Props) => {
  const { capital } = oCountry;
  return <h3 className="game-title">{t!("capitalGameText", { capital })}</h3>;
};

const CapitalGameTranslated = withTranslation()(CapitalGame);

const FlagGame = ({ t, oCountry }: Props) => {
  return (
    <>
      <img className="flag-img" src={oCountry.flag} alt="bandera" />
      <h3 className="game-title">{t!("flagGameText")}</h3>
    </>
  );
};

const FlagGameTranslated = withTranslation()(FlagGame);

const RandomGame = ({ oCountry }: Props) => {
  const bCapitalGame = Math.random() > 0.5;
  return bCapitalGame ? (
    <CapitalGameTranslated oCountry={oCountry} />
  ) : (
    <FlagGameTranslated oCountry={oCountry} />
  );
};

const SelectedGame = React.memo(({ oCountry, gameSelected, i18n }: Props) => {
  const lang = i18n!.language;
  const GAME = i18n!.getResourceBundle(lang, "").gameOptions;
  if (gameSelected === GAME.capitals)
    return <CapitalGameTranslated oCountry={oCountry} />;

  if (gameSelected === GAME.flags)
    return <FlagGameTranslated oCountry={oCountry} />;

  // Si seleccionamos mixto retornará en funcion del valor aleatorio
  return <RandomGame oCountry={oCountry} />;
});

export default withTranslation()(SelectedGame);
