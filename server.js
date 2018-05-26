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

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.get("/authenticate", (request, response) => {
  response.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.post("/createUser", (req, res) => {
  dataStore
    .createUser({
      username: req.body.username,
      password: req.body.password,
    })
    .then(stuff => res.status(200).send(stuff));
});

app.listen(port, () => console.log(`Tom Servo listening on port ${port}`));
