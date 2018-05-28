/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dataStore = require("./dataStore");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.get("/authenticate", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.post("/createNewUser", (request, response) => {
  dataStore
    .createNewUser({
      username: request.body.username,
    })
    .then(stuff => response.status(200).send(stuff));
});

app.post("/saveEntry", (request, response) => {
  dataStore
    .saveEntry({
      username: request.body.username,
      entry: {
        id: request.body.entry.id,
        date: request.body.entry.date,
        situation: request.body.entry.situation,
        emotionalResponse: "values.emotionalResponse",
        automaticThoughts: "values.automaticThoughts",
        cognitiveDistortions: "cognitiveDistortions",
        rationalResponse: "values.rationalResponse",
      },
    })
    .then(data => response.status(200).send(data));
});

app.listen(port, () => console.log(`Tom Servo listening on port ${port}`));
