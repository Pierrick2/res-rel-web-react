import { PublicationEntity } from "../ressources/models/PublicationEntity";
import RestClient from "./RestClient";

export default class CommentaireService {
baseUrl = "commentaires";

restClient;

constructor() {
    this.restClient = new RestClient();
  }
  
  async getCommentairesByRessourceId(idRessource) {
    const response = await this.restClient.get(
      `${this.baseUrl}/${idRessource}`
      );
      return response.data;
    }
}
