import React, { PropTypes } from "react";
import EntryList from "./common/EntryList";
import SplashAndOnboarding from "./SplashAndOnboarding";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: false,
      loading: true,
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
    browserHistory.replace("/");
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
    return this.state.showSplash ? (
      <SplashAndOnboarding hide={this.hideSplash} />
    ) : (
      <div className="page-home page">
        <EntryList />
      </div>
    );
  }
}

Home.propTypes = {
  entries: PropTypes.any,
  dispatch: PropTypes.func,
  onboarded: PropTypes.any,
};

function mapStateToProps(state) {
  return {
    entries: state.entries,
    onboarded: state.onboarded,
  };
}
export default connect(mapStateToProps)(Home);
