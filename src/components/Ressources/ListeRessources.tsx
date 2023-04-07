import React, { FunctionComponent, useState } from "react";
import { PublicationEntity } from "../../ressources/models/PublicationEntity";


export default function ListRessources(){
    const [ PublicationEntity ] = useState<PublicationEntity[]>([]);

    return (
        <div>
            <h1 className="center">Liste des ressources</h1>
            <ul>
                {PublicationEntity.map((PublicationEntity) => (
                    <li key={PublicationEntity.id}>
                        {PublicationEntity.titre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const RessourcesList: FunctionComponent = () => {
    const [ PublicationEntity ] = useState<PublicationEntity[]>([]);
    return (
        <div>
            <h1 className="center">Liste des ressources</h1>
            <ul>
                {PublicationEntity.map((PublicationEntity) => (
                    <li key={PublicationEntity.id}>
                        {PublicationEntity.titre}
                    </li>
                ))}
            </ul>
        </div>
    );
};
    