import React from "react";

function VideoYoutube(props) {
  return (
    <div className="container-fluid d-none">
      <div className="row">
        <div className="col-10 offset-1 d-none d-lg-block p-0">
          <iframe
            title="Video ¿Que es Cerevro?"
            width="100%"
            height="500"
            src={props.url}
            frameBorder="0"
            className="rounded-cerevro"
          />
        </div>
        <div className="col-12 d-block d-lg-none p-0">
          <iframe
            title="Video ¿Que es Cerevro?"
            width="100%"
            height="300"
            src={props.url}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoYoutube;
