import React from "react";

/* Assets */
//import heart from "../assets/icons/heart.png";
import share from "../assets/icons/share.png";

class Actions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="btn p-0 mt-3"
          data-toggle="modal"
          data-target="#modalShare"
        >
          <div className="card shadow rounded-circle p-2">
            <img
              src={share}
              alt="Cerevro share"
              height="28"
              className="mx-auto d-block"
            />
          </div>
        </button>
      </React.Fragment>
    );
  }
}

export default Actions;
