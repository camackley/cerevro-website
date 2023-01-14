import React from "react";
import { Redirect } from "react-router-dom";

/* Components */
import Feature from "../components/Feature";
import Loading from "../components/Loading";
import ContactForm from "../components/ContactForm";
import VideoYoutube from "../components/VideoYoutube";
import FloatingActionButton from "../components/FloatingActionButton.js";

/* Assets */
import commision_inc_logo from "../assets/img/commision_inc_logo.png";
import commision_inc_mision from "../assets/img/commision_inc_mision.png";
import commision_inc_vision from "../assets/img/commision_inc_vision.png";

/* Utils */
import Validations from "../utils/validations.js";
import NetWorkHelper from "../utils/NetworkHelper.js";

/* Icons */
import whatsapp from "../assets/icons/whatsapp.png";

/* Styles */
import "./style.css";

class CommissionAgents extends React.Component {
  state = {
    data: "",
    error: "",
    success: "",
    loading: false,
  };

  componentDidMount() {
    document.title = "Cerevro | Comisionistas de Cerevro";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClick(e);
  };

  handleClick = (e) => {
    this.setState({ loading: true });
    var utilValidation = new Validations();
    if (!this.state.form) {
      this.setState({
        success: "",
        error: "Debes de llenar los campos (*)",
        loading: false,
      });
    } else if (!this.state.form.name) {
      this.setState({
        success: "",
        error: "Debes de ingresar tú nombre",
        loading: false,
      });
    } else if (!this.state.form.country || this.state.form.country === "none") {
      console.log(this.state.form);
      this.setState({
        success: "",
        error: "Debes de seleccionar tú país",
        loading: false,
      });
    } else if (!this.state.form.phone) {
      this.setState({
        success: "",
        error: "Debes de ingresar un número de celular válido",
        loading: false,
      });
    } else if (!utilValidation.email(this.state.form.email)) {
      this.setState({
        success: "",
        error: "Debes de ingresar un correo válido",
        loading: false,
      });
    } else {
      var d = new Date();
      const COUNTRY_VALUES = this.state.form.country.split(":");
      NetWorkHelper()
        .httpPots("commision", {
          country: COUNTRY_VALUES[1],
          date: d.getTime(),
          email: this.state.form.email,
          name: this.state.form.name,
          phone: `+${COUNTRY_VALUES[0]}${this.state.form.phone}`,
        })
        .then((response) => {
          this.setState({
            success: "Felicitaciones, has dado el primer paso al futuro! 🚀🧠",
            error: "",
            loading: false,
          });
        })
        .catch((error) => {
          this.setState({
            success: "",
            error: "Error al insertar los datos",
            loading: false,
          });
        });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    if (this.state.success) {
      return <Redirect to="/gracias" />;
    }

    return (
      <React.Fragment>
        <div className="container mt-lg-3">
          <div className="row mb-4">
            <div className="col-12">
              <h2
                className="text-cerevro text-center"
                style={{ fontWeight: "bold" }}
              >
                Conoce nuestro programa de comisionistas
              </h2>
            </div>
          </div>
        </div>
        <VideoYoutube url="https://www.youtube.com/embed/R_wyoX3_QZs" />
        {/* Cerevro empresa */}
        <div className="container mt-5">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-4">
              <Feature
                img={commision_inc_logo}
                title="¿Que de Cerevro?"
                description="Cerevro es un ecositema educativo que crea Realidad virtual para implemetar en clases de colegio"
              />
            </div>
            <div className="d-none d-lg-block col-4">
              <Feature
                img={commision_inc_mision}
                title="Misión de Cerevro"
                description="Revolucionar la educación tradicional, llevándola a una educación pensada para el individuo."
              />
            </div>
            <div className="d-block d-lg-none col-12 text-right mt-2 mb-2">
              <Feature
                img={commision_inc_mision}
                title="Misión de Cerevro"
                description="Revolucionar la educación tradicional, llevándola a una educación pensada para el individuo."
              />
            </div>
            <div className="col-12 col-lg-4">
              <Feature
                img={commision_inc_vision}
                title="Visión de Cerevro"
                description="Cerevro estará en todas las escuelas del mundo, marcando un antes y un después en la historia de la educación"
              />
            </div>
          </div>
        </div>
        {/* Formulario */}
        <div className="container mt-lg-3 mb-lg-3 mt-2">
          <div className="row mt-lg-5">
            <div className="col-12">
              <h2
                className="text-cerevro text-center"
                style={{ fontWeight: "bold" }}
              >
                Llena los siguientes datos y recibe más información
              </h2>
            </div>
            <div className="col-10 offset-1 mt-lg-2">
              {!this.state.loading && (
                <ContactForm
                  error={this.state.error}
                  handleSubmit={this.handleSubmit}
                  handleClick={this.handleClick}
                  handleChange={this.handleChange}
                />
              )}
            </div>
            {this.state.loading && <Loading />}
          </div>
        </div>
        <FloatingActionButton url="https://wa.link/kvpbov" icon={whatsapp} />
      </React.Fragment>
    );
  }
}

export default CommissionAgents;
