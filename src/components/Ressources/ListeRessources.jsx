import React from "react";
import { useState } from "react";
import PublicationService from "../../services/PublicationService";


export default function ListeRessources(){

    const [publications, setPublications] = useState([]);

    React.useEffect(() => {
      PublicationService.getAllPublications().then((publications)=>{
        setPublications(publications)
      })
    }, []);
  
    if (!publications) return null;
    return (
        <div>
                     <h1 className="center">Liste des ressources</h1>
                    <ul>
                        {publications.map((publication) => (
                           <li key={publication.id}>
                               {publication.titre}
                           </li>
                      ))}
                   </ul>
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