import RestClient from "./RestClient";
import CategorieEntity from "../ressources/models/CategorieEntity";

class CategorieService {
  baseUrl = "categories";

  restClient;
  constructor() {
    this.restClient = new RestClient();
  }

  async GetAllCategories() {
    const response = await this.restClient.get(this.baseUrl);
    return response.data;
  }
}

export default new CategorieService();
