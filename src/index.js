const express = require("express");

//configuration details from config separately
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  //express app object
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

setupAndStartServer();
