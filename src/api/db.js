/* eslint-disable no-console */

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

  deleteEntryFromDB(entry, auth) {
    if (!auth.isAuthenticated()) return;

    this.callApi("/deleteEntry", {
      entry,
    }).catch(e => console.log("deleting an entry from the DB messed up", e));
  },
  saveEntryToDB(entry, auth) {
    if (!auth.isAuthenticated()) return;
    const username = JSON.parse(localStorage.getItem("profile")).email;
    this.callApi("/saveEntry", {
      username,
      entry,
    }).catch(e => console.log("save entry to DB messed up", e));
  },
};
