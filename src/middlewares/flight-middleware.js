const { ClientErrors } = require("../utils/status-codes");

const validateFlight = (req, res, next) => {
  if (
    !req.body.flightNo ||
    !req.body.airplaneID ||
    !req.body.airplaneName ||
    !req.body.srcAirportID ||
    !req.body.destAirportID ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.flightFare
  ) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing mandatory fields for flight creation",
    });
  }

  next();
};

module.exports = {
  validateFlight,
};

/* 
flightNo: req.body.flightNo,
airplaneID: req.body.airplaneID,
airplaneName: req.body.airplaneName,
srcAirportID: req.body.srcAirportID,
destAirportID: req.body.destAirportID,
arrivalTime: req.body.arrivalTime,
departureTime: req.body.departureTime,
flightFare: req.body.flightFare,
*/
