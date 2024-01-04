"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Flight Number already exists",
        },
      },
      airplaneID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      airplaneName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      srcAirportID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      destAirportID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      flightFare: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
