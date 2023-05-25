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
import Filtres from "../Navbar/Filtres";
import { Box, View, Button, FavouriteIcon, InfoIcon, Avatar } from 'native-base';



export default function ListeRessources() {
  const [publications, setPublications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRole, setSelectedRole] = useState(0);
  const apiURL = "https://api.victor-gombert.fr/api/v1/utilisateurs";


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
    <Box>
      <View>
        <BarreRecherche />
        <Filtres />
        {filteredPublications.map((publication) => (
          <div className="ressource-card " key={publication.id}>
            <div>
              <p className="infos-ressources">
                <Avatar
                  source={{
                    uri: apiURL + "/" + publication.auteur + "/download",
                  }}
                ></Avatar>
                <p>Catégorie {publication.categorie.nom}</p>
                Mis en ligne le {publication.dateCreation} par{' '}
                {publication.utilisateur.nom} {publication.utilisateur.prenom}
              </p>
              <h2>{publication.titre}</h2>
              <img
                src="https://picsum.photos/200/300"
                alt="Image de la publication"
              />
              <p>{publication.contenu}</p>

              <div className="interactions">
                {selectedRole !== 0 && (
                  <View>
                    <Button id="star" className="icon" aria-label="mettre en favoris">
                      <FavouriteIcon name="heart" />
                      console.log("test bouton");
                    </Button>
                    <Button id="star" className="icon" aria-label="sauvegarder pour plus tard">
                      <InfoIcon name="bookmark" />
                    </Button>
                  </View>
                )}
                <Button className="voir-plus">
                  <Link to={`/ressources/${publication.id}`}>Voir plus</Link>
                </Button>
                <Button>
                  {/* <IonIcon name={"chatbubble-outline"} size={25} /> */}
                </Button>

              </div>
            </div>
          </div>
        ))}
      </View>
    </Box >
  );
}
