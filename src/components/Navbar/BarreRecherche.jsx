import React, { useState, useEffect } from "react";
import "../../styles/AffichageRessources.scss";
import "../../styles/BarreRecherche.scss"
import PublicationService from "../../services/PublicationService";
import RechercheService from "../../services/RechercheService";
import FiltreService from "../../services/FiltreService";
import { BehaviorSubject } from "rxjs";

function BarreRecherche() {

  const [searchValue, setSearchValue] = useState("");
  const [afficheHeader, setAfficheHeader] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [selectedFiltre, setSelectedFiltre] = useState(0);
  const filtres = new BehaviorSubject({});

  useEffect(() => {

    FiltreService.getFiltres().subscribe((nouveauxFiltres) => {
      filtres.next(nouveauxFiltres);
      setSearchValue("");
      startSearch();
    });

    RechercheService.GetAfficheHeader().subscribe((affiche) => {
      setAfficheHeader(affiche);
    });
  }, []);

  const startSearch = () => {
    setNoResults(false);
    if (searchValue !== "") {
      const params = {
        query: {
          ressource: {
            // "datePublication[greaterThanEquals]=": filtres.value.dateDebut,
            // "datePublication[lowerThanEquals]=": filtres.value.dateFin,
            // "partage[equals]=": "PUBLIC",
            // "status[equals]=": "APPROVED",
            q: searchValue,
            include: ["utilisateur"],
          },
          utilisateur: {
            q: searchValue,
          },
        },
      };
      RechercheService.Chercher(params).then((listeResultats) => {
        if (listeResultats.ressources.length === 0 && listeResultats.utilisateurs.length === 0) {
          setNoResults(true);
        } else {
          RechercheService.SetListeResRessources(listeResultats.ressources);
          RechercheService.SetListeResUtilisateurs(listeResultats.utilisateurs);
        }
      });
    } else {
      const filtresRequete = {
        "datePublication[greaterThanEquals]=": filtres.value.dateDebut,
        "datePublication[lowerThanEquals]=": filtres.value.dateFin,
        "partage[equals]=": "PUBLIC",
        "status[equals]=": "APPROVED",
        include: "utilisateur,categorie",
      };
      if (filtres.value.categorie === 0) {
        filtresRequete["idCategorie[equals]="] = filtres.value.categorie;
      }

      PublicationService.GetPublications(filtresRequete).then(
        (listeResultats) => {
          RechercheService.SetListeResRessources(listeResultats);
        }
      );
    }
  };
  const handleFiltreChange = (event) => {
    setSelectedFiltre(Number(event.target.value));
  };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     startSearch();
  //   }, 250);
  //   return () => clearTimeout(timer);
  // }, [searchValue]);
  return (
    <>
      <div className="search-form">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher une ressource, un auteur, une catégorie ..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button onClick={startSearch} type="button">Rechercher</button>
      </div>

      {noResults && (
        <div className="no-results-message">
          Aucun résultat trouvé.

          <div>
            <select name="Filtres" id="Filtres" value={selectedFiltre} onChange={handleFiltreChange}>
              <option value="Toutes">Toutes les catégories</option>
              <option value="Communication">Communication</option>
              <option value="Culture">Culture</option>
              <option value="DeveloppementPerso">Développement personnel</option>
            </select>
          </div>
        </div>
      )}
    </>
  )
}

export default BarreRecherche;