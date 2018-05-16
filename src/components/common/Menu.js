import React from "react";
import PropTypes from "prop-types";
import { Button, Nav, Navbar, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";
import UserGreeting from "./UserGreeting";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      isLoading: false,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.setState({ isLoading: true }, () => this.props.auth.login());
  }

  logout(e) {
    e.preventDefault();
    this.props.auth.logout();
  }

  render() {
    const { isLoading } = this.state;
    const isAuthenticated = this.props.auth.isAuthenticated();
    if (isLoading) return <Loader />;

    return (
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <NavItem className="loginButton">
              {!isAuthenticated && (
                <Button onClick={!isLoading ? this.login : null} disabled={isLoading}>
                  Log In
                </Button>
              )}
              {isAuthenticated && (
                <div>
                  <UserGreeting auth={this.props.auth} />
                  <Button className="btn-margin" onClick={this.logout}>
                    Log Out
                  </Button>
                </div>
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
