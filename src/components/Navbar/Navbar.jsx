import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icon.png";
import "../../styles/Navbar.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import NotificationContext from './Notifications';
import { useAuth } from '../../services/AuthentificationService';

export default function Navbar() {
 const auth = useAuth(true);



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
      
      {/* <li>
        <NotificationContext />
      </li> */}
      <div className='side-menu-query'>
        <Link to="/favoris">Mes Favoris</Link>
        <Link to="/regarder-plus-tard">A regarder plus tard</Link>
        <Link to="profil">Mon Profil</Link>
        <button onClick={auth.logout}>Se déconnecter</button>
        
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
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo res rel" className="brand-logo" />
      </Link>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <div className="sidenav-header">
            {/* <Link to="/" className="brand-logo">
              <img src={logo} alt="Logo res rel" />
            </Link> */}
            <a href="#" className="sidenav-close">
              <i className="material-icons" id='close-btn'>close</i>
            </a>
          </div>
        </li>
        {/* {auth.authState.authenticated ? authLinks : guestLinks} */}
        {auth ? authLinks : guestLinks}
      </ul>
      <div className="menu hide-on-med-and-down">
        {/* {auth.authState.authenticated ? authLinks : guestLinks} */}
        {auth ? authLinks : guestLinks}
      </div>
      <div className="profile-container">
      <img src="https://pbs.twimg.com/media/EPNM3xQWkAAfRWD?format=jpg&name=large" alt="Photo de profil" className="profile-picture" />
      <button onClick={auth.logout} className="btn-deconnexion">Se déconnecter</button>
      </div>
    </nav>
  );
};

