import React from "react";
import { motion } from "framer-motion";

import "./CardLayout.css";
import Header from "./Header";

const CardLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      initial={{ y: -600 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring" }}
      className="container"
    >
      <Header />
      <section className="section">{children}</section>
    </motion.div>
  );
};

export default CardLayout;
