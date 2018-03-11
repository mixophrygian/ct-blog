import React from "react";
import { Link } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Glyphicon } from "react-bootstrap";

// User List Element component
export default class NoEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  // render

  render() {
    return (
      <div className="empty-container">
        <p className="quote">
          [Last updated: 3/10 7:30pm - fix side menu / smooth scrolling - hide splash after first
          time, no flash of wrong content, no landscape or non-mobile garbage
        </p>
        <p className="quote">
          TODO: break out new entry page into sections, fix scroll-to-top on navigation, add
          pre-onboarding splash animation, iterate on a few colored prototypes, iterate on copy]
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
