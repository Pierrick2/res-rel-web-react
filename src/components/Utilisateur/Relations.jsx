import React from "react";
import "../../styles/Relations.scss";

export default function () {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Rechercher une personne" />
        <button type="submit">Rechercher</button>
      </div>
      <div className="search-results">
        <div className="search-result">
          <img src="https://pbs.twimg.com/media/EPNM3xQWkAAfRWD?format=jpg&name=large" alt="Photo de profil" />
          <p>Nom de la personne</p>
          <div className="buttons">
            <button className="btn-see-ressource">Voir ressource</button>
            <button className="btn-add-relation">Ajouter en ami</button>
          </div>
        </div>
        <div className="search-result">
          <img src="https://pbs.twimg.com/media/EPNM3xQWkAAfRWD?format=jpg&name=large" alt="Photo de profil" />
          <p>Nom de la personne</p>
          <div className="buttons">
            <button className="btn-see-ressource">Voir ressource</button>
            <button className="btn-add-relation">Ajouter en ami</button>
          </div>
        </div>
        <div className="search-result">
          <img src="https://pbs.twimg.com/media/EPNM3xQWkAAfRWD?format=jpg&name=large" alt="Photo de profil" />
          <p>Nom de la personne</p>
          <div className="buttons">
            <button className="btn-see-ressource">Voir ressource</button>
            <button className="btn-add-relation">Ajouter en ami</button>
          </div>
        </div>
      </div>
    </div>
  );
}
