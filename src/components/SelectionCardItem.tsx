import React, { useContext } from "react";
import { motion } from "framer-motion";

import { GameOptions } from "../types";
import { AppContext } from "../context/AppContext";
import { listHoverStyles } from "../framerStyles";

const SelectionCardItem = ({ sOption }: { sOption: GameOptions }) => {
  const { setGameSelected } = useContext(AppContext)!;

  return (
    <motion.li
      whileHover={listHoverStyles}
      onClick={() => setGameSelected(sOption)}
      className="list-item"
    >
      {sOption}
    </motion.li>
  );
};

export default SelectionCardItem;
