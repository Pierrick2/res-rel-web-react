export default class CategorieEntity {
  _id;
  _nom;
  constructor(id, nom) {
    this._id = id;
    this._nom = nom;
  }

  get id() {
    return this._id;
  }

  get nom() {
    return this._nom;
  }

  set id(value) {
    this._id = value;
  }

  set nom(value) {
    this._nom = value;
  }
}
