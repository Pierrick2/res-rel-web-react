import React, { useState } from "react";
import RestClient from "../../services/RestClient";
import "../../styles/Inscription.scss";

export default function Inscription() {
const [formData, setFormData] = useState({
nom: "",
prenom: "",
mail: "",
dateNaissance: "",
codePostal: "",
motDePasse: "",
});

const handleInputChange = (event) => {
const { name, value } = event.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (event) => {
event.preventDefault();



try {
const restClient = new RestClient();
const response = await restClient.post("users", {
  nom: formData.nom,
  prenom: formData.prenom,
  mail: formData.mail,
  dateNaissance: formData.dateNaissance,
  codePostal: formData.codePostal,
  motDePasse: formData.motDePasse,
});
console.log(response);
} catch (error) {
console.log(error);
}
};

const passwordsMatch = formData.motDePasse === formData.confirmmotDePasse;

return (
<div className="signup">
<h4>Inscription</h4>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="nom">Nom de famille :</label>
<input
         type="text"
         id="nom"
         name="nom"
         value={formData.nom}
         onChange={handleInputChange}
         required
       />
</div>
<div className="form-group">
<label htmlFor="prenom">Prénom :</label>
<input
         type="text"
         id="prenom"
         name="prenom"
         value={formData.prenom}
         onChange={handleInputChange}
         required
       />
</div>
<div className="form-group">
<label htmlFor="mail">Adresse e-mail :</label>
<input
         type="email"
         id="mail"
         name="mail"
         value={formData.mail}
         onChange={handleInputChange}
         required
       />
</div>
<div className="form-group">
<label htmlFor="dateNaissance">Date de naissance :</label>
<input
         type="date"
         id="dateNaissance"
         name="dateNaissance"
         value={formData.dateNaissance}
         onChange={handleInputChange}
         required
       />
</div>
<div className="form-group">
<label htmlFor="codePostal">Code postal :</label>
<input
         type="text"
         id="codePostal"
         name="codePostal"
         value={formData.codePostal}
         onChange={handleInputChange}
         required
       />
</div>
<div className="form-group">
<label htmlFor="motDePasse">Mot de passe :</label>
<input
         type="password"
         id="motDePasse"
         name="motDePasse"
         value={formData.motDePasse}
         onChange={handleInputChange}
         required
       />
</div>
<div className="form-group">
<label htmlFor="confirm-motDePasse">Confirmer le mot de passe :</label>
<input
         type="password"
         id="confirm-motDePasse"
         name="confirmmotDePasse"
         value={formData.confirmmotDePasse}
         onChange={handleInputChange}
         required
       />
</div>
{passwordsMatch ? (
        <button type="submit">S'inscrire</button>
      ) : (
        <p className="error-message">Les mots de passe ne correspondent pas.</p>
      )}
</form>
</div>
);
}