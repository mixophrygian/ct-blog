import React from "react";
import PropTypes from "prop-types";
import { Button, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { submit } from "redux-form";

class Menu extends React.Component {
  render() {
    const loginLogout = profile ? (
      <div className="logOut">
        <Button className="btn-margin logoutButton" onClick={logout}>
          Log Out
        </Button>
      </div>
    ) : (
      <Button onClick={login}>Log In</Button>
    );

    const newEntry = () => {
      return (
        <LinkContainer className="new-entry-button" to="/entry-edit">
          <div role="button">New Entry</div>
        </LinkContainer>
      );
    };

    const cancel = () => {
      return (
        <Button className="btn-margin logoutButton" onClick={this.props.cancel}>
          Cancel
        </Button>
      );
    };

    const save = () => {
      return (
        // <LinkContainer className="new-entry-button" to="/entry-edit">
        //   <div role="button">Save</div>
        // </LinkContainer>
        <Button
          className="new-entry-button"
          onClick={() => this.props.dispatch(submit("entryEdit"))}
        >
          Save
        </Button>
      );
    };

    const { profile, login, logout, isEditing } = this.props;
    return (
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <NavItem className="loginButton">
              {!isEditing && loginLogout}
              {isEditing && cancel()}
            </NavItem>
            <NavItem>
              {!isEditing && newEntry()}
              {isEditing && save()}
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
  isEditing: PropTypes.bool,
  cancel: PropTypes.func,
  dispatch: PropTypes.func,
};

export default connect()(Menu);
