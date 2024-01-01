const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.remove);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);

module.exports = router;
