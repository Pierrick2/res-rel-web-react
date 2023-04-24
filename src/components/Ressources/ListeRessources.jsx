import React from "react";
import { useState } from "react";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/BarreRecherche.scss";
import { Link } from "react-router-dom";
import { StatusPublicationEnum } from "../../ressources/enums/StatusPublicationEnum";
import { VisibilitePublicationEnum } from "../../ressources/enums/VisibilitePublicationEnum";

export default function ListeRessources() {
  const [publications, setPublications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  React.useEffect(() => {
    const params = {
      "status[equals]=": StatusPublicationEnum.APPROVED,
      "partage[equals]=": VisibilitePublicationEnum.PUBLIC,
      include: "categorie,utilisateur",
    };
    PublicationService.getPublications(params).then((publications) => {
      console.log("publications", publications);
      setPublications(publications);
    });
  }, []);

  if (publications.length === 0) {
    return <p>Chargement en cours...</p>;
  }
  const filteredPublications = publications.filter(
    (publication) =>
      publication.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.auteur.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.idCategorie === selectedCategory
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div>
      <div className="search-form">
        <input
          type="text"
          placeholder="Rechercher une ressource, un auteur ..."
        />
        <button
          type="submit"
          onChange={(event) => setSearchTerm(event.target.value)}
        >
          Rechercher
        </button>
      </div>
      <div className="search-form">
        <label htmlFor="categorieFilter">Filtrer par catégorie:</label>
        <select
          id="categorieFilter"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
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
              {publication.utilisateur.nom} {publication.utilisateur.prenom}
            </p>
            <img
              src="https://picsum.photos/200/300"
              alt="Image de la publication"
            />
            <p>{publication.contenu}</p>
            <p>Catégorie {publication.categorie.nom}</p>
            <div className="interactions">
              <button className="icon" aria-label="mettre en favoris">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/57/FA_star.svg"
                  alt="Bouton de mise en favoris"
                />
              </button>
              <button className="icon" aria-label="sauvegarder pour plus tard">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Clock_%2889654%29_-_The_Noun_Project.svg"
                  alt="Bouton de mise de côté"
                />
              </button>

              <button className="voir-plus">
                <Link to={`/ressources/${publication.id}`}>Voir plus</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
