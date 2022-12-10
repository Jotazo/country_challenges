import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { withTranslation } from "react-i18next";

import { TranslatedComponentProps } from "../types";
import { APP_CONFIG } from "../constants";
import { AppContext } from "../context/AppContext";

import LifeItem from "./LifeItem";

import "./Lifes.css";

const Lifes = ({ t }: TranslatedComponentProps) => {
  const { appState } = useContext(AppContext)!;

  const asLifes: string[] = new Array(appState.lifes).fill(APP_CONFIG.lifeImg);

  return (
    <span className="lifes-element">
      {t!("lifes")}
      <AnimatePresence>
        {asLifes.map((life, index) => (
          <LifeItem life={life} key={index} />
        ))}
      </AnimatePresence>
    </span>
  );
};

export default withTranslation()(Lifes);
