import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import RessourceUnique from '../components/Ressources/RessourceUnique';
import Navbar from './Navbar/Navbar';
import ListeActivites from './Activites/ListeActivites';
import Activite from './Activites/Activite';
import CreationActivite from './Activites/CreationActivite';

function App() {
 return (
  <div className='App'>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ressource/:id" element={<RessourceUnique/>}/>
        <Route path="/liste-activite" element={<ListeActivites/>}/>
        <Route path="/activite" element={<Activite/>}/>
        <Route path="/creation-activite" element={<CreationActivite/>}/>
    </Routes>
  </div>
 )
}

export default App;