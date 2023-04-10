import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import RessourceUnique from "./Ressources/RessourceUnique";
import Navbar from "../components/Navbar/Navbar";
import ListeActivites from "./Activites/ListeActivites";
import Activite from "./Activites/Activite";
import CreationActivite from "./Activites/CreationActivite";
import ListeRessources from "./Ressources/ListeRessources";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ressource/:id" element={<RessourceUnique />} />
        <Route path="/ressource" element={<ListeRessources />} />
        <Route path="/liste-activite" element={<ListeActivites />} />
        <Route path="/activite" element={<Activite />} />
        <Route path="/creation-activite" element={<CreationActivite />} />
      </Routes>
    </div>
  );
}

export default App;
