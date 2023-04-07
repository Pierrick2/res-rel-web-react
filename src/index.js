import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => (
<BrowserRouter>
<React.StrictMode>
<App />
</React.StrictMode>
</BrowserRouter>
);

root.render(renderApp());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();