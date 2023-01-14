import React from "react";

/* CSS */
import "./style.css";

function FloatingActionButton(props) {
  return (
    <React.Fragment>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-floating"
      >
        <img src={props.icon} alt={props.url} />
      </a>
    </React.Fragment>
  );
}

export default FloatingActionButton;
