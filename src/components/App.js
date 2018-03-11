import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Menu from "./common/Menu";
import { Link } from "react-router";
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
    const { children } = this.props;
    if (isLoading) {
      return null;
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
            <Menu openSidebar={this.onToggleSidebar} children={children} />
          </div>
        </div>
        <div className="plzNoLandscape">We think you'll like this better in portrait mode.</div>
      </div>
    );
  }
}

function scrollToTop() {
  // hack due to crazy component heights due to the sidebar library due to poor choices
  const parent = document.getElementsByClassName("page")[0];
  if (parent) {
    parent.parentElement.scrollTo(0, 1);
  }
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
};

export default connect(mapStateToProps)(App);
