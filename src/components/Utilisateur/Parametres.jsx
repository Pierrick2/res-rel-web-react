import React from "react";
import "../../styles/Parametres.scss";
import "../../styles/Card.scss";

export default function Parametres() {
  return (
    <div class="card">
      <h4>Paramètres</h4>
      <form>
        <div class="form-group">
          <label for="photo">Photo de profil :</label>
          <input type="file" id="photo" name="photo" accept="image/*" />
        </div>
        <div class="form-group">
          <label for="bio">Biographie :</label>
          <textarea id="bio" name="bio"></textarea>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
