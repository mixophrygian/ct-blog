/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dataStore = require("./dataStore");
const dotenv = require("dotenv");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://automaticthoughtjournal.auth0.com/.well-known/jwks.json",
  }),
  audience: app.get("API_IDENTIFIER"),
  issuer: app.get("ISSUER"),
  algorithms: ["RS256"],
});

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.get("/authenticate", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.post("/createNewUser", jwtCheck, (request, response) => {
  dataStore
    .createNewUser({
      username: request.body.username,
    })
    .then(stuff => response.status(200).send(stuff));
});

app.post("/fetchEntries", jwtCheck, (request, response) => {
  dataStore
    .fetchEntries({
      username: request.body.username,
    })
    .then(stuff => response.status(200).send(stuff));
});

app.post("/saveEntry", jwtCheck, (request, response) => {
  dataStore
    .saveEntry({
      username: request.body.username,
      entry: request.body.entry,
    })
    .then(data => response.status(200).send(data));
});

app.post("/deleteEntry", jwtCheck, (request, response) => {
  dataStore
    .deleteEntry({
      entry: request.body.entry,
    })
    .then(data => response.status(200).send(data));
});

app.listen(port, () => console.log(`Tom Servo listening on port ${port}`));
