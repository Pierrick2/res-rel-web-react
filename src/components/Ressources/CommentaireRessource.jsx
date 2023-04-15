import React from 'react'
import { useParams } from 'react-router-dom';
import CommentaireService from '../../services/CommentaireService';
import { useState } from 'react';






export default function CommentaireRessource() {
    const [publication] = useState([]);
    const [commentaires, setCommentaires] = useState([]);
    const { idRessources } = useParams();

    React.useEffect(() => {
        CommentaireService.getCommentairesByRessourceId(publication.id).then((commentaires) => {
            setCommentaires(commentaires);

        })
    }, [idRessources]);

    return (
        <div>
            {commentaires.length > 0 && (
                <div>
                    {commentaires.map((commentaire) => (
                        <div key={commentaire.id}>
                            <p>"{commentaire.contenu}"</p>
                            <p>Posté par {commentaire.idUtilisateur}</p>
                            <p>Le {commentaire.dateCreation}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
