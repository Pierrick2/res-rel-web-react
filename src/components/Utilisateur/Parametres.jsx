import React, { useState } from "react";
import "../../styles/Parametres.scss";
import "../../styles/Card.scss";

export default function Parametres() {
  const [darkMode, setDarkMode] = useState(false);
  const [daltonism, setDaltonism] = useState(false);
  const [audioDescription, setAudioDescription] = useState(false);
  const [textSize, setTextSize] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [spacing, setSpacing] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleDaltonismChange = () => {
    setDaltonism(!daltonism);
  };

  const handleAudioDescriptionChange = () => {
    setAudioDescription(!audioDescription);
  };

  const handleTextSizeIncrease = () => {
    setTextSize(textSize + 10);
  };

  const handleTextSizeDecrease = () => {
    setTextSize(textSize - 10);
  };

  const handleContrastChange = () => {
    setContrast(!contrast);
  };

  const handleSpacingChange = () => {
    setSpacing(!spacing);
  };

  return (
    <div className="parametres-container">
      <h2>Paramètres</h2>
      <div className="parametre">
        <p>Mode sombre</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="parametre">
        <p>Daltonisme</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={daltonism}
            onChange={handleDaltonismChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="parametre">
        <p>Navigation audio</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={audioDescription}
            onChange={handleAudioDescriptionChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="parametre-taille">
        <p>Taille du texte : {textSize}%</p>
        <button onClick={handleTextSizeDecrease}>-</button>
        <button onClick={handleTextSizeIncrease}>+</button>
      </div>
      <div className="parametre">
        <p>Contraste</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={contrast}
            onChange={handleContrastChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="parametre">
        <p>Espacement des caractères et des lignes</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={spacing}
            onChange={handleSpacingChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
