import React from "react";
import ReactDOM from "react-dom";
import App from "./container/app.jsx";
import { BrowserRouter } from "react-router-dom";

// Create store
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);