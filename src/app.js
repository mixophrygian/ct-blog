require("babel-polyfill");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { router } from "./router.js";

const App = () => {
  return <Provider store={store}>{router}</Provider>;
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
