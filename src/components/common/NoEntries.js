import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Glyphicon } from 'react-bootstrap';

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
          [Last updated: 2/24 5:45pm
           - mobile wireframe layout. Looks terrible on anything bigger than a phone!
        </p>
        <p className="quote">
           TODO: break out new entry page into sections,
            add pre-onboarding splash animation,
             iterate on a few colored prototypes,
              iterate on copy]
        </p>
        <Link to={'/about'}>What is this?</Link>
        <br/>
        <br/>
        <LinkContainer className="btn btn-default edit-button cta" to="/entry-edit">
        <div>
           New Entry <Glyphicon glyph="plus-sign" />
           </div>
        </LinkContainer>
      </div>
    );
  }
}
