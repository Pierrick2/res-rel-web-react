import React from 'react'
import "../../styles/Activites.scss"
import "../../styles/BarreRecherche.scss"


export default function Activites() {
    return (
        
    <div>
        <div className="search-form">
            <input type="text" placeholder="Rechercher une activité ..." />
            <button type="submit">Rechercher</button>
        </div>
        <a href='creation-activite' className="btn-creation-activity">
        Créer une nouvelle activité
        </a>
        <div className="activities-container">
            <div className="activity">
                <div className="activity-image">
                    <img src={require('../../assets/img/activite1.png')} alt="Activity 1" />
                </div>
                <div className="activity-info">
                    <h3 className="activity-title">Garden party</h3>
                    <p className="activity-location">Dijon Plage</p>
                    <div className="activity-buttons">
                        <a href="activite-unique" className="btn-see-activity">Voir l'activité</a>
                        <a href="#" className="btn-join-activity">S'inscrire</a>
                    </div>
                </div>
            </div>

            <div className="activity">
                <div className="activity-image">
                    <img src={require('../../assets/img/activite1.png')} alt="Activity 2" />
                </div>
                <div className="activity-info">
                    <h3 className="activity-title">Chasse aux oeufs</h3>
                    <p className="activity-location">Dans les bois alentours</p>
                    <div className="activity-buttons">
                        <a href="activite-unique" className="btn-see-activity">Voir l'activité</a>
                        <a href="#" className="btn-join-activity">S'inscrire</a>
                    </div>
                </div>
            </div>
            <div className="activity">
                <div className="activity-image">
                    <img src={require('../../assets/img/activite1.png')} alt="Activity 3" />
                </div>
                <div className="activity-info">
                    <h3 className="activity-title">Chasse au XDDL</h3>
                    <p className="activity-location">WorldWide</p>
                    <div className="activity-buttons">
                        <a href="activite-unique" className="btn-see-activity">Voir l'activité
                        </a>
                        <a href="#" className="btn-join-activity">S'inscrire</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
