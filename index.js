const express = require("express");
const logger = require("./middleware/Goldberg");
const projectRoute= require("./routes/projectRoute")


const server = express();
const port = 6000;

server.use(express.json());
server.use(logger);

server.use("/api/projects", projectRoute);

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

module.exports = server;
