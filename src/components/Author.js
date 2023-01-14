import React from "react";

/* Assets */
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/linkedin.png";

class Author extends React.Component {
  render() {
    return (
      <div className="card shadow rounded-cerevro p-1">
        <div className="container">
          <div className="row ">
            <div className="col">
              <h5 className="text-center mb-0 mt-1">{this.props.data.name}</h5>
            </div>
          </div>
          <div className="row m-auto justify-content-center">
            {this.props.data.socialMedia.facebook && (
              <div className="col-3 p-0">
                <a
                  href={this.props.data.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt={"facebook de " + this.props.data.name}
                    width="45"
                  />
                </a>
              </div>
            )}
            {this.props.data.socialMedia.instagram && (
              <div className="col-3 p-0">
                <a
                  href={this.props.data.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt={"instagram de " + this.props.data.name}
                    width="45"
                  />
                </a>
              </div>
            )}
            {this.props.data.socialMedia.twitter && (
              <div className="col-3 p-0">
                <a
                  href={this.props.data.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt={"twitter de " + this.props.data.name}
                    width="45"
                  />
                </a>
              </div>
            )}
            {this.props.data.socialMedia.linkedin && (
              <div className="col-3 p-0">
                <a
                  href={this.props.data.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt={"linkedin de " + this.props.data.name}
                    width="45"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Author;
