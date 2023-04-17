import React from 'react'
import { Link } from "react-router-dom"
import Activites from './Activites'
import "../../styles/Activites.scss"

export default function ListeActivites() {
  return (
    <div>
      <button>
        <Link to="/creation-activite">Créer une nouvelle activité</Link>
      </button>
      <Activites />
    </div>
  )
}
