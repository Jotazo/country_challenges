import React from "react";
import { motion } from "framer-motion";
import { withTranslation } from "react-i18next";

import { TranslatedComponentProps } from "../types";
import { getGameOptions } from "../utils/getResourceBundles";

import SelectionCardItem from "./SelectionCardItem";
import { selectionCard } from "../framerStyles";

const SelectionCard = ({ t, i18n }: TranslatedComponentProps) => {
  const OPTIONS = getGameOptions(t!, i18n!);

  return (
    <motion.div {...selectionCard}>
      <h1 className="game-title">{t!("gameTitle")}</h1>
      <ul className="list">
        {OPTIONS.map((opt: string, index) => (
          <SelectionCardItem key={index} sOption={opt} />
        ))}
      </ul>
    </motion.div>
  );
};

export default withTranslation()(SelectionCard);
