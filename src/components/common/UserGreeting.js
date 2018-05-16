import React from "react";
import PropTypes from "prop-types";

export default class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
    this.getProfile = this.getProfile.bind(this);
  }

  componentDidMount() {
    const profile = localStorage.getItem("profile");
    if (!profile) {
      this.getProfile();
    } else {
      this.setState({ profile: JSON.parse(profile) });
    }
  }

  async getProfile() {
    const profile = await this.props.auth.fetchProfile();
    this.setState({ profile });
  }

  render() {
    const { profile } = this.state;
    const nickname = profile ? profile.nickname : "";

    return <span className="user-name">Hi, {nickname}</span>;
  }
}

UserGreeting.propTypes = {
  auth: PropTypes.object,
};
