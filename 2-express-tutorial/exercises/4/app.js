const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.status(200).send(`<h1>This is the HOME page.</h1>`);
});
app.get("/about", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'about.html'));
  console.log(__dirname);
});

app.all("/*splat", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000...");
});
