import React from "react";
import ReactDOM from "react-dom";
import "./fonts/VAG-ROUNDED-STD-LIGHT.TTF";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./pages/App.js";
import "./index.css";

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
