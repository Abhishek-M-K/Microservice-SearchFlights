const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      // if (!airplane) {
      //   console.log("Airplane not found: ", id);
      //   return null;
      // }
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane repository layer", error);
    }
  }
}

module.exports = AirplaneRepository;
