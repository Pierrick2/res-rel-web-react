import React, { useState } from 'react';
import { TextField, Button, Input } from '@mui/material';
import '../../styles/Profil.scss';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  profileImg: {
    display: 'block',
    margin: 'auto',
    width: '100%',
    maxWidth: 300,
    height: 'auto',
    marginBottom: 20,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center center'
  },
}));

function ProfilePage() {
  const classes = useStyles();

  const [photo, setPhoto] = useState('https://pbs.twimg.com/media/EPNM3xQWkAAfRWD?format=jpg&name=large');
  const [bio, setBio] = useState('ma biographie');

  function handlePhotoChange(event) {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  }

  function handleBioChange(event) {
    setBio(event.target.value);
  }

  function handleSave(event) {
    event.preventDefault();

    // Enregistrer les données du formulaire ici

    // Mise à jour de l'image de profil si une nouvelle image a été chargée
    if (photo instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = function () {
        setPhoto(reader.result);
      };
    }
  }

  return (
    <div className="profile-page">
      <h1>Mon Profil</h1>
      <img className={classes.profileImg} src={photo} alt="Ma photo de profil" />
      <form onSubmit={handleSave}>
        <Input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          margin="normal"
        />
        <br />
        <TextField
          label="Biographie"
          variant="outlined"
          value={bio}
          onChange={handleBioChange}
          fullWidth
          multiline
          margin="normal"
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Enregistrer
        </Button>
      </form>
      <h2>Mon activité</h2>
      <p>Voici un résumé de votre activité :</p>
      <ul>
        <li>Ressources en favoris : 12</li>
        <li>Ressources à regarder plus tard : 45</li>
        <li>Activités auquels vous avez participé : 1</li>
        <li>Activités que vous avez créées : 3</li>

      </ul>
    </div>
  );
}

export default ProfilePage;
