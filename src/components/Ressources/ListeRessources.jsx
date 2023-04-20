import React from "react";
import { useState } from "react";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/BarreRecherche.scss"
import { Link } from "react-router-dom";

export default function ListeRessources() {
  const [publications, setPublications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategorie, setSelectedCategorie] = useState("");

  React.useEffect(() => {
    PublicationService.getAllPublications().then((publications) => {
      setPublications(publications);
      console.log(publications);
    });
  }, []);

  if (publications.length === 0) {
    return <p>Chargement en cours...</p>;
  }
  const filteredPublications = publications.filter((publication) =>
  publication.titre.toLowerCase().includes(searchTerm.toLowerCase()) &&
  (selectedCategorie === '' || publication.idCategorie === selectedCategorie)
);

  return (
    <div>
      <div className="search-form">
        <input type="text" placeholder="Rechercher une ressource, un auteur ..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="submit">Rechercher</button>
      </div>
      <div className="search-form">
        <label htmlFor="categorieFilter">Filtrer par catégorie:</label>
        <select id="categorieFilter" value={selectedCategorie} onChange={(event) => setSelectedCategorie(event.target.value)}>
          <option value="">Toutes les catégories</option>
          <option value="1">Catégorie 1</option>
          <option value="2">Catégorie 2</option>
          <option value="3">Catégorie 3</option>
        </select>
      </div>
      {filteredPublications.map((publication) => (
        <div className="ressource-card " key={publication.id}>
          <div>
            <h2>{publication.titre}</h2>
            <p>
              Mis en ligne le {publication.dateCreation} par{" "}
              {publication.idUtilisateur}
            </p>
            <img src="https://picsum.photos/200/300" alt="Image de la publication" />
            <p>{publication.contenu}</p>
            <p>Catégorie {publication.idCategorie}</p>
            <div>
              <button className="icon">
              <img  src="https://upload.wikimedia.org/wikipedia/commons/5/57/FA_star.svg" alt="Bouton de mise en favoris" />
              </button>
              <button className="icon">
              <img  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Clock_%2889654%29_-_The_Noun_Project.svg" alt="Bouton de mise de côté" />
              </button>
              <Link to={`/ressources/${publication.id}`}>
                <button>Voir plus</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
