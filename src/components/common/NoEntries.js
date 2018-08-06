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
          Ideally this section will contain some kind of introduction or high level summary of this
          if you didn't fully understand the onboarding flow. Ultimately it should funnel you into
          either an explanation or a new entry. Last updated 8/05 8:58pm PST
        </p>
        <br />
        <Link className="whatIsThis" to={"/about"}>
          What is this?
        </Link>
        <br />
        <br />
      </div>
    );
  }
}
// prop checks
NoEntries.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object,
};
