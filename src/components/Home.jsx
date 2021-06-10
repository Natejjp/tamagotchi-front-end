import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pets, setPets] = useState([])

  useEffect(function () {
    async function loadPets() {
      const response = await axios.get(
        'https://tamagotchinate.herokuapp.com/api/Pets'
      )

      setPets(response.data)
    }

    loadPets()
  }, [])

  return (
    <>
      <h2 className="title">Current Pets</h2>
      <div className="pets">
        {pets.map(pet => (
          <ul key={pet.id}>
            <li className="name">
              <Link to={`/${pet.id}`}>{pet.name}</Link>
            </li>
            <li>{pet.birthday}</li>
            <li>{pet.hunger}</li>
            <li>{pet.happiness}</li>
          </ul>
        ))}
      </div>
    </>
  )
}
