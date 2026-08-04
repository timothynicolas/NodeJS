const express = require("express");
const app = express();
const { valorantAgents } = require("./data");

app.use(express.json());

app.put("/api/agents/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).send("Please provide name");
  }

  const agent = valorantAgents.find((agent) => agent.id === Number(id));

  if (!agent) {
    return res
      .status(404)
      .json({ success: false, msg: `no agent with id ${id}` });
  }

  const newAgentsList = valorantAgents.map((agent) => {
    if (agent.id === Number(id)) {
      return { ...agent, name };
    }

    return agent;
  });

  res.status(200).json({ success: true, data: newAgentsList });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
