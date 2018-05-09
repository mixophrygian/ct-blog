// src/Loader.js

import React, { Component } from "react";
import loadingSpinner from "../art/LoadingSpinner.svg";

class Loader extends Component {
  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      backgroundColor: "rgba(137,137,137,0.21)",
      zIndex: 1,
    };

    const spinnerStyle = {
      width: "50vw",
      height: "25vw",
    };

    return (
      <div style={style}>
        <img style={spinnerStyle} src={loadingSpinner} alt="loading" />
      </div>
    );
  }
}

export default Loader;
