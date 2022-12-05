import { useContext } from "react";
import logo from "../assets/winner_icon.svg";
import "./Results.css";
import { AppContext } from "../context/AppContext";

const Results = () => {
  const { appState, restartGame } = useContext(AppContext);

  return (
    <div className="results-container">
      <img src={logo} alt="icon" />
      <section className="text-content">
        <h1 className="results-title">Resultados</h1>
        <p className="results-text">
          Has obtenido <span>{appState.score}</span> aciertos
        </p>
      </section>
      <button onClick={() => restartGame()} className="btn-underline">
        Volver al inicio
      </button>
    </div>
  );
};

export default Results;
