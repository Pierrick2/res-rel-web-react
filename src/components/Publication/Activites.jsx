import React from 'react'
import "../../styles/Activites.scss"

export default function Activites() {
    return (
        <div>
            <div class="create-activity">
                <h4>Créer une nouvelle activité</h4>
                <form>
                    <label for="title">Titre :</label>
                    <input type="text" id="title" name="title" required />

                    <label for="location">Lieu :</label>
                    <input type="text" id="location" name="location" required />

                    <label for="date">Date :</label>
                    <input type="date" id="date" name="date" required />

                    <label for="time">Heure :</label>
                    <input type="time" id="time" name="time" required />

                    <label for="image">Image :</label>
                    <input type="file" id="image" name="image" accept="image/*" />

                    <label for="description">Description :</label>
                    <textarea id="description" name="description" required></textarea>

                    <button type="submit">Créer une activité</button>
                </form>
            </div>

            <div class="activities-container">
                <div class="activity">
                    <div class="activity-image">
                        <img src="https://example.com/activity-image-1.jpg" alt="Activity 1" />
                    </div>
                    <div class="activity-info">
                        <h3 class="activity-title">Activité 1</h3>
                        <p class="activity-location">Lieu de l'activité 1</p>
                        <div class="activity-buttons">
                            <a href="https://example.com/activity-1" class="btn-see-activity">Voir l'activité</a>
                            <a href="#" class="btn-join-activity">S'inscrire</a>
                        </div>
                    </div>
                </div>

                <div class="activity">
                    <div class="activity-image">
                        <img src="https://example.com/activity-image-2.jpg" alt="Activity 2" />
                    </div>
                    <div class="activity-info">
                        <h3 class="activity-title">Activité 2</h3>
                        <p class="activity-location">Lieu de l'activité 2</p>
                        <div class="activity-buttons">
                            <a href="https://example.com/activity-2" class="btn-see-activity">Voir l'activité</a>
                            <a href="#" class="btn-join-activity">S'inscrire</a>
                        </div>
                    </div>
                </div>
                <div class="activity">
                    <div class="activity-image">
                        <img src="https://example.com/activity-image-2.jpg" alt="Activity 2" />
                    </div>
                    <div class="activity-info">
                        <h3 class="activity-title">Activité 2</h3>
                        <p class="activity-location">Lieu de l'activité 2</p>
                        <div class="activity-buttons">
                            <a href="https://example.com/activity-2" class="btn-see-activity">Voir l'activité</a>
                            <a href="#" class="btn-join-activity">S'inscrire</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
