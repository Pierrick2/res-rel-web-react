import React from 'react'
import "../../styles/Connexion.scss";
import "../../styles/Card.scss"

export default function Connexion() {
    return (
        <div className='card'>
            <h4>Connexion</h4>
            <form className='login'>
                <div class="form-group">
                    <label for="email">Adresse e-mail :</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>

    )
}
