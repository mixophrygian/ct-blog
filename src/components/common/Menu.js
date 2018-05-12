import React from "react";
import PropTypes from "prop-types";
import { Button, Nav, Navbar, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      isLoading: false,
    };
    this.login = this.login.bind(this);
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
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <NavItem className="loginButton">
              {!isAuthenticated() && (
                <Button onClick={!isLoading ? this.login : null} disabled={isLoading}>
                  Log In
                </Button>
              )}
              {isAuthenticated() && (
                <Button className="btn-margin" onClick={this.props.auth.logout}>
                  Log Out
                </Button>
              )}
            </NavItem>
            <NavItem>
              <LinkContainer className="new-entry-button" to="/entry-edit">
                <div role="button">
                  New <Glyphicon glyph="plus-sign" />
                </div>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  auth: PropTypes.object,
};
