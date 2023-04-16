class FiltreEntity {
  dateDebut;
  dateFin;
  categorie;

  constructor(init) {
    Object.assign(this, init);
  }
}

const FiltresRequetes = {
  "datePublication[greaterThanEquals]=": undefined,
  "datePublication[lowerThanEquals]=": undefined,
  "idCategorie[equals]=": undefined,
  "partage[equals]=": undefined,
  "status[equals]=": undefined,
  ressourceQuery: undefined,
  utilisateurQuery: undefined,
};
