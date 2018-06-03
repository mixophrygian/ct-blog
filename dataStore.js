/* eslint-disable no-console */
const knex = require("knex")(require("./knexfileBuild"));

module.exports = {
  createNewUser({ username }) {
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
          console.log("This user already exists.");
          return JSON.stringify(e.code);
        }
        console.log("Something went wrong creating a new user", e);
      });
  },
  async fetchEntries({ username }) {
    const userId = await knex
      .select("userId")
      .from("users")
      .where({ username })
      .then(obj => {
        return obj[0].userId;
      })
      .catch(e => {
        console.log(`Something went wrong getting the userID`, e);
      });
    return knex("entries")
      .where({
        userId,
      })
      .then(entries => {
        return entries.map(entry => {
          return {
            date: entry.date,
            id: entry.id,
            userId: entry.userId,
            situation: entry.situation,
            emotionalResponse: entry.emotionalResponse,
            automaticThoughts: entry.automaticThoughts,
            rationalResponse: entry.rationalResponse,
            cognitiveDistortions: JSON.parse(entry.cognitiveDistortions),
          };
        });
      })
      .catch(e => console.log("something went wrong grabbing all the entries", e));
  },
  deleteEntry({ entry }) {
    return knex("entries")
      .where({
        id: entry.id,
      })
      .del()
      .then(() => {
        console.log("entry was deleted");
      })
      .catch(e => console.log("something went wrong deleting the entry", e));
  },

  updateEntry(entry) {
    return knex("entries")
      .where({
        id: entry.id,
        userId: entry.userId,
      })
      .update({
        situation: entry.situation,
        emotionalResponse: entry.emotionalResponse,
        automaticThoughts: entry.automaticThoughts,
        cognitiveDistortions: entry.cognitiveDistortions,
        rationalResponse: entry.rationalResponse,
      })
      .then(() => {
        console.log("Updated the entry, hooray");
      })
      .catch(e => console.log("Something went wrong updating the entry", e));
  },

  async saveEntry({ username, entry }) {
    const userId = await knex
      .select("userId")
      .from("users")
      .where({ username })
      .then(obj => {
        return obj[0].userId;
      })
      .catch(e => {
        console.log(`Something went wrong getting the userID`, e);
      });
    const parsedEntry = {
      userId,
      id: entry.id,
      date: entry.date,
      situation: entry.situation,
      emotionalResponse: entry.emotionalResponse,
      automaticThoughts: entry.automaticThoughts,
      rationalResponse: entry.rationalResponse,
      cognitiveDistortions: JSON.stringify(entry.cognitiveDistortions),
    };
    knex("entries")
      .insert(parsedEntry)
      .then(() => {
        console.log(`Saved a new entry!`);
        return JSON.stringify(`Saved a new entry`);
      })
      .catch(e => {
        if (e.code === "ER_DUP_ENTRY") {
          this.updateEntry(parsedEntry);
          return JSON.stringify(e.code);
        }
        console.log(`Something went wrong saving an entry: ${e}`);
        return JSON.stringify(e);
      });
  },
};
