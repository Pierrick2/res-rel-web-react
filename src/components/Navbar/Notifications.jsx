// import React, { createContext, useContext, useState } from "react";
// export const NotificationContext = createContext();
// import "../../styles/Notifications.scss"

// export const NotificationProvider = ({ children }) => {
//   const [notification, setNotification] = useState(null);

//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => {
//       setNotification(null);
//     }, 5000);
//   };

//   return (
//     <NotificationContext.Provider value={{ showNotification }}>
//       {children}
//       {notification && (
//         <div className="notification">{notification}</div>
//       )}
//     </NotificationContext.Provider>
//   );
// };

// export const useNotification = () => {
//   const { showNotification } = useContext(NotificationContext);
//   return { showNotification };
// };


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Notifications.scss";

const mockNotifications = [
  {
    id: 1,
    type: "friendRequest",
    message: "Vous avez une nouvelle demande d'ami de Jeanne.",
    date: "2023-04-20T12:30:00Z"
  },
  {
    id: 2,
    type: "favorite",
    message: "Pierre a ajouté votre ressource 'Comment apprendre le français rapidement' en favori.",
    date: "2023-04-18T08:15:00Z"
  },
  {
    id: 3,
    type: "watchLater",
    message: "Lucie a ajouté votre ressource '10 astuces pour apprendre le piano' à sa liste 'à regarder plus tard'.",
    date: "2023-04-15T14:00:00Z"
  }
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  }
console.log(notifications);
  return (
    <div className="notifications-container">
      <h4>Notifications</h4>
      <ul className="notifications-list">
        {notifications.map(notification => (
          <li key={notification.id} className="notification-item">
            <div className="notification-content">
              <p>{notification.message}</p>
              <span className="notification-date">{formatDate(notification.date)}</span>
            </div>
            {notification.type === "friendRequest" &&
              <div className="notification-actions">
                <button className="accept-button">Accepter</button>
                <button className="decline-button">Refuser</button>
              </div>
            }
            {notification.type === "favorite" &&
              <div className="notification-actions">
                <button className="view-resource-button">
                  <Link to="/ressources/123">Voir la ressource</Link>
                </button>
              </div>
            }
            {notification.type === "watchLater" &&
              <div className="notification-actions">
                <button className="view-resource-button">
                  <Link to="/ressources/456">Voir la ressource</Link>
                </button>
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
