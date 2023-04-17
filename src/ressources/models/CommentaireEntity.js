export class CommentaireEntity {
  // Attributs
  id;
  contenu;
  datePublication;
  nombreReponses;
  supprime;
  nombreSignalements;
  idUtilisateur;
  idRessource;

  // Constructeur
  constructor(init) {
    Object.assign(this, init);
  }
}
