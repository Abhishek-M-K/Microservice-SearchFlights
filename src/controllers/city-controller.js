const { CityService } = require("../services/index");

const cityServiceInstance = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityServiceInstance.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "City created failed",
      err: error,
    });
  }
};

const remove = async (req, res) => {
  try {
    const response = await cityServiceInstance.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City deleted successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "City delete failed",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityServiceInstance.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "City fetching failed",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityServiceInstance.getAllCities();
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Cities fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot fetch cities",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityServiceInstance.updateCity(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "City updated successfully",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "City update failed",
      err: error,
    });
  }
};

module.exports = {
  create,
  remove,
  get,
  getAll,
  update,
};
