import React from "react";
import PropTypes from "prop-types";
import { Button, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { submit } from "redux-form";

class Menu extends React.Component {
  render() {
    const { isEditing, isViewingEntry, entryID, profile, login, logout } = this.props;
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

    const edit = () => {
      return (
        <LinkContainer className="editButton" to={`/entry-edit/${entryID}`}>
          <div role="button">Edit</div>
        </LinkContainer>
      );
    };

    const save = () => {
      return (
        <Button
          className="new-entry-button"
          onClick={() => this.props.dispatch(submit("entryEdit"))}
        >
          Save
        </Button>
      );
    };

    return (
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <NavItem className="loginButton">
              {!isEditing && !isViewingEntry && loginLogout}
              {isEditing && cancel()}
            </NavItem>
            <NavItem>
              {!isEditing && !isViewingEntry && newEntry()}
              {isViewingEntry && edit()}
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
  isViewingEntry: PropTypes.bool,
  isEditingEntry: PropTypes.bool,
  cancel: PropTypes.func,
  entryID: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect()(Menu);
