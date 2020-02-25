const express = require("express");
const logger = require("./middleware/Goldberg");
const projectRoute = require("./routes/projectRoute");
const actionRoute = require("./routes/actionRoute");

const server = express();
const port = 6000;

server.use(express.json());
server.use(logger);

server.use("/api/projects", projectRoute);
server.use("/api/actions", actionRoute);

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

module.exports = server;
