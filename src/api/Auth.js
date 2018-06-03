/* eslint-disable no-console, no-undef, no-unused-vars*/

import auth0 from "auth0-js";
import db from "./db.js";
import localEntries from "./entries.js";
import localforage from "localforage";
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
    this.promptInheritEntries = this.promptInheritEntries.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    const removeAccessToken = localforage.removeItem("access_token");
    const removeID = localforage.removeItem("id_token");
    const removeExpiresAt = localforage.removeItem("expires_at");
    const removeProfile = localforage.removeItem("profile");
    const removeEntries = localforage.removeItem("entries");
    Promise.all([removeAccessToken, removeID, removeExpiresAt, removeProfile, removeEntries])
      .then(() => {
        this.history.replace("/");
        window.location.href = `https://${AUTH_DOMAIN}/v2/logout?returnTo=${SERVING_URL}`;
      })
      .catch(e => console.log("problem clearing local storage on logout", e));
  }

  async isAuthenticated() {
    const expiresAt = await localforage
      .getItem("expires_at")
      .catch(e => console.log("something went wrong getting expires at token"));
    if (!expiresAt) return false;
    const expiresAtParsed = JSON.parse(expiresAt);
    return new Date().getTime() < expiresAtParsed;
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    const accessToken = localforage.setItem("access_token", authResult.accessToken);
    const idToken = localforage.setItem("id_token", authResult.idToken);
    const expiresAtValue = localforage.setItem("expires_at", expiresAt);
    return Promise.all([accessToken, idToken, expiresAtValue])
      .then(() => {
        this.history.replace("/");
      })
      .catch(e => console.log("problem setting the session data"));
  }

  fetchProfile(dispatch) {
    return new Promise(async (resolve, reject) => {
      const token = await localforage.getItem("access_token");
      this.auth0.client.userInfo(token, (err, profile) => {
        if (err) reject(err);
        dispatch({ type: "SET_USER_PROFILE", profile });
        localforage.setItem("profile", profile);
        resolve(profile);
      });
    });
  }

  async promptInheritEntries() {
    const orphanedEntries = await localEntries.getEntries();
    if (orphanedEntries.length) {
      console.log("orphaned entries found", orphanedEntries);
      orphanedEntries.forEach(entry => db.saveEntryToDB(entry, this));
      /* TODO: tell user that the entries in localstorage now belong to their account */
      console.log("hi user, these entries now belong to you");
    }
  }

  createUserOrFetchEntries(profile, dispatch) {
    db
      .createNewUser(profile)
      .then(res => {
        this.promptInheritEntries();
        return res;
      })
      .then(data => {
        // ER_DUP_ENTRY means a returning user
        if (data === "ER_DUP_ENTRY") {
          db
            .fetchEntriesFromDB(profile, this)
            .then(async entries => {
              // add any entries to redux /localforage
              await localEntries.saveEntries(entries);
            })
            .then(() => {
              // tell the components we got some entries
              dispatch({ type: "ENTRIES_FETCH_LIST" });
            })
            .catch(e => console.log("something went wrong fetching user entries from db", e));
        }
      });
  }

  handleAuthentication(nextState, dispatch) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult).then(() => {
            this.fetchProfile(dispatch).then(profile => {
              this.createUserOrFetchEntries(profile, dispatch);
            });
          });
        } else if (err) {
          this.history.replace("/");
          console.log("something bogus about authenticating", err);
        }
      });
    } else {
      console.log("something went wrong handling authentication");
    }
  }
}
