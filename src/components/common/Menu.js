import React from 'react';
import { Link } from 'react-router';
import { Nav, NavItem, Navbar, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Sidebar from 'react-sidebar';
/* https://github.com/balloob/react-sidebar */

// Menu component
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
        padding: "0 15px",
        width: '45vw',
        height: '95vh',
        backgroundColor: 'white',
      },
    };

    const sidebarContent =
      <div style={styles.content}>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/'}>Home</Link>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/about'}>About</Link>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/faq'}>FAQ</Link>
      </div>

    const dynamicStyles = this.state.sidebarOpen ?
    // so the sidebar doesn't lay on top of the UI, invisibly
    {
      root: {
        position: 'fixed',
        visibility: 'visible',
        top:'10vh'
      },
      sidebar: {
        overflowY: 'hidden',
      }
    }
       :
    {
      root: {
        visibility: 'hidden',
      },
    };

    return (
      <div>
        <Navbar className="navbar-fixed-top customNav">
          <Nav bsStyle="pills">
            <NavItem onClick={this.onSetSidebarOpen}>
              <Glyphicon glyph="align-justify" />
            </NavItem>
            <LinkContainer to="/entry-edit">
              <NavItem className="edit-button">
                New <Glyphicon glyph="plus-sign" />
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Sidebar
          styles={dynamicStyles}
          sidebar={sidebarContent}
          shadow={false}
          touch={false}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          <div />
        </Sidebar>
      </div>
    );
  }
}
