const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome Home");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact Us");
});

app.get("/api/users", (req, res) => {
  res.status(200).send(["paul", "timothy"]);
});

app.all("/*splat", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
