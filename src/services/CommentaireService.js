
import RestClient from "./RestClient";

export default class CommentaireService {
  baseUrl = "commentaires";
  restClient;

  constructor() {
    this.restClient = new RestClient();
  }
  
  async getCommentairesByRessourceId(idRessource) {
    const response = await this.restClient.get(`${this.baseUrl}/${idRessource}`);
    return response.data;
  }

  async addCommentaire(commentaire) {
    const response = await this.restClient.post(this.baseUrl, commentaire);
    return response.data;
  }

  async updateCommentaire(commentaire) {
    const response = await this.restClient.put(
      `${this.baseUrl}/${commentaire.id}`,
      commentaire
    );
    return response.data;
  }

  async deleteCommentaire(id) {
    const response = await this.restClient.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}
