class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repository: ", error);
    }
  }

  async destroy(modelID) {
    try {
      const result = await this.model.destroy({
        where: {
          id: modelID,
        },
      });
    } catch (error) {
      console.log("Something went wrong in CRUD repository: ", error);
    }
  }

  async get(modelID) {
    try {
      const result = await this.model.findByPk(modelID);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repository: ", error);
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll(modelID);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repository: ", error);
    }
  }

  async update(modelID, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelID,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repository: ", error);
    }
  }
}

module.exports = CrudRepository;
