import React from "react";
import { motion } from "framer-motion";

import Header from "./Header";

import { cardLayout } from "../framerStyles";
import "./CardLayout.css";

const CardLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div {...cardLayout} className="container">
      <Header />
      <section className="section">{children}</section>
    </motion.div>
  );
};

export default CardLayout;
