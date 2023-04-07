import React from 'react'
import { useParams } from 'react-router-dom'

export default function RessourceUnique() {

const params = useParams()
console.log(params);

  return (
    <div>RessourceUnique</div>
  )
}
