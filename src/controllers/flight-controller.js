const { FlightService } = require("../services/index");
const { SuccessCodes, ServerErrors } = require("../utils/status-codes");

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
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Create flight failed",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightServiceInstance.getAllFlights(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Flights fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetch flights",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightServiceInstance.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Flight fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetch flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
};
