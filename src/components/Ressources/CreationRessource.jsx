import React from "react";
import "../../styles/CreationRessource.scss";

export default function CreationRessource() {
  return (
    <div className="ressource-card">
      <label for="category">Catégorie:</label>
      <input type="text" id="category" name="category" required />
      <br />

      <label for="title">Titre:</label>
      <input type="text" id="title" name="title" required />
      <br />

      <label for="description">Description:</label>
      <input type="text" id="description" name="description" required />
      <br />

      <label for="file">Fichier:</label>
      <input type="file" id="file" name="file" />
      <br />

      <label for="partage">Partage:</label>
      <select id="partage" name="partage">
        <br />
        <option value="">Public</option>
        <option value="prive">Privé</option>
      </select>
      <br />

      <button type="submit">Créer la ressource</button>
    </div>
  );
}
