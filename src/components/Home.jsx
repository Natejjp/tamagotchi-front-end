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
  const [loading, setLoading] = useState(true)
  const [searchPet, setSearchPet] = useState('')

  useEffect
  async function loadPets() {
    const url =
      searchPet.length === 0
        ? 'https://tamagotchinate.herokuapp.com/api/Pets'
        : `https://tamagotchinate.herokuapp.com/api/Pets?search=${searchPet}`
    const response = await axios.get(url)
    setLoading(false)
    setPets(response.data)
  }

  loadPets(), [searchPet]

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

  if (loading) {
    return <h1 className="loading">Loading....</h1>
  }
  return (
    <>
      <h2 className="title">Current Pets</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Search Tamagotchis"
          value={searchPet}
          onChange={function (event) {
            setSearchPet(event.target.value)
          }}
        ></input>
      </form>
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
        <h2 className="title">Enter Pet Name</h2>
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
