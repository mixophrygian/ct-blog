import React from "react";
import PropTypes from "prop-types";

export default class UserGreeting extends React.Component {
  render() {
    const { profile } = this.props;
    const nickname = profile ? profile.name : "";

    return <span className="user-name">Welcome back, {nickname}</span>;
  }
}

UserGreeting.propTypes = {
  profile: PropTypes.object,
};
