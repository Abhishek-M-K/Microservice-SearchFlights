const express = require("express");
const bodyParser = require("body-parser");

//configuration details from config separately
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  //express app object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

setupAndStartServer();
