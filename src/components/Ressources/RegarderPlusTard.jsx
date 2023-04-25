import React from 'react'
import "../../styles/Favoris.scss";

export default function RegarderPlusTard() {
  return (
    <h1>Page ressources sauvegardées</h1>
  )
}


// import React, { useState, useEffect } from "react";
// import ListeRessources from "./ListeRessources";
// import UtilisateurService from "../../services/UtilisateurService";
// import "../../styles/AffichageRessources.scss";

// export default function AvoirPlusTard() {
//   const [ressources, setRessources] = useState([]);

//   useEffect(() => {
//     const currentUser = UtilisateurService.getCurrentUser();
//     setRessources(currentUser.ressourcesVues);
//   }, []);

//   return (
//     <div className="ressources-container">
//       <h1>Ressources à regarder plus tard</h1>
//       <div className="ressources">
//         {ressources.map((ressource) => (
//           <ListeRessources key={ressource.id} ressource={ressource} />
//         ))}
//       </div>
//     </div>
//   );
// }
