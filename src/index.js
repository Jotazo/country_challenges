import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import QuizContextProvider from "./context/QuizzContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </QuizContextProvider>
  </React.StrictMode>
);
