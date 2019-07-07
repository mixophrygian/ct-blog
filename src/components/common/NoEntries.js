import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class NoEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="empty-container">
        <h3>Welcome</h3>
        <br />
        <p className="quote">
          This micro blog was created to be used as a companion tool for the book{" "}
          <b>Feeling Good</b>
          {} by David Burns. In this book he outlines an exercize in which someone who has
          experienced an automatic thought can methodically break it down into manageable pieces.{" "}
        </p>
        <br />
        <Link className="link" to={"/about"}>
          How do I use this?
        </Link>
        <br />
        <br />
        <h4>Update - 7/04/19</h4>
        <p>
          Thanks for using the prototype of the Automatic Thought Journal! This website will go away
          on <b>September 1st, 2019</b>. If you'd like to continue using it locally, the code is
          open sourced on <a href="https://github.com/mixophrygian/ct-blog">Github</a>
        </p>
        <br />
        <p>Last updated: July 7th, 2019</p>
      </div>
    );
  }
}
// prop checks
NoEntries.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object,
};
