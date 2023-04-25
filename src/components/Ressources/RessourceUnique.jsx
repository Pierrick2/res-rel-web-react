import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/RessourceUnique.scss";
import CommentaireService from "../../services/CommentaireService";
import UtilisateurService from "../../services/UtilisateurService";
import { IonIcon } from "@ionic/react";
import { checkmarkCircle, star, bookmark, shareSocial, createOutline, checkmarkOutline, closeOutline } from "ionicons/icons";

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
    const params = {
      "idRessource[equals]": id,
      include: "utilisateur",
    };
    PublicationService.getPublication(id).then((publication) => {
      console.log("publication", publication);
      setPublications(publication);
    });
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


  if (!publication) return null;

  return (
    <>
      <div className="ressource-card">
        <div className="ressource-card-header">
          <p className="infos-ressources">
            {selectedRole !== 0 && (
              <div>
                <IonIcon id="star-modo-v" icon={checkmarkCircle} />
              </div>
            )}
            Mis en ligne le {publication.dateCreation} par{" "}
            {/* {publication.utilisateur.nom} {publication.utilisateur.prenom} */}
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
                <button id="star" className="icon" aria-label="mettre en favoris">
                  <IonIcon icon={star} />
                </button>
                <button id="star" className="icon" aria-label="sauvegarder pour plus tard">
                  <IonIcon icon={bookmark} />
                </button>
                <button id="star" className="icon" aria-label="partager">
                  <IonIcon icon={shareSocial} />

                </button>
                <button id="star" className="icon" aria-label="editer">
                  <IonIcon icon={createOutline} />
                </button>

                {selectedRole >= 2 && (
                  <div className="moderation-ressource">
                    <button id="star-modo-v" className="icon" aria-label="refuser">
                      <IonIcon icon={checkmarkOutline} />
                    </button>
                    <button id="star-modo" className="icon" aria-label="valider">
                      <IonIcon icon={closeOutline} />
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
                <p>Posté par
                  {/* {publication.utilisateur.nom} {publication.utilisateur.prenom} */}
                </p>
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
