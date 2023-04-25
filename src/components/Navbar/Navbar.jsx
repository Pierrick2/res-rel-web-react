import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icon.png";
import "../../styles/Navbar.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import NotificationContext from './Notifications';
import { useAuth } from '../../services/AuthentificationService';
import { AuthentificationEnum } from '../../ressources/enums/AuthentificationEnum';
import UtilisateurService from '../../services/UtilisateurService';

export default function Navbar() {

  const [selectedRole, setSelectedRole] = useState(0);
  const [utilisateur, setUtilisateur] = useState({});


  useEffect(() => {
    // Initialise le menu hamburger de Materialize
    M.AutoInit();

    // UtilisateurService.getRoleUtilisateur().subscribe((role) => {
    //   setSelectedRole(Number(role));
    // });

  }, []);



  const handleRoleChange = (event) => {
    setSelectedRole(Number(event.target.value));
    UtilisateurService.setRoleUtilisateur(Number(event.target.value));
  };

  const authLinks = (
    <>
      <Link to="/ressources">Ressources</Link>
      <Link to="/activites">Activités</Link>
      <Link to="/creation-ressource">Créer une ressource</Link>
      <Link to="/relations">Mes relations</Link>
      <Link to="/notifications"><svg id='notifs' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5326 37.1285C45.3032 35.0213 43.8183 31.0104 43.7918 23.9093L43.7863 22.4394C43.7521 13.268 36.3745 5.78021 27.3271 5.75185L27.2029 5.75231C25.0306 5.76313 22.8817 6.20171 20.8789 7.043C18.8762 7.88429 17.0587 9.11182 15.5303 10.6555C14.0019 12.1992 12.7926 14.0288 11.9713 16.0399C11.15 18.0509 10.7329 20.2041 10.7437 22.3763L10.7499 24.0326C10.7763 31.1337 9.32142 35.1555 8.10782 37.2718C7.81429 37.7761 7.65919 38.3491 7.65822 38.9326C7.65725 39.5161 7.81044 40.0895 8.10229 40.5948C8.39414 41.1001 8.81429 41.5194 9.32022 41.8101C9.82616 42.1009 10.3999 42.2528 10.9834 42.2506L19.0576 42.2205C19.0658 44.4168 19.9461 46.5199 21.505 48.0671C23.0638 49.6143 25.1734 50.4789 27.3697 50.4708C29.566 50.4626 31.6691 49.5822 33.2163 48.0234C34.7636 46.4646 35.6282 44.355 35.62 42.1587L43.6942 42.1285C44.2776 42.1301 44.8509 41.9765 45.3555 41.6836C45.8601 41.3907 46.2777 40.969 46.5657 40.4616C46.8512 39.9513 46.9983 39.3753 46.9925 38.7906C46.9867 38.2059 46.8281 37.633 46.5326 37.1285ZM27.3573 47.1583C26.0412 47.1577 24.7786 46.6372 23.8445 45.71C22.9104 44.7829 22.3804 43.5242 22.3701 42.2081L32.3075 42.171C32.307 43.4872 31.7864 44.7498 30.8593 45.6839C29.9321 46.618 28.6734 47.1479 27.3573 47.1583Z" fill="#4183F4" />
      </svg>
      </Link>

      <div className='side-menu-query'>
        <Link to="/favoris">Mes Favoris</Link>
        <Link to="/regarder-plus-tard">A regarder plus tard</Link>
        <Link to="profil">Mon Profil</Link>
      </div>
      <div className="profile-container">
        <img src="https://pbs.twimg.com/media/EPNM3xQWkAAfRWD?format=jpg&name=large" alt="Photo de profil" className="profile-picture" />
        <button className="btn-deconnexion">Se déconnecter</button>
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
        {selectedRole !== 0 ? authLinks : guestLinks}

      </ul>
      <div className="menu hide-on-med-and-down">
        {/* {auth.authState.authenticated ? authLinks : guestLinks} */}
        {selectedRole !== 0 ? authLinks : guestLinks}


      </div>
      <select name="role" id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="0">Invité</option>
        <option value="1">Citoyen connecté</option>
        <option value="2">Modérateur</option>
        <option value="3">Administrateur</option>
        <option value="4">Super Administrateur</option>
      </select>

    </nav>
  );
};

