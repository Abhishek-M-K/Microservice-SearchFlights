const { FlightService } = require("../services/index");

const flightServiceInstance = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNo: req.body.flightNo,
      airplaneID: req.body.airplaneID,
      airplaneName: req.body.airplaneName,
      srcAirportID: req.body.srcAirportID,
      destAirportID: req.body.destAirportID,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      flightFare: req.body.flightFare,
    };
    const flight = await flightServiceInstance.createFlight(flightRequestData);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Create flight failed",
      err: error,
    });
  }
};

module.exports = {
  create,
};
