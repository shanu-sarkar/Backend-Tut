require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("index");
});
app.get("/twitter", (req, res) => {
  res.send("Hello Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Jai Shree Ram</h1>");
});
app.get("/github", (req, res) => {
  res.send("https://www.google.com");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
