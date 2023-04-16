import React from "react";
import { Link } from "react-router-dom";

export default function ListeActivites() {
  return (
    <div>
      <h1>ListeActivites</h1>
      <nav>
        <Link to="/activite">Activité</Link>
        <Link to="/creation-activite">Créer une nouvelle activité</Link>
      </nav>
    </div>
  );
}
