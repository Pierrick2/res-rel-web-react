import React from "react";
import { PublicationEntity } from "../../ressources/models/PublicationEntity";
import { useEffect, useState } from "react";

fetch("https://api.victor-gombert.fr/api/v1/ressources")
.then((response) => {
  return response.json()
})
.then((data) => {
    console.log(data)
})


export default function ListRessources(){
    const [publications, setPublications] = useState<PublicationEntity[]>([]);

    useEffect(() => {
        // Appel à l'API pour récupérer les publications
        const fetchPublications = async () => {
            const response = await fetch('https://api.victor-gombert.fr/api/v1/ressources');
            const data = await response.json();
            setPublications(data);
        }

        fetchPublications();
    }, []);

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