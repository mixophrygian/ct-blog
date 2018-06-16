import PropTypes from "prop-types";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import localforage from "localforage";
import Auth from "../api/Auth.js";

import Loader from "./common/Loader";
import Menu from "./common/Menu";
import { slide as BurgerMenu } from "react-burger-menu";
import About from "./About";
import Distortions from "./Distortions";
import FAQ from "./FAQ";
import Home from "./Home";
import EntryEdit from "./EntryEdit";
import EntryView from "./EntryView";

import "../stylesheets/main.scss";

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
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getEntry = this.getEntry.bind(this);
  }

  componentWillMount() {
    localforage.config({ name: "Automatic Thought Journal" });
    this.props.dispatch({
      type: "ENTRIES_FETCH_LIST",
    });
    this.props.dispatch({
      type: "CHECK_IF_ONBOARDED",
    });
    this.props.dispatch({
      type: "GET_USER_PROFILE",
    });
  }

  async componentDidMount() {
    this.setState({ isLoading: false });
  }

  async getProfile() {
    const profile = await this.auth.fetchProfile();
    this.setState({ profile });
  }

  login(e) {
    e.preventDefault();
    this.setState({ isLoading: true }, () => this.auth.login());
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
  }

  onToggleSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  closeSidebar() {
    this.setState({ sidebarOpen: false });
  }

  getEntry(matchParamsId) {
    // eslint-disable-next-line eqeqeq
    return this.props.entries.find(entry => entry.id == matchParamsId);
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
            <Menu login={this.login} logout={this.logout} profile={this.props.profile} />
          </div>
          <Switch>
            <Route exact path="/" render={props => <Home auth={this.auth} {...props} />} />
            <Route
              path="/entry/:id"
              render={props => {
                if (!this.props.entries.length) return <Loader />;
                const entry = this.getEntry(props.match.params.id);
                return <EntryView auth={this.auth} {...props} entry={entry} />;
              }}
            />
            <Route
              exact
              path="/entry-edit"
              render={props => <EntryEdit auth={this.auth} {...props} />}
            />
            <Route
              path="/entry-edit/:id"
              render={props => {
                if (!this.props.entries.length) return <Loader />;
                const entry = this.getEntry(props.match.params.id);
                return <EntryEdit auth={this.auth} {...props} entry={entry} />;
              }}
            />
            <Route path="/about" component={About} />
            <Route path="/distortions" component={Distortions} />
            <Route path="/faq" component={FAQ} />
            <Route
              exact
              path="/authenticate"
              render={props => {
                this.auth.handleAuthentication(props, this.props.dispatch);
                return <Loader />;
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
    profile: state.profile,
    entries: state.entries,
    onboarded: state.onboarded,
  };
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  profile: PropTypes.any,
  entries: PropTypes.any,
  onboarded: PropTypes.any,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(App);
