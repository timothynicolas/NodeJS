const express = require("express");
const app = express();
const checkAge = require("./checkAge");

app.use(checkAge);

app.get("/", (req, res) => {
  return res.status(200).send("Welcome");
});

app.get("/vault", (req, res) => {
  return res
    .status(200)
    .send(`Access granted. Your age on file: ${req.userAge}`);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000...");
});
