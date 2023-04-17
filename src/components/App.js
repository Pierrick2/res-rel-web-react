import React from "react";
import { Routes, Route } from "react-router-dom";
import RessourceUnique from "./Ressources/RessourceUnique";
import Navbar from "../components/Navbar/Navbar";
import ListeActivites from "./Activites/ListeActivites";
import CreationActivite from "./Activites/CreationActivite";
import ListeRessources from "./Ressources/ListeRessources";
import CreationRessource from "./Ressources/CreationRessource";
import Inscription from "./Utilisateur/Inscription";
import Connexion from "./Utilisateur/Connexion";
import Parametres from "./Utilisateur/Parametres";
import Relations from "./Utilisateur/Relations";
import Activites from "./Activites/Activites";

function App() {
  return (
    <div className="App">
      <Navbar />
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
        <Route path="/liste-activite" element={<ListeActivites />} />
        <Route path="/creation-activite" element={<CreationActivite />} />
      </Routes>
    </div>
  );
}

export default App;
