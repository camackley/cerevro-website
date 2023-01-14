import React from "react";
import { Link } from "react-router-dom";
import Timer from "react-countdown";

function Countdown(props) {
  var finishDate = new Date("2020", "12", "31");
  return (
    <React.Fragment>
      <div
        className="container-fluid alert alert-warning alert-dismissible fade show sticky-top mb-0"
        reole="alert"
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <h5 className="d-none d-md-block">
                Comienza con Cerevro en un plan especial por nuestro pre
                lanzamiento
              </h5>
              <h5 className="d-block d-md-none text-center">
                Comienza con Cerevro en un plan especial por nuestro pre
                lanzamiento
              </h5>
            </div>
            <div className="col-12 col-md-4 text-center">
              <Timer
                date={finishDate.getTime()}
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <React.Fragment>
                      <div className="row">
                        <div className="col-3">
                          <p className="alert-info mb-0 p-1">{days}</p>
                          <p className=" mb-0">Días</p>
                        </div>
                        <div className="col-3">
                          <p className="alert-info mb-0 p-1">{hours}</p>
                          <p className="mb-0">Horas</p>
                        </div>
                        <div className="col-3">
                          <p className="alert-info mb-0 p-1">{minutes}</p>
                          <p className="mb-0">Minutos</p>
                        </div>
                        <div className="col-3">
                          <p className="alert-info mb-0 p-1">{seconds}</p>
                          <p className="mb-0">Segundos</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                }}
              />
            </div>
            <div className="col-12 col-md-3 text-center align-self-center">
              <Link to="contacto">
                <button type="button" className="btn btn-cerevro">
                  Comenzar ahora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </React.Fragment>
  );
}

export default Countdown;
