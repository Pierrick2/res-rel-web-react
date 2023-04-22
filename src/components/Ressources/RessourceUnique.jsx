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
      <p className="infos-ressources">
        Mis en ligne le {publication.dateCreation} par{" "}
        {getNomUtilisateur(publication.idUtilisateur)}
      </p>
      <h2>{publication.titre}</h2>

      {publication.contenu && (
        <img
          src="https://picsum.photos/200/300"
          alt="Image de la publication"
        />
      )}
      <p>{publication.contenu}</p>
      <p>Catégorie {publication.idCategorie}</p>
      <div className="interactions">
        <button className="icon" aria-label="mettre en favoris">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/FA_star.svg" alt="Bouton de mise en favoris" />
        </button>
        <button className="icon" aria-label="sauvegarder pour plus tard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Clock_%2889654%29_-_The_Noun_Project.svg" alt="Bouton de mise de côté" />
        </button>
        <button className="icon" aria-label="partager">
          <img src="https://www.svgrepo.com/show/122182/share-button.svg" alt="Bouton de partage" />
        </button>
        <button className="icon" aria-label="editer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt="Bouton d'édition'" />
        </button>

      </div>
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
