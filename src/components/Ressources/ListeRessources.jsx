import React from "react";
import { useState } from "react";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/BarreRecherche.scss"
import { Link } from "react-router-dom";

export default function ListeRessources() {
  const [publications, setPublications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


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
  publication.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
  publication.auteur.toLowerCase().includes(searchTerm.toLowerCase()) 
);

  return (
    <div>
      <div className="search-form">
        <input type="text" placeholder="Rechercher une ressource, un auteur ..."  />
        <button type="submit" onChange={(event) => setSearchTerm(event.target.value)} >Rechercher</button>
      </div>
      <div className="search-form">
        <label htmlFor="categorieFilter">Filtrer par catégorie:</label>
        <select id="categorieFilter">
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


//     const [publications, setPublications] = useState<PublicationEntity[]>([]);

//     useEffect(() => {
//         // Appel à l'API pour récupérer les publications
//         const fetchPublications = async () => {
//             const response = await fetch('https://api.victor-gombert.fr/api/v1/ressources');
//             const data = await response.json();
//             setPublications(data);
//         }

//         fetchPublications();
//     }, []);

//     return (
//         <div>
//             <h1 className="center">Liste des ressources</h1>
//             <ul>
//                 {publications.map((publication) => (
//                     <li key={publication.id}>
//                         {publication.titre}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// jsx
// Copy code
// import React, { useState } from 'react';
// import PublicationService from '../../services/PublicationService';
// import '../../styles/AffichageRessources.scss';
// import '../../styles/BarreRecherche.scss';
// import { Link } from 'react-router-dom';

// export default function ListeRessources() {
//   const [publications, setPublications] = useState([]);
//   const [categorieFilter, setCategorieFilter] = useState('');

//   React.useEffect(() => {
//     PublicationService.getAllPublications().then((publications) => {
//       setPublications(publications);
//       console.log(publications);
//     });
//   }, []);

//   if (!publications) return null;

//   const handleFilterChange = (event) => {
//     setCategorieFilter(event.target.value);
//   };

//   const filteredPublications = categorieFilter
//     ? publications.filter((publication) => publication.idCategorie === categorieFilter)
//     : publications;

//   return (
//     <div>
//       <div className="search-form">
//         <input type="text" placeholder="Rechercher une ressource, un auteur ..." />
//         <button type="submit">Rechercher</button>
//       </div>
//       <div>
//         <label htmlFor="categorieFilter">Filtrer par catégorie:</label>
//         <select id="categorieFilter" onChange={handleFilterChange} value={categorieFilter}>
//           <option value="">Toutes les catégories</option>
//           <option value="1">Catégorie 1</option>
//           <option value="2">Catégorie 2</option>
//           <option value="3">Catégorie 3</option>
//         </select>
//       </div>
//       {filteredPublications.map((publication) => (
//         <div className="ressource-card " key={publication.id}>
//           <h2>{publication.titre}</h2>
//           <p>
//             Mis en ligne le {publication.dateCreation} par {publication.idUtilisateur}
//           </p>
//           <img src="publication.contenu" alt="Image de la publication" />
//           <p>{publication.contenu}</p>
//           <p>Catégorie {publication.idCategorie}</p>
//           <div>
//             <Link to={`/ressources/${publication.id}`}>
//               <button>Voir plus</button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// Ici, nous avons ajouté un state categorieFilter pour stocker la catégorie sélectionnée par l'utilisateur et nous avons créé une fonction handleFilterChange pour mettre à jour ce state lorsqu'un utilisateur sélectionne une catégorie différente dans la liste déroulante. Nous avons également créé un nouveau tableau filteredPublications qui contient uniquement les publications de la catégorie sélectionnée, ou toutes les publications si aucune catégorie n'est sélectionnée.

// Enfin, nous avons ajouté un élément select dans le JSX pour afficher les options de catégorie, avec un onChange qui appelle la fonction handleFilterChange lorsque l'utilisateur sélectionne une nouvelle catégorie.