import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/RessourceUnique.scss";
import CommentaireService from "../../services/CommentaireService";
import UtilisateurService from "../../services/UtilisateurService";

export default function RessourceUnique() {
  const [publication, setPublications] = useState([]);
  const [commentaires, setCommentaires] = useState([]);
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");
  const [utilisateurs, setUtilisateurs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    PublicationService.getPublication(id).then((publication) => {
      setPublications(publication);
      const params = {
        "idRessource[equals]": id,
        include: "utilisateur",
      };
      CommentaireService.getCommentairesByRessourceId(params).then(
        (commentaires) => {
          setCommentaires(commentaires.data);
          const userIds = commentaires.data.map(
            (commentaire) => commentaire.idUtilisateur
          );
          UtilisateurService.getUtilisateursByIds(userIds).then(
            (utilisateurs) => {
              setUtilisateurs(utilisateurs.data);
            }
          );
        }
      );
    });
  }, [id]);

  const setNouveauCommentaireValue = (e) => {
    setNouveauCommentaire(e.target.value);
  };

  const envoyerCommentaire = (e) => {
    e.preventDefault();
    const commentaire = {
      contenu: nouveauCommentaire,
      idUtilisateur: 1,
      idRessource: id,
    };
    CommentaireService.addCommentaire(commentaire).then((commentaire) => {
      setCommentaires([...commentaires, commentaire]);
    });
  };

  const getNomUtilisateur = (idUtilisateur) => {
    const utilisateur = utilisateurs.find((utilisateur) => utilisateur.id === idUtilisateur);
    return utilisateur ? utilisateur.nom : "";
  };

  if (!publication) return null;
  return (
    <div className="ressource-card">
      <h2>{publication.titre}</h2>
      <p>
        Mis en ligne le {publication.dateCreation} par{" "}
        {getNomUtilisateur(publication.idUtilisateur)}
      </p>
      {publication.contenu && (
        <img
          src="https://picsum.photos/200/300"
          alt="Image de la publication"
        />
      )}
      <p>{publication.contenu}</p>
      <p>Catégorie {publication.idCategorie}</p>
      <textarea
        value={nouveauCommentaire}
        onChange={setNouveauCommentaireValue}
        placeholder="Votre commentaire..."
      ></textarea>
      <button onClick={envoyerCommentaire} className="comment-btn">
        Commenter
      </button>
      {commentaires.length > 0 && (
        <div>
  {commentaires.map((commentaire) => (
    <div key={commentaire.id} className="commentaire">
      <p>"{commentaire.contenu}"</p>
      <p>Posté par {getNomUtilisateur(commentaire.idUtilisateur)}</p>
      <p>Le {commentaire.datePublication}</p>
      <div className="repondre-commentaire">
        <textarea placeholder="Votre réponse"></textarea>
        <button>Valider</button>
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
}
