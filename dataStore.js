/* eslint-disable no-console */
const knex = require("knex")(require("./knexfileBuild"));

module.exports = {
  createNewUser({ username }) {
    console.log(`Tried adding new user ${username}`);
    return knex("users")
      .insert({
        username,
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
        console.log("Something went wrong creating a new user", e);
      });
  },
  async saveEntry({ username, entry }) {
    console.log(`Trying to save an entry to ${username}'s account'`);
    // get the user's ID from their username
    const userId = await knex
      .select("userId")
      .from("users")
      .where({ username })
      .then(obj => obj[0].userId)
      .catch(e => {
        console.log(`Something went wrong getting the userID`, e);
      });
    // insert the entry in to "entries" with the same userID
    return knex("entries")
      .insert({
        userId,
        id: entry.id,
        date: entry.date,
        situation: entry.situation,
        emotionalResponse: entry.emotionalResponse,
        automaticThoughts: entry.automaticThoughts,
        cognitiveDistortions: entry.cognitiveDistortions,
        rationalResponse: entry.rationalResponse,
      })
      .then(res => {
        console.log(`saved the entry, here's the response ${res}`);
        return JSON.stringify(res);
      })
      .catch(e => {
        if (e.code === "ER_DUP_ENTRY") {
          console.log("this entry ID already exists - update instead");
          return JSON.stringify(e.code);
        }
        console.log(`Something went wrong saving an entry: ${e}`);
        return JSON.stringify(e);
      });
  },
};
