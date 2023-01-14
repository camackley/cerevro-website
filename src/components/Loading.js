import React from "react";
import loading from "../assets/loading.gif";
//import "./styles/PageLoading.css";

function Loading() {
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-12 text-center">
          <img src={loading} alt="loading cerevro" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
