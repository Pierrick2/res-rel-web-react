import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RessourceUnique from "./Ressources/RessourceUnique";
import Navbar from "./Navbar/Navbar";
import CreationActivite from "./Activites/CreationActivite";
import ListeRessources from "./Ressources/ListeRessources";
import CreationRessource from "./Ressources/CreationRessource";
import Inscription from "./Utilisateur/Inscription";
import Connexion from "./Utilisateur/Connexion";
import Parametres from "./Utilisateur/Parametres";
import Relations from "./Utilisateur/Relations";
import Activites from "./Activites/Activites";
import ActiviteUnique from "./Activites/ActiviteUnique";
import Publication from "./Publication/Publication";
import SideMenu from "./Navbar/SideMenu";
import Profil from "./Utilisateur/Profil";
import Favoris from "./Ressources/Favoris";
import RegarderPlusTard from "./Ressources/RegarderPlusTard";
import Statistiques from "./Ressources/Statistiques";
import Notifications from "./Navbar/Notifications";
import AdminStats from "./Statistiques/AdminStats";
import Administration from "./Utilisateur/Administration";
import { NativeBaseProvider } from 'native-base';

function App() {
  const [isAuthenticated] = useState(true);

  return (
    <NativeBaseProvider>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} />
        <SideMenu isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<ListeRessources />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/parametres" element={<Parametres />} />
          <Route path="/relations" element={<Relations />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/ressources/:id" element={<RessourceUnique />} />
          <Route path="/creation-ressource" element={<CreationRessource />} />
          <Route path="/ressources" element={<ListeRessources />} />
          <Route path="/creation-activite" element={<CreationActivite />} />
          <Route path="/activite-unique" element={<ActiviteUnique />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/parametres" element={<Parametres />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/a-regarder-plus-tard" element={<RegarderPlusTard />} />
          <Route path="/statistiques" element={<Statistiques />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/admin-stats" element={<AdminStats />} />
          <Route path="/administration" element={<Administration />} />
        </Routes>
      </div>
    </NativeBaseProvider>
  );
}

export default App;
