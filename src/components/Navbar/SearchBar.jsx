import React from "react";
import "../../styles/AffichageRessources.scss";
import "../../styles/BarreRecherche.scss"
import {useState, useEffect} from "react";
import { PublicationService } from "../../services/PublicationService";



function Search() {

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        PublicationService.getAllPublications().then((publications) => {
        setPublications(publications);
        console.log(publications);
      });
    }, []);

return (
    <>
    <div className="search-form">
        <input 
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher une ressource, un auteur ..." 
        />
        <button type="submit">Rechercher</button>
        <div className="search-results">
            {publications.map((publication) => {
              <div className="search-result"key={publication.id}>{publication.title}</div>
            })}
        </div>
      </div>
</>
)
}

export default Search;