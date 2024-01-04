"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNo: "Boeing 747",
          capacity: 416,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Airbus A380",
          capacity: 853,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Boeing 777",
          capacity: 396,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Airbus A350",
          capacity: 366,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Boeing 787",
          capacity: 330,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Airbus A330",
          capacity: 335,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
