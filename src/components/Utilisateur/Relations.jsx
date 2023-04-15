import React from 'react'

export default function
    () {
    return (
        <div class="search">
            <p>Recherche de personnes</p>
            <div class="search-form">
                <input type="text" placeholder="Rechercher une personne" />
                <button type="submit">Rechercher</button>
            </div>
            <div class="search-results">
                <div class="search-result">
                    <img src="https://via.placeholder.com/150" alt="Photo de profil" />
                    <p>Nom de la personne</p>
                    <div class="buttons">
                        <button>Voir ressource</button>
                        <button>Ajouter en ami</button>
                    </div>
                </div>
                <div class="search-result">
                    <img src="https://via.placeholder.com/150" alt="Photo de profil" />
                    <p>Nom de la personne</p>
                    <div class="buttons">
                        <button>Voir ressource</button>
                        <button>Ajouter en ami</button>
                    </div>
                </div>
                <div class="search-result">
                    <img src="https://via.placeholder.com/150" alt="Photo de profil" />
                    <p>Nom de la personne</p>
                    <div class="buttons">
                        <button>Voir ressource</button>
                        <button>Ajouter en ami</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
