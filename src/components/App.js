import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import RessourceUnique from "./Ressources/RessourceUnique";
import Navbar from "../components/Navbar/Navbar";
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


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} />
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
        
      </Routes>
    </div>
  );
}

export default App;
