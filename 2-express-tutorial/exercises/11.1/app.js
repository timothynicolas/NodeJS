const express = require("express");
const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { name, email } = req.body;

  if (!name) {
    return res.status(401).send("Please provide credentials");
  }

  if (!email && name) {
    return res.status(400).send("Please provide email.");
  }

  return res.status(200).send(`Welcome ${name}, we'll contact you at ${email}`);
});

app.listen(5000, () => {
  console.log("Server is listening to port 5000...");
});
