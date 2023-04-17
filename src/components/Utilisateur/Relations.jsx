import React from "react";
import "../../styles/Relations.scss";

export default function () {
  return (
    <div class="search">
      <div class="search-form">
        <input type="text" placeholder="Rechercher une personne" />
        <button type="submit">Rechercher</button>
      </div>
      <div class="search-results">
        <div class="search-result">
          <img src="https://via.placeholder.com/150" alt="Photo de profil" />
          <p>Nom de la personne</p>
          <div class="buttons">
            <button class="btn-see-ressource">Voir ressource</button>
            <button class="btn-add-relation">Ajouter en ami</button>
          </div>
        </div>
        <div class="search-result">
          <img src="https://via.placeholder.com/150" alt="Photo de profil" />
          <p>Nom de la personne</p>
          <div class="buttons">
            <button class="btn-see-ressource">Voir ressource</button>
            <button class="btn-add-relation">Ajouter en ami</button>
          </div>
        </div>
        <div class="search-result">
          <img src="https://via.placeholder.com/150" alt="Photo de profil" />
          <p>Nom de la personne</p>
          <div class="buttons">
            <button class="btn-see-ressource">Voir ressource</button>
            <button class="btn-add-relation">Ajouter en ami</button>
          </div>
        </div>
      </div>
    </div>
  );
}
