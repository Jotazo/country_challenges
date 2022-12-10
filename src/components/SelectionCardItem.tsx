import React, { useContext } from "react";
import { motion } from "framer-motion";

import { AppContext } from "../context/AppContext";
import { listHoverStyles } from "../framerStyles";

const SelectionCardItem = ({ sOption }: { sOption: string }) => {
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
