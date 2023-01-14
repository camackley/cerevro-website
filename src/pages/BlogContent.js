import React from "react";
import { Redirect } from "react-router-dom";
import parse from "html-react-parser";

/* COMPONENTS */
import Author from "../components/Author.js";
/*import Actions from "../components/Actions.js"; */
import Loading from "../components/Loading.js";
import Email from "../components/Email.js";
import Carousel from "../components/blog/Carousel.js";

/* STYLES */
import "./style.css";
import "../components/style.css";

/* UTILS */
import NetWorkHelper from "../utils/NetworkHelper";

class BlogContent extends React.Component {
  state = {
    loading: true,
    uid: null,
    data: {},
    error: null,
  };

  componentDidMount = () => {
    if (this.state.uid === null) {
      var uid = window.location.pathname.split("/")[2];
      this.getPost(uid);
    }
  };

  getPost = async (uid) => {
    NetWorkHelper()
      .httpGet("blog/" + uid)
      .then((response) => {
        document.title = "Cerevro | " + response.data.title;
        this.setState({
          data: { blog: response },
        });
        this.getRelated(this.state.data.blog.data.principal_tag);
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error,
        });
      });
  };

  getDeltaTime = (dateToEvalue) => {
    dateToEvalue = new Date(dateToEvalue * 1000);
    var dif = new Date() - dateToEvalue.getTime();
    var days = Math.round(dif / (1000 * 60 * 60 * 24));

    if (days > 360) {
      var years = Math.round(days / 360);
      return "Publicado hace " + years + " años";
    } else if (days > 30) {
      var mounths = Math.round(days / 30);
      return "Publicado hace " + mounths + " meses";
    } else if (days <= 1) {
      return "Publicado hoy";
    } else {
      return "Publicado hace " + days + " dias";
    }
  };

  getRelated = (tag) => {
    NetWorkHelper()
      .httpGet(`blog/related/${tag}`)
      .then((data) => {
        this.setState({
          loading: false,
          data: {
            ...this.state.data,
            related: data,
          },
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
      return <Redirect to="/404" />;
    }

    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 p-0 card">
              <img
                src={this.state.data.blog.data.img}
                className="d-none d-lg-block w-100 rounded-cerevro mx-auto card-img"
                height="500"
                alt={this.state.data.blog.data.title}
              />
              <div className="d-none d-lg-flex row mt-3 card-img-overlay align-items-end rounded-cerevro">
                <div className="col-1" />
                <div className="col-12 col-lg-7 text-white">
                  <h2
                    className="card-title"
                    style={{ fontSize: "50px", fontWeight: "bold" }}
                  >
                    {this.state.data.blog.data.title}
                  </h2>
                  <p className="m-0">
                    {this.getDeltaTime(this.state.data.blog.data.date)}
                  </p>
                </div>
                <div className="col-1" />
                <div className="d-none d-lg-block col-3">
                  <Author data={this.state.data.blog.author} />
                </div>
              </div>
              <img
                src={this.state.data.blog.data.img}
                className="d-block d-lg-none w-100"
                height="200"
                alt={this.state.data.blog.data.title}
              />
            </div>
          </div>
          <div className="d-block d-lg-none row mt-3">
            <div className="col-1"></div>
            <div className="col-12 col-lg-7">
              <h2
                className="text-cerevro"
                style={{ fontSize: "50px", fontWeight: "bold" }}
              >
                {this.state.data.blog.data.title}
              </h2>
              <p>{this.getDeltaTime(this.state.data.blog.data.date)}</p>
            </div>
            <div className="d-none d-lg-block col-3">
              <Author data={this.state.data.blog.author} />
            </div>
          </div>
          <div className="row">
            <div className="col-1 d-none d-lg-flex align-items-center ">
              {/* <Actions likes={this.state.data.blog.data.likes} /> */}
            </div>
            <div className="col-12 col-lg-10 mt-3 mb-1">
              {parse(this.state.data.blog.data.body)}
            </div>
          </div>
          <div className="row d-flex d-lg-none mb-2">
            <div className="col-2" />
            <div className="col-8">
              <Author data={this.state.data.blog.author} />
            </div>
            <div className="col-2">
              {/* <Actions likes={this.state.data.blog.data.likes} /> */}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-1" />
            <div className="col-12 col-lg-10">
              <div className="bg-cerevro-blue p-2 rounded-cerevro text-white">
                <Email className="" />
              </div>
            </div>
          </div>
          <div className="row m-3">
            <Carousel
              title="Más relacionados"
              posts={this.state.data.related}
            />
          </div>
        </div>

        {/* Modal share */}
        <div
          className="modal fade"
          id="modalShare"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-cerevro "
                  id="exampleModalLongTitle"
                  style={{ fontWeight: "bold" }}
                >
                  Compartelo en ...
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="fb-share-button"
                        data-href={window.location.pathname}
                        data-layout="button_count"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogContent;
