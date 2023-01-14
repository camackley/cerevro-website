import React from "react";
import { Link } from "react-router-dom";

/*Styles  */
import "./style.css";
import "../components/style.css";

/* Assets */
import not_found from "../assets/img/not_found.png";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "Cerevro | 404";
  }

  render() {
    return (
      <section id="NotFound">
        <div className="container">
          <div className="row align-items-center h-100">
            <div className="col-12 col-md-8 p-0">
              <img src={not_found} alt="Not found cerevro" />
            </div>
            <div className="col-12 col-md-4 text-center">
              <span style={{ fontSize: "80px" }}>404</span>
              <h2>Página no encontrada</h2>
              <Link to="/">
                <button type="button" className="btn btn-cerevro">
                  Volver al inicio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;
