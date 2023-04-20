import RestClient from "./RestClient";
class UtilisateurService {
  baseUrl = "utilisateurs";
  restClient;

  constructor() {
    this.restClient = new RestClient();
  }

  // Nouvelle méthode getUtilisateursByIds prenant en paramètre un tableau d'IDs
  getUtilisateursByIds(ids) {
    const params = {
      _id: { $in: ids },
    };
    return this.restClient.get(this.baseUrl, params);
  }

  // Méthode pour récupérer l'utilisateur actuellement connecté
  getCurrentUser() {
    const userString = localStorage.getItem("currentUser");
    if (userString) {
      const user = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }
}

export default new UtilisateurService();
