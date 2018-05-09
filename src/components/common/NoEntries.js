import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import Loader from "./Loader";

export default class NoEntries extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      isLoading: false,
    };
  }

  login(e) {
    e.preventDefault();
    this.setState({ isLoading: true }, () => this.props.auth.login());
  }

  render() {
    const { isLoading } = this.state;
    const { isAuthenticated } = this.props.auth;
    if (isLoading) return <Loader />;
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
        {!isAuthenticated() && (
          <Button bsStyle="success" onClick={!isLoading ? this.login : null} disabled={isLoading}>
            Log In!
          </Button>
        )}
        {isAuthenticated() && (
          <Button bsStyle="primary" className="btn-margin" onClick={this.props.auth.logout}>
            Log Out
          </Button>
        )}
        {/*}
        <LinkContainer className="btn btn-default edit-button cta" to="/entry-edit">
          <div>
            New Entry <Glyphicon glyph="plus-sign" />
          </div>
        </LinkContainer>
        */}
      </div>
    );
  }
}
// prop checks
NoEntries.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object,
};
