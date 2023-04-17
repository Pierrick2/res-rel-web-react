export class PublicationEntity {
  // Attributs
  id;
  titre;
  auteur;
  contenu;
  status;
  raisonRefus;
  dateCreation;
  datePublication;
  lienImage;
  idCategorie;
  idUtilisateur;
  navigation;

  // Constructeur
  constructor(init) {
    Object.assign(this, init);
  }
}
