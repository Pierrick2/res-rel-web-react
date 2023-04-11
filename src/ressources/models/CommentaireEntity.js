import { StatusPublicationEnum } from "../enums/StatusPublicationEnum";

export class CommentaireEntity {
  // Attributs
  _id;
  _contenu;
  _datePublication;
  _nombreReponses;
  _supprime;
  _nombreSignalements;
  _idUtilisateur;
  _idRessource;

  // Constructeur
  constructor(
    id,
    contenu,
    datePublication,
    nombreReponses,
    supprime,
    nombreSignalements,
    idUtilisateur,
    idRessource
  ) {
    this._id = id;
    this._contenu = contenu;
    this._datePublication = datePublication;
    this._nombreReponses = nombreReponses;
    this._supprime = supprime;
    this._nombreSignalements = nombreSignalements;
    this._idUtilisateur = idUtilisateur;
    this._idRessource = idRessource;
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
