import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function getDate(birthday) {
  const parts = birthday.split('T')
  return parts[parts.length - 2]
}
export function Home() {
  const [pets, setPets] = useState([])
  const [newPet, setNewPet] = useState('')
  const [searchPet, setSearchPet] = useState('')

  useEffect
  async function loadPets() {
    const response = await axios.get(
      'https://tamagotchinate.herokuapp.com/api/Pets'
    )

    setPets(response.data)
  }

  loadPets(), []

  async function handleAdd(event) {
    event.preventDefault()
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/`,
      {
        name: newPet,
      }
    )

    if (response.status === 200) {
      loadPets()
    }
    setNewPet('')
  }

  // async function test(event, searchPet) {
  //   event.preventDefault()
  //   let foundPet = pets.map(pet => pet.name).includes(`${searchPet}`)
  //   if (foundPet === true) {
  //     console.log('hello')
  //     const response = await axios.get(
  //       `https://tamagotchinate.herokuapp.com/api/Pets/${searchPet.id}`
  //     )
  //   }
  //   // let pineapple = foundPet.find(pet => pet === `${searchPet}`)

  //   console.log(`${searchPet}`)
  // }

  return (
    <>
      <h2 className="title">Current Pets</h2>
      <div className="pets">
        {pets.map(pet => (
          <ul key={pet.id}>
            <li className="name">
              <Link to={`/${pet.id}`}>{pet.name}</Link>
            </li>
            <li>Birthday: {getDate(pet.birthday)}</li>
            <li>Hunger: {pet.hungerLevel}</li>
            <li>Happiness: {pet.happinessLevel}</li>
          </ul>
        ))}
      </div>
      <form className="form" onSubmit={handleAdd}>
        <label>Enter Pet Name:</label>
        <input
          type="text"
          placeholder="New Pet Name"
          value={newPet}
          onChange={function (event) {
            setNewPet(event.target.value)
          }}
        ></input>
      </form>
    </>
  )
}
