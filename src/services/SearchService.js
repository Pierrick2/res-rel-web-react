import { BehaviorSubject } from "rxjs";
import RestClient from "./RestClient";

class SearchService {
  baseUrl = "search";

  restClient;

  listeResultats = new BehaviorSubject([]);

  constructor() {
    this.restClient = new RestClient();
  }

  async Search(query = {}) {
    const reponse = await this.restClient.post(this.baseUrl, query);
    return reponse.data;
  }

  SetListeResultats(listeResultats) {
    this.listeResultats.next(listeResultats);
  }

  GetListeResultats() {
    return this.listeResultats.asObservable();
  }
}

export default new SearchService();
