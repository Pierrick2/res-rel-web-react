import React from "react";
import "../../styles/Parametres.scss";
import "../../styles/Card.scss";
//import { Switch } from "@mui/material";


export default function Parametres() {
  return (
    <div className="card">
    <h4>Paramètres</h4>
    <h6>Personnalisez votre profil : </h6>
    <form>
      <div className="form-group">
        <label htmlFor="photo">Photo de profil :</label>
        <input type="file" id="photo" name="photo" accept="image/*" />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Biographie :</label>
        <textarea id="bio" name="bio"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="dark-mode">Mode sombre :</label>
        {/* <Switch
          id="dark-mode"
          checked={darkMode}
          onChange={handleDarkModeChange}
        /> */}
      </div>
      <button type="submit" >
        Enregistrer
      </button>
    </form>
  </div>
  );
}
