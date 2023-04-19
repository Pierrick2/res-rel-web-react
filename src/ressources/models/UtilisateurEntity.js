export class UtilisateurEntity {
  #nom;
  #prenom;
  #email;
  #contenu;
  #dateNaissance;
  #dateInscription;
  #lienPhoto;

  constructor(init) {
    Object.assign(this, init);
  }

  get nom() {
    return this.#nom;
  }

  set nom(value) {
    this.#nom = value;
  }

  get prenom() {
    return this.#prenom;
  }

  set prenom(value) {
    this.#prenom = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }

  get contenu() {
    return this.#contenu;
  }

  set contenu(value) {
    this.#contenu = value;
  }

  get dateNaissance() {
    return this.#dateNaissance;
  }

  set dateNaissance(value) {
    this.#dateNaissance = value;
  }

  get dateInscription() {
    return this.#dateInscription;
  }

  set dateInscription(value) {
    this.#dateInscription = value;
  }

  get lienPhoto() {
    return this.#lienPhoto;
  }

  set lienPhoto(value) {
    this.#lienPhoto = value;
  }
}
