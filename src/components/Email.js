import React from "react";

/* Utils */
import Validations from "../utils/validations.js";
import NetWorkHelper from "../utils/NetworkHelper.js";

/* Components */
import Loading from "../components/Loading.js";

class Email extends React.Component {
  state = {
    email: undefined,
    success: "",
    error: "",
    loading: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClick(e);
  };

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleClick = async (e) => {
    this.setState({
      loading: true,
    });
    var utilValidation = new Validations();
    if (!utilValidation.email(this.state.email)) {
      this.setState({
        error: "Debe de ingresar un correo válido",
      });
    } else {
      var d = new Date();
      NetWorkHelper()
        .httpPots("blog/suscribed", {
          date: d.getTime(),
          email: this.state.email,
        })
        .then((code) => {
          this.setState({
            success: "Gracias por suscribirte! 🎉",
            error: "",
            loading: false,
          });
        })
        .catch((e) => {
          console.log(e);
          this.setState({
            success: "",
            error: "Error al insertar los datos",
            loading: false,
          });
        });
    }
  };
  render() {
    if (this.state.success.length > 0) {
      return (
        <div className="alert alert-success mb-0" role="alert">
          {this.state.success}
        </div>
      );
    }

    if (this.state.success.length > 0) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <h5 className="d-none d-lg-block text-left">
          Suscríbete a nuestras novedades
        </h5>
        <h5 className="d-block d-lg-none text-center">
          Suscríbete a nuestras novedades
        </h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo electronico"
                  aria-describedby="basic-addon1"
                  onChange={this.handleChange}
                />
                <div className="input-group-prepend">
                  <button
                    type="button"
                    className="btn btn-second-cerevro rounded-right"
                    onClick={this.handleClick}
                  >
                    Suscribirme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {this.state.error && (
          <div className="alert alert-danger mb-0" role="alert">
            {this.state.error}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Email;
