/* eslint-disable no-console */

import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.auth0 = new auth0.WebAuth({
      domain: "automaticthoughtjournal.auth0.com",
      clientID: "W8fK0U44WoTIr2VCsGN4n6hhKiu2YtUA",
      redirectUri: "http://localhost:3000/authenticate",
      audience: "https://automaticthoughtjournal.auth0.com/userinfo",
      responseType: "token id_token",
      scope: "openid",
    });
    this.history = history;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.setSession = this.setSession.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.history.replace("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    this.history.replace("/");
  }

  handleAuthentication(nextState) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        } else if (err) {
          this.history.replace("/");
          console.log(err);
        }
      });
    } else {
      console.log("something went wrong handling authentication");
    }
  }
}
