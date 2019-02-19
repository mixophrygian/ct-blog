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
        <h4>Welcome</h4>
        <p className="quote">
          This micro blog was created to be used as a companion tool for the book{" "}
          <b>Feeling Good</b>
          {} by David Burns. In this book he outlines an exercize in which someone who has
          experienced an automatic thought can methodically break it down into manageable pieces.{" "}
        </p>
        <br />
        <Link className="whatIsThis" to={"/about"}>
          How do I use this?
        </Link>
        <br />
        <br />
        <p> Last updated 2/18/19 8:10pm PST</p>
      </div>
    );
  }
}
// prop checks
NoEntries.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object,
};
