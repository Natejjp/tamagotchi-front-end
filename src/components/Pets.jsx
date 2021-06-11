import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

function getDate(birthday) {
  const parts = birthday.split('T')
  return parts[parts.length - 2]
}

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
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
    }
  }

  loadPet(), [params.id, pet.happinessLevel]

  async function handlePlay() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}/Playtimes`
    )

    if (response.status === 200) {
      loadPet()
    }
  }

  async function handleFeed() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}/Feedings`
    )
    if (response.status === 200) {
      loadPet()
    }
  }

  async function handleScold() {
    const response = await axios.post(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}/Scoldings`
    )
    if (response.status === 200) {
      loadPet()
    }
  }

  async function handleDelete() {
    const response = await axios.delete(
      `https://tamagotchinate.herokuapp.com/api/Pets/${pet.id}`
    )

    if (response.status === 200) {
      history.push('/')
    }
  }

  if (loading) {
    return <h1 className="loading">Loading....</h1>
  }

  return (
    <div className="petPageSelection">
      <h2>Name: {pet.name}</h2>
      <p>Birthday: {getDate(pet.birthday)}</p>
      <p>Hunger: {pet.hungerLevel}</p>
      <p>Happiness: {pet.happinessLevel}</p>
      <div>
        <button className="topButton" onClick={handlePlay}>
          Play with Pet
        </button>
        <button className="topButton" onClick={handleFeed}>
          Feed the Pet
        </button>
        <button className="topButton" onClick={handleScold}>
          Scold the Pet
        </button>
      </div>
      <div className="bottomButtons">
        <button className="bottomButton" onClick={handleDelete}>
          Delete
        </button>
        <button className="bottomButton">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  )
}
