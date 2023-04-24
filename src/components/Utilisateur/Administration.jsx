import React, { useState } from "react";

const Administration = () => {
    // const [citoyenActif, setCitoyenActif] = useState(true); // État pour activer/désactiver un compte citoyen
    // const [categorie, setCategorie] = useState(""); // État pour ajouter/éditer une catégorie
    // const [ressources, setRessources] = useState([]); // État pour gérer les ressources
    // const [nouvelleRessource, setNouvelleRessource] = useState(""); // État pour ajouter une nouvelle ressource
    // const [filtreRessources, setFiltreRessources] = useState(""); // État pour filtrer les ressources
    // const [nouveauRole, setNouveauRole] = useState(""); // État pour créer un nouveau rôle

    // const toggleCitoyen = () => {
    //     setCitoyenActif(!citoyenActif);
    // };

    // const ajouterCategorie = () => {
    //     // Logique pour ajouter une nouvelle catégorie
    //     // Utiliser la valeur de l'état 'categorie'
    //     console.log("Catégorie ajoutée :", categorie);
    //     setCategorie("");
    // };

    // const supprimerCategorie = (categorieASupprimer) => {
    //     // Logique pour supprimer une catégorie
    //     console.log("Catégorie supprimée :", categorieASupprimer);
    // };

    // const editerCategorie = (categorieAEditer) => {
    //     // Logique pour éditer une catégorie
    //     console.log("Catégorie éditée :", categorieAEditer);
    // };

    // const ajouterRessource = () => {
    //     // Logique pour ajouter une nouvelle ressource
    //     // Utiliser la valeur de l'état 'nouvelleRessource'
    //     console.log("Ressource ajoutée :", nouvelleRessource);
    //     setNouvelleRessource("");
    // };

    // const supprimerRessource = (ressourceASupprimer) => {
    //     // Logique pour supprimer une ressource
    //     console.log("Ressource supprimée :", ressourceASupprimer);
    // };

    // const suspendreRessource = (ressourceASuspendre) => {
    //     // Logique pour suspendre une ressource
    //     console.log("Ressource suspendue :", ressourceASuspendre);
    // };

    // const editerRessource = (ressourceAEditer) => {
    //     // Logique pour éditer une ressource
    //     console.log("Ressource éditée :", ressourceAEditer);
    // };

    // const listerRessources = () => {
    //     // Logique pour lister les ressources
    //     console.log("Liste des ressources :", ressources);
    // };

    // const filtrerRessources = () => {
    //     // Logique pour filtrer les ressources
    //     console.log("Ressources filtrées :", filtreRessources);
    // };

    // const creerRole = () => {
    //     // Logique pour créer un nouveau rôle
    //     // Utiliser la valeur de l'état 'nouveauRole'
    //     console.log("Nouveau rôle créé :", nouveauRole);
    //     setNouveauRole("");
    // };

    return (
        <div>
            <h1>Gestion administrateur</h1>
            <h2>Compte citoyen</h2>
            <div>
                <label>
                    <input
                        type="checkbox"
                    // checked={citoyenActif}
                    // onChange={toggleCitoyen}
                    />
                    Activer/Désactiver un compte citoyen
                </label>
            </div>
            <h2>Catégories</h2>
            <div>
                <input
                    type="text"
                // value={categorie}
                // onChange={(e) => setCategorie(e.target.value)}
                />
                <button
                // onClick={ajouterCategorie}
                >Ajouter</button>
            </div>
            <ul>

                <li>
                    Catégorie 1{" "}
                    <button
                    // onClick={() => supprimerCategorie("Catégorie 1")}
                    >
                        Supprimer
                    </button>{" "}
                    <button
                    // onClick={() => editerCategorie("Catégorie 1")}
                    >Éditer</button>
                </li>
                <li>
                    Catégorie 2{" "}
                    <button
                    // onClick={() => supprimerCategorie("Catégorie 2")}
                    >
                        Supprimer
                    </button>{" "}
                    <button
                    // onClick={() => editerCategorie("Catégorie 2")}
                    >Éditer</button>
                </li>
                {/ Ajouter d'autres catégories ici /}
            </ul>
            <h2>Ressources</h2>
            <div>
                <input
                    type="text"
                // value={nouvelleRessource}
                // onChange={(e) => setNouvelleRessource(e.target.value)}
                />
                <button
                // onClick={ajouterRessource}
                >Ajouter</button>
            </div>
            <ul>
                {/ Afficher la liste des ressources ici /}
                <li>
                    Ressource 1{" "}
                    <button
                    // onClick={() => supprimerRessource("Ressource 1")}
                    >
                        Supprimer
                    </button>{" "}
                    <button
                    // onClick={() => suspendreRessource("Ressource 1")}
                    >
                        Suspendre
                    </button>{" "}
                    <button
                    // onClick={() => editerRessource("Ressource 1")}
                    >Éditer</button>
                </li>
                <li>
                    Ressource 2{" "}
                    <button
                    // onClick={() => supprimerRessource("Ressource 2")}
                    >
                        Supprimer
                    </button>{" "}
                    <button
                    // onClick={() => suspendreRessource("Ressource 2")}
                    >
                        Suspendre
                    </button>{" "}
                    <button
                    // onClick={() => editerRessource("Ressource 2")}
                    >Éditer</button>
                </li>

            </ul>
            <div>
                <input
                    type="text"
                // value={filtreRessources}
                // onChange={(e) => setFiltreRessources(e.target.value)}
                />
                <button
                // onClick={filtrerRessources}
                >Filtrer</button>
            </div>
            <h2>Rôles</h2>
            <div>
                <input
                    type="text"
                // value={nouveauRole}
                // onChange={(e) => setNouveauRole(e.target.value)}
                />
                <button
                // onClick={creerRole}
                >Créer</button>
            </div>
        </div>
    );
};

export default Administration;
