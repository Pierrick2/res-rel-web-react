import React from "react";
import "../../styles/AffichageRessources.scss";
import "../../styles/BarreRecherche.scss"
import {useState, useEffect} from "react";
import { PublicationService } from "../../services/PublicationService";



function Search() {

    const [publications, setPublications] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        PublicationService.getAllPublications().then((publications) => {
        setPublications(publications);
        console.log(publications);
      });
    }, []);

    const handleSearchTerm = (e) => {
      console.log(e.target.value);
      let value = e.target.value;
      setSearchTerm(value);
    }
return (
    <>
    <div className="search-form">
        <input 
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher une ressource, un auteur ..." 
        onChange={handleSearchTerm}
        />
        <button type="submit">Rechercher</button>
        </div>
        <div className="search-results">
            {publications.filter((val) => {
              return val.titre.toLowerCase().includes(searchTerm.toLowerCase());
            }).map((val) => {
              return (
              <div className="search-result"key={val.id}>
                {val.title}
              </div>
              );
            })}
        </div>
</>
)
}

export default Search;