import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/icon.png";
import "../../styles/Navbar.scss"

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo res rel" class="brand-logo" />
        </Link>
        <div class="menu">
        <Link to="/ressources">Ressource</Link>
        <Link to="/activites">Activités</Link>
        <Link to="/creation-ressource">Créer une ressource</Link>
        {/* <Link to="/creation-activite">Créer une activité</Link> */}
        <Link to="/relations">Mes relations</Link>
        <Link to="/inscription">Incscription</Link>
        <Link to="/connexion">Connexion</Link>
        
       </div>
      </nav>
    </div>
  );
}
