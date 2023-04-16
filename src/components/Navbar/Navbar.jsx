import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/resre_logo_2.png";
import "../../styles/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo res rel" className="header-logo" />
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/ressources">Ressource</Link>
        <Link to="/liste-activite">Activités</Link>
      </nav>
    </div>
  );
}
