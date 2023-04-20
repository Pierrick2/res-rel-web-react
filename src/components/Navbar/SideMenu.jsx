import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/SideMenu.scss"

const SideMenu = ({ isAuthenticated }) => {

  return (
    <>
      {isAuthenticated && (
        <div className='side-menu'>
          <Link to="/favoris">Mes Favoris</Link>
          <Link to="/regarder-plus-tard">A regarder plus tard</Link>
          <Link to="profil">Mon Profil</Link>
        </div>
      )}
    </>
  );
}

export default SideMenu;
