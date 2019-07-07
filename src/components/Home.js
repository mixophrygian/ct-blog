import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import EntryList from "./common/EntryList";
import UserGreeting from "./common/UserGreeting";
import SplashAndOnboarding from "./SplashAndOnboarding";
import NoticeOfSunset from "./common/NoticeOfSunset";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: false,
      showSunset: false,
    };
    this.hideSplash = this.hideSplash.bind(this);
    this.hideSunset = this.hideSunset.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entries.length || nextProps.onboarded) {
      this.hideSplash();
    } else {
      this.showSplash();
    }
    if (nextProps.notifiedOfSunset) {
      this.hideSunset();
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
    if (!this.props.notifiedOfSunset) {
      this.showSunset();
    }
  }

  showSplash() {
    this.setState({ showSplash: true });
  }
  showSunset() {
    this.setState({ showSunset: true });
  }

  hideSplash() {
    this.setState({ showSplash: false });
    if (!this.props.onboarded) {
      this.props.dispatch({ type: "MARK_AS_ONBOARDED" });
    }
  }

  hideSunset() {
    this.setState({ showSunset: false });
    if (!this.props.notifiedOfSunset) {
      this.props.dispatch({ type: "SHOWN_SUNSET" });
      setTimeout(() => {
        this.props.dispatch({ type: "RENEW_SUNSET_NOTICE" });
      }, 1200000);
    }
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        {this.state.showSplash && <SplashAndOnboarding hide={this.hideSplash} />}
        <div className="page-home page">
          {profile && <UserGreeting profile={profile} />}
          <EntryList {...this.props} />
          <NoticeOfSunset
            show={this.state.showSunset}
            hidePrompt={this.hideSunset}
            confirmAction={this.hideSunset}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.any,
  entries: PropTypes.any,
  dispatch: PropTypes.func,
  onboarded: PropTypes.any,
  notifiedOfSunset: PropTypes.any,
  profile: PropTypes.any,
};

function mapStateToProps(state) {
  return {
    entries: state.entries,
    onboarded: state.onboarded,
    notifiedOfSunset: state.notifiedOfSunset,
    profile: state.profile,
  };
}
export default connect(mapStateToProps)(Home);
