import PropTypes from "prop-types";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./common/Menu";
import About from "./About";
import Distortions from "./Distortions";
import FAQ from "./FAQ";
import Home from "./Home";
import EntryEdit from "./EntryEdit";
import EntryView from "./EntryView";
import Loader from "./common/Loader";
import Auth from "../api/Auth.js";

import "../stylesheets/main.scss";
import localforage from "localforage";
import { isLoadingAsync } from "../utils/utils";
import { slide as BurgerMenu } from "react-burger-menu";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      sidebarOpen: false,
    };
    this.auth = new Auth(props.history);
    this.onToggleSidebar = this.onToggleSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  onToggleSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  closeSidebar() {
    this.setState({ sidebarOpen: false });
  }

  componentWillMount() {
    localforage.config({ name: "Automatic Thought Journal" });
    this.props.dispatch({
      type: "ENTRIES_FETCH_LIST",
    });
    this.props.dispatch({
      type: "CHECK_IF_ONBOARDED",
    });
  }

  componentWillReceiveProps(nextProps) {
    const hasEnoughStateToLoad =
      !isLoadingAsync(nextProps.entries) && !isLoadingAsync(nextProps.onboarded);
    if (hasEnoughStateToLoad) {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    if (isLoadingAsync(this.props.entries)) return;
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    scrollToTop();

    const styles = {
      sidebarLink: {
        display: "block",
        padding: "16px 0px",
        color: "#757575",
        textDecoration: "none",
      },
      content: {
        padding: "10%",
        height: "100%",
        backgroundColor: "white",
      },
    };

    const sidebarContent = (
      <div style={styles.content}>
        <Link style={styles.sidebarLink} onClick={this.closeSidebar} to={"/"}>
          Home
        </Link>
        <Link style={styles.sidebarLink} onClick={this.closeSidebar} to={"/about"}>
          What is this?
        </Link>
        <Link style={styles.sidebarLink} onClick={this.closeSidebar} to={"/distortions"}>
          Distortions
        </Link>
        <Link style={styles.sidebarLink} onClick={this.closeSidebar} to={"/faq"}>
          FAQ
        </Link>
      </div>
    );

    return (
      <div className="mainWrapper">
        <BurgerMenu isOpen={this.state.sidebarOpen} width={"45vw"}>
          {sidebarContent}
        </BurgerMenu>
        <div className="container">
          <div>
            <Menu openSidebar={this.onToggleSidebar} />
          </div>
          <Switch>
            <Route exact path="/" render={props => <Home auth={this.auth} {...props} />} />
            <Route path="/entry/:id" component={EntryView} />
            <Route exact path="/entry-edit" component={EntryEdit} />
            <Route path="/entry-edit/:id" component={EntryEdit} />
            <Route path="/about" component={About} />
            <Route path="/distortions" component={Distortions} />
            <Route path="/faq" component={FAQ} />
            <Route
              path="/callback"
              render={props => {
                this.auth.handleAuthentication(props);
                return <Loader {...props} />;
              }}
            />
            <Route render={props => <Home auth={this.auth} {...props} />} />
          </Switch>
        </div>
        <div className="plzNoLandscape">We think you'll like this better in portrait mode.</div>
      </div>
    );
  }
}

function scrollToTop() {
  window.scrollTo(0, 1);
}

function mapStateToProps(state) {
  return {
    entries: state.entries || [],
    onboarded: state.onboarded,
  };
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  entries: PropTypes.any,
  onboarded: PropTypes.any,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(App);
