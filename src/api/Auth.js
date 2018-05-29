/* eslint-disable no-console, no-undef, no-unused-vars*/

import auth0 from "auth0-js";
import db from "./db.js";
import { Component } from "react";

export default class Auth extends Component {
  constructor(history) {
    super(history);
    this.auth0 = new auth0.WebAuth({
      domain: `${AUTH_DOMAIN}`,
      clientID: `${AUTH_CLIENT_ID}`,
      redirectUri: `${SERVING_URL}/authenticate`,
      audience: `${AUTH_AUDIENCE}`,
      responseType: "token id_token",
      scope: "openid profile email",
    });
    this.history = history;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.setSession = this.setSession.bind(this);
    this.fetchProfile = this.fetchProfile.bind(this);
    this.createUserOrFetchEntries = this.createUserOrFetchEntries.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("profile");
    // TODO: clear entries from localstorage as well
    this.history.replace("/");
    window.location.href = `https://${AUTH_DOMAIN}/v2/logout?returnTo=${SERVING_URL}`;
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

  fetchProfile() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("access_token");
      this.auth0.client.userInfo(token, (err, profile) => {
        if (err) reject(err);
        localStorage.setItem("profile", JSON.stringify(profile));
        resolve(profile);
      });
    });
  }

  createUserOrFetchEntries(profile) {
    db
      .callApi("/createNewUser", { username: profile.email })
      .then(data => data.json())
      .then(response => {
        /* TODO: affiliate userID with auth0 account? */
        /* TODO: tell user that the entries in localstorage now belong to their account */
        console.log("createNewUser response", response);
      });
    // TODO: fetch entries from DB for existing users
  }

  handleAuthentication(nextState) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          this.fetchProfile().then(profile => {
            this.createUserOrFetchEntries(profile);
          });
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
