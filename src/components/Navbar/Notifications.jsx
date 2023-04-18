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
