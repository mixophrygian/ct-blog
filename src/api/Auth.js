//Auth

// src/api/Auth.js

import auth0 from "auth0-js";

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "automaticthoughtjournal.auth0.com",
      clientID: "W8fK0U44WoTIr2VCsGN4n6hhKiu2YtUA",
      redirectUri: "http://localhost:3000/callback",
      audience: "https://automaticthoughtjournal.auth0.com/userinfo",
      responseType: "token id_token",
      scope: "openid",
    });
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
}
