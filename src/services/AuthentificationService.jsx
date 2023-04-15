import React, { useContext, useEffect, useMemo, useReducer } from "react";
import { AuthentificationEnum } from "../ressources/enums/AuthentificationEnum";
import { UtilisateurEntity } from "../ressources/models/UtilisateurEntity";

const AuthContext = React.createContext({});
const AUTHENTICATED = AuthentificationEnum.AUTHENTICATED;
const ACCESS_TOKEN_KEY = AuthentificationEnum.ACCESS_TOKEN_KEY;
const CURRENT_USER = AuthentificationEnum.CURRENT_USER;
const token = "3|QEDaQoBy4jtzrAFZlSMcnnue8rl94pNhfjSapUr8";
// clear storage
// TODO: a supprimer
// storage.clearAll();
//
//
// Ajouter local storage

const getUtilisateurToken = () => {
  // Récupère le token de l'utilisateur
  return fetch("https://run.mocky.io/v3/dd598227-c275-48e8-9840-c588293ead84", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: "bony-a",
    }),
  }).then((result) => result.json());
};

const getUtilisateur = (token) => {
  return fetch("https://run.mocky.io/v3/5910a865-8ebf-4fab-b27f-70f96551c5d4", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((result) => result.json());
};

// Récupère le
export const AuthContainer = ({ children }) => {
  const [authState, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        // Handle the AUTHENTICATED action and set the state to be authenticated
        case AUTHENTICATED:
          return {
            ...prevState,
            authenticated: true,
          };
        default:
          throw new Error(
            `${action.type} est un type d'action non pris en charge`
          );
      }
    },
    {
      authenticated: false,
      initialized: false,
    }
  );

  const facade = useMemo(
    () => ({
      register: async () => {
        try {
          const result = await getUtilisateurToken();

       //   storage.set(ACCESS_TOKEN_KEY, String(result.access_token));

          let user = (await getUtilisateur(
            result.access_token
          ));

          // Add all other user Attributes here
          // TODO: à supprimer après
          user.prenom = "Adrien";
          user.nom = "Bony";
          user.lienPhoto = "https://i.redd.it/flmx8fb1dzz41.jpg";
          user.contenu = "Bonjour je suis du contenu";
          user.dateNaissance = new Date("1995-01-01");
          user.dateInscription = new Date("2020-01-01");

       //   storage.set(CURRENT_USER, JSON.stringify(user));

          dispatch({ type: AUTHENTICATED });
        } catch (error) {
          console.error(error);
        }
      },

      resume: async () => {
      //  const token = storage.getString(ACCESS_TOKEN_KEY);

        // When no token is found, don't try to fetch the user
        if (!token) {
          return;
        }

        let user = await getUtilisateur(token);

        // Add all other user Attributes here
        // TODO: à supprimer après
        user.prenom = "Adrien";
        user.nom = "Bony";
        user.lienPhoto = "https://i.redd.it/flmx8fb1dzz41.jpg";
        user.contenu = "Bonjour je suis du contenu";
        user.dateNaissance = new Date("1995-01-01");
        user.dateInscription = new Date("2020-01-01");

      //  storage.set(CURRENT_USER, JSON.stringify(user));

        dispatch({ type: AUTHENTICATED });
      },
    }),
    []
  );

  // Déclenche la fonction resume au chargement de l'application
  useEffect(() => {
    facade.resume();
  }, []);

  return (
    <AuthContext.Provider value={facade}>
      {children(authState)}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);