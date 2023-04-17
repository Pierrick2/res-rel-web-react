<<<<<<< HEAD
import React from 'react'
import { Link } from "react-router-dom"
import Activites from './Activites'
import "../../styles/Activites.scss"
=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> 4be0c8a1216bd3563fa6a067229f3ad1dd045b55

export default function ListeActivites() {
  return (
    <div>
<<<<<<< HEAD
      <button>
        <Link to="/creation-activite">Créer une nouvelle activité</Link>
      </button>
      <Activites />
=======
      <h1>ListeActivites</h1>
      <nav>
        <Link to="/activite">Activité</Link>
        <Link to="/creation-activite">Créer une nouvelle activité</Link>
      </nav>
>>>>>>> 4be0c8a1216bd3563fa6a067229f3ad1dd045b55
    </div>
  );
}
