import React from "react";
import { Link } from "react-router-dom";

/* Assets */
import logo_horizontal from "../assets/img/logo_horizontal.png";

/* CSS */
import "./style.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <nav
          id="header"
          className="navbar navbar-expand-lg navbar-light bg-transparent"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo_horizontal}
                alt="Cerevro logo"
                style={{ height: "70px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="#navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{ color: "#195B91" }}
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/comisionistas"
                    style={{ color: "#195B91" }}
                  >
                    Comisionistas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    style={{ color: "#195B91" }}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contacto"
                    style={{ color: "#195B91" }}
                  >
                    Contáctenos
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="d-none d-lg-block nav-link"> | </div>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" style={{ textDecoration: "none" }}>
                    <button className="btn btn-outline-cerevro" type="button">
                      Comenzar ahora
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <button
                      className="d-none d-lg-block btn btn-cerevro ml-3"
                      type="button"
                    >
                      Iniciar sesión
                    </button>
                    <button
                      className="d-block d-lg-none btn btn-cerevro mt-2"
                      type="button"
                    >
                      Iniciar sesión
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
