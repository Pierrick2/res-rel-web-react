import React from 'react'
import "../../styles/Activites.scss"


export default function Activites() {
    return (
        
    <div>
                  <a href='creation-activite' class="btn-creation-activity">
        Créer une nouvelle activité
      </a>
        <div class="activities-container">
            <div class="activity">
                <div class="activity-image">
                    <img src={require('../../assets/img/activite1.png')} alt="Activity 1" />
                </div>
                <div class="activity-info">
                    <h3 class="activity-title">Activité 1</h3>
                    <p class="activity-location">Lieu de l'activité 1</p>
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
                    <h3 class="activity-title">Activité 2</h3>
                    <p class="activity-location">Lieu de l'activité 2</p>
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
                    <h3 class="activity-title">Activité 3</h3>
                    <p class="activity-location">Lieu de l'activité 3</p>
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
