import { BehaviorSubject } from "rxjs";
import RestClient from "./RestClient";

class RechercheService {
  baseUrl = "rechercher";

  restClient;

  listeResRessources = new BehaviorSubject([]);
  listeResUtilisateurs = new BehaviorSubject([]);

  afficheHeader = new BehaviorSubject(true);

  constructor() {
    this.restClient = new RestClient();
  }

  async Chercher(query = {}) {
    const reponse = await this.restClient.post(this.baseUrl, query);
    return reponse;
  }

  SetListeResRessources(listeResultats) {
    this.listeResRessources.next(listeResultats);
  }

  GetListeResRessources() {
    return this.listeResRessources.asObservable();
  }

  SetListeResUtilisateurs(listeResultats) {
    this.listeResUtilisateurs.next(listeResultats);
  }

  GetListeResUtilisateurs() {
    return this.listeResUtilisateurs.asObservable();
  }

  SetAfficheHeader(affiche) {
    this.afficheHeader.next(affiche);
  }
  GetAfficheHeader() {
    return this.afficheHeader.asObservable();
  }
}

export default new RechercheService();
