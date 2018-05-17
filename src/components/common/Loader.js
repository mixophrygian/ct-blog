// src/Loader.js

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const load8 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
     position: absolute;
     top: calc(50% - 3em);
     left: calc(50% - 3em);
     width: 6em;
     height: 6em;
     border: 1.1em solid rgba(0, 0, 0, 0.2);
     border-left: 1.1em solid #000000;
     border-radius: 50%;
     animation: ${load8} 1.1s infinite linear;
    }
  `;

class Loader extends Component {
  render() {
    const wrapperStyle = {
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

    return (
      <div alt="loading" style={wrapperStyle}>
        <Spinner />
      </div>
    );
  }
}

export default Loader;
