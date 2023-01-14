import React from "react";

/* CSS */
import "./style.css";

function Feature(props) {
  return (
    <React.Fragment>
      <img src={props.img} alt={props.title} />
      <h2 className="text-cerevro mt-3 mb-0">{props.title}</h2>
      <p style={{ fontSize: "20px" }}>{props.description}</p>
    </React.Fragment>
  );
}

export default Feature;
