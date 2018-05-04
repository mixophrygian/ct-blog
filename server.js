/* eslint-disable no-console */
const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.listen(port, () => console.log(`Tom Servo listening on port ${port}`));
