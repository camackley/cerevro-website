import React from "react";
import Loading from "../components/Loading.js";

/* STYLES */
import "./style.css";

/* COMPONENTS */
import Carousel from "../components/blog/Carousel.js";

/* UTILS */
import NetWorkHelper from "../utils/NetworkHelper";

class Blog extends React.Component {
  state = {
    loading: true,
    data: {},
    error: null,
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    document.title = "Cerevro | Blog";
    this.getTrending();
  }

  getTrending = () => {
    NetWorkHelper()
      .httpGet("blog/trending")
      .then((data) => {
        this.setState({
          loading: false,
          data: { trending: data },
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error,
        });
      });
  };

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }

    if (this.state.error !== null) {
      return <h1>{this.state.error.message}</h1>;
    }
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-12 col-md-2">
            <h2 className="ml-md-3">Blog</h2>
          </div>
          <div className="col-7" />
          <div className="col-12 col-md-3 input-group">
            <input
              name="search"
              type="text"
              className="form-control mr-md-3"
              placeholder="Buscar..."
              onChange={this.handleChange}
            />
          </div>
        </div>
        <br />
        <Carousel title="Tendencias" posts={this.state.data.trending} />
      </div>
    );
  }
}

export default Blog;
