// In Repository we will interact with the models
const City = require("../models/city"); // require models separately
// const {City, Airport, etc} =require("../models/index") require the models by destructuring

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name: name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findOne({
        where: {
          id: cityId,
        },
      });
      /*const city =await City.findByPk(cityId) */
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer", error);
    }
  }
}

module.exports = CityRepository;
