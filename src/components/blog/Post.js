import React from "react";
import { Link } from "react-router-dom";

/* STYLES */
import "../style.css";

/* COMPONENTS */

class Post extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-3">
        <div className="card rounded-cerevro shadow">
          <img
            src={this.props.content.data.img}
            className="card-img-top rounded-cerevro"
            alt={this.props.content.data.title}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.content.data.title}</h5>
            <p className="card-text">{this.props.content.data.summary}</p>
            <Link
              to={"blog/" + this.props.content.id}
              className="btn btn-cerevro"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
