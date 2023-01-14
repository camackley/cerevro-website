import React from "react";
import { Redirect } from "react-router-dom";

/* Components */
import ContactForm from "../components/ContactForm";

/* Assets */
import contac_image from "../assets/img/contact_image.png";

/* Utils */
import Validations from "../utils/validations.js";
import NetWorkHelper from "../utils/NetworkHelper.js";

/* Styles */
import "./style.css";

class Contact extends React.Component {
  state = {
    data: "",
    error: "",
    success: "",
    agree: false,
  };

  componentDidMount() {
    document.title = "Cerevro | Contactenos";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClick(e);
  };

  handleClick = (e) => {
    var utilValidation = new Validations();
    if (!this.state.form) {
      this.setState({
        success: "",
        error: "Debes de llenar los campos (*)",
      });
    } else if (!this.state.form.name) {
      this.setState({
        success: "",
        error: "Debes de ingresar tú nombre",
      });
    } else if (!this.state.form.country || this.state.form.country === "none") {
      this.setState({
        success: "",
        error: "Debes de seleccionar tú país",
      });
    } else if (!this.state.form.phone) {
      this.setState({
        success: "",
        error: "Debes de ingresar un número de celular válido",
      });
    } else if (!utilValidation.email(this.state.form.email)) {
      this.setState({
        success: "",
        error: "Debes de ingresar un correo válido",
      });
    } else if (!this.state.agree) {
      this.setState({
        error: "Debes aceptar los términos y condiciones",
        loading: false,
      });
    } else {
      var d = new Date();
      const COUNTRY_VALUES = this.state.form.country.split(":");
      NetWorkHelper()
        .httpPots("lead", {
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
          });
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            success: "",
            error: "Error al insertar los datos",
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

  togleCheckbox = (e) => {
    var agreeLast = this.state.agree;
    this.setState({
      agree: agreeLast ? false : true,
    });
  };

  render() {
    if (this.state.success) {
      return <Redirect to="/gracias" />;
    }

    return (
      <section id="contact">
        <div className="container-fluid mobile-background-orange">
          <div className="row align-items-center h-100">
            <div className="col-1" />
            <div className="col-10 col-lg-4 p-0">
              <h2 className="d-none d-lg-block text-cerevro text-center font-weight-bold">
                Pide tú asesoria
              </h2>
              <h6 className="d-none d-lg-block form-text text-muted text-center">
                Nos comunicaremos lo mas pronto posible
              </h6>
              <h2 className="d-block d-lg-none text-center font-weight-bold">
                Pide tú asesoria
              </h2>
              <h6 className="d-block d-lg-none form-text text-center">
                Nos comunicaremos lo mas pronto posible
              </h6>
              <ContactForm
                error={this.state.error}
                handleSubmit={this.handleSubmit}
                handleClick={this.handleClick}
                handleChange={this.handleChange}
                agree={this.state.agree}
                togleCheckbox={this.togleCheckbox}
              />
            </div>
            <div
              id="img-contact"
              className="d-none d-lg-block col-6 p-0 offset-1"
            >
              <img src={contac_image} alt="realidad virtual cerevro contacto" />
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-1" />
                    <div className="col-9">
                      <h2 className="mt-5">No dudes en contactarnos</h2>
                      <h5 className="text-justify">
                        Si quieres llevar tú institución al siguiente nivel.
                        Deja tus datos y nos comunicaremos contigo en breve
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
