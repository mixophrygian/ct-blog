import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
// import About from "./components/About";
// import Distortions from "./components/Distortions";
// import FAQ from "./components/FAQ";
// import Home from "./components/Home";
// import EntryEdit from "./components/EntryEdit";
// import EntryView from "./components/EntryView";

const router = (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

// <Router history={history}>
//   <Route path="/" component={App}>
//     <IndexRoute component={Home} />
//     <Route path="entry-edit(/:id)" component={EntryEdit} />
//     <Route path="entry(/:id)" component={EntryView} />
//     <Route path="about" component={About} />
//     <Route path="distortions" component={Distortions} />
//     <Route path="faq" component={FAQ} />
//     <Route path="*" component={Home} />
//   </Route>
// </Router>

export { router };
