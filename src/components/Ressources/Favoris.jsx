import React, { useState, useEffect } from "react";
import PublicationService from "../../services/PublicationService";
import UtilisateurService from "../../services/UtilisateurService";
import "../../styles/AffichageRessources.scss";

export default function Favoris() {
  const [favoris, setFavoris] = useState([]);
  const [ressources, setRessources] = useState([]);

  useEffect(() => {
    UtilisateurService.getCurrentUser().then((utilisateur) => {
      setFavoris(utilisateur.favoris);
      const params = {
        "id[in]=": utilisateur.favoris.join(","),
      };
      PublicationService.getPublications(params).then((ressources) => {
        setRessources(ressources.data);
      });
    });
  }, []);

  return (
    <div className="ressources-favorites">
      <h2>Mes ressources favorites</h2>
      {ressources.length > 0 ? (
        <ul>
          {ressources.map((ressource) => (
            <li key={ressource.id}>
              <h3>{ressource.titre}</h3>
              <p>{ressource.dateCreation}</p>
              {ressource.contenu && (
                <img src={ressource.contenu} alt="Image de la publication" />
              )}
              <p>{ressource.contenu}</p>
              <p>Catégorie {ressource.idCategorie}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Vous n'avez pas encore de ressources favorites.</p>
      )}
    </div>
  );
}
