import React from "react";
import logo from "../assets/icon.svg";
import "./CountryCardLayout.css";

type Props = {
  children: JSX.Element;
  isFinished: boolean;
};

const CountryCardLayout = ({ children, isFinished }: Props) => {
  return (
    <div className="container">
      <h1 className="title">Country Quiz</h1>
      {!isFinished && <img src={logo} alt="icon" className="logo" />}
      <section className="section">{children}</section>
    </div>
  );
};

export default CountryCardLayout;
