import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index";
import { GlobalStyle } from "./globalStyle";
import { QuizProvider } from "./context/quiz";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
    <GlobalStyle />
  </React.StrictMode>
);
