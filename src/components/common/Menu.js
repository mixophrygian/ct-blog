import React from "react";
import PropTypes from "prop-types";
import { Button, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Menu extends React.Component {
  render() {
    const { profile, login, logout } = this.props;
    return (
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <NavItem className="loginButton">
              {!profile && <Button onClick={login}>Log In</Button>}
              {profile && (
                <div className="logOut">
                  <Button className="btn-margin logoutButton" onClick={logout}>
                    Log Out
                  </Button>
                </div>
              )}
            </NavItem>
            <NavItem>
              <LinkContainer className="new-entry-button" to="/entry-edit">
                <div role="button">New Entry</div>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.any,
};
