import React from "react";

/*Styles  */
import "./style.css";
import "../components/style.css";

/* Icons */
import google from "../assets/icons/google.png";
import facebook from "../assets/icons/facebook_button.png";

class Login extends React.Component {
  state = {
    error: "",
    success: "",
  };

  componentDidMount() {
    document.title = "Cerevro | Login";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClick(e);
  };

  handleClick = (e) => {
    this.setState({
      error: "Usuario y/o contraseña incorrectos",
    });
  };

  handleChange = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="container mb-3 mb-lg-4">
        <div className="row">
          <div className="col-10 col-lg-4 offset-1 offset-lg-4">
            <h2 className="text-cerevro font-weight-bold text-center mb-3">
              Iniciar sesión
            </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Usuario o correo electronico</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  aria-describedby="passwordHelp"
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <button
              type="button"
              className="btn btn-cerevro mt-2"
              style={{ width: "100%" }}
              onClick={this.handleClick}
            >
              Iniciar sesión
            </button>
            {this.state.error && (
              <div className="alert alert-danger mb-0 mt-2" role="alert">
                {this.state.error}
              </div>
            )}
            <p
              className="mt-3 mb-0 second-text-cerevro text-right"
              style={{ textDecoration: "underline" }}
            >
              ¿Olvidaste tú contraseña?
            </p>
            <hr />
            <button
              className="btn btn-light shadow mb-3"
              style={{ width: "100%" }}
            >
              <div className="container">
                <div className="row">
                  <img src={google} alt="" />
                  <p className="mb-0 ml-3">Iniciar sesión con Google</p>
                </div>
              </div>
            </button>
            <button
              className="btn shadow disable"
              style={{
                width: "100%",
                backgroundColor: "#195b91",
                color: "white",
              }}
              aria-disabled="true"
            >
              <div className="container">
                <div className="row">
                  <img src={facebook} alt="" />
                  <p className="mb-0 ml-3">Iniciar sesión con Facebook</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
