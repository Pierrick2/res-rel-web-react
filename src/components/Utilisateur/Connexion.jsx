import React from "react";
import "../../styles/Connexion.scss";
import "../../styles/Card.scss";

export default function Connexion() {
  return (
    <div className="login">
      <h4>Connexion</h4>
      <form>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
