const express = require("express");
const app = express();
const path = require("path");
const { feedback } = require("./data");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "traditional.html"));
});

app.get("/api/feedback", (req, res) => {
  res.status(200).json({ success: true, data: feedback });
});

app.post("/api/feedback", (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name and message" });
  }
  const newId = feedback.length > 0 ? feedback[feedback.length - 1].id + 1 : 1;
  const newFeedback = { id: newId, name, message };
  feedback.push(newFeedback);
  res.status(201).json({ success: true, ...newFeedback });
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
