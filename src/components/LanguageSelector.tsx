import React from "react";
import { withTranslation } from "react-i18next";
import { LANGUAGES } from "../constants";

import { TranslatedComponentProps } from "../types";
import { getLanguagesItems } from "../utils/getResourceBundles";

import "./LanguageSelector.css";

const LanguageSelector = ({ t, i18n }: TranslatedComponentProps) => {
  const LANGUAGES_ITEMS = getLanguagesItems(t!, i18n!);
  
  const LANGS = Object.keys(LANGUAGES).map((key: string) => key);

  const changeLanguage = (lang: string) => {
    i18n?.changeLanguage(lang);
  };

  return (
    <div className="language-selector">
      <ul className="language-selector-list">
        {LANGUAGES_ITEMS.map((opt: string, index: number) => {
          return (
            <>
              <li
                onClick={() => changeLanguage(LANGS[index])}
                className="language-selector-list-item"
              >
                {opt}
              </li>
              {index !== LANGUAGES_ITEMS.length - 1 && "|"}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default withTranslation()(LanguageSelector);
