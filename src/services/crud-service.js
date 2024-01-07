class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create() {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD service: ", error);
    }
  }

  async destroy(id) {
    try {
      const result = await this.repository.destroy(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD service: ", error);
    }
  }

  async get(id) {
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD service: ", error);
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD service: ", error);
    }
  }

  async update(id, data) {
    try {
      const result = await this.repository.update(id, data);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD service: ", error);
    }
  }
}

module.exports = CrudService;
