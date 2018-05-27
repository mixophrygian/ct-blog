/* eslint-disable no-console */
const knex = require("knex")(require("./knexfileBuild"));

module.exports = {
  createNewUser({ username, password }) {
    console.log(`Tried adding new user ${username} with password ${password}`);
    return knex("user")
      .insert({
        username,
        password,
      })
      .then(() => {
        console.log(`New user ${username} successfully added`);
        return JSON.stringify(username);
      })
      .catch(e => {
        if (e.code === "ER_DUP_ENTRY") {
          console.log("this user has already been created");
          return JSON.stringify(e.code);
        }
      });
  },
};
