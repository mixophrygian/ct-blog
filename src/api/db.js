/* eslint-disable no-console */
import localforage from "localforage";

module.exports = {
  async callApi(path, data) {
    return fetch(path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  createNewUser(profile) {
    return this.callApi("/createNewUser", { username: profile.email })
      .then(data => data.json())
      .then(response => {
        if (response !== "ER_DUP_ENTRY") {
          //response will be the user email "eweigert@gmail.com"
          /* TODO: affiliate userID with auth0 account? */
        }
        return response;
      });
  },
  async deleteEntryFromDB(entry, auth) {
    const authenticated = await auth.isAuthenticated();
    if (!authenticated) return;
    this.callApi("/deleteEntry", {
      entry,
    }).catch(e => console.log("deleting an entry from the DB messed up", e));
  },
  async saveEntryToDB(entry, auth) {
    const authenticated = await auth.isAuthenticated();
    if (!authenticated) return;
    const profile = await localforage.getItem("profile");
    const username = profile.email;
    this.callApi("/saveEntry", {
      username,
      entry,
    }).catch(e => console.log("save entry to DB messed up", e));
  },
};
