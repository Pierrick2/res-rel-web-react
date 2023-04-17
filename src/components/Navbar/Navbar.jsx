<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/icon.png";
import "../../styles/Navbar.scss"
=======
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/resre_logo_2.png";
import "../../styles/Navbar.scss";
>>>>>>> 4be0c8a1216bd3563fa6a067229f3ad1dd045b55

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo res rel" class="brand-logo" />
        </Link>
        <Link to="/">Accueil</Link>
        <Link to="/ressources">Ressource</Link>
        <Link to="/liste-activite">Activités</Link>
        <Link to="/creation-ressource">Créer une ressource</Link>
        <Link to="/creation-activite">Créer une activité</Link>
        <Link to="/relations">Mes relations</Link>

      </nav>
    </div>
  );
}
