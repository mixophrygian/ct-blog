/* eslint-disable no-console */
const knex = require("knex")(require("./knexfileBuild"));

module.exports = {
  createUser({ username, password }) {
    console.log(`Add user ${username} with password ${password}`);
    return knex("user")
      .insert({
        username,
        password,
      })
      .catch(e => {
        if (e.code === "ER_DUP_ENTRY") {
          console.log("this user has already been created");
          return JSON.stringify(e.code);
        }
      });
  },
};
