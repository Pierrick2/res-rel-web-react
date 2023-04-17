import React from 'react'
import "../../styles/ActiviteUnique.scss";
import imageActivite from '../../assets/img/activite1.png';


export default function ActiviteUnique() {
  return (
    <div className="activite-unique-container">
      <div className="activite-unique-header">
        <img src={imageActivite} alt="Activité" className="activite-unique-image" />
        <div className="activite-unique-status">Public</div>
        <h1 className="activite-unique-title">Titre de l'activité</h1>
        <p className="activite-unique-date">Date et heure: 01/05/2023 à 14h00</p>
        <p className="activite-unique-lieu">Lieu: Paris, France</p>
      </div>
      <div className="activite-unique-description">
        <h2>Description de l'activité</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod augue in ipsum bibendum, a lobortis sapien vestibulum. Nulla sagittis diam enim, eget laoreet velit elementum at. Nulla facilisi. Sed interdum nibh elit, eget efficitur quam porttitor vitae. Aenean sodales, ipsum ac lacinia pretium, nulla odio luctus libero, id blandit ante ante eu ante.</p>
      </div>
      <div className="activite-unique-participants">
        <p>Nombre de participants: 8</p><br/>
        <p>Nombre d'invités: 2</p>
      </div>
    </div>
  );
}
