"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init(
    {
      flightNo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      airplaneID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      airplaneName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      srcAirportID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      destAirportID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      flightFare: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
        defaultValue: "A1",
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flights",
    }
  );
  return Flights;
};
