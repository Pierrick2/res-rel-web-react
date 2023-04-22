import React from "react";
import "../../styles/Card.scss";

export default function CreationActivite() {
  return (
    <div className="card">
      <h4>Créer un jeu ou une activité</h4>
      <form>
        <label htmlFor="title">Titre :</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="location">Lieu :</label>
        <input type="text" id="location" name="location" />

        <label htmlFor="date">Date :</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="time">Heure :</label>
        <input type="time" id="time" name="time" />

        <label htmlFor="image">Image d'illustration de votre activité:</label><br />
        <input type="file" id="image" name="image" accept="image/*" /><br />

        <label htmlFor="description">Description :</label>
        <textarea id="description" name="description" required></textarea>

        <button type="submit">Créer une activité</button>
      </form>
    </div>
  )
}
