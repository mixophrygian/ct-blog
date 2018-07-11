import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import EntryList from "./common/EntryList";
import UserGreeting from "./common/UserGreeting";
import SplashAndOnboarding from "./SplashAndOnboarding";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: false,
    };
    this.hideSplash = this.hideSplash.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entries.length || nextProps.onboarded) {
      this.hideSplash();
    } else {
      this.showSplash();
    }
  }
  componentDidMount() {
    if (this.props.history) {
      this.props.history.replace("/");
    }
    if (this.props.onboarded) {
      this.hideSplash();
    } else {
      this.showSplash();
    }
  }

  showSplash() {
    this.setState({ showSplash: true });
  }

  hideSplash() {
    this.setState({ showSplash: false });
    if (!this.props.onboarded) {
      this.props.dispatch({ type: "MARK_AS_ONBOARDED" });
    }
  }

  render() {
    const { profile } = this.props;
    return this.state.showSplash ? (
      <SplashAndOnboarding hide={this.hideSplash} />
    ) : (
      <div className="page-home page">
        {profile && <UserGreeting profile={profile} />}
        <EntryList {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.any,
  entries: PropTypes.any,
  dispatch: PropTypes.func,
  onboarded: PropTypes.any,
  profile: PropTypes.any,
};

function mapStateToProps(state) {
  return {
    entries: state.entries,
    onboarded: state.onboarded,
    profile: state.profile,
  };
}
export default connect(mapStateToProps)(Home);
