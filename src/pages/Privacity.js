import React from "react";
import parse from "html-react-parser";

/*Styles  */
import "./style.css";
import "../components/style.css";

/* Import */
import Loading from "../components/Loading.js";

/* Utils */
import NetWorkHelper from "../utils/NetworkHelper.js";

class Privacity extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: undefined,
  };

  componentDidMount() {
    document.title = "Cerevro | Privacidad";
    this.getPrivacity();
  }

  getPrivacity() {
    NetWorkHelper()
      .fetchData("privacidad")
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return parse(this.state.data);
  }
}

export default Privacity;
