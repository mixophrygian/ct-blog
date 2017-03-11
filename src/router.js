import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="user-edit(/:id)" component={UserEdit}/>
      <Route path="about" component={About}/>
      <Route path="faq" component={FAQ}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
