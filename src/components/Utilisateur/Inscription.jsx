import React from 'react'
import "../../styles/Inscription.scss";

export default function Inscription() {
    return (
        <div className='signup'>
            <h4>Inscription</h4>
            <form >
                <div class="form-group">
                    <label for="nom">Nom d'utilisateur :</label>
                    <input type="text" id="nom" name="nom" required />
                </div>
                <div class="form-group">
                    <label for="prenom">om d'utilisateur :</label>
                    <input type="text" id="prenom" name="prenom" required />
                </div>
                <div class="form-group">
                    <label for="email">Adresse e-mail :</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="dateNaissance">Adresse e-mail :</label>
                    <input type="date" id="dateNaissance" name="dateNaissance" required />
                </div>
                <div class="form-group">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirmer le mot de passe :</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}
