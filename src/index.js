import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContainer } from "./services/AuthentificationService";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContainer>
        <App />
      </AuthContainer>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
