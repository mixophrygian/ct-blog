import React from "react";
import { Link, browserHistory } from "react-router";
import { Nav, NavItem, Navbar, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import Sidebar from 'react-sidebar';
/* https://github.com/balloob/react-sidebar */

// Menu component
export default class Menu extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {sidebarOpen: false};
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
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
        padding: '16px',
        width: '45vw',
        height: '100%',
        marginTop: '18vw',
        backgroundColor: 'white',
      },
    };
    
    const sidebarContent = (
      <div style={styles.content}>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/'}>Home</Link>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/about'}>About</Link>
        <Link style={styles.sidebarLink} onClick={this.onSetSidebarOpen} to={'/faq'}>FAQ</Link>
      </div>
    );
    
    let dynamicStyles = this.state.sidebarOpen ? 
    //so the sidebar doesn't lay on top of the UI, invisibly
      { 
        root: {
          zIndex: 1
        }
      }
       :
       {
         root: {
           zIndex: -1
        }
      };
    
    return (
        <div>
        <Navbar className="navbar-fixed-top">
          <Nav bsStyle="pills">
              <NavItem onClick={this.onSetSidebarOpen}>
                <Glyphicon glyph="align-justify"/>
              </NavItem>
            <LinkContainer to="/entry-edit">
              <NavItem>
                New <Glyphicon glyph="plus-sign"/>
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
            onSetOpen={this.onSetSidebarOpen}>
            <b>Main content</b>
          </Sidebar>
        </div>
    );
  }
}
