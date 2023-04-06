import RestClient from "./RestClient";
import CategorieEntity from "../ressources/types/CategorieEntity";

class CategorieService {
  private baseUrl = "categories";

  private restClient: RestClient;
  constructor() {
    this.restClient = new RestClient();
  }

  public async GetAllCategories(): Promise<CategorieEntity[]> {
    const response = await this.restClient.get(this.baseUrl);
    return response.data;
  }
}

export default new CategorieService();
