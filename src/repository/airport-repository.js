const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/airport");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
