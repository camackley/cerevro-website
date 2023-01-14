import React from "react";

import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

function Layout(props) {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
