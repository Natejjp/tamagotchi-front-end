import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pets, setPets] = useState([])

  useEffect
  async function loadPets() {
    const response = await axios.get(
      'https://tamagotchinate.herokuapp.com/api/Pets'
    )

    setPets(response.data)
  }

  loadPets(), []

  async function handleAdd() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/`,
      {}
    )

    if (response.status === 200) {
      loadPets()
    }
  }

  return (
    <>
      <h2 className="title">Current Pets</h2>
      <div className="pets">
        {pets.map(pet => (
          <ul key={pet.id}>
            <li className="name">
              <Link to={`/${pet.id}`}>{pet.name}</Link>
            </li>
            <li>Birthday: {pet.birthday}</li>
            <li>Hunger: {pet.hungerLevel}</li>
            <li>Happiness: {pet.happinessLevel}</li>
          </ul>
        ))}
      </div>
      <form onSubmit={handleAdd}>
        <label>Enter Pet Name</label>
        <input type="text" placeholder="New Pet Name"></input>
      </form>
    </>
  )
}
