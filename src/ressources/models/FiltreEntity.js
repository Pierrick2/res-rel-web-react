class FiltreEntity {
  _dateDebut;
  _dateFin;
  _categorie;

  constructor(dateDebut, dateFin, categorie) {
    this._dateDebut = dateDebut;
    this._dateFin = dateFin;
    this._categorie = categorie;
  }

  get dateDebut() {
    return this._dateDebut;
  }

  set dateDebut(value) {
    this._dateDebut = value;
  }

  get dateFin() {
    return this._dateFin;
  }

  set dateFin(value) {
    this._dateFin = value;
  }

  get categorie() {
    return this._categorie;
  }

  set categorie(value) {
    this._categorie = value;
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

export default FiltreEntity;
