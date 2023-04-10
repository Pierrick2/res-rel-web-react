export class UtilisateurEntity {
  // Attributs
  _nom;
  _prenom;
  _email;
  _contenu;
  _dateNaissance;
  _dateInscription;
  _lienPhoto;

  // Constructeur
  constructor(
    nom,
    prenom,
    email,
    contenu,
    dateNaissance,
    dateInscription,
    lienPhoto
  ) {
    this._nom = nom;
    this._prenom = prenom;
    this._email = email;
    this._contenu = contenu;
    this._dateNaissance = dateNaissance;
    this._dateInscription = dateInscription;
    this._lienPhoto = lienPhoto;
  }

  get nom() {
    return this._nom;
  }

  get prenom() {
    return this._prenom;
  }

  set nom(value) {
    this._nom = value;
  }

  set prenom(value) {
    this._prenom = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get contenu() {
    return this._contenu;
  }

  set contenu(value) {
    this._contenu = value;
  }

  get dateNaissance() {
    return this._dateNaissance;
  }

  set dateNaissance(value) {
    this._dateNaissance = value;
  }

  get dateInscription() {
    return this._dateInscription;
  }

  set dateInscription(value) {
    this._dateInscription = value;
  }

  get lienPhoto() {
    return this._lienPhoto;
  }

  set lienPhoto(value) {
    this._lienPhoto = value;
  }
}
