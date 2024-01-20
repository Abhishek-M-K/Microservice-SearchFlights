const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw new Error("Arrival time must be greater than departure time");
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneID
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
    }
  }

  async getAllFlights(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
    }
  }

  async getFlight(flightID) {
    try {
      const flight = await this.flightRepository.getFlight(flightID);
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlight(flightId, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
    }
  }
}

module.exports = FlightService;
