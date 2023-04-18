import React from 'react'
import "../../styles/Activites.scss"
import "../../styles/BarreRecherche.scss"


export default function Activites() {
    return (
        
    <div>
        <div class="search-form">
            <input type="text" placeholder="Rechercher une activité ..." />
            <button type="submit">Rechercher</button>
        </div>
        <a href='creation-activite' class="btn-creation-activity">
        Créer une nouvelle activité
        </a>
        <div class="activities-container">
            <div class="activity">
                <div class="activity-image">
                    <img src={require('../../assets/img/activite1.png')} alt="Activity 1" />
                </div>
                <div class="activity-info">
                    <h3 class="activity-title">Garden party</h3>
                    <p class="activity-location">Dijon Plage</p>
                    <div class="activity-buttons">
                        <a href="activite-unique" class="btn-see-activity">Voir l'activité</a>
                        <a href="#" class="btn-join-activity">S'inscrire</a>
                    </div>
                </div>
            </div>

            <div class="activity">
                <div class="activity-image">
                    <img src={require('../../assets/img/activite1.png')} alt="Activity 2" />
                </div>
                <div class="activity-info">
                    <h3 class="activity-title">Chasse aux oeufs</h3>
                    <p class="activity-location">Dans les bois alentours</p>
                    <div class="activity-buttons">
                        <a href="activite-unique" class="btn-see-activity">Voir l'activité</a>
                        <a href="#" class="btn-join-activity">S'inscrire</a>
                    </div>
                </div>
            </div>
            <div class="activity">
                <div class="activity-image">
                    <img src={require('../../assets/img/activite1.png')} alt="Activity 3" />
                </div>
                <div class="activity-info">
                    <h3 class="activity-title">Chasse au XDDL</h3>
                    <p class="activity-location">WorldWide</p>
                    <div class="activity-buttons">
                        <a href="activite-unique" class="btn-see-activity">Voir l'activité
                        </a>
                        <a href="#" class="btn-join-activity">S'inscrire</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
