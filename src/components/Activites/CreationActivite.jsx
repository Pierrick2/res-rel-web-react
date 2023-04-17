import React from "react";
import "../../styles/Card.scss";

export default function CreationActivite() {
  return (
    <div class="card">
      <h4>Créer une nouvelle activité</h4>
      <form>
        <label for="title">Titre :</label>
        <input type="text" id="title" name="title" required />

        <label for="location">Lieu :</label>
        <input type="text" id="location" name="location" required />

        <label for="date">Date :</label>
        <input type="date" id="date" name="date" required />

        <label for="time">Heure :</label>
        <input type="time" id="time" name="time" required />

        <label for="image">Image d'illustration de votre activité:</label><br />
        <input type="file" id="image" name="image" accept="image/*" /><br />

        <label for="description">Description :</label>
        <textarea id="description" name="description" required></textarea>

        <button type="submit">Créer une activité</button>
      </form>
    </div>
  )
}
