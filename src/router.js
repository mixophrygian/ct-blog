import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import EntryEdit from "./components/EntryEdit";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="entry-edit(/:id)" component={EntryEdit}/>
      <Route path="about" component={About}/>
      <Route path="faq" component={FAQ}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
