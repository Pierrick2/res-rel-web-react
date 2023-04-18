import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/icon.png";
import "../../styles/Navbar.scss";
import M from 'materialize-css/dist/js/materialize.min.js';
import NotificationContext from './Notifications';

const Navbar = () => {

  useEffect(() => {
    // Initialise le menu hamburger de Materialize
    M.AutoInit();
  }, []);


  return (
    <div>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo res rel" className="brand-logo" />
        </Link>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <div className="menu hide-on-med-and-down">
          <Link to="/ressources">Ressources</Link>
          <Link to="/activites">Activités</Link>
          <Link to="/creation-ressource">Créer une ressource</Link>
          {/* <Link to="/creation-activite">Créer une activité</Link> */}
          <Link to="/relations">Mes relations</Link>
          <Link to="/inscription">Inscription</Link>
          <Link to="/connexion">Connexion</Link>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/ressources">Ressources</Link>
          </li>
          <li>
            <Link to="/activites">Activités</Link>
          </li>
          <li>
            <Link to="/creation-ressource">Créer une ressource</Link>
          </li>
          {/* <li>
            <Link to="/creation-activite">Créer une activité</Link>
          </li> */}
          <li>
            <Link to="/relations">Mes relations</Link>
          </li>
          <li>
            <Link to="/inscription">Inscription</Link>
          </li>
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
          {/* <li>
            <NotificationContext />
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;