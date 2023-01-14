import React from "react";
import { Link } from "react-router-dom";

/*Styles  */
import "./style.css";
import "../components/style.css";

/* Assets */
import thanks_you_call_center from "../assets/gifs/thanks_you_call_center.gif";

class ThanksYou extends React.Component {
  componentDidMount() {
    document.title = "Cerevro | Gracias por su registro";
  }

  render() {
    const divs = document.querySelectorAll("div");
    Array.prototype.forEach.call(divs, function (div) {
      if (div.className === "modal-backdrop fade show") {
        div.style.display = "none";
      }
    });

    return (
      <div className="container">
        <div className="row align-items-center h-100">
          <div className="col-12 col-lg-5">
            <img
              className="d-none d-lg-block"
              width="100%"
              src={thanks_you_call_center}
              alt="Gracias por su registro"
            />
            <img
              className="d-block d-lg-none mx-auto"
              width="60%"
              src={thanks_you_call_center}
              alt="Gracias por su registro"
            />
          </div>
          <div className="col-12 col-lg-7">
            <h2 className="text-cerevro" style={{ fontSize: "60px" }}>
              Estas muy cerca de vivir la experiencia{" "}
              <span className="second-text-cerevro">Cerevro</span>
            </h2>
            <h3>Nos pondremos en contacto lo más pronto posible</h3>
            <Link to="/" className="d-none d-lg-block">
              <button type="button" className="btn btn-cerevro">
                Volver al inicio
              </button>
            </Link>
            <Link to="/" className="d-block d-lg-none">
              <button
                type="button"
                className="btn btn-cerevro mb-4"
                style={{ width: "100%" }}
              >
                Volver al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ThanksYou;
