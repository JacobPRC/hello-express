const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

app.get("/alien", (req, res) => res.send("Welcome to our planet!"));

app.listen("9000", (req, res) => console.log("Running"));
