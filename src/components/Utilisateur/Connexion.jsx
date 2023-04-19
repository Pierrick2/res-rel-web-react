import React from "react";
import "../../styles/Connexion.scss";
import "../../styles/Card.scss";
import { useAuth } from "../../services/AuthentificationService";
import { useNavigate } from "react-router-dom"; 

export default function Connexion() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await auth.login(email, password);
      navigate('/ressources');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'authentification');
    }
  };

  return (
    <div className="login">
      <h4>Connexion</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
