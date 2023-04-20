import RestClient from "./RestClient";

class UtilisateurService {
  baseUrl = "utilisateurs";

  restClient;
  constructor() {
    this.restClient = new RestClient();
  }
}

export default new UtilisateurService();