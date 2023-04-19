import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/icon.png";
import "../../styles/Navbar.scss";
import M from 'materialize-css/dist/js/materialize.min.js';
import NotificationContext from './Notifications';

const Navbar = ({ isAuthenticated }) => {

  useEffect(() => {
    // Initialise le menu hamburger de Materialize
    M.AutoInit();
  }, []);

  const authLinks = (
    <>
      <Link to="/ressources">Ressources</Link>
      <Link to="/activites">Activités</Link>
      <Link to="/creation-ressource">Créer une ressource</Link>
      {/* <Link to="/creation-activite">Créer une activité</Link> */}
      <Link to="/relations">Mes relations</Link>
      <Link to="/parametres">Paramètres</Link>
      {/* <li>
        <NotificationContext />
      </li> */}
      <div className='side-menu-query'>
      <Link to="/favoris">Mes Favoris</Link>
          <Link to="/regarder-plus-tard">A regarder plus tard</Link>
          <Link to="/mes-activites">Mes activités</Link>
      </div>
    </>
  );

  const guestLinks = (
    <>
      <Link to="/inscription">Inscription</Link>
      <Link to="/connexion">Connexion</Link>
    </>
  );

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
          {isAuthenticated ? authLinks : guestLinks}
        </div>
        <ul className="sidenav" id="mobile-demo">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
