const express = require("express");
const router = express.Router();

const apiV1Routes = require("./v1/index");

router.use("/v1", apiV1Routes);
//for further versions

module.exports = router;
