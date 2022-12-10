import React from "react";
import { motion } from "framer-motion";
import { lifeItem } from "../framerStyles";

const LifeItem = ({ life }: { life: string }) => {
  return <motion.span {...lifeItem}>{life}</motion.span>;
};

export default LifeItem;
