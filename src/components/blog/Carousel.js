import React from "react";

/* STYLES */
import "../style.css";

/* COMPONENTS */
import Post from "./Post";

class Carousel extends React.Component {
  render() {
    var i = 0;
    return (
      <React.Fragment>
        <div className="row">
          <h4 className="ml-4">{this.props.title}</h4>
        </div>
        <div className="row card-deck horizontal-scrollable">
          {this.props.posts.map((post) => {
            i += 1;
            return <Post content={post} key={post.id + i} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
