import React from "react";
import "../../styles/Activites.scss";

export default function Activites() {
  return (
    <div>
      <div className="create-activity">
        <h4>Créer une nouvelle activité</h4>
        <form>
          <label htmlFor="title">Titre :</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="location">Lieu :</label>
          <input type="text" id="location" name="location" required />

          <label htmlFor="date">Date :</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Heure :</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="image">Image :</label>
          <input type="file" id="image" name="image" accept="image/*" />

          <label htmlFor="description">Description :</label>
          <textarea id="description" name="description" required></textarea>

          <button type="submit">Créer une activité</button>
        </form>
      </div>

      <div className="activities-container">
        <div className="activity">
          <div className="activity-image">
            <img
              src="https://example.com/activity-image-1.jpg"
              alt="Activity 1"
            />
          </div>
          <div className="activity-info">
            <h3 className="activity-title">Activité 1</h3>
            <p className="activity-location">Lieu de l'activité 1</p>
            <div className="activity-buttons">
              <a href="https://example.com/activity-1" className="btn-see-activity">
                Voir l'activité
              </a>
              <a href="#" className="btn-join-activity">
                S'inscrire
              </a>
            </div>
          </div>
        </div>

        <div className="activity">
          <div className="activity-image">
            <img
              src="https://example.com/activity-image-2.jpg"
              alt="Activity 2"
            />
          </div>
          <div className="activity-info">
            <h3 className="activity-title">Activité 2</h3>
            <p className="activity-location">Lieu de l'activité 2</p>
            <div className="activity-buttons">
              <a href="https://example.com/activity-2" className="btn-see-activity">
                Voir l'activité
              </a>
              <a href="#" className="btn-join-activity">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
        <div className="activity">
          <div className="activity-image">
            <img
              src="https://example.com/activity-image-2.jpg"
              alt="Activity 2"
            />
          </div>
          <div className="activity-info">
            <h3 className="activity-title">Activité 2</h3>
            <p className="activity-location">Lieu de l'activité 2</p>
            <div className="activity-buttons">
              <a href="https://example.com/activity-2" className="btn-see-activity">
                Voir l'activité
              </a>
              <a href="#" className="btn-join-activity">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
