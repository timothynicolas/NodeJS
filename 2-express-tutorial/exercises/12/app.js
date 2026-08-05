const express = require("express");
const app = express();
const path = require("path");

const feedback = require("./routes/feedback");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/feedback", feedback);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "traditional.html"));
});

app.post("/submit", (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).send("Please provide both name and message");
  }

  return res.send(`Thanks ${name}, your feedback was received!`);
});

app.listen(5000, () => {
  console.log("Server is listening to port 5000...");
});
