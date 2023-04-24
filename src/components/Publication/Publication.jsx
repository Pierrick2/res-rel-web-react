import React from "react";
import PublicationService from "../../services/PublicationService";
import moment from "moment";

const Publication = (props) => {
  const [liked, setLiked] = React.useState(false);

  function LikePublication() {
    setLiked(!liked);
  }

  function ShowCommentsSection() {
    console.log("TODO: show comments section");
  }

  function SauvegarderPublication() {
    PublicationService.SauvegarderPublication(1).then((res) => {
      console.log(res);
    });
  }

  function AfficherPlusOptions() {
    console.log("TODO: afficher plus d'options");
  }

  function AfficherPublication() {
    props.navigation.navigate("DetailsPublication", {
      auteur: props.auteur,
      titre: props.titre,
      contenu: props.contenu,
      status: props.status,
      raisonRefus: props.raisonRefus,
      dateCreation: JSON.stringify(props.dateCreation),
      datePublication: JSON.stringify(props.datePublication),
      lienImage: props.lienImage,
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src="https://i.imgflip.com/2xc9z0.png"
          alt="avatar"
          style={{ height: 50, width: 50 }}
        />
        <div style={{ marginLeft: 10 }}>
          <p>Partagé par {props.auteur}</p>
        </div>
        <div style={{ flex: 1 }}></div>
        <div>
          <p>
            {moment(props.dateCreation).fromNow() === "Invalid date"
              ? "quelques secondes"
              : moment(props.dateCreation).fromNow()}
          </p>
        </div>
      </div>
      <h1 style={{ margin: "10px 0" }}>{props.titre}</h1>
      <p>{props.contenu}</p>
      <div>
        <div>
          <img src={props.lienImage} style={{ height: 200, width: "auto" }} />
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <button onClick={LikePublication}>
          {liked ? (
            <ion-icon
              name="heart"
              size="small"
              style={{ color: "red" }}
            ></ion-icon>
          ) : (
            <ion-icon name="heart-outline" size="small"></ion-icon>
          )}
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={ShowCommentsSection}>
          <ion-icon name="chatbubble-outline" size="small"></ion-icon>
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={SauvegarderPublication}>
          <ion-icon name="bookmark-outline" size="small"></ion-icon>
        </button>
        <div style={{ flex: 1 }}></div>
        <button onClick={AfficherPlusOptions}>
          <ion-icon name="ellipsis-vertical" size="small"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Publication;
