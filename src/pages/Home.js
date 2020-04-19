import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";

import platzi_logo from "../images/platzi-logo.svg";
import conf_logo from "../images/conf-logo.svg";
import conf from "../images/conf.svg";

function Home() {
  return (
    <div className="Home container-fluid">
      <div className="row d-flex justify-content-center align-self-center">
        <div className="Home__info col-auto col-lg-4 col-xl-3 mb-5">
          <div className="d-flex flex-column my-4">
            <img
              src={platzi_logo}
              alt="Platzi logo"
              className="img-fluid mb-3"
            />
            <img src={conf_logo} alt="Conf logo" className="img-fluid" />
          </div>

          <div className="text-center text-lg-left">
            <h1>Print your badges</h1>
            <p>The easiest way to manage your conference</p>
            <Link
              className="btn btn-primary Home__info-button"
              to="/badges/new"
            >
              Start now
            </Link>
          </div>
        </div>

        <div className="Home__image col-12 col-lg-6 text-center">
          <img src={conf} alt="Conf" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Home;
