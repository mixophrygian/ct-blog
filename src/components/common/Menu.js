import PropTypes from "prop-types";
import React from "react";
import { Nav, Navbar, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <LinkContainer className="edit-button" to="/entry-edit">
              <div role="button">
                New <Glyphicon glyph="plus-sign" />
              </div>
            </LinkContainer>
          </Nav>
        </Navbar>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.node,
};
