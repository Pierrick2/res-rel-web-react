import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/icon.png";
import "../../styles/Navbar.scss"

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
  )
}
