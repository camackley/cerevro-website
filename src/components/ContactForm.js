import React from "react";
import { Link } from "react-router-dom";

class ContactForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-12">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Nombre *"
                onChange={this.props.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12 col-md-6">
              <select
                name="country"
                className="form-control"
                onChange={this.props.handleChange}
              >
                <option value="none">Selecciona tú país *</option>
                <option value="54:Argentina"> Argentina </option>
                <option value="591:Bolivia"> Bolivia </option>
                <option value="56:Chile"> Chile </option>
                <option value="57:Colombia"> Colombia </option>
                <option value="506:Costa rica"> Costa Rica</option>
                <option value="53:Cuba"> Cuba </option>
                <option value="593:Ecuador"> Ecuador </option>
                <option value="503:El salvador"> El Salvador</option>
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
                placeholder="Número de celular *"
                onChange={this.props.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Correo electronico *"
                onChange={this.props.handleChange}
              />
            </div>
          </div>
          <div className="form-row pb-3">
            <div className="form-check">
              <input
                name="agree"
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={this.props.agree}
                onChange={this.props.togleCheckbox}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Acepto{" "}
                <Link to="privacidad" className="text-cerevro" target="_blank">
                  Términos y condiciones
                </Link>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <button
                type="button"
                className="btn btn-cerevro btn-block"
                onClick={this.props.handleClick}
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
        {this.props.error && (
          <div className="alert alert-danger mb-0 mt-2" role="alert">
            {this.props.error}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ContactForm;
