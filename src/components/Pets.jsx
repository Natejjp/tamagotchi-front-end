import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

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

  const params = useParams()
  const history = useHistory()

  useEffect
  async function loadPet() {
    const response = await fetch(
      `https://tamagotchinate.herokuapp.com/api/Pets/${params.id}`
    )

    if (response.status === 200) {
      const json = await response.json()
      setPet(json)
    }
  }

  loadPet(), [pet.happinessLevel]

  async function handlePlay() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}/Playtimes`,
      {}
    )
  }

  async function handleFeed() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}/Feedings`,
      {}
    )
  }

  async function handleScold() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}/Scoldings`,
      {}
    )
  }

  async function handleDelete() {
    const response = await axios.delete(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}`,
      {}
    )

    if (response.status === 200) {
      history.push('/')
    }
  }
  return (
    <>
      <h2>Name: {pet.name}</h2>
      <p>Birthday: {pet.birthday}</p>
      <p>Hunger: {pet.hungerLevel}</p>
      <p>Happiness: {pet.happinessLevel}</p>

      <button onClick={handlePlay}>Play with Pet</button>
      <button onClick={handleFeed}> Feed the Pet</button>
      <button onClick={handleScold}>Scold the Pet</button>
      <button onClick={handleDelete}>delete</button>

      <button>
        <Link to="/">Back Home</Link>
      </button>
    </>
  )
}
