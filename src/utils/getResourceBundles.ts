import { i18n, TFunction } from "i18next";

export const getGameOptions = (t: TFunction, i18n: i18n) => {
  const lang = i18n.language;
  const GAME = i18n.getResourceBundle(lang, "").gameOptions;
  return Object.keys(GAME).map((optionKey) => t(`gameOptions.${optionKey}`));
};

export const getLanguagesItems = (t: TFunction, i18n: i18n) => {
  const lang = i18n.language;
  const LANGUAGES = i18n.getResourceBundle(lang, "").languagesList;
  return Object.keys(LANGUAGES).map((optionKey) =>
    t(`languagesList.${optionKey}`)
  );
};
