import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PublicationService from '../../services/PublicationService';
import "../../styles/AffichageRessources.scss";
import CommentaireService from '../../services/CommentaireService';

export default function RessourceUnique() {

  const [publication, setPublications] = useState([]);
  const [commentaires, setCommentaires] = useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    PublicationService.getPublication(id).then((publication) => {
      setPublications(publication)
      CommentaireService.getCommentairesByRessourceId(publication.id).then((commentaires) => {
        setCommentaires(commentaires);
        console.log(publication)
        console.log(commentaires)
      })
    })

  }, [id]);

  if (!publication) return null;
  return (
    <div className="ressource-card">
      <h2>{publication.titre}</h2>
      <p>Mis en ligne le {publication.dateCreation} par {publication.idUtilisateur}</p>
      {publication.contenu && <img src={publication.contenu} alt="Contenu multimedia" />}
      <p>{publication.contenu}</p>
      <p>Catégorie {publication.idCategorie}</p>
      <button>Commenter</button>


      {commentaires.map((commentaires) => (
        <div>
          <p>"{commentaires.contenu}"</p>
          <p>Posté par {commentaires.idUtilisateur}</p>
          <p>Le {commentaires.dateCreation}</p>
        </div>
      ))}
    </div>
  );
}
