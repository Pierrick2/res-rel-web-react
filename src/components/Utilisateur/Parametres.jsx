import React from "react";
import "../../styles/Parametres.scss";
import "../../styles/Card.scss";

export default function Parametres() {
  return (
    <div className="card">
      <h4>Paramètres</h4>
      <form>
        <div className="form-group">
          <label htmlFor="photo">Photo de profil :</label>
          <input type="file" id="photo" name="photo" accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Biographie :</label>
          <textarea id="bio" name="bio"></textarea>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
