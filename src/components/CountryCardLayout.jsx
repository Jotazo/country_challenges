import logo from "../assets/icon.svg";
import "./CountryCardLayout.css";

const CountryCardLayout = ({ children, isFinished }) => {
  return (
    <div className="container">
      <h1 className="title">Country Quiz</h1>
      {!isFinished && <img src={logo} alt="icon" className="logo" />}
      <section className="section">{children}</section>
    </div>
  );
};

export default CountryCardLayout;
