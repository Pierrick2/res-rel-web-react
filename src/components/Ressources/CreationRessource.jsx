import React from "react";
import "../../styles/CreationRessource.scss";

export default function CreationRessource() {
  return (
    <div className="ressource-card">
      <label htmlFor="category">Catégorie:</label>
      <input type="text" id="category" name="category" required />
      <br />

      <label htmlFor="title">Titre:</label>
      <input type="text" id="title" name="title" required />
      <br />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" required />
      <br />

      <label htmlFor="file">Fichier:</label>
      <input type="file" id="file" name="file" />
      <br />

      <label htmlFor="partage">Partage:</label>
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
