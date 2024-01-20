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
  //private member function for flights filteration
  #filterFlight(data) {
    let filter = {};
    if (data.destAirportID) {
      filter.destAirportID = data.destAirportID;
    }
    if (data.srcAirportID) {
      filter.srcAirportID = data.srcAirportID;
    }
    if (data.minFare) {
      Object.assign(filter, { flightFare: { [Op.gte]: data.minFare } });
    }
    if (data.maxFare) {
      Object.assign(filter, { flightFare: { [Op.lte]: data.maxFare } });
    }
    if (data.minFare && data.maxFare) {
      Object.assign(filter, {
        [Op.and]: [
          { flightFare: { [Op.gte]: data.minFare } },
          { flightFare: { [Op.lte]: data.maxFare } },
        ],
      });
    }
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }

  async getFlight(flightID) {
    try {
      const flight = await Flights.findByPk(flightID);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObj = this.#filterFlight(filter);
      const flights = await Flights.findAll({
        where: filterObj,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }

  async updateFlight(flightId, data) {
    try {
      await Flights.update(data, {
        where: { id: flightId },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }
}

module.exports = FlightRepository;
