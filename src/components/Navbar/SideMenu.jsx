import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/SideMenu.scss"
import { useEffect } from 'react';
import UtilisateurService from '../../services/UtilisateurService';
import { useState } from 'react';

export default function SideMenu({ isAuthenticated }) {
  const [selectedRole, setSelectedRole] = useState(0);
  useEffect(() => {
    UtilisateurService.getRoleUtilisateur().subscribe((role) => {
      setSelectedRole(Number(role));
    });
  }, []);

  if (!isAuthenticated) {
    return null; // Si l'utilisateur n'est pas connecté, ne pas afficher le menu
  }

  return (
    <>
      {selectedRole !== 0 && (
        <div className='side-menu'>
          <Link to="/profil">Mon Profil</Link>
          <Link to="/favoris">Mes Favoris</Link>
          <Link to="/regarder-plus-tard">A regarder plus tard</Link>
          <Link to="/parametres">Paramètres</Link>
          {selectedRole === 4 && (
            <>
              <Link to="/adimistration">Administration</Link>
              <Link to="/admin-stats">Statistiques</Link>
            </>
          )}
        </div>
      )}
    </>
  )
}
