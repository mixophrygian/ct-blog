import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Glyphicon } from "react-bootstrap";

export default class NoEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="empty-container">
        <p className="quote">
          [Last updated: 3/20 1:30pm - still working on deep links reloads... Chrome iOS still
          wonky...
        </p>
        <p className="quote">
          TODO: break out new entry page into sections, iterate on a few colored prototypes, iterate
          on copy]
        </p>
        <Link to={"/about"}>What is this?</Link>
        <br />
        <br />
        <LinkContainer className="btn btn-default edit-button cta" to="/entry-edit">
          <div>
            New Entry <Glyphicon glyph="plus-sign" />
          </div>
        </LinkContainer>
      </div>
    );
  }
}
// prop checks
NoEntries.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object,
};
