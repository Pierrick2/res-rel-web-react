export class UtilisateurEntity {
  // Attributs
  nom;
  prenom;
  email;
  contenu;
  dateNaissance;
  dateInscription;
  lienPhoto;

  // Constructeur
  constructor(init) {
    Object.assign(this, init);
  }
}
