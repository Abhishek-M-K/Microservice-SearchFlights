const { Flights } = require("../models/index");
const { Op } = require("sequelize");

/*flightNo: data.flightNo,
airplaneID: data.airplaneID,
airplaneName: data.airplaneName,
srcAirportID: data.srcAirportID,
destAirportID: data.destAirportID,
arrivalTime: data.arrivalTime,
departureTime: data.departureTime,
flightFare: data.flightFare,
boardingGate: data.boardingGate, 
totalSeats will be fetched from Airplane repository*/

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }

  // async getAllFlights(filter) {
  //   try {
  //     if (filter.name) {
  //       const flights = await Flights.findAll({
  //         where: {
  //           name: {
  //             [Op.startsWith]: filter.name,
  //           },
  //         },
  //       });
  //       return flights;
  //     }
  //     const flights = await Flights.findAll();
  //     return flights;
  //   } catch (error) {
  //     console.log("Something went wrong in repository layer", error);
  //   }
  // }
}

module.exports = FlightRepository;
