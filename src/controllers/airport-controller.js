const { AirportService } = require("../services/index");

const airportServiceInstance = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportServiceInstance.create(req.body);
    return res.status(200).json({
      data: response,
      message: "Airport created",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in airport controller: ", error);
    return res.status(500).json({
      data: {},
      message: "Something went wrong in airport controller",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
};
