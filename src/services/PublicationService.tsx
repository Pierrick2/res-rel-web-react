import { PublicationEntity } from "../ressources/models/PublicationEntity";
import RestClient from "./RestClient";

export class PublicationService {
  private baseUrl = "ressources";

  private restClient: RestClient;

  constructor() {
    this.restClient = new RestClient();
  }

  public async addLikeToPublication(id: number): Promise<any> {
    const data = "Publication likée";
    return data;
  }

  public async addCommentaireToPublication(
    id: number,
    comment: string
  ): Promise<any> {
    const data = "Commentaire ajouté";
    return data;
  }

  public async sauvegarderPublication(id: number): Promise<any> {
    const data = "Publication sauvegardée";
    return data;
  }

  public async getPublications(query: any = {}): Promise<PublicationEntity[]> {
    const response = await this.restClient.get(this.baseUrl, query);
    return response.data;
  }

  public async getAllPublications(
    filtres: any = {}
  ): Promise<PublicationEntity[]> {
    const response = await this.restClient.get(this.baseUrl, filtres);

    const listePublications = response.data.map((publication: any) => {
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

  public async getListePublicationsUtilisateur(
    id: number,
    params: any = {}
  ): Promise<PublicationEntity[]> {
    const response = await this.restClient.get(this.baseUrl, params);

    const listePublications = response.data.map((publication: any) => {
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

  public async validerPublication(id: number): Promise<any> {
    const data = "Publication validée";
    return data;
  }

  public async refuserPublication(id: number): Promise<any> {
    const data = "Publication refusée";
    return data;
  }
}

export default new PublicationService();