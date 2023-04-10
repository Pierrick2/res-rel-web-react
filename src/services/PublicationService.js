import { PublicationEntity } from "../ressources/models/PublicationEntity";
import RestClient from "./RestClient";

export class PublicationService {
  baseUrl = "ressources";

  restClient;

  constructor() {
    this.restClient = new RestClient();
  }

  async addLikeToPublication(id) {
    const data = "Publication likée";
    return data;
  }

  async addCommentaireToPublication(id, comment) {
    const data = "Commentaire ajouté";
    return data;
  }

  async sauvegarderPublication(id) {
    const data = "Publication sauvegardée";
    return data;
  }

  async getPublications(query = {}) {
    const response = await this.restClient.get(this.baseUrl, query);
    return response.data;
  }

  async getAllPublications(filtres = {}) {
    const response = await this.restClient.get(this.baseUrl, filtres);

    const listePublications = response.data.map((publication) => {
      return new PublicationEntity(
        publication.id,
        publication.titre,
        publication.auteur,
        publication.contenu,
        publication.status,
        publication.raisonRefus,
        publication.dateCreation,
        publication.datePublication,
        "https://picsum.photos/200/300",
        publication.idCategorie,
        publication.idUtilisateur,
        publication.navigation
      );
    });

    return listePublications;
  }

  async getListePublicationsUtilisateur(id, params = {}) {
    const response = await this.restClient.get(this.baseUrl, params);

    const listePublications = response.data.map((publication) => {
      return new PublicationEntity(
        publication.id,
        publication.titre,
        publication.auteur,
        publication.contenu,
        publication.status,
        publication.raisonRefus,
        publication.dateCreation,
        publication.datePublication,
        "https://picsum.photos/200/300",
        publication.idCategorie,
        publication.idUtilisateur,
        publication.navigation
      );
    });

    return listePublications;
  }

  async validerPublication(id) {
    const data = "Publication validée";
    return data;
  }

  async refuserPublication(id) {
    const data = "Publication refusée";
    return data;
  }
}

export default new PublicationService();
