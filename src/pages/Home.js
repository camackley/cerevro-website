import React from "react";
import { Link, Redirect } from "react-router-dom";

/* CSS */
import "./style.css";
import "../components/style.css";

/* Assets */
import home_principal_image from "../assets/img/home_principal_image.png";
import home_principal_image_mobile from "../assets/img/home_principal_image_mobile.png";
import home_feature_vr from "../assets/img/home_feature_vr.png";
import home_feature_gamification from "../assets/img/home_feature_gamification.png";
import home_feature_mastery_learning from "../assets/img/home_feature_mastery_learning.png";
import home_sreenshot_login from "../assets/img/home_sreenshot_login.png";

/* Icons */
import arrow_down from "../assets/icons/arrow_down.png";
import whatsapp from "../assets/icons/whatsapp.png";

/* COMPONENTS */
import Loading from "../components/Loading.js";
import Feature from "../components/Feature.js";
import VideoYoutube from "../components/VideoYoutube";
import FloatingActionButton from "../components/FloatingActionButton.js";

/* Utils */
import Validations from "../utils/validations.js";
import NetWorkHelper from "../utils/NetworkHelper.js";

class Home extends React.Component {
  state = {
    form: undefined,
    agree: false,
    success: false,
    error: "",
    loading: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClick(e);
  };

  handleClick = async (e) => {
    var utilValidation = new Validations();
    this.setState({
      loading: true,
    });
    if (!this.state.form) {
      this.setState({
        success: "",
        error: "Debes de llenar los campos",
        loading: false,
      });
    } else if (!this.state.form.name) {
      this.setState({
        error: "Debes de ingresar tú nombre",
        loading: false,
      });
    } else if (!this.state.form.school) {
      this.setState({
        error: "Debes de ingresar el colegio",
        loading: false,
      });
    } else if (!this.state.form.country || this.state.form.country === "none") {
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
        error: "Debes de ingresar un correo válido",
        loading: false,
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
        .httpPots("lead/demo", {
          date: d.getTime(),
          email: this.state.form.email,
          school: this.state.form.school,
          country: COUNTRY_VALUES[1],
          phone: `+${COUNTRY_VALUES[0]}${this.state.form.phone}`,
          name: this.state.form.name,
          agree: this.state.agree,
        })
        .then((code) => {
          document.getElementById("closeModalDemoRequest").click();
          this.setState({
            success: true,
            loading: false,
          });
        })
        .catch((e) => {
          console.error(e.message);
          this.setState({
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

  togleCheckbox = (e) => {
    var agreeLast = this.state.agree;
    this.setState({
      agree: agreeLast ? false : true,
    });
  };

  componentDidMount() {
    document.title = "Cerevro | Realidad virtual para la educación";
  }

  render() {
    if (this.state.success) {
      return <Redirect to="/gracias" />;
    }

    return (
      <div className="mb-5">
        <div className="container mt-lg-5 mt-3 mb-3">
          {/*<Main>*/}
          <div className="row align-items-center h-100">
            <div className="d-block d-lg-none col-12 mb-3">
              <img
                className="d-block mx-auto"
                src={home_principal_image_mobile}
                alt="imagen realidad virtual"
              />
            </div>
            <div className="d-none d-lg-block col-lg-6 ">
              <h1
                className="d-none d-lg-block text-cerevro"
                style={{ fontSize: "50px", fontWeight: "bold" }}
              >
                Realidad virtual para implementar en clases de colegio
              </h1>
              <h1
                className="d-block d-lg-none text-cerevro"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Realidad virtual para implementar en clases de colegio
              </h1>
              <p style={{ fontSize: "20px" }}>
                Creamos realidad virtual basada en gamificación y aula
                invertida, para apoyar al maestro en sus procesos educativos
              </p>
              <Link to="/contacto">
                <button
                  type="button"
                  className="btn btn-cta-cerevro mt-3"
                  style={{ fontSize: "25px", width: "40%" }}
                >
                  Pedir asesoria
                </button>
              </Link>
            </div>
            <div className="d-block d-lg-none col-12">
              <h1
                className="text-cerevro"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Realidad virtual para implementar en clases de colegio
              </h1>
              <p style={{ fontSize: "15px" }}>
                Creamos realidad virtual basada en gamificación y aula
                invertida, para apoyar al maestro en sus procesos educativos
              </p>
              <Link to="/contacto">
                <button
                  type="button"
                  className="btn btn-cerevro mt-2"
                  style={{ fontSize: "25px", width: "100%" }}
                >
                  Pedir asesoria
                </button>
              </Link>
              <img
                className="d-block mx-auto mt-3"
                src={arrow_down}
                alt="Flecha abajo"
              />
            </div>
            <div className="col-1" />
            <div className="d-none d-lg-block col-lg-5">
              <img src={home_principal_image} alt="imagen realidad virtual" />
            </div>
          </div>
          {/*<LearningTools>*/}
          <div className="row mt-5">
            <div className="col-12">
              <h2
                className="mx-auto text-cerevro text-center"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Bases de nuestro sistema
              </h2>
            </div>
          </div>
          <div className="row mt-3 justify-content-around">
            <div className="col-12 col-lg-4">
              <Feature
                img={home_feature_vr}
                title="Realidad virtual"
                description="Nos permite crear un entorno de apariencia real, para darle la sensasión al usario de estar inmerso en él"
              />
            </div>
            <div className="d-none d-lg-block col-4">
              <Feature
                img={home_feature_gamification}
                title="Gamificación"
                description="Usamos las mecanicas de los videojuegos para darle más motivacion al estudiante"
              />
            </div>
            <div className="d-block d-lg-none col-12 text-right mt-2 mb-2">
              <Feature
                img={home_feature_gamification}
                title="Gamificación"
                description="Usamos las mecanicas de los videojuegos para darle más motivacion al estudiante"
              />
            </div>
            <div className="col-12 col-lg-4">
              <Feature
                img={home_feature_mastery_learning}
                title="Aula invertida"
                description="Creamos experiencias introductorias a temas complicados, para desarrollar mejor la clase"
              />
            </div>
          </div>
          {/*</LearningTools>*/}
          {/*<HowVideo>*/}
          <div className="row mt-5 d-none">
            <div className="col-12">
              <h2
                className="mx-auto text-cerevro text-center"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                ¿Cómo funciona?
              </h2>
            </div>
          </div>
        </div>
        <VideoYoutube url="https://www.youtube.com/embed/ICWlhnwvlFA" />
        {/*</HowVideo>*/}
        {/*<DemoRequest>*/}
        <div className="container">
          <div className="row mt-5 align-items-center h-100">
            <div className="col-12 d-block d-lg-none mb-1">
              <h2 className="text-cerevro text-center">
                Vive la <span className="font-weight-bold">experiencia</span>{" "}
                gratis
              </h2>
            </div>
            <div className="col-10 col-lg-3 offset-1">
              <img
                className="d-block mx-auto"
                src={home_sreenshot_login}
                alt="imagen login Cerevro"
              />
            </div>
            <div className="col-12 d-block d-lg-none">
              <p className="text-center mt-3 mb-0" style={{ fontSize: "20px" }}>
                Te llevamos el <span className="font-weight-bold">Demo</span> a
                tu colegio y comprueba como{" "}
                <span className="font-weight-bold">Cerevro</span> inmpulsa el
                proceso educactivo
              </p>
              <button
                type="button"
                className="btn btn-cerevro mt-2"
                data-toggle="modal"
                data-target="#modalDemoRequest"
                style={{ width: "100%" }}
              >
                Solicitar demo
              </button>
            </div>
            <div className="col-6 offset-1 d-none d-lg-block">
              <h2 className="text-cerevro">
                Vive la <span className="font-weight-bold">experiencia</span>{" "}
                gratis
              </h2>
              <p style={{ fontSize: "20px" }}>
                Te llevamos el <span className="font-weight-bold">Demo</span> a
                tu colegio y comprueba como{" "}
                <span className="font-weight-bold">Cerevro</span> inmpulsa el
                proceso educactivo
              </p>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4 p-0">
                    <h2 className="second-text-cerevro font-weight-bold">
                      83%
                    </h2>
                    <p>
                      De los profesores afirman que la Realidad virtual mejoran
                      los resultados academicos
                    </p>
                  </div>
                  <div className="col-4">
                    <h2 className="second-text-cerevro font-weight-bold">
                      90%
                    </h2>
                    <p>Más de probabilidad de recordar lo que han estudiado</p>
                  </div>
                  <div className="col-4">
                    <h2 className="second-text-cerevro font-weight-bold">
                      84%
                    </h2>
                    <p>De aumento en la motivación de los alumnos</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="d-none d-lg-block btn btn-cerevro mt-2"
                data-toggle="modal"
                data-target="#modalDemoRequest"
                style={{ width: "30%" }}
              >
                Solicitar demo
              </button>
            </div>
          </div>
        </div>
        {/*</DemoRequest>*/}

        {/*Floating Action button*/}
        <FloatingActionButton url="https://wa.link/kvpbov" icon={whatsapp} />
        {/* PopUp */}
        {/* Solicitar Demo */}
        <div
          className="modal fade"
          id="modalDemoRequest"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="false"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Solicitar demo
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  id="closeModalDemoRequest"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {!this.state.loading && (
                <React.Fragment>
                  <div className="modal-body">
                    <form onSubmit={this.handleSubmit} className="mb-2">
                      <div className="form-row">
                        <div className="form-group col">
                          <div className="input-group mb-1">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Nombre"
                              aria-label="name"
                              aria-describedby="basic-addon1"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group col">
                          <div className="input-group mb-1">
                            <input
                              type="text"
                              name="school"
                              className="form-control"
                              placeholder="Colegio"
                              aria-label="school"
                              aria-describedby="basic-addon1"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                          <select
                            name="country"
                            className="form-control"
                            onChange={this.handleChange}
                          >
                            <option value="none">Selecciona tú país</option>
                            <option value="54:Argentina"> Argentina </option>
                            <option value="591:Bolivia"> Bolivia </option>
                            <option value="56:Chile"> Chile </option>
                            <option value="57:Colombia"> Colombia </option>
                            <option value="506:Costa rica"> Costa Rica</option>
                            <option value="53:Cuba"> Cuba </option>
                            <option value="593:Ecuador"> Ecuador </option>
                            <option value="503:El salvador">
                              {" "}
                              El Salvador
                            </option>
                            <option value="34:España"> España </option>
                            <option value="502:Guatemala"> Guatemala </option>
                            <option value="504:Honduras"> Honduras </option>
                            <option value="52:México"> México</option>
                            <option value="505:Nicaragua"> Nicaragua </option>
                            <option value="507:Panamá"> Panamá </option>
                            <option value="595:Paraguay"> Paraguay </option>
                            <option value="51:Perú"> Perú </option>
                            <option value="1:Puerto rico"> Puerto Rico </option>
                            <option value="1:República dominicana">
                              República Dominicana
                            </option>
                            <option value="598:uruguay"> Uruguay </option>
                            <option value="58:venezuela"> Venezuela </option>
                          </select>
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <input
                            name="phone"
                            type="number"
                            className="form-control"
                            placeholder="Número de celular"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col">
                          <div className="input-group mb-1">
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Ingrese su correo electronico"
                              aria-label="email"
                              aria-describedby="basic-addon1"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-check">
                          <input
                            name="agree"
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={this.state.agree}
                            onChange={this.togleCheckbox}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Acepto{" "}
                            <Link
                              to="privacidad"
                              className="text-cerevro"
                              target="_blank"
                            >
                              Términos y condiciones
                            </Link>
                          </label>
                        </div>
                      </div>
                    </form>
                    {this.state.error && (
                      <div className="alert alert-danger mb-0" role="alert">
                        {this.state.error}
                      </div>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn btn-cerevro"
                      onClick={this.handleClick}
                    >
                      Solicitar ahora
                    </button>
                  </div>
                </React.Fragment>
              )}
              {this.state.loading && <Loading />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
