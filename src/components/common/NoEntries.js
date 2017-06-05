import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem, Glyphicon } from 'react-bootstrap';

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
        "Your thoughts create your emotions; therefore, your emotions cannot prove that your thoughts are accurate."
        -David Burns</p>
        <Link to={'/about'}>What is this?</Link>
        <br/>
        <br/>
        <LinkContainer to="/entry-edit">
          <NavItem className="edit-button cta">
            New Entry <Glyphicon glyph="plus-sign" />
          </NavItem>
        </LinkContainer>
      </div>
    );
  }
}
