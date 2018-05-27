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
      password: request.body.password,
    })
    .then(stuff => response.status(200).send(stuff));
});

app.listen(port, () => console.log(`Tom Servo listening on port ${port}`));
