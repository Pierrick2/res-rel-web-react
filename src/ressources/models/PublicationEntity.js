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
  constructor(
    id,
    titre,
    auteur,
    contenu,
    status,
    raisonRefus,
    dateCreation,
    datePublication,
    lienImage,
    idCategorie,
    idUtilisateur,
    navigation
  ) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.contenu = contenu;
    this.status = status;
    this.raisonRefus = raisonRefus;
    this.dateCreation = dateCreation;
    this.datePublication = datePublication;
    this.lienImage = lienImage;
    this.idCategorie = idCategorie;
    this.idUtilisateur = idUtilisateur;
    this.navigation = navigation;
  }
}