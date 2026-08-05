const express = require('express');
const router = express.Router();

const {feedback} = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: feedback });
});

router.post("/", (req, res) => {
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

module.exports = router;