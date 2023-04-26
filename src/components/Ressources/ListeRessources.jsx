import React, { useEffect, useState } from "react";
import PublicationService from "../../services/PublicationService";
import "../../styles/AffichageRessources.scss";
import "../../styles/BarreRecherche.scss";
import { Link } from "react-router-dom";
import { StatusPublicationEnum } from "../../ressources/enums/StatusPublicationEnum";
import { VisibilitePublicationEnum } from "../../ressources/enums/VisibilitePublicationEnum";
import BarreRecherche from "../Navbar/BarreRecherche";
import RechercheService from "../../services/RechercheService";
import UtilisateurService from "../../services/UtilisateurService";
import { IonIcon } from "@ionic/react";
import { star, bookmark } from "ionicons/icons";
import Filtres from "../Navbar/Filtres";

export default function ListeRessources() {
  const [publications, setPublications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRole, setSelectedRole] = useState(0);


  useEffect(() => {
    UtilisateurService.getRoleUtilisateur().subscribe((role) => {
      setSelectedRole(Number(role));
      console.log("role", role);
    });

    const params = {
      "status[equals]=": StatusPublicationEnum.APPROVED,
      "partage[equals]=": VisibilitePublicationEnum.PUBLIC,
      include: "categorie,utilisateur,pieceJointe",
    };
    PublicationService.GetPublications(params).then((publications) => {
      console.log("publications", publications);
      setPublications(publications);
    });

    RechercheService.GetListeResRessources().subscribe((data) => {
      console.log("data", data);
      setPublications(data);
    });

  }, []);

  if (publications.length === 0) {
    return <p>Chargement en cours...</p>;
  }
  const filteredPublications = publications.filter(
    (publication) =>
      publication.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.auteur.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.idCategorie === selectedCategory
  );


  return (
    <div>
      < BarreRecherche />
      < Filtres />
      {filteredPublications.map((publication) => (

        <div className="ressource-card " key={publication.id}>
          <div>

            <p className="infos-ressources">
              Mis en ligne le {publication.dateCreation} par{" "}
              {publication.utilisateur.nom} {publication.utilisateur.prenom}
            </p>
            <h2>{publication.titre}</h2>
            <img
              src="https://picsum.photos/200/300"
              alt="Image de la publication"
            />
            <p>{publication.contenu}</p>
            {/* <p>Catégorie {publication.categorie.nom}</p> */}
            <div className="interactions">
              {selectedRole !== 0 && (
                <div>
                  <button id="star" className="icon" aria-label="mettre en favoris">
                    <IonIcon icon={star} />
                  </button>
                  <button id="star" className="icon" aria-label="sauvegarder pour plus tard">
                    <IonIcon icon={bookmark} />
                  </button>
                </div>
              )}
              <button className="voir-plus">
                <Link to={`/ressources/${publication.id}`}>Voir plus</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
