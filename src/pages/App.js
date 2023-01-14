import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* COMPONENTS */
import Layout from "../components/Layout.js";

import Home from "./Home.js";
import Login from "./Login.js";
import Blog from "./Blog.js";
import BlogContent from "./BlogContent.js";
import Contact from "./Contact.js";
import CommissionAgents from "./CommissionAgents.js";
import NotFound from "./NotFoud.js";
import ThanksYou from "./ThanksYou.js";
import Privacity from "./Privacity.js";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/*" component={BlogContent} />
          <Route exact path="/comisionistas" component={CommissionAgents} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/gracias" component={ThanksYou} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/privacidad" component={Privacity} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
