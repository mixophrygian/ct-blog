/* eslint-disable no-console */
import localforage from "localforage";

const DB = {
  async secureCallApi(path, data) {
    const token = await localforage.getItem("access_token");
    return fetch(path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
  },
  createNewUser(profile) {
    return DB.secureCallApi("/createNewUser", { username: profile.email })
      .then(data => data.json())
      .then(response => {
        if (response !== "ER_DUP_ENTRY") {
          console.log("user id", response);
          //response will be the user id
          /* TODO: affiliate userID with auth0 account? */
        }
        return response;
      });
  },
  async deleteEntryFromDB(entry, auth) {
    const authenticated = await auth.isAuthenticated();
    if (!authenticated) return;
    DB.secureCallApi("/deleteEntry", {
      entry,
    }).catch(e => console.log("deleting an entry from the DB messed up", e));
  },

  async saveEntryToDB(entry, auth) {
    const authenticated = await auth.isAuthenticated();
    if (!authenticated) return;
    const profile = await localforage.getItem("profile");
    const username = profile.email;
    DB.secureCallApi("/saveEntry", {
      username,
      entry,
    }).catch(e => console.log("save entry to DB messed up", e));
  },

  async fetchEntriesFromDB(profile, auth) {
    const authenticated = await auth.isAuthenticated();
    if (!authenticated) return;
    return DB.secureCallApi("/fetchEntries", {
      username: profile.email,
    })
      .then(data => data.json())
      .catch(e => console.log("fetch entries from DB messed up", e));
  },
};

module.exports = DB;
