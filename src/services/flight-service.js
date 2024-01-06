const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {
  constructor() {
    // this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      const airplaneRepository = new AirplaneRepository();
      const airplane = await airplaneRepository.getAirplane(data.airplaneID);

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
    }
  }
}

module.exports = FlightService;

// async getAllFlights(filter) {
//   try {
//     const flights = await this.flightRepository.getAllCities({
//       name: filter.airplaneName,
//     });
//     return flights;
//   } catch (error) {
//     console.log("Something went wrong in repository layer", error);
//   }
// }
