import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import QuizContextProvider from "./context/QuizzContext";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Falied to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <QuizContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </QuizContextProvider>
  </React.StrictMode>
);
