import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/RessourceUnique.scss"
import CommentaireService from "../../services/CommentaireService";

export default function RessourceUnique() {
  const [publication, setPublications] = useState([]);
  const [commentaires, setCommentaires] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    PublicationService.getPublication(id).then((publication) => {
      setPublications(publication);
      CommentaireService.getCommentairesByRessourceId(id).then(
        (commentaires) => {
          setCommentaires(commentaires);
        }
      );
    });
  }, [id]);

  if (!publication) return null;
  return (
    <div className="ressource-card">
      <h2>{publication.titre}</h2>
      <p>
        Mis en ligne le {publication.dateCreation} par{" "}
        {publication.idUtilisateur}
      </p>
      {publication.contenu && (
        <img src="https://picsum.photos/200/300" alt="Image de la publication" />
      )}
      <p>{publication.contenu}</p>
      <p>Catégorie {publication.idCategorie}</p>
      <textarea
          placeholder="Votre commentaire..."
        ></textarea>
      <button className="comment-btn">Commenter</button>
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
  );
}
