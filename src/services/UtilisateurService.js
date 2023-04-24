import RestClient from "./RestClient";
import { BehaviorSubject } from "rxjs";
class UtilisateurService {
  baseUrl = "utilisateurs";
  restClient;

  roleUtilisateur = new BehaviorSubject(1);

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

  setRoleUtilisateur(role) {
    this.roleUtilisateur.next(role);
  }

  getRoleUtilisateur() {
    return this.roleUtilisateur.asObservable();
  }
}

export default new UtilisateurService();
