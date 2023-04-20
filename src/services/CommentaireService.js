import RestClient from "./RestClient";

class CommentaireService {
  baseUrl = "commentaires";
  restClient;

  constructor() {
    this.restClient = new RestClient();
  }

  async getCommentairesByRessourceId(params = {}) {
    const response = await this.restClient.get(
      this.baseUrl, params
    );
    return response;
  }

  async addCommentaire(params = {}) {
    const response = await this.restClient.post(this.baseUrl, params);
    return response;
  }

  // a revoir
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

export default new CommentaireService();