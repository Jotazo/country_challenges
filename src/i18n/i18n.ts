import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { APP_CONFIG } from "../constants";
import translationEn from "./locales/en";
import translationEs from "./locales/es";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    es: {
      translation: translationEs,
    },
  },
  lng: APP_CONFIG.initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
