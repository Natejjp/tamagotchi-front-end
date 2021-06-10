import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Pets() {
  const [pet, setPet] = useState({
    id: 0,
    name: '',
    birthday: '',
    hungerLevel: 0,
    happinessLevel: 0,
    playtimes: null,
    feedings: null,
    scoldings: null,
  })

  const [happiness, setHappiness] = useState(pet.happinessLevel)

  const params = useParams()

  useEffect
  async function fetchPet() {
    const response = await fetch(
      `https://tamagotchinate.herokuapp.com/api/Pets/${params.id}`
    )

    if (response.status === 200) {
      const json = await response.json()
      setPet(json)
    }
  }

  fetchPet(), []

  async function handleAddHappiness() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}/Playtimes`,
      {}
    )

    if (response.status === 200) {
      fetchPet()
    }
  }

  return (
    <>
      <h2>Name: {pet.name}</h2>
      <p>Birthday: {pet.birthday}</p>
      <p>Hunger: {pet.hungerLevel}</p>
      <p>Happiness: {pet.happinessLevel}</p>

      <button onClick={handleAddHappiness}>Play with Pet</button>
      <button>Feed the Pet</button>
      <button>Scold the Pet</button>
      <button>delete</button>
    </>
  )
}
