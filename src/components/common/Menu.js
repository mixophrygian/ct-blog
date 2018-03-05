import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Nav, NavItem, Navbar, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Sidebar from 'react-sidebar';
/* https://github.com/balloob/react-sidebar */

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    const styles = {
      sidebar: {
        width: 256,
        height: '100%',
      },
      sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none',
      },
      divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575',
      },
      content: {
        padding: "0 10%",
        width: '45vw',
        maxWidth: '300px',
        marginTop: '10vh',
        height: '90vh',
        backgroundColor: 'white',
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch'
      },
    };

    const content = {
      content: {
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch'
      }
    }

    const sidebarContent =
      <div style={styles.content}>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/'}>Home</Link>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/about'}>What is this?</Link>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/distortions'}>Distortions</Link>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/faq'}>FAQ</Link>
      </div>

    return (
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <NavItem onClick={this.onSetSidebarOpen}>
              <Glyphicon glyph="align-justify" />
            </NavItem>
            <LinkContainer className="edit-button" to="/entry-edit">
              <div role="button">
                New <Glyphicon glyph="plus-sign" />
               </div>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Sidebar
          sidebar={sidebarContent}
          shadow={false}
          touch={false}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          style={content}
        >
          <div>
            {this.props.children}
          </div>
        </Sidebar>
      </div>
    );
  }
}

Menu.propTypes = {
    children: PropTypes.node,
}

