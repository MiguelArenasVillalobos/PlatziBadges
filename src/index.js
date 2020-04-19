import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./global.css";

import App from "./components/App";

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
