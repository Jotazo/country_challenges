import React from "react";
import { motion } from "framer-motion";

const LifeItem = ({ life }: { life: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {life}
    </motion.span>
  );
};

export default LifeItem;
