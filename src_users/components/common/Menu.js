import React from "react";
import { Nav, NavItem, Navbar, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
        <Navbar className="navbar-fixed-top">
          <Nav bsStyle="pills">
              <NavItem>
                <Glyphicon glyph="align-justify"/>
              </NavItem>
            <LinkContainer to="/user-edit">
              <NavItem>
                New <Glyphicon glyph="plus-sign"/>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
    );
  }
}
