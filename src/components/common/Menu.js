import React, { PropTypes } from 'react';
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
        marginTop: '10vh',
        height: '90vh',
        backgroundColor: 'white',
      },
    };

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
            <LinkContainer to="/entry-edit">
              <NavItem className="edit-button">
                New <Glyphicon glyph="plus-sign" />
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Sidebar
          sidebar={sidebarContent}
          shadow={false}
          touch={false}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          {this.props.children}
        </Sidebar>
      </div>
    );
  }
}

Menu.propTypes = {
    children: PropTypes.node,
}
