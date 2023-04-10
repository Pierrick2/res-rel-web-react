import { StatusPublicationEnum } from "../enums/StatusPublicationEnum";

export class PublicationEntity {
  // Attributs
  _id;
  _titre;
  _auteur;
  _contenu;
  _status;
  _raisonRefus;
  _dateCreation;
  _datePublication;
  _lienImage;
  _idCategorie;
  _idUtilisateur;
  _navigation;

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
    this._id = id;
    this._titre = titre;
    this._auteur = auteur;
    this._contenu = contenu;
    this._status = status;
    this._raisonRefus = raisonRefus;
    this._dateCreation = dateCreation;
    this._datePublication = datePublication;
    this._lienImage = lienImage;
    this._idCategorie = idCategorie;
    this._idUtilisateur = idUtilisateur;
    this._navigation = navigation;
  }

  // Getters
  get id() {
    return this._id;
  }

  get titre() {
    return this._titre;
  }

  get auteur() {
    return this._auteur;
  }

  get contenu() {
    return this._contenu;
  }

  get status() {
    return this._status;
  }

  get raisonRefus() {
    return this._raisonRefus;
  }

  get dateCreation() {
    return this._dateCreation;
  }

  get datePublication() {
    return this._datePublication;
  }

  get lienImage() {
    return this._lienImage;
  }

  get idCategorie() {
    return this._idCategorie;
  }

  get idUtilisateur() {
    return this._idUtilisateur;
  }

  get navigation() {
    return this._navigation;
  }

  // Setters
  set id(value) {
    this._id = value;
  }

  set titre(value) {
    this._titre = value;
  }

  set auteur(value) {
    this._auteur = value;
  }

  set contenu(value) {
    this._contenu = value;
  }

  set status(value) {
    this._status = value;
  }

  set raisonRefus(value) {
    this._raisonRefus = value;
  }

  set dateCreation(value) {
    this._dateCreation = value;
  }

  set datePublication(value) {
    this._datePublication = value;
  }

  set lienImage(value) {
    this._lienImage = value;
  }

  set idCategorie(value) {
    this._idCategorie = value;
  }

  set idUtilisateur(value) {
    this._idUtilisateur = value;
  }

  set navigation(value) {
    this._navigation = value;
  }
}
