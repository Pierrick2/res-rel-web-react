import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/RessourceUnique.scss";
import CommentaireService from "../../services/CommentaireService";
import UtilisateurService from "../../services/UtilisateurService";
import { IonIcon } from "@ionic/react";

export default function RessourceUnique() {
  const [publication, setPublications] = useState([]);
  const [commentaires, setCommentaires] = useState([]);
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [selectedRole, setSelectedRole] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    UtilisateurService.getRoleUtilisateur().subscribe((role) => {
      setSelectedRole(Number(role));
    });
  }, []);

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
    <>
      <div className="ressource-card">
        <div className="ressource-card-header">
          <p className="infos-ressources">
            {selectedRole !== 0 && (
              <img src="https://www.svgrepo.com/download/169312/check-mark.svg" alt="marqueur d'exploitation" />
            )}
            Mis en ligne le {publication.dateCreation} par{" "}
            {getNomUtilisateur(publication.idUtilisateur)}
          </p>
        </div>
        <h2>{publication.titre}</h2>

        {publication.contenu && (
          <img
            src="https://picsum.photos/200/300"
            alt="Image de la publication"
          />
        )}
        <p>{publication.contenu}</p>
        <p>Catégorie {publication.idCategorie}</p>
        <div>
          {selectedRole !== 0 && (
            <div>
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

                {selectedRole >= 2 && (
                  <div className="moderation-ressource">
                    <button className="icon" aria-label="refuser">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png" alt="Bouton d'édition'" />
                    </button><button className="icon" aria-label="valider">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Feedbin-Icon-check.svg/1200px-Feedbin-Icon-check.svg.png" alt="Bouton de validation de ressource" />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <textarea
                  value={nouveauCommentaire}
                  onChange={setNouveauCommentaireValue}
                  placeholder="Votre commentaire..."
                ></textarea>
                <button onClick={envoyerCommentaire} className="comment-btn">
                  Commenter
                </button>
              </div>

            </div>
          )}
        </div>
        {commentaires.length > 0 && (
          <div>
            {commentaires.map((commentaire) => (
              <div key={commentaire.id} className="commentaire">
                <p>"{commentaire.contenu}"</p>
                <p>Posté par {getNomUtilisateur(commentaire.idUtilisateur)}</p>
                <p>Le {commentaire.datePublication}</p>
                {selectedRole !== 0 && (

                  <div className="repondre-commentaire">
                    <textarea placeholder="Votre réponse"></textarea>
                    <div className="btn-commentaires">
                      <div>
                        <button >Répondre</button>
                      </div>

                      {selectedRole >= 2 && (
                        <div className="moderation-commentaire">
                          <button>Modérer</button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        )}
      </div>
    </>
  );
}
